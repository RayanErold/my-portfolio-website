import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Sparkles, CreditCard, Shield, Shirt, Play, 
  ChevronDown, ChevronUp, MessageSquare, ChevronLeft, ChevronRight, X, Info, CheckCircle2 
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
    icon: <CreditCard size={18} className="text-purple-400" />,
    tech: ["React Native", "Supabase", "Stripe", "Resend", "ML"],
    metrics: ["-15% Churn Reduction", "Real-time Sync"],
    github: "https://github.com/RayanErold/Xsubscrips",
    live: "https://xsubscrips.com/",
    color: "from-purple-500/20 to-pink-500/20",
    bullets: [
      "Engineered automated churn prediction algorithms analyzing user engagement frequencies.",
      "Architected real-time multi-platform database synchronization via Supabase channels.",
      "Integrated Stripe webhook listeners for instant payment lifecycle notifications."
    ]
  },
  {
    title: "Consumer Rights AI Agent",
    category: "ai",
    description: "Grounded Retrieval-Augmented Generation assistant utilizing Llama 3.3 and ChromaDB to synthesize mathematically cited legal guardrails for consumer disputes.",
    icon: <Shield size={18} className="text-emerald-400" />,
    tech: ["Python", "ChromaDB", "Llama 3.3", "Groq", "Gradio"],
    metrics: ["Zero-Hallucination Guardrails", "Cited Statutory Proofs"],
    github: "https://github.com/RayanErold/ai201-project1-unofficial-guide-starter",
    live: "https://consumerright-ai.netlify.app/",
    demo: "https://www.loom.com/share/4c8cf7dc4e7a4d0785db866e4c43f0f4",
    color: "from-emerald-500/20 to-teal-500/20",
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
    title: "DateSpark",
    category: "fullstack",
    description: "AI-powered date recommendation platform with location intelligence and subscription systems.",
    icon: <Sparkles size={18} className="text-amber-400" />,
    tech: ["Node.js", "Supabase", "LLM APIs", "Stripe", "Google Maps"],
    metrics: ["AI-Powered Recommendations", "Real-time Locations"],
    github: "https://github.com/RayanErold/DateSpark",
    live: "https://datespark.live/",
    color: "from-amber-500/20 to-orange-500/20",
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
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const scrollRef = useRef(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
              // Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight mb-4 text-foreground">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-xl text-sm md:text-base font-light leading-relaxed">
              Software systems, multi-agent frameworks, and resilient production infrastructure engineered for durability and scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-md shadow-primary/20 font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Navigation Arrow Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Previous Projects"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Next Projects"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Horizontal Strip Container */}
        <motion.div
          ref={scrollRef}
          layout
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="w-[320px] sm:w-[360px] md:w-[390px] shrink-0 snap-start group relative flex flex-col justify-between glass-card p-6 border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl"
              >
                {/* Background Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />

                <div>
                  {/* Top Row Icon & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-medium text-foreground leading-snug tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-5 text-xs md:text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Performance Metrics */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5 mb-5">
                    {project.metrics.map(m => (
                      <div key={m} className="text-xs text-primary font-mono font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/5 mt-auto flex flex-col gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info size={14} className="text-accent" /> Architecture Details
                  </button>

                  <div className="flex gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-primary text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02] shadow-md shadow-primary/20"
                      >
                        Live App <ExternalLink size={13} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center justify-center gap-1.5 border border-white/10"
                      >
                        Demo Video <Play size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <Github size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Project Modal Popover */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-[#0b101d] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {activeModalProject.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-foreground">{activeModalProject.title}</h3>
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      // {activeModalProject.category} architecture
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Overview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {activeModalProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Key Technical Achievements</h4>
                  <ul className="space-y-2.5">
                    {activeModalProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap gap-3">
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary"
                  >
                    Launch Live Site <ExternalLink size={15} />
                  </a>
                )}
                {activeModalProject.demo && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary"
                  >
                    Watch Loom Demo <Play size={15} />
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Github size={16} /> Code Repository
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

