import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CreditCard, Shield, Shirt, Play, ChevronDown, ChevronUp, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Xsubscrips",
    description: "Subscription management platform with ML-powered churn prediction and real-time cross-platform synchronization.",
    icon: <CreditCard size={18} className="text-purple-400" />,
    tech: ["React Native", "Supabase", "Stripe", "Resend", "ML"],
    metrics: ["-15% Churn Reduction", "Real-time Sync"],
    github: "https://github.com/RayanErold/Xsubscrips",
    live: "https://xsubscrips.com/",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "DateSpark",
    description: "AI-powered date recommendation platform with location intelligence and subscription systems.",
    icon: <Sparkles size={18} className="text-yellow-400" />,
    tech: ["Node.js", "Supabase", "LLM APIs", "Stripe", "Google Maps"],
    metrics: ["AI-Powered Recommendations", "Real-time Locations"],
    github: "https://github.com/RayanErold/DateSpark",
    live: "https://datespark.live/",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Consumer Rights AI Agent",
    description: "Grounded Retrieval-Augmented Generation assistant utilizing Llama 3.3 and ChromaDB to synthesize mathematically cited legal guardrails for consumer disputes.",
    icon: <Shield size={18} className="text-emerald-400" />,
    tech: ["Python", "ChromaDB", "Llama 3.3", "Groq", "Gradio"],
    metrics: ["Zero-Hallucination Guardrails", "Cited Statutory Proofs"],
    github: "https://github.com/RayanErold/ai201-project1-unofficial-guide-starter",
    live: "https://consumerright-ai.netlify.app/",
    demo: "https://www.loom.com/share/4c8cf7dc4e7a4d0785db866e4c43f0f4",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "FitFindr",
    description: "Full-stack AI styling assistant that turns natural-language clothing queries into matching listings, outfit suggestions, and social media captions.",
    icon: <Shirt size={18} className="text-pink-400" />,
    tech: ["Python", "Gradio", "Groq API", "pytest"],
    metrics: ["Deterministic Search", "Modular Python Backend"],
    github: "https://github.com/RayanErold/ai201-project2-fitfindr-starter",
    demo: "https://www.loom.com/share/8651e2bcfb424c2caed7da6255d38e96",
    color: "from-pink-500/20 to-purple-500/20",
    bullets: [
      "Built and shipped a full-stack web application end-to-end — interactive Gradio frontend, Python application/orchestration layer, and a JSON-backed data layer — that turns a natural-language clothing search into a matched listing, outfit suggestion, and social caption.",
      "Architected a modular backend separating concerns across search, LLM services, and planning loop modules using a single session-state object for testable data flow.",
      "Integrated Groq LLM API for outfit and caption generation with custom prompt design, environment-based key management, and graceful degradation.",
      "Designed a deterministic, offline search via token-overlap relevance scoring, covered by a robust pytest suite with automated test skipping."
    ]
  },
  {
    title: "TakeMeter",
    description: "Reddit take classifier that categorizes short posts and comments into four distinct styles (analysis, hot take, reaction, humor) using fine-tuned DistilBERT.",
    icon: <MessageSquare size={18} className="text-cyan-400" />,
    tech: ["Python", "DistilBERT", "Hugging Face", "Llama 3.3", "Streamlit"],
    metrics: ["Fine-Tuned 4-Way Classifier", "Zero-Shot LLM Comparison"],
    github: "https://github.com/RayanErold/ai201_project3_takemeter_starter_clean",
    demo: "https://www.loom.com/share/4693f68c2d8741a0a65c11f4a8b35578",
    color: "from-blue-500/20 to-indigo-500/20",
    bullets: [
      "Engineered an HTML scraping pipeline to extract post/comment text from five subreddits (r/nba, r/soccer, etc.) via old.reddit.com to avoid API blocking.",
      "Fine-tuned a 66M-parameter DistilBERT classifier using Hugging Face Transformers and compared results against a Llama-3.3-70B baseline.",
      "Analyzed model limitations under severe class imbalance, identifying how macro-F1 (0.34) exposed minority-class collapse that accuracy (0.68) masked.",
      "Built a Streamlit web interface and automated Python evaluation reports to systematically diagnose and map model decision boundaries."
    ]
  }
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});
  const scrollRef = useRef(null);

  const toggleExpand = (title) => {
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
              Interactive Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-xl text-sm md:text-base font-light">
              A selection of software systems and AI integrations engineered for performance, durability, and scale.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RayanErold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1.5 font-medium text-xs md:text-sm mr-2"
            >
              View all on GitHub <ExternalLink size={15} />
            </a>

            {/* Slider Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-all cursor-pointer shadow-md"
                aria-label="Previous Projects"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-all cursor-pointer shadow-md"
                aria-label="Next Projects"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Horizontal Strip Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, i) => {
            const isExpanded = !!expandedProjects[project.title];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-[320px] sm:w-[360px] md:w-[400px] shrink-0 snap-start group relative flex flex-col justify-between glass-card p-6 border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div>
                  {/* Top Row Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground leading-snug tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed font-light opacity-90">
                    {project.description}
                  </p>

                  {/* Tech Tags & Metrics */}
                  <div className="space-y-3 mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5 space-y-1">
                      {project.metrics.map(m => (
                        <div key={m} className="text-xs text-primary font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {m}
                        </div>
                      ))}
                    </div>

                    {/* Expandable Bullets if available */}
                    {project.bullets && (
                      <div className="pt-3 border-t border-white/5">
                        <button
                          onClick={() => toggleExpand(project.title)}
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-foreground transition-colors cursor-pointer font-medium"
                        >
                          {isExpanded ? (
                            <>
                              Hide Details <ChevronUp size={14} />
                            </>
                          ) : (
                            <>
                              Show Details <ChevronDown size={14} />
                            </>
                          )}
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-2 space-y-1.5 text-gray-300 text-[11px] leading-relaxed pl-1 list-none text-left font-light">
                                {project.bullets.map((bullet, idx) => (
                                  <li key={idx} className="flex gap-1.5 items-start">
                                    <span className="text-primary mt-1.5 shrink-0 block w-1 h-1 rounded-full" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary text-black font-semibold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-primary/10"
                    >
                      Live Site <ExternalLink size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 min-w-[100px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg ${
                        project.live ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10' : 'bg-white text-black font-semibold'
                      } text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                    >
                      Watch Demo <Play size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${(project.live || project.demo) ? 'w-10' : 'flex-1 py-2'} flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-colors shrink-0`}
                      title="View Source Code"
                    >
                      <Github size={16} />
                      {!(project.live || project.demo) && <span className="ml-1.5 text-xs font-semibold">View Code</span>}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
