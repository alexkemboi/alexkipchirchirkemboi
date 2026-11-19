"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

type LivePreviewProps = {
  /** Live screenshot endpoint; omitted when the site is offline. */
  src?: string;
  /** Bundled screenshot shown instantly and kept if the live capture fails. */
  fallback: StaticImageData;
  alt: string;
  sizes: string;
};

/** Shows the bundled screenshot at once, then fades in the live capture when it arrives. */
export default function LivePreview({ src, fallback, alt, sizes }: LivePreviewProps) {
  const [state, setState] = useState<"loading" | "live" | "failed">("loading");

  return (
    <>
      <div className="absolute inset-0 transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]">
        <Image
          src={fallback}
          alt={state === "live" ? "" : alt}
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover object-top"
        />
        {src && state !== "failed" && (
          <Image
            src={src}
            alt={state === "live" ? alt : ""}
            fill
            unoptimized
            sizes={sizes}
            onLoad={() => setState("live")}
            onError={() => setState("failed")}
            className={`object-cover object-top transition-opacity duration-700 ${
              state === "live" ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {state === "live" && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <span className="relative flex size-1.5" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          Live
        </span>
      )}
    </>
  );
}
