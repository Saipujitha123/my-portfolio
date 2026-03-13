import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Interview Coach',
    desc: 'LLM-powered NLP platform processing 500+ job postings with semantic skills-matching and AI-driven competency recommendations via FastAPI backend.',
    tech: ['Python', 'FastAPI', 'NLP', 'Streamlit', 'OpenAI API'],
    github: 'https://github.com/Saipujitha123',
    demo: '',
  },
  {
    title: 'Real-Time Crypto Analytics',
    desc: 'Distributed streaming platform processing 10K+ events/min via Apache Kafka with real-time PostgreSQL dashboard reducing data latency by 60%.',
    tech: ['Python', 'Apache Kafka', 'PostgreSQL', 'Streamlit'],
    github: 'https://github.com/Saipujitha123',
    demo: '',
  },
  {
    title: 'Healthcare REST API Service',
    desc: 'Secure modular REST API for patient data management with Docker containerization, route-level middleware, and full integration test coverage.',
    tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Saipujitha123',
    demo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center text-purple-400 mb-12">
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between border border-gray-800 hover:border-purple-500 transition">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(t => (
                  <span key={t}
                    className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href={p.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-1 hover:text-purple-400 transition">
                <FaGithub /> Code
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer"
                  className="flex items-center gap-1 hover:text-purple-400 transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
