import { solutions } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="bg-cream py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          id="solutions-title"
          number="04"
          label="What I build"
          title={
            <>
              Business systems, <br className="hidden sm:block" />
              end to end.
            </>
          }
          intro="Beyond integrations, I design and build the core applications businesses run on every day: ERP, CRM, point of sale and business intelligence."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {solutions.map((s, i) => (
            <Reveal
              as="li"
              key={s.abbr}
              delay={(i % 2) * 0.08}
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-navy/10 bg-white p-7 transition-[border-color,transform] duration-200 hover:border-navy/30 motion-safe:hover:-translate-y-1 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-text">
                    {s.name}
                  </p>
                  <h3 className="display mt-3 text-[56px] text-navy md:text-[72px]">
                    {s.abbr}
                    <span className="text-amber">.</span>
                  </h3>
                </div>
                <span className="font-display text-sm font-black tracking-[0.1em] text-navy/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 text-[17px] leading-relaxed text-slate-text">{s.summary}</p>

              <ul className="mt-7 grid gap-x-6 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
                {s.covers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-navy">
                    <span className="mt-[9px] h-[3px] w-3 shrink-0 bg-amber" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-8 text-xs font-semibold uppercase tracking-[0.12em] text-slate-text">
                <span className="text-navy">Delivered</span> · {s.proof}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
