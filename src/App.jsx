
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaArrowUp } from "react-icons/fa";

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

  // Apply theme globally
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">

      <Navbar />

      {/* Theme Toggle */}
      <button
        onClick={() => setDark((prev) => !prev)}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 shadow-lg hover:scale-110 transition"
      >
        {dark ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-indigo-600" />
        )}
      </button>

      {/* Main Content */}
      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <Footer />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-indigo-600 text-white shadow-2xl hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
