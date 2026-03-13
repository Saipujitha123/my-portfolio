import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-4">
        Hi, I'm <span className="text-purple-400">Sai Pujitha</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-400 max-w-2xl mb-8">
        I build AI-powered backend systems and data-driven applications that scale.
      </motion.p>
      <div className="flex gap-4 mb-8">
        <Link to="projects" smooth={true} duration={500}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg cursor-pointer transition">
          View Projects
        </Link>
        <a href="/resume.pdf" download
          className="border border-purple-400 text-purple-400 hover:bg-purple-900 px-6 py-3 rounded-lg transition">
          Download Resume
        </a>
      </div>
      <div className="flex gap-6 text-2xl text-gray-400">
        <a href="https://github.com/Saipujitha123" target="_blank" rel="noreferrer"
          className="hover:text-purple-400 transition"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/saipujitha-renukuntla-a31855267/" target="_blank" rel="noreferrer"
          className="hover:text-purple-400 transition"><FaLinkedin /></a>
      </div>
    </section>
  );
}