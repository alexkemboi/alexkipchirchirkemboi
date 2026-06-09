"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import alex from "../images/kemboi.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            lg:p-12
            shadow-2xl
            shadow-cyan-500/5
          "
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 blur-2xl opacity-20" />

                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={alex}
                    alt="Alex Kemboi"
                    width={450}
                    height={550}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div>
              <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                About Me
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Software Engineer &
                <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                  Problem Solver
                </span>
              </h2>

              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                My name is Alex Kemboi, a Software Engineering graduate from
                Kisii University, Kenya. I am passionate about building modern,
                scalable software solutions that solve real-world business
                challenges.
              </p>

              <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
                I specialize in Full Stack Development, enterprise software,
                cloud solutions, and digital transformation projects. My
                approach combines creativity, analytical thinking, and strong
                technical expertise to deliver impactful solutions.
              </p>

              <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
                Beyond coding, I enjoy contributing to open-source projects,
                mentoring aspiring developers, and continuously learning new
                technologies that drive innovation.
              </p>

              {/* Stats Row */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-8">

                  <div className="text-center flex-1">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                      5+
                    </h3>
                    <p className="text-zinc-500 mt-2">
                      Years Experience
                    </p>
                  </div>

                  <div className="hidden lg:block h-12 w-px bg-white/10" />

                  <div className="text-center flex-1">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                      50+
                    </h3>
                    <p className="text-zinc-500 mt-2">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="hidden lg:block h-12 w-px bg-white/10" />

                  <div className="text-center flex-1">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                      20+
                    </h3>
                    <p className="text-zinc-500 mt-2">
                      Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/aboutme"
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-sky-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                  "
                >
                  Learn More →
                </Link>

                <Link
                  href="/contact"
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3
                    text-zinc-300
                    hover:bg-white/10
                    transition-all
                  "
                >
                  Contact Me
                </Link>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}