"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Code2,
  Laptop,
} from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Mediconnect",
      description:
        "A modern healthcare platform connecting patients, healthcare providers, and digital health services.",
      website: "https://mediconnectapp.netlify.app",
      icon: Globe,
      category: "Healthcare",
    },
    {
      id: 2,
      title: "Africommerce",
      description:
        "An e-commerce ecosystem designed to connect businesses, customers, and digital marketplaces across Africa.",
      website: "https://afrecommerce.netlify.app",
      icon: Laptop,
      category: "E-Commerce",
    },
    {
      id: 3,
      title: "IKONEX Systems",
      description:
        "Technology solutions company delivering enterprise software, networking, cybersecurity, and cloud solutions.",
      website: "https://ikonex.co.ke",
      icon: Code2,
      category: "Enterprise",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A modern developer portfolio showcasing professional experience, projects, technical skills, and achievements.",
      website: "https://alexkipchirchirkemboi.netlify.app",
      icon: Globe,
      category: "Portfolio",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="
              inline-flex
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
            Featured Work
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Recent
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-400">
            A selection of projects, products, and enterprise solutions
            I've designed and developed over the years.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-500/30
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    h-32
                    w-32
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                  "
                />

                <div className="relative">

                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/10
                      text-cyan-400
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <span
                    className="
                      inline-block
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-zinc-400
                    "
                  >
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-cyan-400
                      hover:text-cyan-300
                    "
                  >
                    Visit Project
                    <ExternalLink size={16} />
                  </a>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
          "
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                50+
              </h3>
              <p className="text-zinc-500 mt-2">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                20+
              </h3>
              <p className="text-zinc-500 mt-2">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                5+
              </h3>
              <p className="text-zinc-500 mt-2">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                100%
              </h3>
              <p className="text-zinc-500 mt-2">
                Client Focus
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}