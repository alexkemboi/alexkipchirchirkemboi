"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import alex from "../images/kemboi.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
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
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-2xl
          "
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${alex.src})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-sky-950/85" />

          {/* Gradient Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-sky-950/95
              via-sky-950/85
              to-sky-950/75
            "
          />

          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-20">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
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
              About Me
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
              }}
              className="
                mt-8
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-tight
                tracking-tight
                text-white
              "
            >
              Creating Software
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  bg-clip-text
                  text-transparent
                "
              >
                That Solves Problems
              </span>
            </motion.h2>

            {/* Content */}
            <div className="max-w-4xl">
              <p
                className="
                  mt-8
                  text-lg
                  md:text-xl
                  text-zinc-400
                  leading-relaxed
                "
              >
                My name is Alex Kemboi, a Software Engineering
                graduate from Kisii University in Kenya. I am
                passionate about building scalable software
                solutions that solve real-world business
                challenges and create measurable impact.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  md:text-xl
                  text-zinc-400
                  leading-relaxed
                "
              >
                I specialize in Full Stack Development,
                Enterprise Systems, Cloud Technologies,
                API Integrations, Database Design, DevOps,
                and Digital Transformation projects.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  md:text-xl
                  text-zinc-400
                  leading-relaxed
                "
              >
                My approach combines creativity,
                problem-solving, and engineering
                excellence to design solutions that
                are reliable, secure, maintainable,
                and built for growth.
              </p>

              <p
                className="
                  mt-6
                  text-lg
                  md:text-xl
                  text-zinc-400
                  leading-relaxed
                "
              >
                Beyond coding, I enjoy mentoring
                developers, contributing to innovative
                projects, and continuously learning
                emerging technologies that help
                businesses move forward.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  value: "5+",
                  label: "Years Experience",
                },
                {
                  value: "50+",
                  label: "Projects Delivered",
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
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-sm
                    p-6
                    text-center
                  "
                >
                  <h3
                    className="
                      text-5xl
                      font-black
                      bg-gradient-to-r
                      from-cyan-400
                      to-sky-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {stat.value}
                  </h3>

                  <p className="mt-3 text-zinc-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                href="/aboutme"
                className="
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
                Learn More →
              </Link>

              <Link
                href="#contact"
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  px-8
                  py-4
                  font-semibold
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}