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
              className="glass-card"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <span className="text-primary text-sm font-semibold mb-2 block">{edu.period}</span>
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="font-medium text-gray-300 mb-4">{edu.school}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
