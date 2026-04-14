import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa"; 
import {coding-illustration} from "/coding-illustration.jpg";

export default function Hero() {
  const handleScroll = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      
      {/* 🔥 Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Main Container - Grid Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Hi, I'm Vignesh 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-2xl text-gray-300 max-w-xl font-medium leading-relaxed"
          >
            MERN Stack Developer building modern, scalable and real-world web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {/* Scroll Button */}
            <motion.button
              onClick={handleScroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-purple-500/40 transition-all duration-300"
            >
              View Projects 🚀
            </motion.button>

            {/* Resume Download Button */}
            <motion.a
              href="/Vignesh_Kumar_Resume.pdf" // Points to public folder
              download="Vignesh_Kumar_Resume.pdf" // Triggers the download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Download Resume <FaDownload className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Coding Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full max-w-[500px]"
          >
            <img 
              src={coding-illustration} 
              alt="Coding Illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full -z-10 scale-75"></div>
        </motion.div>

      </div>
    </section>
  );
}
