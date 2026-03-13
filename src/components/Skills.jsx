import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C'],
    'AI & ML': ['LLM APIs', 'NLP Pipelines', 'Prompt Engineering', 'FastAPI AI', 'HuggingFace'],
    'Backend & APIs': ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'Microservices'],
    'Distributed Systems': ['Apache Kafka', 'Stream Processing', 'Message Queues', 'Fault Tolerance'],
    'Cloud & DevOps': ['AWS S3', 'AWS EC2', 'AWS Redshift', 'Docker', 'GitHub Actions', 'CI/CD'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  };
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center text-purple-400 mb-12">
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-purple-300 font-semibold mb-4">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span key={skill}
                  className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}