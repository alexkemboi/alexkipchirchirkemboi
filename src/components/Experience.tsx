import { experience, facts } from "@/lib/content";
import Reveal from "./ui/Reveal";


/** "Moi Teaching & Referral Hospital" -> "MT" */
const monogram = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-cream py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-16">
        {/* Intro column: sticks while the timeline scrolls */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-navy">
            <span className="text-navy/50">02</span>
            <span>Experience</span>
          </p>
          <h2
            id="experience-title"
            className="display mt-5 text-[clamp(2.1rem,1.2rem+3.4vw,3.75rem)] text-navy"
          >
            Where I&apos;ve <span className="text-amber">shipped.</span>
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.65] text-slate-text">
            Seven years across healthcare, banking, leasing, insurance and
            enterprise software, from intern to team lead.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-navy/10 bg-navy/10">
            {facts.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse gap-1.5 bg-white px-4 py-5 last:col-span-2"
              >
                <dt className="text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-slate-text">
                  {s.label}
                </dt>
                <dd
                  className={`font-display text-3xl font-black leading-none tracking-[-0.03em] ${
                    s.highlight ? "text-amber" : "text-navy"
                  }`}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Timeline */}
        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[15px] md:before:left-[19px] before:top-6 before:w-[2px] before:bg-navy/10 md:space-y-8">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={`${job.company}-${job.period}`}
              delay={i * 0.06}
              className="relative pl-11 md:pl-14"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-6 flex size-8 items-center md:top-7 md:size-10 justify-center rounded-full border-[3px] border-cream ${
                  job.current ? "bg-amber" : "bg-navy"
                }`}
              >
                {job.current && (
                  <span className="absolute inline-flex size-full rounded-full bg-amber opacity-60 motion-safe:animate-ping" />
                )}
                <span className={`relative size-2.5 rounded-full ${job.current ? "bg-ink" : "bg-amber"}`} />
              </span>

              <article
                className={`group relative overflow-hidden rounded-[18px] border bg-white p-5 transition-[border-color,transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(10_26_48/0.10)] md:p-8 ${
                  job.current ? "border-amber/60" : "border-navy/10 hover:border-navy/25"
                }`}
              >
                {/* Accent bar that grows on hover */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 origin-top transition-transform duration-300 ${
                    job.current ? "scale-y-100 bg-amber" : "scale-y-0 bg-navy group-hover:scale-y-100"
                  }`}
                />

                <header className="flex flex-wrap items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl font-display text-sm font-black tracking-tight transition-colors duration-300 ${
                      job.current
                        ? "bg-amber text-ink"
                        : "bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white"
                    }`}
                  >
                    {monogram(job.company)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-navy/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-navy md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-text">
                      {job.company} · {job.location}
                    </p>
                  </div>

                  <div className="w-full border-t border-line pt-4 sm:w-auto sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-right">
                    <p
                      className={`font-display text-3xl font-black leading-none tracking-[-0.03em] md:text-4xl ${
                        job.current ? "text-amber" : "text-navy"
                      }`}
                    >
                      {job.highlight.value}
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-text">
                      {job.highlight.label}
                    </p>
                  </div>
                </header>

                <ul className="mt-6 space-y-2.5 text-[15px] leading-relaxed text-slate-text">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[9px] h-[3px] w-3 shrink-0 bg-amber" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${job.company} stack`}>
                  {job.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-navy/10 bg-cream px-2.5 py-1 text-xs font-semibold text-navy transition-colors duration-200 group-hover:border-navy/20"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
