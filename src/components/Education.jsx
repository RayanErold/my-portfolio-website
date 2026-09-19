import { motion } from 'framer-motion';

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
    <section id="education" className="section-container border-t border-border">
      <div className="mb-10">
        <span className="eyebrow mb-3"><span className="text-muted">—</span> Academic background</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 text-foreground">Education</h2>
      </div>

      <div className="max-w-3xl">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.08 }}
            className={`py-6 ${i > 0 ? 'border-t border-border' : ''}`}
          >
            <span className="font-mono text-[0.74rem] uppercase tracking-wide text-accent">{edu.period}</span>
            <h3 className="font-display text-xl mt-2 text-foreground">{edu.degree}</h3>
            <p className="text-muted text-sm mt-1">{edu.school}</p>
            <p className="text-muted text-[0.85rem] mt-2 leading-relaxed opacity-80">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
