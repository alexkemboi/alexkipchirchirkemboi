import sharp from "sharp";

import { projects } from "@/lib/content";
import { REVALIDATE_SECONDS, siteSlug } from "@/lib/live-sites";

/*
 * Live screenshot of a project site, e.g. /api/preview/chess254-ikonexsystems-com.
 * Only slugs from the projects list are accepted, so this is not an open proxy.
 *
 * Capture providers, first configured wins:
 *   PAGESPEED_API_KEY  Google PageSpeed Insights (free key, 25k requests/day)
 *   MICROLINK_API_KEY  Microlink pro
 *   (none)             Microlink free tier, 5 requests/day: fine for a demo only
 *
 * Captures run one at a time, are resized to WebP and cached in memory. Stale
 * images are served while a refresh runs; failures back off for 30 minutes.
 * When no image is available the card keeps its bundled screenshot.
 */

export const dynamic = "force-dynamic";

const FAILURE_BACKOFF_MS = 30 * 60 * 1000;

type Entry = { body: Uint8Array; at: number };

const cache = new Map<string, Entry>();
const failedAt = new Map<string, number>();
const inflight = new Map<string, Promise<Uint8Array | null>>();
let queue: Promise<unknown> = Promise.resolve();

async function fromPageSpeed(url: string, key: string) {
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.search = new URLSearchParams({ url, key, strategy: "desktop", category: "performance" }).toString();

  const res = await fetch(api, { cache: "no-store", signal: AbortSignal.timeout(90_000) });
  if (!res.ok) return null;
  const data = await res.json();
  const shot: string | undefined =
    data?.lighthouseResult?.fullPageScreenshot?.screenshot?.data ??
    data?.lighthouseResult?.audits?.["final-screenshot"]?.details?.data;
  return shot ? Buffer.from(shot.split(",")[1], "base64") : null;
}

async function fromMicrolink(url: string, key?: string) {
  const api = new URL(key ? "https://pro.microlink.io" : "https://api.microlink.io");
  api.search = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "800",
  }).toString();

  const res = await fetch(api, {
    headers: key ? { "x-api-key": key } : {},
    cache: "no-store",
    signal: AbortSignal.timeout(45_000),
  });
  if (!res.ok || !res.headers.get("content-type")?.startsWith("image/")) return null;
  return Buffer.from(await res.arrayBuffer());
}

async function capture(url: string): Promise<Uint8Array | null> {
  const pagespeedKey = process.env.PAGESPEED_API_KEY;
  const raw = pagespeedKey
    ? await fromPageSpeed(url, pagespeedKey)
    : await fromMicrolink(url, process.env.MICROLINK_API_KEY);
  if (!raw) return null;

  const image = await sharp(raw)
    .resize({ width: 1200, height: 750, fit: "cover", position: "top" })
    .webp({ quality: 78 })
    .toBuffer();
  return new Uint8Array(image);
}

function refresh(slug: string, url: string) {
  let pending = inflight.get(slug);
  if (!pending) {
    // Serialise captures so a page of cards never trips a provider's rate limit
    pending = queue
      .then(() => capture(url))
      .catch(() => null)
      .then((body) => {
        if (body) {
          cache.set(slug, { body, at: Date.now() });
          failedAt.delete(slug);
        } else {
          failedAt.set(slug, Date.now());
        }
        return body;
      })
      .finally(() => inflight.delete(slug));
    queue = pending;
    inflight.set(slug, pending);
  }
  return pending;
}

const unavailable = () =>
  new Response("Preview unavailable", { status: 503, headers: { "Cache-Control": "no-store" } });

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const project = projects.find((p) => siteSlug(p.url) === params.slug);
  if (!project) return new Response("Not found", { status: 404 });

  const hit = cache.get(params.slug);
  const stale = !hit || Date.now() - hit.at > REVALIDATE_SECONDS * 1000;
  const backingOff = Date.now() - (failedAt.get(params.slug) ?? 0) < FAILURE_BACKOFF_MS;

  if (stale && !backingOff) {
    const pending = refresh(params.slug, project.url);
    // First request waits for the capture; later ones get the old image while it refreshes
    if (!hit && !(await pending)) return unavailable();
  }

  const entry = cache.get(params.slug);
  if (!entry) return unavailable();

  return new Response(entry.body, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": `public, max-age=3600, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=86400`,
    },
  });
}
