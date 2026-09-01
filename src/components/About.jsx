
import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description:
      "React.js, JavaScript, TypeScript, Tailwind CSS, responsive UI and React Router.",
    color: "text-indigo-500",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Node.js, Express.js, REST API integration and Java fundamentals.",
    color: "text-purple-500",
  },
  {
    icon: "🗄️",
    title: "Database Management",
    description:
      "MongoDB, SQL, MS SQL Server and database fundamentals.",
    color: "text-pink-500",
  },
  {
    icon: "🤝",
    title: "Communication & Learning",
    description:
      "Beginner-friendly technical explanations, debugging guidance and Tamil communication.",
    color: "text-yellow-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-10 pb-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 bg-clip-text text-transparent"
      >
        About Me 👨‍💻
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold italic text-indigo-600 dark:text-indigo-400 mb-8"
        >
          "Turning ideas into functional and user-friendly web applications."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed opacity-95 mb-12"
        >
          I am a Computer Science graduate and MERN Stack Developer with
          hands-on experience building responsive web applications.
          Through internships and project development, I have gained
          exposure to frontend development, Java full-stack concepts and
          business intelligence tools. I enjoy solving problems,
          exploring technologies and helping beginners understand
          programming concepts through clear explanations and
          project-based learning.
        </motion.p>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-xl transition-colors duration-300"
          >
            <div className={`text-3xl mb-4 ${item.color}`}>
              {item.icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
