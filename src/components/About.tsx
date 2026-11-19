import Image from "next/image";

import candid from "@/images/kemboi.jpg";
import { industries } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const pillars = [
  {
    title: "Leader",
    text: "I lead 15 developers at Softnet Business Systems, setting standards for code quality, security, testing and Git discipline.",
  },
  {
    title: "Integrator",
    text: "Lending and leasing platforms wired into T24, FLEXCUBE, Intellect and Profits. Integration is where I do my best work.",
  },
  {
    title: "Entrepreneur",
    text: "I started a cyber café in Eldoret on limited resources, and I keep building products under IKONEX.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          id="about-title"
          number="01"
          label="The story"
          title={
            <>
              Transforming African businesses{" "}
              <span className="text-amber">through technology.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-cream lg:aspect-[5/6]">
              <Image
                src={candid}
                alt="Alex Kemboi smiling while working on a laptop at a developer session"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[62%_40%]"
              />
            </figure>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-text">
              At work · Nairobi
            </p>
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[17px] leading-[1.75] text-slate-text">
                <p className="font-display text-xl font-bold leading-snug text-navy md:text-2xl">
                  I build the technology that powers businesses, financial
                  institutions and essential services, turning complex business
                  challenges into reliable software with real-world impact.
                </p>
                <p>
                  My work spans lending platforms, core banking integrations and
                  enterprise systems across banking, fintech, healthtech, edtech
                  and agritech.
                </p>
                <p>
                  It began in Kenya&apos;s Rift Valley. At Kisii University I
                  earned a BSc in Software Engineering, building with C, Java, web
                  technologies and Android, and delivered a room reservation app
                  for Eldoret town as my final-year project. I funded my own
                  education, teaching computer studies during the school holidays.
                </p>
                <p>
                  Since then I&apos;ve grown from building individual applications
                  to engineering the systems organisations run on. I developed web
                  interfaces at Moi Teaching and Referral Hospital, built OpenMRS
                  applications at AMPATH, and worked on APIs and data pipelines
                  around Temenos T24 at KWFT Bank.
                </p>
                <p>
                  At Fintech Group I delivered loan, leasing and insurance premium
                  systems for financial institutions in Kenya, Malawi and Uganda,
                  integrated with Temenos T24, FLEXCUBE, Intellect and Profits.
                  Beyond finance, I&apos;ve built applications serving{" "}
                  <strong className="font-semibold text-navy">20 tea factories and two hospitals</strong>.
                </p>
                <p>
                  Today I lead{" "}
                  <strong className="font-semibold text-navy">15 engineers at Softnet Business Systems</strong>,
                  driving ERP integrations, REST APIs, Power BI reporting and
                  Flutter apps. Alongside that, I&apos;m pursuing an MSc in Software
                  Engineering at JKUAT, deepening my work in software architecture,
                  engineering research and intelligent systems. Through IKONEX
                  Systems, I also build and deliver live platforms for clients in
                  property, retail, lending and beyond.
                </p>
                <blockquote className="border-l-[3px] border-amber pl-5 text-navy">
                  <p className="font-semibold">
                    For me, it&apos;s more than writing code. It&apos;s understanding
                    how organisations work, connecting the systems that need to
                    talk, and leading teams that solve hard problems.
                  </p>
                  <p className="mt-3">
                    I started with a computer, an opportunity and the determination
                    to build something meaningful. Today I help organisations build
                    the systems they depend on to operate, grow and transform.
                  </p>
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-text">
                Industries
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {industries.map((name) => (
                  <li
                    key={name}
                    className="rounded-md border-2 border-navy/15 px-4 py-2 font-display text-sm font-extrabold uppercase tracking-[0.06em] text-navy"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>

            <ul className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.1 + i * 0.08} className="flex flex-col gap-2 before:mb-2 before:h-[3px] before:w-10 before:bg-amber">
                  <h3 className="font-display text-lg font-extrabold uppercase leading-tight text-navy">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-text">{p.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
