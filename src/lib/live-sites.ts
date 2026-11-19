/*
 * Live metadata for the IKONEX client platforms shown in the Work section.
 * Titles and descriptions are read from each site's own HTML and refreshed
 * on a timer (ISR), so cards follow the sites as they change. Anything that
 * fails or looks like an error page falls back to the static copy in content.ts.
 */

/** How often live titles, descriptions and screenshots are refreshed. */
export const REVALIDATE_SECONDS = 6 * 60 * 60;

/** "https://www.abrahomereality.com" -> "abrahomereality-com" */
export const siteSlug = (url: string) =>
  new URL(url).hostname.replace(/^www\./, "").replace(/\./g, "-");

export type LiveMeta = {
  title?: string;
  description?: string;
  /** False when the site could not be reached or returned an error. */
  online: boolean;
};

const BAD_TITLE = /^(\d{3}\b|error|bad gateway|not found|access denied|forbidden|index of|loading)/i;
const GENERIC_DESCRIPTION = /create-react-app|vite \+ react|next\.js app|^react app$/i;

const decode = (s: string) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function readMeta(html: string, key: string) {
  const attrFirst = new RegExp(
    `<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["']`,
    "i"
  );
  const contentFirst = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${key}["']`,
    "i"
  );
  return html.match(attrFirst)?.[1] ?? html.match(contentFirst)?.[1];
}

function cleanTitle(raw: string) {
  const title = decode(raw)
    // Login pages: "Sign in · SAIPEI POS" -> "SAIPEI POS"
    .replace(/^(sign in|log ?in|welcome)\s*[·|:–—-]\s*/i, "")
    // Drop taglines: "Minichess Kenya Clubhouse — Westlands" -> "Minichess Kenya Clubhouse"
    .split(/\s+[|·–—-]\s+/)[0]
    .trim();

  if (title.length < 2 || title.length > 60 || BAD_TITLE.test(title)) return undefined;
  return title;
}

function cleanDescription(raw?: string) {
  if (!raw) return undefined;
  const text = decode(raw);
  if (text.length < 20 || GENERIC_DESCRIPTION.test(text)) return undefined;
  if (text.length <= 180) return text;
  return `${text.slice(0, 177).replace(/\s+\S*$/, "")}…`;
}

export async function getLiveMeta(url: string): Promise<LiveMeta> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AlexKemboiPortfolio/1.0)" },
      signal: AbortSignal.timeout(8000),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return { online: false };

    const html = (await res.text()).slice(0, 200_000);
    const rawTitle =
      readMeta(html, "og:site_name") ??
      readMeta(html, "og:title") ??
      html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ??
      "";
    const title = cleanTitle(rawTitle);

    // An error page served with 200 still counts as offline
    if (!title && BAD_TITLE.test(decode(rawTitle))) return { online: false };

    return {
      title,
      description: cleanDescription(readMeta(html, "og:description") ?? readMeta(html, "description")),
      online: true,
    };
  } catch {
    return { online: false };
  }
}
