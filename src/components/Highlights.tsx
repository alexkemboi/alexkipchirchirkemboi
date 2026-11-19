import { facts, stack } from "@/lib/content";

/** Accent ticker of the core stack, followed by a strip of verifiable facts. */
export default function Highlights() {
  const items = [...stack, ...stack];

  return (
    <>
      <div className="group relative overflow-hidden bg-amber py-4 text-ink md:py-[18px]">
        <p className="sr-only">Core stack: {stack.join(", ")}.</p>
        <div
          aria-hidden="true"
          className="flex w-max whitespace-nowrap font-display text-[13px] font-extrabold uppercase tracking-[0.16em] motion-safe:animate-ticker group-hover:[animation-play-state:paused] md:text-[15px]"
        >
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span className="px-6 md:px-8">{item}</span>
              <span className="text-navy/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section aria-label="Impact" className="on-dark bg-ink py-12 text-white lg:py-14">
        <dl className="container-site grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className={`flex flex-col-reverse gap-2 border-l-2 pl-5 last:col-span-2 sm:last:col-span-1 md:pl-6 ${
                fact.highlight ? "border-amber" : "border-white/15"
              }`}
            >
              <dt className="text-xs font-semibold uppercase leading-snug tracking-[0.12em] text-steel">
                {fact.label}
              </dt>
              <dd
                className={`font-display text-[40px] font-black leading-none tracking-[-0.03em] md:text-[52px] ${
                  fact.highlight ? "text-amber" : "text-white"
                }`}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
