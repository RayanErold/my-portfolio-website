import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.S. Computer Science and Information Security",
    school: "John Jay College of Criminal Justice",
    period: "Expected 2027",
    details: "Focusing on cybersecurity, artificial intelligence, and advanced algorithmic software systems."
  },
  {
    degree: "A.S. Computer Science",
    school: "LaGuardia Community College",
    period: "Graduated 2025",
    details: "Strong foundation in computer science fundamentals, data structures, algorithms, and web applications."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white/[0.02]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Education</h2>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between hover:border-emerald-500/40"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <GraduationCap className="text-emerald-400" size={24} />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold mb-2 text-white">{edu.degree}</h3>
                <p className="font-semibold text-emerald-300 text-sm mb-4">{edu.school}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
