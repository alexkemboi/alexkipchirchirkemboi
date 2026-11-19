import {
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  MonitorSmartphone,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { capabilities } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Integrations from "./Integrations";

const icons: Record<string, LucideIcon> = {
  "Frontend Development": MonitorSmartphone,
  "Backend Engineering": ServerCog,
  "Data Analysis & Visualisation": ChartNoAxesCombined,
  "Systems Integration": Workflow,
  "Cloud & DevOps": CloudCog,
  "AI Product Development": BrainCircuit,
};

/*
 * Bento layout on a 6-column grid:
 *   01 wide (4) | 02 (2)
 *   03 (2) | 04 (2) | 05 (2)
 *   06 full width, horizontal
 */
const spans = [
  "lg:col-span-4",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="on-dark bg-navy py-20 text-white md:py-28"
    >
      <div className="container-site">
        <SectionHeading
          id="skills-title"
          tone="dark"
          number="03"
          label="Skills"
          title={
            <>
              Skills &amp; <span className="text-amber">expertise.</span>
            </>
          }
          intro="I work across the whole stack: the interface, the service, the data, the integration, the deployment and now the AI layer."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.title] ?? Workflow;
            const wide = i === 0;
            const last = i === capabilities.length - 1;

            return (
              <Reveal
                as="li"
                key={cap.title}
                delay={(i % 3) * 0.07}
                className={`group relative flex flex-col overflow-hidden rounded-[22px] border p-6 transition-[border-color,background-color,transform] duration-300 motion-safe:hover:-translate-y-1 md:p-8 ${
                  spans[i] ?? "lg:col-span-2"
                } ${wide || last ? "sm:col-span-2" : ""} ${
                  last
                    ? "border-amber/40 bg-amber/[0.07] hover:border-amber lg:flex-row lg:items-center lg:gap-10"
                    : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
                }`}
              >
                <div className={`relative flex flex-col ${last ? "lg:flex-1" : "flex-1"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-12 items-center justify-center rounded-2xl bg-amber/10 text-amber ring-1 ring-amber/25 transition-colors duration-300 group-hover:bg-amber group-hover:text-ink"
                    >
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <span
                      className={`rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel ${
                        last ? "lg:hidden" : ""
                      }`}
                    >
                      {cap.tools.length} tools
                    </span>
                  </div>

                  <h3
                    className={`mt-6 font-display font-extrabold uppercase leading-tight ${
                      wide ? "text-2xl md:text-[28px]" : "text-xl md:text-[22px]"
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-mist ${
                      wide ? "max-w-xl text-base md:text-[17px]" : "text-[15px]"
                    }`}
                  >
                    {cap.summary}
                  </p>
                </div>

                <ul
                  className={`relative flex flex-wrap gap-2 ${
                    last ? "mt-6 lg:mt-0 lg:max-w-md lg:justify-end" : "mt-auto pt-7"
                  }`}
                  aria-label={`${cap.title} tools`}
                >
                  {cap.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/90 transition-colors duration-200 group-hover:border-white/25"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>

        <Integrations />
      </div>
    </section>
  );
}
