import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  id?: string;
};

/** Numbered section header: "01 · The story" eyebrow, large display title, optional intro. */
export default function SectionHeading({
  number,
  label,
  title,
  intro,
  tone = "light",
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
      <div>
        <p className={`eyebrow ${dark ? "text-white" : "text-navy"}`}>
          <span className={dark ? "text-amber" : "text-navy/50"}>{number}</span>
          <span>{label}</span>
        </p>
        <h2
          id={id}
          className={`display mt-5 text-[clamp(2.1rem,1.2rem+3.4vw,3.75rem)] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <p
          className={`max-w-xl text-[17px] leading-[1.65] ${
            dark ? "text-mist" : "text-slate-text"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
