import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

import { notes } from "@/content/notes";
import { articles, profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { buttonClass } from "@/components/ui/Button";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(notes).map((slug) => ({ slug }));
}

const findArticle = (slug: string) => articles.find((a) => a.slug === slug);

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = findArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${params.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const article = findArticle(params.slug);
  const note = notes[params.slug];
  if (!article || !note) notFound();

  const { Body } = note;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: profile.fullName, url: siteUrl },
    url: `${siteUrl}/articles/${params.slug}`,
  };

  return (
    <>
      <header className="on-dark -mt-[76px] bg-navy pb-16 pt-[140px] text-white md:pb-20 lg:-mt-[88px] lg:pt-[176px]">
        <div className="container-site max-w-4xl">
          <Link
            href="/#articles"
            className="flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-mist hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Notes from the work
          </Link>
          <p className="eyebrow mt-8 text-white">{article.category}</p>
          <h1 className="display mt-5 text-[clamp(2rem,1.1rem+3.6vw,3.6rem)]">{article.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{article.excerpt}</p>
          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-steel">
            <span className="text-white">{profile.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {note.readingMinutes} min read
            </span>
          </p>
        </div>
      </header>

      <div className="bg-white py-14 md:py-20">
        <article className="note container-site max-w-3xl">
          <Body />
        </article>

        <div className="container-site mt-16 max-w-3xl">
          <div className="flex flex-col gap-5 rounded-[18px] bg-cream p-7 md:flex-row md:items-center md:justify-between md:p-9">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-navy">
                Building something that moves money?
              </p>
              <p className="mt-1 text-[15px] text-slate-text">
                I design and build payment, lending and core banking integrations.
              </p>
            </div>
            <Link href="/#contact" className={buttonClass("dark", "shrink-0")}>
              Work with me
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
