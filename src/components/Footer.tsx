import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navItems, profile, socials } from "@/lib/content";

const pages = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Solutions", href: "/solutions" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Writing", href: "/articles" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-ink text-white">
      <div className="container-site grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:py-16">
        <div>
          <p className="font-display text-2xl font-black uppercase tracking-[-0.02em]">
            {profile.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
            Senior software developer in Nairobi building lending systems,
            core banking integrations and modern web platforms.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block break-all border-b-2 border-amber pb-1 text-sm font-semibold hover:border-white"
          >
            {profile.email}
          </a>
        </div>

        <FooterColumn title="On this page">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-mist hover:text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Pages">
          {pages.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-sm text-mist hover:text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Connect">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-mist hover:text-white"
              >
                {s.name}
                <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs font-medium uppercase tracking-[0.12em] text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}
