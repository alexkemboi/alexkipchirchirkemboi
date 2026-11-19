import { ArrowUpRight } from "lucide-react";

import { flagship, projects } from "@/lib/content";
import { getLiveMeta, siteSlug } from "@/lib/live-sites";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import LivePreview from "./ui/LivePreview";

export default async function Portfolio() {
  // Live title/description per site, refreshed on the ISR timer; static copy is the fallback
  const live = await Promise.all(projects.map((p) => getLiveMeta(p.url)));

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          id="portfolio-title"
          number="05"
          label="Selected work"
          title={<>Things I&apos;ve built.</>}
          intro="Enterprise lending systems for banks in three countries, plus live platforms I have built and deployed through IKONEX Systems."
        />

        {/* Flagship enterprise delivery */}
        <Reveal>
          <article className="on-dark grid gap-10 rounded-[18px] bg-navy p-7 text-white md:p-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:p-14">
            <div className="flex flex-col gap-5">
              <p className="eyebrow text-white">Flagship · {flagship.category}</p>
              <h3 className="display text-3xl md:text-[44px]">{flagship.title}</h3>
              <p className="text-[17px] leading-relaxed text-mist">{flagship.description}</p>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Core banking integrations">
                {flagship.integrations.map((name) => (
                  <li
                    key={name}
                    className="rounded border border-amber/50 px-2.5 py-1 text-xs font-semibold tracking-[0.04em] text-amber"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-steel">
                Delivered for
              </h4>
              <ul className="mt-4 border-t border-white/15">
                {flagship.clients.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-baseline justify-between gap-4 border-b border-white/15 py-4"
                  >
                    <span className="font-display text-lg font-extrabold uppercase tracking-[-0.01em] md:text-xl">
                      {c.name}
                    </span>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-steel">
                      {c.country}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {/* IKONEX Systems: live client platforms */}
        <Reveal className="mt-16 flex flex-col gap-4 border-t border-line pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-navy">Built &amp; deployed under IKONEX Systems</p>
            <h3 className="display mt-4 text-3xl md:text-4xl">Live client platforms.</h3>
          </div>
          <a
            href="https://ikonexsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start border-b-2 border-amber pb-1 text-sm font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:border-navy md:self-auto"
          >
            ikonexsystems.com
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>

        <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, i) => {
            const meta = live[i];
            const title = meta.title ?? project.title;
            const description = meta.description ?? project.description;

            return (
            <Reveal as="li" key={project.url} delay={(i % 4) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-[border-color,transform] duration-200 hover:border-navy/30 motion-safe:hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-cream">
                  <LivePreview
                    src={meta.online ? `/api/preview/${siteSlug(project.url)}` : undefined}
                    fallback={project.image}
                    alt={`Screenshot of ${title}`}
                    sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-text">
                    {project.category}
                  </p>
                  <h4 className="font-display text-xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-navy">
                    {title}
                  </h4>
                  {project.client && project.client.toLowerCase() !== title.toLowerCase() && (
                    <p className="text-sm font-semibold text-navy/80">Live for {project.client}</p>
                  )}
                  <p className="text-[15px] leading-relaxed text-slate-text">{description}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${title} features`}>
                    {project.features.map((f) => (
                      <li key={f} className="rounded bg-cream px-2 py-1 text-[11px] font-semibold text-navy/80">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 self-start border-b-2 border-amber pb-1 pt-4 text-sm font-bold uppercase tracking-[0.08em] text-navy transition-colors hover:border-navy"
                  >
                    Visit live site
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
