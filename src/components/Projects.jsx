import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    tech: "React • OpenWeather API",
    desc: "A sleek weather dashboard that fetches real-time climate data for any city globally using OpenWeather API.",
    github: "https://github.com/VigneshKumar2711/Weather-App-React-JS.git",
    live: "https://weather-app-react-js-drab.vercel.app",
  },
  {
    title: "Expense Tracker",
    tech: "HTML • CSS • JavaScript",
    desc: "A financial management tool designed to track family budgets, monitor spending, and visualize savings status.",
    github: "https://github.com/VigneshKumar2711/Expense-Tracker-Management-System-App.git",
    live: "https://expense-tracker-management-system-app.vercel.app",
  },
  {
    title: "Fun Jokes Generator",
    tech: "React.js • Redux Toolkit",
    desc: "An interactive app using Redux Toolkit to manage state and generate random jokes based on various fun categories.",
    github: "https://github.com/VigneshKumar2711/Jokes-Project-Using-Redux-Toolkit.git",
    live: "https://jokes-project-using-redux-toolkit.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 text-center overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        My Projects 🚀
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs font-mono text-indigo-400 mb-4 uppercase tracking-widest">{p.tech}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              {/* GitHub Link */}
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-indigo-600 transition-all duration-300 border border-white/10"
              >
                <FaGithub /> GitHub
              </a>

              {/* Live Link */}
              <a 
                href={p.live} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/20"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}