import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    { icon: '🎓', text: 'MS @ Northeastern (May 2026)' },
    { icon: '🤖', text: 'AI & LLM Applications' },
    { icon: '☁️', text: 'AWS & Cloud Systems' },
  ];
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center text-purple-400 mb-12">
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <img src="/profile.jpg" alt="Sai Pujitha"
          className="w-48 h-48 rounded-full object-cover border-4 border-purple-500" />
        <div>
          <p className="text-gray-300 text-lg mb-6">
            Software Engineer specializing in backend systems, distributed data 
            pipelines, and AI-powered applications. Currently pursuing MS in 
            Information Systems at Northeastern University (GPA 3.6). 
            Open to full-time roles from May 2026.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-4 flex items-center gap-3">
                <span className="text-2xl">{h.icon}</span>
                <span className="text-gray-300 text-sm">{h.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}