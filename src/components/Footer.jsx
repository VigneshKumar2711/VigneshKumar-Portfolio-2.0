
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10 pt-12 pb-8 px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          {/* Brand & Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}Logo.jpg`}
                alt="Vignesh Portfolio Logo"
                className="w-10 h-10 object-contain rounded-full"
              />

              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 bg-clip-text text-transparent">
                Vignesh Portfolio
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-400 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Computer Science graduate and MERN Stack Developer
              passionate about building responsive web applications
              and practical digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>

            <ul className="space-y-2 text-center">
              {quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors capitalize text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/VigneshKumar2711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-indigo-600 transition-all text-gray-700 dark:text-gray-300 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/dvignesh-kumar-81342/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-indigo-600 transition-all text-gray-700 dark:text-gray-300 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

             <a
  href="mailto:dvigneshkumar60@gmail.com"
  aria-label="Send email to Vignesh Kumar"
  title="dvigneshkumar60@gmail.com"
  className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-indigo-600 transition-all text-gray-700 dark:text-gray-300 hover:text-white"
>
  <FaEnvelope size={20} />
</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-gray-600 dark:text-gray-500 text-xs">
            © {currentYear}{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Vignesh Portfolio
            </span>
            . All rights reserved.
          </p>

          <p className="text-gray-500 dark:text-gray-600 text-[10px] mt-2 italic">
            Designed & Built by D. Vignesh Kumar
          </p>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
    </footer>
  );
}
