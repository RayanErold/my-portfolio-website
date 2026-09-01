import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Code2, Server, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: <Cpu className="text-primary" size={22} />,
    title: "Backend Specialist",
    description: "Architecting high-throughput REST APIs, database schemas, and microservices for production scalability."
  },
  {
    icon: <Zap className="text-accent" size={22} />,
    title: "AI & RAG Engineering",
    description: "Building zero-hallucination legal/analytical search, ChromaDB vector indexing, and multi-agent loops."
  },
  {
    icon: <Globe className="text-sky-400" size={22} />,
    title: "Distributed Infrastructure",
    description: "Deploying production applications with Docker, Supabase, GCP, and automated CI/CD pipelines."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/[0.01] relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-3 font-light">
              // Core Engineering Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8 text-foreground leading-[1.15]">
              Built for Durability, Precision & Scale.
            </h2>
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                I specialize in bridging high-level artificial intelligence models with reliable, low-latency backend architectures.
              </p>
              <p>
                From fine-tuning transformer models like DistilBERT to designing deterministic fallback loops for Groq and Llama 3.3, my focus is delivering clean code and resilient software.
              </p>
            </div>

            {/* Quick Metrics grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5 font-mono">
              <div>
                <div className="text-2xl font-light text-foreground">3+</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider">AI Apps Shipped</div>
              </div>
              <div>
                <div className="text-2xl font-light text-primary">70%</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider">Match Quality Lift</div>
              </div>
              <div>
                <div className="text-2xl font-light text-accent">0.0</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider">Temp Guardrails</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card flex gap-5 hover:border-primary/30 transition-all duration-300 rounded-xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1.5 text-foreground tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

