import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-light" | "outline-dark" | "dark";

const base =
  "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-md px-7 text-center text-sm font-bold uppercase tracking-[0.06em] transition-[transform,box-shadow,border-color,background-color,color] duration-200 ease-out motion-safe:hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-amber text-ink hover:bg-amber-hover hover:shadow-[0_14px_30px_rgb(10_26_48/0.25)]",
  "outline-light": "border-2 border-white/60 text-white hover:border-white",
  "outline-dark": "border-2 border-navy/25 text-navy hover:border-navy",
  dark: "bg-navy text-white hover:bg-navy-raised hover:shadow-[0_14px_30px_rgb(10_26_48/0.25)]",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`.trim();
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  external?: boolean;
};

export default function ButtonLink({
  variant = "primary",
  external,
  className = "",
  ...props
}: ButtonLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      {...externalProps}
      {...props}
      className={buttonClass(variant, className)}
    />
  );
}
