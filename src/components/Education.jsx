import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.S. Computer Science and Information Security",
    school: "John Jay College of Criminal Justice",
    period: "Expected 2027",
    details: "Focusing on cybersecurity, artificial intelligence, operating systems, and algorithmic software engineering."
  },
  {
    degree: "A.S. Computer Science",
    school: "LaGuardia Community College",
    period: "Graduated 2025",
    details: "Foundation in computer science fundamentals, data structures, object-oriented programming, and web development."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white/[0.01] relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
            // Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-foreground">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-8 border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <span className="text-primary text-xs font-mono font-medium mb-3 block uppercase tracking-wider">{edu.period}</span>
              <h3 className="text-xl font-light text-foreground mb-2 tracking-tight">{edu.degree}</h3>
              <p className="font-medium text-gray-300 text-sm mb-4">{edu.school}</p>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

