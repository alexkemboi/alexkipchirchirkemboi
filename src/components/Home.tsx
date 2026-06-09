"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import alex from "../images/alex.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
            >
              Full Stack Software Engineer
            </motion.span>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
              Building
              <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              I&apos;m Alex Kemboi, a Full Stack Software Developer based in
              Nairobi, Kenya. I specialize in building scalable web
              applications, enterprise systems, and modern digital solutions
              that solve real-world business problems.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/resume"
                className="group rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                View Resume →
              </Link>

              <Link
                href="#portfolio"
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 font-semibold text-zinc-300 hover:bg-white/10 transition"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">
              {[
                {
                  icon: faLinkedin,
                  url: "https://www.linkedin.com/in/alex-kemboi-9642a3166",
                },
                {
                  icon: faTwitter,
                  url: "https://www.twitter.com/alexkemboi97",
                },
                {
                  icon: faGithub,
                  url: "https://www.github.com/alexkemboi",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 blur-3xl opacity-30" />

              <div className="relative h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                <Image
                  src={alex}
                  alt="Alex Kemboi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}