import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-purple-400 mb-4">
        Get In Touch
      </motion.h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        I'm actively looking for full-time Software Engineer roles 
        starting May 2026. Feel free to reach out!
      </p>
      <a href="mailto:renukuntla.s@northeastern.edu"
        className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition inline-block mb-10">
        Say Hello 👋
      </a>
      <div className="flex justify-center gap-8 text-3xl text-gray-400">
        <a href="mailto:renukuntla.s@northeastern.edu"
          className="hover:text-purple-400 transition">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/saipujitha-renukuntla-a31855267/"
          target="_blank" rel="noreferrer"
          className="hover:text-purple-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Saipujitha123"
          target="_blank" rel="noreferrer"
          className="hover:text-purple-400 transition">
          <FaGithub />
        </a>
      </div>
      <p className="text-gray-700 text-sm mt-16">
        Built by Sai Pujitha Renukuntla © 2026
      </p>
    </section>
  );
}