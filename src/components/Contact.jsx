import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 text-center overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Contact Me 📞
      </h2>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/919515415228?text=Hi%20Vignesh%20I%20want%20to%20connect"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-green-500/40 transition"
        >
          Chat on WhatsApp 💬
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:dvigneshkumar60@gmail.com"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-indigo-500/40 transition"
        >
          Send Email 📧
        </motion.a>

        {/* Google Form */}
        <motion.a
          href="https://forms.gle/vrjWt5ufYJ6JpprY9"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 border border-white/20 rounded-xl font-semibold backdrop-blur-lg bg-white/10 hover:bg-white/20 transition"
        >
          Fill Contact Form 📝
        </motion.a>

      </div>

    </section>
  );
}