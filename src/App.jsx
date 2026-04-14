import { useState, useEffect } from "react"; // Added useEffect
import { FaMoon, FaSun, FaArrowUp } from "react-icons/fa"; // Added FaArrowUp

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

function App() {
  const [dark, setDark] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={dark ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Navbar />

      {/* 🌗 Theme Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-110 transition"
      >
        {dark ? <FaMoon className="text-white" /> : <FaSun className="text-yellow-400" />}
      </button>

      {/* 📄 Content */}
      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

<Footer />
      {/* 🔝 Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-indigo-600 text-white shadow-2xl hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;