import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative pt-10 pb-20 px-6 text-center overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
      >
        About Me 👨‍💻
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold italic text-indigo-400 mb-8"
        >
          "Turning complex problems into elegant, functional, and scalable web solutions."
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed opacity-90 mb-12"
        >
          I am a passionate **Frontend & Full-Stack Developer** based in Chittoor, specializing in the **MERN STACK** 
          Beyond just writing code, I focus on creating cinematic, minimalist user experiences. 
          Whether it's building AI-powered resume tools or real-time booking apps, I thrive on the 
          challenge of bringing imaginative ideas to life in the browser.
        </motion.p>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="text-3xl mb-4 text-indigo-500">🎨</div>
          <h3 className="text-xl font-bold mb-2">Frontend</h3>
          <p className="text-sm text-gray-400">React, Tailwind CSS, and Cinematic UI/UX design.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="text-3xl mb-4 text-purple-500">⚙️</div>
          <h3 className="text-xl font-bold mb-2">Backend</h3>
          <p className="text-sm text-gray-400">Node.js, Express, PHP, and Java (JDBC/SQL).</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="text-3xl mb-4 text-pink-500">🗄</div>
          <h3 className="text-xl font-bold mb-2">Database</h3>
          <p className="text-sm text-gray-400">MongoDB and SQL Server for structured data.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="text-3xl mb-4 text-yellow-500">🎯</div>
          <h3 className="text-xl font-bold mb-2">Aptitude</h3>
          <p className="text-sm text-gray-400">Strong analytical skills honed through competitive exam prep.</p>
        </motion.div>

      </div>

    </section>
  );
}