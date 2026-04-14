import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo and Brand Name Container */}
        <div className="flex items-center gap-3">
          <img 
            src="/Logo.jpg" 
            alt="Logo" 
            className="w-10 h-10 object-contain" 
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Vignesh Portfolio
          </h1>
        </div>

        {/* Links */}
        <div className="flex gap-4 md:gap-6 text-violet-400 font-bold">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`hover:text-indigo-500 transition capitalize ${
                active === section ? "text-indigo-500" : "opacity-80"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}