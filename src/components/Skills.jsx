import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit,FaGithub,FaJava, FaPython 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiPhp, SiMysql, SiC, SiEclipseide, SiPython, SiVercel
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di"; // Using DevIcons for SQL Server to avoid the Vite export error

const skillCategories = [
  {
    title: "Languages 💻",
    skills: [
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "Core Java", icon: <FaJava />, color: "text-red-600" },
      { name: "C", icon: <SiC />, color: "text-blue-400" },
      { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
      { name: "Python", icon: <FaPython />, color: "text-blue-500" },
    ],
  },
  {
    title: "Frontend 🎨",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend & Databases ⚙️",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "MS SQL Server", icon: <DiMsqlServer />, color: "text-red-500" },
    ],
  },
  {
    title: "Hosting  🚀",
    skills: [
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Vercel", icon: <SiVercel />, color: "text-white" }, // Using SiExpress or FaArrowUp as a placeholder if SiVercel is missing
    ],
  },
  {
    title: "Tools & IDEs 🛠",
    skills: [
      { name: "Eclipse", icon: <SiEclipseide />, color: "text-indigo-500" },
      { name: "Turbo C++", icon: <SiC />, color: "text-blue-300" },
      { name: "Python IDE", icon: <SiPython />, color: "text-yellow-500" },
      { name: "Git", icon: <FaGit />, color: "text-orange-600" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6 text-center overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Skills 🛠
      </h2>

      {/* Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center 
                             w-28 h-28 rounded-2xl 
                             bg-white/5 backdrop-blur-md border border-white/10 
                             shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  <div className={`text-4xl mb-2 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter">
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