
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FindIt",
    tech: "React • TypeScript • Vite • Tailwind CSS • Zod",
    desc:
      "A lost and found platform that allows users to submit and manage lost or found item reports. Includes protected routes, report management and admin activity tracking.",
    github: "https://github.com/VigneshKumar2711/FindIt",
    live: "https://findit-sepia-two.vercel.app/",
  },
  {
    title: "SchemeSaathi",
    tech: "React • TypeScript • Vite • Tailwind CSS • AI",
    desc:
      "An AI-assisted government scheme discovery platform that helps users explore schemes and identify eligibility based on their personal profile and requirements.",
    github: "https://github.com/VigneshKumar2711/SchemeSaathi",
    live: "https://schemesaathi-smoky.vercel.app/",
  },
  {
    title: "FinGuard AI",
    tech: "React • Vite • Python • FastAPI • Exasol SQL",
    desc:
      "An AI-powered financial transaction monitoring dashboard that analyses transaction data, classifies risk levels and highlights potential fraudulent activities.",
    github: "https://github.com/VigneshKumar2711/FinGuard-AI",
    live: "https://finguard-ai-plum.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 bg-clip-text text-transparent"
      >
        My Projects 🚀
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {p.title}
              </h3>

              <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-widest leading-relaxed">
                {p.tech}
              </p>

              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-xl text-sm font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-gray-200 dark:border-white/10"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/20"
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
