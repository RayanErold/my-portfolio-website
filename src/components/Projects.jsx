import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CreditCard, Shield, Shirt, Play, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: "Xsubscrips",
    description: "Subscription management platform with ML-powered churn prediction and real-time cross-platform synchronization.",
    icon: <CreditCard className="text-purple-400" />,
    tech: ["React Native", "Supabase", "Stripe", "Resend", "ML"],
    metrics: ["-15% Churn Reduction", "Real-time Sync"],
    github: "https://github.com/RayanErold/Xsubscrips",
    live: "https://xsubscrips.com/",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "DateSpark",
    description: "AI-powered date recommendation platform with location intelligence and subscription systems.",
    icon: <Sparkles className="text-yellow-400" />,
    tech: ["Node.js", "Supabase", "LLM APIs", "Stripe", "Google Maps"],
    metrics: ["AI-Powered Recommendations", "Real-time Locations"],
    github: "https://github.com/RayanErold/DateSpark",
    live: "https://datespark.live/",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Consumer Rights AI Agent",
    description: "Grounded Retrieval-Augmented Generation assistant utilizing Llama 3.3 and ChromaDB to synthesize mathematically cited legal guardrails for consumer disputes.",
    icon: <Shield className="text-emerald-400" />,
    tech: ["Python", "ChromaDB", "Llama 3.3", "Groq", "Gradio"],
    metrics: ["Zero-Hallucination Guardrails", "Cited Statutory Proofs"],
    github: "https://github.com/RayanErold/ai201-project1-unofficial-guide-starter",
    live: "https://f9e63348527abdab5f.gradio.live",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "FitFindr",
    description: "Full-stack AI styling assistant that turns natural-language clothing queries into matching listings, outfit suggestions, and social media captions.",
    icon: <Shirt className="text-pink-400" />,
    tech: ["Python", "Gradio", "Groq API", "pytest"],
    metrics: ["Deterministic Search", "Modular Python Backend"],
    github: "https://github.com/RayanErold/ai201-project2-fitfindr-starter",
    live: "https://www.loom.com/share/8651e2bcfb424c2caed7da6255d38e96",
    color: "from-pink-500/20 to-purple-500/20",
    bullets: [
      "Built and shipped a full-stack web application end-to-end — interactive Gradio frontend, Python application/orchestration layer, and a JSON-backed data layer — that turns a natural-language clothing search into a matched listing, outfit suggestion, and social caption.",
      "Architected a modular backend separating concerns across search, LLM services, and planning loop modules using a single session-state object for testable data flow.",
      "Integrated Groq LLM API for outfit and caption generation with custom prompt design, environment-based key management, and graceful degradation.",
      "Designed a deterministic, offline search via token-overlap relevance scoring, covered by a robust pytest suite with automated test skipping."
    ]
  }
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (title) => {
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A selection of projects where I've combined backend engineering with artificial intelligence to solve real problems.
            </p>
          </div>
          <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-2 font-medium">
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => {
            const isVideo = project.live?.includes('loom.com') || project.live?.includes('youtube.com');
            const isExpanded = !!expandedProjects[project.title];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col h-full glass-card overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    {project.metrics.map(m => (
                      <div key={m} className="text-sm text-primary font-medium flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" /> {m}
                      </div>
                    ))}
                  </div>

                  {project.bullets && (
                    <div className="pt-4 border-t border-white/5">
                      <button
                        onClick={() => toggleExpand(project.title)}
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-foreground transition-colors cursor-pointer font-medium"
                      >
                        {isExpanded ? (
                          <>
                            Hide Details <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            Show Details <ChevronDown size={16} />
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
                            <ul className="mt-3 space-y-2 text-gray-400 text-xs md:text-sm leading-relaxed pl-1 list-none">
                              {project.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex gap-2 items-start">
                                  <span className="text-primary mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
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

                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-grow flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    {isVideo ? (
                      <>
                        Watch Demo <Play size={16} />
                      </>
                    ) : (
                      <>
                        View Project <ExternalLink size={16} />
                      </>
                    )}
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

