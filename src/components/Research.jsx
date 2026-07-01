import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Calendar, X, Copy, Check, BookOpen, Award } from 'lucide-react';

const papers = [];

export default function Research() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [copied, setCopied] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPaper) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPaper]);

  const copyCitation = (citation) => {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="research" className="py-24 bg-white/[0.02] relative">
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[140px] -z-10 animate-pulse" />

      <div className="section-container" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-primary font-semibold mb-2 font-sans text-sm tracking-wide uppercase">
            <Award size={18} />
            <span>Academic Contributions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Research & Papers</h2>
          <p className="text-gray-300 text-xl leading-relaxed italic opacity-90 max-w-2xl">
            "Exploring the theoretical foundations of computer science, specifically focusing on artificial intelligence safety constraints, retrieval metrics, and resource-bounded agent scheduling."
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {papers.length > 0 ? (
            papers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-card relative overflow-hidden transition-all duration-300 ${
                  paper.featured ? 'border-primary/20 bg-primary/[0.01]' : ''
                }`}
              >
                {paper.featured && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary/10 border-l border-b border-primary/20 text-xs font-semibold text-primary rounded-bl-xl flex items-center gap-1.5">
                    <Award size={12} />
                    <span>Featured Publication</span>
                  </div>
                )}

                <div className="p-2 md:p-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1 bg-white/5 border border-white/5 px-2 py-0.5 rounded text-primary font-semibold">
                      {paper.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> Published
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 pr-24 leading-snug">
                    {paper.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-300 mb-2">
                    Authors: <span className="text-white">{paper.authors}</span>
                  </p>

                  <p className="text-xs text-gray-400 mb-6 italic">
                    Presented at: {paper.venue}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.keywords.map(kw => (
                      <span key={kw} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedPaper(paper)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <BookOpen size={16} /> Read Paper Details
                    </button>
                    {paper.codeLink !== "#" && (
                      <a
                        href={paper.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-sm font-medium"
                      >
                        <Github size={16} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-left max-w-2xl mx-auto p-8 bg-secondary/20 border border-border/60 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-6 border-b border-border/30 pb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-sans animate-pulse">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">Current Research Focus</h3>
                  <p className="text-[10px] text-primary tracking-widest font-sans font-bold uppercase mt-0.5">Status: Manuscripts in Preparation</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <h4 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    I. AI Safety Middleware & Statutory Refusal Guardrails
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-85">
                    Investigating deterministic query partitioning and zero-hallucination vector retrieval constraints in consumer-protection and statutory legal domain interfaces.
                  </p>
                </div>

                <div className="pt-5 border-t border-border/30 group">
                  <h4 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    II. Rate-Limiting and Queue Scheduling for Multi-Agent Workflows
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-85">
                    Modeling latency profiles and cost optimization pathways in multi-agent routing engines running over constrained downstream LLM contexts.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- ACADEMIC RESEARCH DETAILS MODAL OVERLAY --- */}
        <AnimatePresence>
          {selectedPaper && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPaper(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass border border-white/10 rounded-2xl flex flex-col z-10 shadow-2xl"
              >
                <div className="sticky top-0 bg-background/50 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                      Academic Paper
                    </span>
                    <span className="text-xs text-gray-400">
                      Published in {selectedPaper.year}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPaper(null)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-6 md:p-12">
                  <header className="mb-10 pb-8 border-b border-white/5 text-left">
                    {selectedPaper.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-xs font-semibold text-primary rounded-full mb-4">
                        <Award size={12} /> Featured Publication
                      </span>
                    )}
                    <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                      {selectedPaper.title}
                    </h1>
                    <p className="text-base font-semibold text-gray-200 mb-2">
                      Authors: <span className="text-white">{selectedPaper.authors}</span>
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      Venue: {selectedPaper.venue}
                    </p>
                  </header>

                  <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed font-sans text-left">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Abstract</h3>
                      <p className="p-5 rounded-xl bg-white/5 border border-white/5 italic text-gray-300">
                        {selectedPaper.abstract}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">1. Introduction</h3>
                      <p>{selectedPaper.details.introduction}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">2. Methodology</h3>
                      <p>{selectedPaper.details.methodology}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">3. Key Benchmarks & Findings</h3>
                      <p>{selectedPaper.details.findings}</p>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">How to Cite</h3>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs">
                        <p className="flex-grow text-gray-400 select-all leading-normal">
                          {selectedPaper.details.citation}
                        </p>
                        <button
                          onClick={() => copyCitation(selectedPaper.details.citation)}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all shrink-0"
                          title="Copy Citation"
                        >
                          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                    <a
                      href={selectedPaper.pdfLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <FileText size={16} /> Download Full PDF
                    </a>
                    {selectedPaper.codeLink !== "#" && (
                      <a
                        href={selectedPaper.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-sm font-semibold"
                      >
                        <Github size={16} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
