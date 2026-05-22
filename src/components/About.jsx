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
    icon: <Globe className="text-blue-400" />,
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineering for the future.</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student with a deep passion for backend development and AI-powered systems. I thrive on solving complex problems and building tools that make a real-world difference.
              </p>
              <p>
                With experience in building scalable APIs and automating workflows, I focus on system efficiency and user engagement. My toolkit includes Node.js, Python, and cloud technologies.
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
                className="glass-card flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
