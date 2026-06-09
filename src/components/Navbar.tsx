"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import alex from "../images/alex.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Centered Navbar */}
 <motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="fixed top-6 left-0 right-0 z-[9999] flex justify-center"
>
        <div
          className="
            flex
            items-center
            gap-8
            rounded-full
            border
            border-white/10
            bg-slate-900/70
            backdrop-blur-2xl
            shadow-2xl
            shadow-cyan-500/10
            px-6
            py-3
          "
        >
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-cyan-500/30">
              <Image
                src={alex}
                alt="Alex Kemboi"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden lg:block">
              <h3 className="font-bold text-white text-sm">
                Alex Kemboi
              </h3>
              <p className="text-xs text-zinc-400">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  text-zinc-400
                  hover:text-white
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-sky-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-5 w-5"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 20,
              }}
              className="
                fixed
                top-0
                left-0
                z-[9999]
                h-screen
                w-72
                bg-slate-950/95
                backdrop-blur-xl
                border-r
                border-white/10
                p-6
              "
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={alex}
                      alt="Alex Kemboi"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Alex Kemboi
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Software Engineer
                    </p>
                  </div>
                </div>

                <button onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="h-5 w-5 text-white"
                  />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-zinc-300
                      hover:bg-white/10
                      hover:text-cyan-400
                      transition-all
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                href="#contact"
                className="
                  mt-8
                  block
                  text-center
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-600
                  px-5
                  py-3
                  text-white
                  font-semibold
                "
              >
                Hire Me
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;