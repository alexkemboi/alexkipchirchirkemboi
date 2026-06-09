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

const Footer = () => {
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
      name: "LinkedIn",
      icon: faLinkedin,
      href: "https://linkedin.com/in/alex-kemboi-9642a3166",
    },
    {
      name: "GitHub",
      icon: faGithub,
      href: "https://github.com/alexkemboi",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      href: "https://twitter.com/alexkemboi97",
    },
    {
      name: "Email",
      icon: faEnvelope,
      href: "mailto:alex@example.com",
    },
  ];

  return (
    <footer id="footer" className="px-4 md:px-8 lg:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-7xl
          mx-auto
          rounded-3xl
          border
          border-white/10
          bg-sky-950/80
          backdrop-blur-xl
          shadow-xl
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-3 gap-10 p-8 md:p-12">
          {/* Brand */}
          <div>
            <h2
              className="
                text-3xl
                md:text-4xl
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
              Full Stack Software Engineer specializing in
              enterprise systems, cloud solutions, modern web
              applications, and scalable software architecture.
            </p>

            <div className="flex gap-3 mt-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:text-cyan-400
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                    hover:-translate-y-1
                  "
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-lg"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Navigation
            </h3>

            <div className="space-y-3">
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
              Ready To Build Something Great?
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Whether you're building a startup, enterprise
              platform, or custom software solution, let's
              discuss your next project.
            </p>

            <Link
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:scale-105
              "
            >
              Start A Project
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div
          className="
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
          <p className="text-sm text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} Alex Kemboi. All rights reserved.
          </p>

          <p className="text-sm text-zinc-500 text-center md:text-right">
            Built with Next.js, TypeScript, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;