import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-white/5 border-t border-white/10 pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* 1. Brand & Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/public/Logo.jpg" alt="Logo" className="w-8 h-8 object-contain" />
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                Vignesh Portfolio
              </h2>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              MERN Stack Developer & UI Designer focusing on building clean, functional, and user-centric digital experiences.
            </p>
          </div>

          {/* 2. Quick Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)}
                    className="text-gray-400 hover:text-indigo-400 transition-colors capitalize text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect Section */}
          <div className="flex flex-col items-center ">
<h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>        <div className="flex gap-4">
              <a href="https://github.com/VigneshKumar2711" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-indigo-600 transition-all text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/d-vignesh-kumar-81342" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-indigo-600 transition-all text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:dvigeshkumar60@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-indigo-600 transition-all text-gray-400 hover:text-white">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} <span className="text-indigo-400">Vignesh Portfolio</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] mt-2 italic">
            Designed & Built by D. Vignesh Kumar
          </p>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
}
