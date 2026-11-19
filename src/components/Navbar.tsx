"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import avatar from "@/images/avatar.jpg";
import { navItems, profile } from "@/lib/content";
import ButtonLink from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="on-dark fixed inset-x-0 top-0 z-50 pt-3 text-white lg:pt-4">
      <div className="container-site relative">
      <nav
        aria-label="Primary"
        className={`flex h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy pl-3 pr-2 transition-shadow duration-200 lg:h-[72px] lg:pl-4 lg:pr-3 ${
          scrolled ? "shadow-[0_14px_40px_rgb(10_26_48/0.35)]" : ""
        }`}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-amber ring-offset-2 ring-offset-navy lg:size-11">
            <Image
              src={avatar}
              alt=""
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-[1.15]">
            <span className="truncate font-display text-[13px] font-extrabold uppercase tracking-[0.08em] sm:text-[15px]">
              {profile.name}
            </span>
            <span className="truncate text-[10px] font-medium uppercase tracking-[0.14em] text-steel sm:text-[11px]">
              {profile.title}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative py-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/90 transition-colors after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-amber after:transition-[width] after:duration-200 hover:text-white hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonLink
            href="/#contact"
            className="hidden min-h-11 rounded-xl px-5 text-[13px] sm:inline-flex"
          >
            Work with me
          </ButtonLink>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-xl text-white hover:bg-white/10 xl:hidden"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-5 top-full mt-2 rounded-2xl border border-white/10 bg-navy px-5 pb-5 pt-2 shadow-[0_24px_48px_rgb(10_26_48/0.4)] md:inset-x-8 lg:inset-x-12 xl:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-12 items-center border-b border-white/10 text-sm font-semibold uppercase tracking-[0.1em] text-white hover:text-amber"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <ButtonLink
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-5 w-full rounded-xl"
                >
                  Work with me
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
