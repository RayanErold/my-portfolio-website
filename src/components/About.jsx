import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Backend Specialist",
    description: "Architecting high-throughput REST APIs, database schemas, and microservices for production scalability."
  },
  {
    title: "AI & RAG Engineering",
    description: "Building zero-hallucination legal and analytical search, ChromaDB vector indexing, and multi-agent loops."
  },
  {
    title: "Distributed Infrastructure",
    description: "Deploying production applications with Docker, Supabase, GCP, and automated CI/CD pipelines."
  }
];

const stats = [
  { num: "3+", label: "AI apps shipped" },
  { num: "70%", label: "Match quality lift" },
  { num: "0.0", label: "Temperature guardrail" },
];

export default function About() {
  return (
    <section id="about" className="section-container border-t border-border">
      <div>
        <span className="eyebrow mb-3"><span className="text-muted">01</span> Engineering philosophy</span>
        <h2 className="font-display text-3xl md:text-5xl mb-2 text-foreground max-w-[18ch]">
          Built for durability, precision, and scale.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-10">
        <p className="text-muted text-base md:text-lg leading-relaxed">
          I specialize in bridging high-level AI models with reliable, low-latency backend architecture — the unglamorous layer that decides whether a demo becomes a product.
        </p>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          From fine-tuning transformer models like DistilBERT to designing deterministic fallback loops for Groq and Llama 3.3, the goal is always the same: clean code and software that keeps working under conditions the demo never saw.
        </p>
      </div>

      <div className="flex flex-wrap gap-8 md:gap-11 mt-10">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-border-strong pl-3.5">
            <div className="font-display text-3xl font-semibold tabular-nums text-foreground">{s.num}</div>
            <div className="font-mono text-[0.72rem] uppercase tracking-wide text-muted mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border border border-border mt-14 md:mt-20">
        {pillars.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.1 }}
            className="bg-background p-6"
          >
            <div className="font-mono text-xs text-accent">0{i + 1}</div>
            <h3 className="font-display text-xl mt-3.5 text-foreground">{item.title}</h3>
            <p className="text-muted text-sm mt-2.5 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
