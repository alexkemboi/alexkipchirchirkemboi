import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";

import portrait from "@/images/hero-portrait.jpg";
import { experience, profile } from "@/lib/content";
import ButtonLink from "./ui/Button";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Home() {
  const current = experience.find((e) => e.current);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="on-dark relative -mt-[76px] overflow-hidden bg-navy pt-[132px] text-white md:pt-[156px] lg:-mt-[88px] lg:pt-[184px]"
    >
      <div className="container-site relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
        <div className="flex flex-col gap-7 md:gap-8 lg:pb-24">
          <p
            className="eyebrow text-white motion-safe:animate-fade-up"
            style={delay(100)}
          >
            {profile.location} · {profile.title}
          </p>

          <h1
            id="hero-title"
            className="display text-[clamp(1.85rem,0.6rem+6.4vw,4.75rem)] lg:text-[clamp(2.75rem,0.4rem+3.6vw,4.25rem)] motion-safe:animate-fade-up"
            style={delay(250)}
          >
            Transforming African businesses{" "}
            <span className="text-amber">through technology.</span>
          </h1>

          <div
            className="flex max-w-[600px] flex-col gap-5 motion-safe:animate-fade-up"
            style={delay(400)}
          >
            <p className="text-[17px] leading-[1.65] text-mist md:text-xl">
              I&apos;m Alex Kemboi, a senior software developer who builds the
              systems African banks and businesses run on. In 7+ years I&apos;ve{" "}
              <strong className="font-semibold text-white">
                shipped lending platforms for 4 banks across 3 countries
              </strong>
              ,{" "}
              <strong className="font-semibold text-white">
                built apps for 20 tea factories and 2 hospitals
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-white">
                launched 8 live platforms
              </strong>
              . Today I lead 15 engineers.
            </p>
            <p className="border-l-2 border-amber pl-4 text-[15px] leading-relaxed text-white md:text-[17px]">
              I bring rare depth across both sides: 4 core banking systems
              (T24, FLEXCUBE, Intellect, Profits) and modern full stack. I turn
              complex business requirements into secure, production-ready
              software.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-3.5 motion-safe:animate-fade-up"
            style={delay(550)}
          >
            <ButtonLink href="/#portfolio">
              View my work
              <ArrowDown className="size-[18px]" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.cv} variant="outline-light" external>
              Download CV
              <Download className="size-[18px]" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul
            className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-steel motion-safe:animate-fade-up sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-2.5"
            style={delay(700)}
          >
            {current && (
              <li className="flex items-center gap-2.5">
                <span className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
                {current.role} · {current.company}
              </li>
            )}
            <li className="flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
              Previously · Fintech Group, KWFT Bank
            </li>
            <li className="flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
              MSc Software Eng · JKUAT
            </li>
          </ul>
        </div>

        <div
          className="relative order-first mx-auto w-full max-w-[520px] motion-safe:animate-fade-up lg:mx-0 lg:max-w-none lg:justify-self-start"
          style={delay(400)}
        >
          <div
            aria-hidden="true"
            className="absolute -left-3 top-3 size-full rounded-t-[18px] border-[3px] border-b-0 border-amber lg:-left-6 lg:top-6"
          />
          <figure className="relative isolate flex aspect-[4/5] items-end overflow-hidden rounded-t-[18px] bg-cream">
            <Image
              src={portrait}
              alt="Alex Kemboi seated in a charcoal blazer and light blue shirt, hands clasped"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 720px, (min-width: 560px) 520px, 100vw"
              className="-z-10 object-cover object-[50%_10%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(10_26_48/0.75)_0%,rgb(10_26_48/0)_40%)]"
            />
            <figcaption className="m-4 inline-flex items-center gap-2 rounded border border-white/20 bg-ink/50 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-[6px] md:m-5">
              <span className="size-1.5 rounded-full bg-amber" aria-hidden="true" />
              {profile.name} · Nairobi
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
