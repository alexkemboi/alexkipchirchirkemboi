"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/alex-kemboi-9642a3166",
    },
    {
      icon: faGithub,
      href: "https://github.com/alexkemboi",
    },
    {
      icon: faTwitter,
      href: "https://twitter.com/alexkemboi97",
    },
    {
      icon: faEnvelope,
      href: "mailto:alex@example.com",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <div className="grid lg:grid-cols-3 gap-12 p-10 lg:p-14">
            {/* Brand */}
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-cyan-500/30
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  text-cyan-400
                "
              >
                Full Stack Software Engineer
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  bg-clip-text
                  text-transparent
                "
              >
                Alex Kemboi
              </h2>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                Building scalable web applications,
                enterprise systems, cloud solutions,
                and modern digital experiences that
                solve real-world business challenges.
              </p>

              <div className="flex gap-4 mt-8">
                {socials.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-sm
                        text-zinc-400
                        transition-all
                        hover:text-cyan-400
                        hover:border-cyan-500/30
                      "
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Links
              </h3>

              <div className="space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="
                      block
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:text-cyan-400
                      hover:translate-x-1
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Looking for a developer to help
                transform your idea into a scalable
                digital product? Let&apos;s discuss
                your next project.
              </p>

              <Link
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                  hover:shadow-cyan-500/30
                "
              >
                Start A Project →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {[
                {
                  value: "5+",
                  label: "Years Experience",
                },
                {
                  value: "50+",
                  label: "Projects",
                },
                {
                  value: "20+",
                  label: "Technologies",
                },
                {
                  value: "100%",
                  label: "Commitment",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="
                    p-8
                    text-center
                    border-r
                    border-white/10
                    last:border-r-0
                  "
                >
                  <h4
                    className="
                      text-4xl
                      font-black
                      bg-gradient-to-r
                      from-cyan-400
                      to-sky-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div
            className="
              border-t
              border-white/10
              px-8
              py-6
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
            "
          >
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Alex Kemboi.
              All rights reserved.
            </p>

            <p className="text-zinc-500 text-sm">
              Built with Next.js, TypeScript,
              Tailwind CSS & Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}