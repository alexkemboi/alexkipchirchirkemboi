import Image from "next/image";

import { integrations } from "@/lib/content";
import Reveal from "./ui/Reveal";

/** Logo wall of production integrations. Sits on the dark Skills section. */
export default function Integrations() {
  return (
    <div className="mt-16 md:mt-20">
      <Reveal className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-white">Integrations delivered</p>
          <h3 className="display mt-4 text-2xl md:text-3xl">
            Platforms I&apos;ve <span className="text-amber">connected.</span>
          </h3>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-mist">
          Payments, messaging, tax, banking, networking and cloud APIs, wired
          into production systems.
        </p>
      </Reveal>

      <ul className="mt-8 flex flex-wrap justify-center gap-3 xl:gap-4">
        {integrations.map((item, i) => (
          <Reveal
            as="li"
            key={item.name}
            delay={(i % 6) * 0.04}
            className="group flex w-[calc(50%-6px)] flex-col items-center gap-3 rounded-2xl bg-white px-3 py-5 text-center sm:w-[150px] xl:w-[152px] transition-transform duration-200 motion-safe:hover:-translate-y-1"
          >
            <div className="flex h-12 w-full items-center justify-center">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt=""
                  width={96}
                  height={48}
                  unoptimized
                  className="h-10 w-auto max-w-[88px] object-contain transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                item.wordmark && (
                  <span
                    aria-hidden="true"
                    className="font-display text-xl font-black tracking-[-0.02em]"
                    style={{ color: item.wordmark.color }}
                  >
                    {item.wordmark.text}
                  </span>
                )
              )}
            </div>
            <div>
              <p className="text-[13px] font-bold leading-tight text-navy">{item.name}</p>
              <p className="mt-1 text-[11px] font-medium leading-tight text-slate-text">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
