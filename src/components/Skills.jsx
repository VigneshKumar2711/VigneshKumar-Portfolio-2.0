
import { motion } from "framer-motion";
import exasolLogo from "../assets/exasolicon.png";
import mssqlLogo from "../assets/mssqlicon.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
  SiVercel,
  SiGooglecloud,
  SiLooker,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages 💻",
    skills: [
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "Java Fundamentals", icon: <FaJava />, color: "text-red-500" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
      { name: "SQL", icon: <FaDatabase />, color: "text-blue-500" },
    ],
  },
  {
    title: "Frontend Development 🎨",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "text-purple-500" },
      { name: "React Router", icon: <SiReactrouter />, color: "text-red-500" },
    ],
  },
  {
    title: "Backend & Databases ⚙️",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-gray-700 dark:text-gray-300",
      },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "REST APIs", icon: <FaNodeJs />, color: "text-indigo-500" },
    {
  name: "MS SQL Server",
  icon: (
    <img
      src={mssqlLogo}
      alt="Microsoft SQL Server logo"
      className="w-10 h-10 object-contain"
    />
  ),
  color: "",
},
    ],
  },
  {
    title: "Tools & Development 🛠️",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "text-gray-900 dark:text-white",
      },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "text-gray-900 dark:text-white",
      },
    ],
  },
  {
    title: "Additional Technologies 📊",
    skills: [
      { name: "FastAPI", icon: <FaPython />, color: "text-teal-500" },
     {
  name: "Exasol SQL",
  icon: (
    <img
      src={exasolLogo}
      alt="Exasol logo"
      className="w-10 h-8 object-contain"
    />
  ),
  color: "",
},
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "text-blue-500" },
      { name: "Looker BI", icon: <SiLooker />, color: "text-blue-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 bg-clip-text text-transparent"
      >
        Skills 🛠
      </motion.h2>

      {/* Categories */}
      <div className="relative z-10 space-y-12 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center w-28 h-28 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <div className={`text-4xl mb-2 ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-tighter text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
