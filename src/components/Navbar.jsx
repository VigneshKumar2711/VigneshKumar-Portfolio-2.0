
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);

    const element = document.getElementById(id);

    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}Logo.jpg`}
            alt="Vignesh Portfolio Logo"
            className="w-10 h-10 object-contain rounded-full"
          />

          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Vignesh Portfolio
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 md:gap-6 text-gray-700 dark:text-violet-300 font-bold transition-colors duration-300">
          {["home", "about", "projects", "skills", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-indigo-500 dark:hover:text-indigo-400 transition capitalize ${
                  active === section
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "opacity-80"
                }`}
              >
                {section}
              </button>
            )
          )}
        </div>

      </div>
    </nav>
  );
}
