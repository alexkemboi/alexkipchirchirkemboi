"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function Articles() {
  const articlesData = [
    {
      id: 1,
      title: "Introduction to Git Version Control",
      slug: "introduction-to-git-version-control",
      date: "January 10, 2023",
      excerpt:
        "Learn the fundamentals of Git version control, repository management, commits, branching, and collaboration workflows.",
      category: "DevOps",
    },
    {
      id: 2,
      title: "Demystifying DevOps: A Comprehensive Guide",
      slug: "demystifying-devops-comprehensive-guide",
      date: "February 15, 2023",
      excerpt:
        "Explore DevOps principles, culture, automation, CI/CD pipelines, and best practices for modern software teams.",
      category: "DevOps",
    },
    {
      id: 3,
      title: "Continuous Integration & Deployment Explained",
      slug: "ci-cd-explained",
      date: "March 20, 2023",
      excerpt:
        "Understand how CI/CD pipelines improve software quality, delivery speed, and deployment confidence.",
      category: "Engineering",
    },
    {
      id: 4,
      title: "Software Testing Strategies",
      slug: "comprehensive-guide-to-software-testing",
      date: "April 25, 2023",
      excerpt:
        "Learn effective testing methodologies including unit testing, integration testing, and end-to-end automation.",
      category: "Quality Assurance",
    },
  ];

  return (
    <section
      id="articles"
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
            Knowledge Hub
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Latest
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-400">
            Thoughts on software engineering, cloud computing,
            DevOps, architecture, leadership, and modern technology.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {articlesData.map((article, index) => (
            <motion.article
              key={article.id}
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
                y: -8,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:border-cyan-500/30
                hover:shadow-xl
                hover:shadow-cyan-500/10
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-xs
                    text-cyan-400
                  "
                >
                  {article.category}
                </span>

                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <Calendar size={14} />
                  {article.date}
                </div>
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  group-hover:text-cyan-400
                  transition-colors
                "
              >
                {article.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {article.excerpt}
              </p>

              <Link
                href={`/articles/${article.slug}`}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  font-medium
                  hover:text-cyan-300
                "
              >
                Read Article
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-black text-white">
            Stay Updated
          </h3>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Follow my journey as I share insights on software
            engineering, cloud technologies, enterprise systems,
            and digital innovation.
          </p>

          <Link
            href="/articles"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-sky-600
              px-6
              py-3
              font-semibold
              text-white
              hover:scale-105
              transition-all
            "
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}