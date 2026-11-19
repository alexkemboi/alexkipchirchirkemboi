import { ArrowUpRight } from "lucide-react";

import { education } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-cream py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          id="education-title"
          number="06"
          label="Education"
          title={<>Learning, on record.</>}
          intro="Formal training in software engineering, kept current with focused certification."
        />

        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {education.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              className="flex flex-col rounded-[18px] border border-navy/10 bg-white p-7 md:p-9"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-text">
                {item.period}
              </p>
              <h3 className="mt-4 font-display text-xl font-extrabold uppercase leading-tight text-navy md:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-navy/80">{item.institution}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-text">{item.detail}</p>
              {"research" in item && item.research && (
                <div className="mt-5 rounded-xl border-l-[3px] border-amber bg-cream px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-text">
                    Research
                  </p>
                  <p className="mt-1.5 text-[15px] font-semibold leading-snug text-navy">
                    {item.research}
                  </p>
                </div>
              )}
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 self-start border-b-2 border-amber pb-1 pt-6 text-sm font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:border-navy"
                >
                  View certificate
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">(PDF, opens in a new tab)</span>
                </a>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
