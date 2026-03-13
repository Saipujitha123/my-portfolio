import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Software Developer Intern – Backend & Data Engineering',
    company: 'Quicknify Software Technologies Pvt Ltd',
    duration: 'Mar 2024 – Jul 2024',
    points: [
      'Developed Python backend modules processing 100K+ records daily with 99.5% data integrity',
      'Reduced processing latency by 40% through modular service refactoring',
      'Built Tableau dashboards consuming REST APIs improving stakeholder workflows',
    ],
  },
  {
    role: 'Software Developer Intern – Data Pipelines & Backend',
    company: 'Eastencher Software Private Limited',
    duration: 'Aug 2023 – Mar 2024',
    points: [
      'Engineered Python and SQL pipelines with unit and integration test coverage',
      'Optimized SQL execution reducing pipeline runtime by 45%',
      'Applied idempotency patterns ensuring fault-tolerant distributed service execution',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold text-center text-purple-400 mb-12">
        Experience
      </motion.h2>
      <div className="flex flex-col gap-8">
        {experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-900 rounded-xl p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-white font-bold">{e.role}</h3>
              <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                {e.duration}
              </span>
            </div>
            <p className="text-purple-300 text-sm mb-4">{e.company}</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {e.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}