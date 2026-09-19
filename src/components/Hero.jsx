import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';

const roles = [
  "AI Systems Engineer",
  "Multi-Agent Architect",
  "Resilient Backend Engineer",
  "Distributed API Developer"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 }
  }
};

const nodes = [
  { id: 'query', x: 10, y: 34, w: 100, h: 52, label: 'USER QUERY', sub: 'natural language' },
  { id: 'docs', x: 10, y: 144, w: 100, h: 52, label: 'DOCUMENT SET', sub: 'statutes / listings' },
  { id: 'embed', x: 160, y: 34, w: 80, h: 52, label: 'EMBED', sub: 'transformer' },
  { id: 'chroma', x: 160, y: 144, w: 80, h: 52, label: 'CHROMADB', sub: 'vector index' },
  { id: 'rag', x: 300, y: 86, w: 80, h: 58, label: 'RAG', sub: 'Llama 3.3 / Groq', accent: true },
  { id: 'guard', x: 440, y: 88, w: 60, h: 54, label: 'GUARD', sub: 'temp 0.0' },
  { id: 'out', x: 60, y: 254, w: 400, h: 52, label: 'CITED RESPONSE', sub: 'grounded in retrieved source, statute-referenced' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="section-container !py-0">
        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* Text block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="mb-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border-strong text-xs font-mono uppercase tracking-wide text-muted">
                <span className="w-[7px] h-[7px] rounded-full bg-signal animate-pulse" />
                Available for Fall 2026 engineering roles
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.3rem] sm:text-6xl lg:text-[4.1rem] leading-[1.03] mb-5 text-foreground"
            >
              Rayan Erold<br />Tsapi Meguie
            </motion.h1>

            <motion.div variants={itemVariants} className="h-9 mb-6 flex items-center gap-3 font-mono">
              <span className="text-xs text-accent uppercase tracking-widest flex items-center gap-1.5 shrink-0">
                <Terminal size={14} /> Specialized as:
              </span>
              <div className="relative overflow-hidden h-7 min-w-[240px] inline-block text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 text-base text-foreground flex items-center"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted mb-9 leading-relaxed max-w-[46ch]"
            >
              I build the infrastructure underneath AI products: retrieval pipelines that don't hallucinate, multi-agent systems with deterministic fallbacks, and REST APIs engineered to hold up under real load.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={15} />
              </a>
              <a href="#playground" className="btn-secondary">
                <Sparkles size={15} className="text-accent" /> AI Sandbox
              </a>
              <a
                href="/Rayan_Erold_Resume_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={15} /> Résumé PDF
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-11 pt-7 border-t border-border flex flex-wrap gap-6 text-xs font-mono text-muted">
              <span className="flex items-center gap-2"><Cpu size={13} className="text-accent" /> Python &amp; FastAPI</span>
              <span className="flex items-center gap-2"><Layers size={13} className="text-accent" /> RAG &amp; ChromaDB</span>
              <span className="flex items-center gap-2"><Sparkles size={13} className="text-accent" /> Multi-Agent Pipelines</span>
            </motion.div>
          </motion.div>

          {/* RAG pipeline schematic */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <motion.div
              initial={{ opacity: 0, rotate: 4, scale: 0.85 }}
              animate={{ opacity: 1, rotate: -9, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-2 right-2 w-[104px] h-[104px] rounded-full border-[1.5px] border-dashed border-signal flex items-center justify-center text-center text-signal font-mono text-[0.58rem] tracking-wide leading-tight uppercase"
            >
              Deployed<br />to prod<br />— 2026 —
            </motion.div>

            <svg viewBox="0 0 520 340" role="img" aria-labelledby="schematicTitle" className="w-full h-auto">
              <title id="schematicTitle">Diagram of a retrieval-augmented generation pipeline: query in, embedding, vector search, guarded LLM, cited response out.</title>

              <motion.path
                d="M60,60 H160" stroke="var(--text-muted)" strokeWidth="1.4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.path
                d="M60,170 H160" stroke="var(--text-muted)" strokeWidth="1.4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.46 }}
              />
              <motion.path
                d="M240,60 L300,105" stroke="var(--text-muted)" strokeWidth="1.4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.52 }}
              />
              <motion.path
                d="M240,170 L300,125" stroke="var(--text-muted)" strokeWidth="1.4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.58 }}
              />
              <motion.path
                d="M380,115 H440" stroke="var(--accent)" strokeWidth="1.4" strokeDasharray="5 4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.64 }}
              />
              <motion.path
                d="M410,150 V210 H160" stroke="var(--text-muted)" strokeWidth="1.4" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
              />
              <motion.path
                d="M60,280 H460" stroke="var(--text-muted)" strokeWidth="1.4" strokeDasharray="2 5" fill="none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.76 }}
              />

              {nodes.map((n, i) => (
                <motion.g
                  key={n.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <rect
                    x={n.x} y={n.y} width={n.w} height={n.h}
                    fill="var(--card)"
                    stroke={n.accent ? "var(--accent)" : "var(--border-strong)"}
                    strokeWidth="1.2"
                  />
                  <text x={n.x + 12} y={n.y + 22} fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="var(--foreground)">
                    {n.label}
                  </text>
                  <text x={n.x + 12} y={n.y + 38} fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="var(--text-muted)">
                    {n.sub}
                  </text>
                </motion.g>
              ))}
            </svg>
            <figcaption className="mt-2.5 flex justify-between font-mono text-[0.72rem] text-muted tracking-wide">
              <span>FIG. 00 — RAG PIPELINE, AS SHIPPED</span>
              <span>REV 2026.09</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
