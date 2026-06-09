"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faJava,
  faAws,
  faNodeJs,
  faAngular,
  faCuttlefish,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCloud,
  faCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: faHtml5, color: "text-orange-500", progress: 95 },
    { name: "CSS3", icon: faCss3Alt, color: "text-blue-500", progress: 92 },
    { name: "JavaScript", icon: faJs, color: "text-yellow-400", progress: 95 },
    { name: "Bootstrap", icon: faBootstrap, color: "text-purple-500", progress: 90 },
    { name: "React", icon: faReact, color: "text-cyan-400", progress: 95 },
    { name: "MongoDB", icon: faDatabase, color: "text-green-500", progress: 85 },
    { name: "Java", icon: faJava, color: "text-red-500", progress: 90 },
    { name: "AWS", icon: faAws, color: "text-orange-400", progress: 80 },
    { name: "C", icon: faCode, color: "text-blue-400", progress: 85 },
    { name: "NodeJS", icon: faNodeJs, color: "text-green-500", progress: 90 },
    { name: "MySQL", icon: faDatabase, color: "text-sky-500", progress: 92 },
    { name: "Angular", icon: faAngular, color: "text-red-600", progress: 88 },
    { name: "Azure", icon: faCloud, color: "text-cyan-500", progress: 85 },
    { name: "C#", icon: faCuttlefish, color: "text-purple-500", progress: 90 },
    { name: "ASP.NET", icon: faCode, color: "text-violet-500", progress: 92 },
    { name: "Git & GitHub", icon: faGithub, color: "text-white", progress: 95 },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Technical Expertise
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
            Skills &
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-400 leading-relaxed">
            Over the years I have worked across enterprise software,
            cloud platforms, modern web technologies, databases,
            DevOps tools, and scalable application architectures.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                shadow-lg
                hover:border-cyan-500/30
                transition-all
              "
            >
              <div className="flex items-center justify-between mb-5">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-4xl ${skill.color}`}
                />

                <span className="text-cyan-400 font-bold">
                  {skill.progress}%
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg">
                {skill.name}
              </h3>

              <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.progress}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-sky-500
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                16+
              </h3>
              <p className="text-zinc-500 mt-2">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-400">
                50+
              </h3>
              <p className="text-zinc-500 mt-2">
                Projects
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
                Commitment
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}