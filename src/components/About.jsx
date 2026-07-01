import { motion } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

const highlights = [
  {
    icon: <Cpu className="text-primary" />,
    title: "Backend Specialist",
    description: "Architecting robust server-side logic and database schemas for scale."
  },
  {
    icon: <Zap className="text-accent" />,
    title: "AI Integration",
    description: "Leveraging LLMs and machine learning to build intelligent features."
  },
  {
    icon: <Globe className="text-accent" />,
    title: "Cloud Native",
    description: "Deploying and managing applications with Docker and GCP."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Engineering for the future.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I build software with a focus on safety, durability, and clean architecture. I believe that engineering for the future means creating systems that are not just functional, but resilient and adaptable to the next wave of technological shifts.
              </p>
              <p>
                Whether I'm optimizing database throughput, implementing zero-hallucination RAG guardrails, or orchestrating multi-agent state machines, I approach every project with rigorous attention to detail and a commitment to clean, maintainable code.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card flex gap-6 hover:border-primary/20 transition-all duration-300 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
