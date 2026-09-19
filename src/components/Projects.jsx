import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Sparkles, CreditCard, Shield, Shirt, Play,
  MessageSquare, X, Info, CheckCircle2
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & RAG Systems' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
  { id: 'ml', label: 'ML & Analytics' }
];

const projects = [
  {
    title: "Xsubscrips",
    category: "fullstack",
    description: "Subscription management platform with ML-powered churn prediction and real-time cross-platform synchronization.",
    icon: <CreditCard size={17} />,
    tech: ["React Native", "Supabase", "Stripe", "Resend", "ML"],
    metrics: ["−15% churn reduction", "Real-time sync"],
    github: "https://github.com/RayanErold/Xsubscrips",
    live: "https://xsubscrips.com/",
    bullets: [
      "Engineered automated churn prediction algorithms analyzing user engagement frequencies.",
      "Architected real-time multi-platform database synchronization via Supabase channels.",
      "Integrated Stripe webhook listeners for instant payment lifecycle notifications."
    ]
  },
  {
    title: "Consumer Rights AI Agent",
    category: "ai",
    description: "Grounded Retrieval-Augmented Generation assistant utilizing Llama 3.3 and ChromaDB to synthesize statutorily-cited guidance for consumer disputes.",
    icon: <Shield size={17} />,
    tech: ["Python", "ChromaDB", "Llama 3.3", "Groq", "Gradio"],
    metrics: ["Zero-hallucination guardrails", "Cited statutory proofs"],
    github: "https://github.com/RayanErold/ai201-project1-unofficial-guide-starter",
    live: "https://consumerright-ai.netlify.app/",
    demo: "https://www.loom.com/share/4c8cf7dc4e7a4d0785db866e4c43f0f4",
    bullets: [
      "Engineered a grounded RAG architecture using ChromaDB vector storage and sentence-transformers embeddings for strict legal accuracy.",
      "Implemented zero-temperature (0.0) inference guardrails with explicit refusal triggers on out-of-scope financial queries.",
      "Constructed mathematical similarity scoring models to match consumer complaints with exact FCRA and FDCPA statutory sections."
    ]
  },
  {
    title: "FitFindr",
    category: "ai",
    description: "Full-stack AI styling assistant that turns natural-language clothing queries into matching listings, outfit suggestions, and social media captions.",
    icon: <Shirt size={17} />,
    tech: ["Python", "Gradio", "Groq API", "pytest"],
    metrics: ["Deterministic search", "Modular Python backend"],
    github: "https://github.com/RayanErold/ai201-project2-fitfindr-starter",
    demo: "https://www.loom.com/share/8651e2bcfb424c2caed7da6255d38e96",
    bullets: [
      "Built and shipped a full-stack web application end-to-end — interactive Gradio frontend, Python orchestration layer, and a JSON-backed data layer — turning a natural-language clothing search into a matched listing, outfit suggestion, and social caption.",
      "Architected a modular backend separating concerns across search, LLM services, and planning loop modules using a single session-state object for testable data flow.",
      "Integrated Groq LLM API for outfit and caption generation with custom prompt design, environment-based key management, and graceful degradation.",
      "Designed a deterministic, offline search via token-overlap relevance scoring, covered by a robust pytest suite with automated test skipping."
    ]
  },
  {
    title: "DateSpark",
    category: "fullstack",
    description: "AI-powered date recommendation platform with location intelligence and subscription systems.",
    icon: <Sparkles size={17} />,
    tech: ["Node.js", "Supabase", "LLM APIs", "Stripe", "Google Maps"],
    metrics: ["AI-powered recommendations", "Real-time locations"],
    github: "https://github.com/RayanErold/DateSpark",
    live: "https://datespark.live/",
    bullets: [
      "Synthesized personalized date itineraries based on vibe, budget, and location preferences.",
      "Integrated Google Maps Places API with Supabase spatial queries for real-time venue discovery.",
      "Shipped subscription tier access with Stripe Billing for premium AI itinerary generation."
    ]
  },
  {
    title: "TakeMeter",
    category: "ml",
    description: "Reddit take classifier that categorizes short posts and comments into four distinct styles (analysis, hot take, reaction, humor) using fine-tuned DistilBERT.",
    icon: <MessageSquare size={17} />,
    tech: ["Python", "DistilBERT", "Hugging Face", "Llama 3.3", "Streamlit"],
    metrics: ["Fine-tuned 4-way classifier", "Zero-shot LLM comparison"],
    github: "https://github.com/RayanErold/ai201_project3_takemeter_starter_clean",
    demo: "https://www.loom.com/share/4693f68c2d8741a0a65c11f4a8b35578",
    bullets: [
      "Engineered an HTML scraping pipeline to extract post/comment text from five subreddits (r/nba, r/soccer, etc.) via old.reddit.com to avoid API blocking.",
      "Fine-tuned a 66M-parameter DistilBERT classifier using Hugging Face Transformers and compared results against a Llama-3.3-70B baseline.",
      "Analyzed model limitations under severe class imbalance, identifying how macro-F1 (0.34) exposed minority-class collapse that accuracy (0.68) masked.",
      "Built a Streamlit web interface and automated Python evaluation reports to systematically diagnose and map model decision boundaries."
    ]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container border-t border-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <span className="eyebrow mb-3"><span className="text-muted">02</span> Portfolio showcase</span>
          <h2 className="font-display text-3xl sm:text-5xl mt-2 text-foreground">Featured work</h2>
          <p className="text-muted max-w-md text-sm md:text-base mt-3 leading-relaxed">
            Five shipped systems — software, multi-agent frameworks, and infrastructure engineered for durability and scale.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 font-mono text-[0.74rem] uppercase tracking-wide border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-foreground text-background border-foreground'
                  : 'text-muted border-border-strong hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 gap-px bg-border border border-border">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-background hover:bg-background-raised transition-colors duration-300 p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between text-accent">
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                {project.icon}
              </div>
              <h3 className="font-display text-2xl mt-2.5 text-foreground">{project.title}</h3>
              <p className="text-muted text-sm mt-2.5 leading-relaxed max-w-[46ch]">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map(t => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4">
                {project.metrics.map(m => (
                  <span key={m} className="font-mono text-[0.72rem] px-2 py-1 bg-accent-soft text-foreground">{m}</span>
                ))}
              </div>

              <div className="mt-auto pt-5 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="font-mono text-[0.78rem] text-foreground border-b border-muted hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Info size={14} /> Architecture details
                </button>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.78rem] text-foreground border-b border-muted hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-1.5">
                    Live app →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.78rem] text-foreground border-b border-muted hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-1.5">
                    Demo →
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" title="View source code">
                    <Github size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Architecture details modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="plate max-w-2xl w-full p-7 sm:p-9 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6 pb-5 border-b border-border">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">// {activeModalProject.category} architecture</span>
                  <h3 className="font-display text-2xl sm:text-3xl mt-1.5 text-foreground">{activeModalProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 border border-border hover:border-border-strong text-muted hover:text-foreground transition-colors cursor-pointer shrink-0"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[0.72rem] text-muted uppercase tracking-widest mb-2">Overview</h4>
                  <p className="text-foreground text-sm leading-relaxed">{activeModalProject.description}</p>
                </div>

                <div>
                  <h4 className="font-mono text-[0.72rem] text-muted uppercase tracking-widest mb-3">Key technical achievements</h4>
                  <ul className="space-y-2.5">
                    {activeModalProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-sm text-foreground leading-relaxed">
                        <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[0.72rem] text-muted uppercase tracking-widest mb-2">Tech stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tech.map(t => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex flex-wrap gap-3">
                {activeModalProject.live && (
                  <a href={activeModalProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary">
                    Launch live site <ExternalLink size={15} />
                  </a>
                )}
                {activeModalProject.demo && (
                  <a href={activeModalProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary">
                    Watch Loom demo <Play size={15} />
                  </a>
                )}
                {activeModalProject.github && (
                  <a href={activeModalProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github size={16} /> Code repository
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
