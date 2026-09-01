
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaWpforms } from "react-icons/fa";

export default function Contact() {
  const contactOptions = [
    {
      title: "Chat on WhatsApp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/919515415228?text=Hi%20Vignesh%20I%20want%20to%20connect",
      external: true,
      style:
        "bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-green-500/40",
    },
    {
      title: "Send Email",
      icon: <FaEnvelope />,
      href: "mailto:dvigneshkumar60@gmail.com",
      external: false,
      style:
        "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/40",
    },
    {
      title: "Fill Contact Form",
      icon: <FaWpforms />,
      href: "https://forms.gle/vrjWt5ufYJ6JpprY9",
      external: true,
      style:
        "bg-white dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-500 dark:to-pink-500 bg-clip-text text-transparent"
      >
        Let's Connect 📞
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10"
      >
        Interested in my projects, technical skills or professional
        opportunities? Feel free to reach out. I'd be happy to connect
        and discuss opportunities to collaborate and learn.
      </motion.p>

      {/* Contact Buttons */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6">
        {contactOptions.map((option, index) => (
          <motion.a
            key={option.title}
            href={option.href}
            target={option.external ? "_blank" : undefined}
            rel={option.external ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${option.style}`}
          >
            <span className="text-xl">{option.icon}</span>
            {option.title}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
