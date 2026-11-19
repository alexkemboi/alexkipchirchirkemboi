import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { articles } from "@/lib/content";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Articles() {
  return (
    <section id="articles" aria-labelledby="articles-title" className="bg-white py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          id="articles-title"
          number="07"
          label="Writing"
          title={<>Notes from the work.</>}
          intro="What I write about: servers, microservices, scaling, architecture and idempotency, plus version control, DevOps, delivery pipelines and testing."
        />

        <ul className="grid gap-px overflow-hidden rounded-[18px] border border-line bg-line md:grid-cols-2">
          {articles.map((article, i) => (
            <Reveal
              as="li"
              key={article.title}
              delay={(i % 2) * 0.08}
              className={`relative flex flex-col gap-4 bg-white p-7 md:p-10 md:last:odd:col-span-2 ${
                article.slug ? "group transition-colors duration-200 hover:bg-cream" : ""
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-text">
                <span className="text-navy">{article.category}</span>
                {article.date && (
                  <>
                    <span className="h-px w-6 bg-navy/30" aria-hidden="true" />
                    <time>{article.date}</time>
                  </>
                )}
              </div>
              <h3 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-[-0.01em] text-navy">
                {article.slug ? (
                  // Stretched link: the whole card is clickable
                  <Link href={`/articles/${article.slug}`} className="after:absolute after:inset-0">
                    {article.title}
                  </Link>
                ) : (
                  article.title
                )}
              </h3>
              <p className="leading-relaxed text-slate-text">{article.excerpt}</p>
              {article.slug && (
                <span className="mt-auto inline-flex items-center gap-2 self-start border-b-2 border-amber pb-1 pt-2 text-sm font-bold uppercase tracking-[0.08em] text-navy">
                  Read note
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
