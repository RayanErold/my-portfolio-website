import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, ChevronDown, ChevronUp, Award, Calendar, X, Copy, Check, BookOpen } from 'lucide-react';

const papers = [
  {
    id: 1,
    title: "Adversarial Robustness in Large Language Models: A Security Analysis of Prompt Injection Vectors",
    authors: "Rayan Meguie, Dr. A. Johnson",
    venue: "IEEE International Conference on Trust, Security and Privacy in Computing (TrustCom)",
    year: "2026",
    abstract: "This paper analyzes the emerging threat landscape of prompt injection vulnerabilities in large language models (LLMs). We examine direct and indirect prompt injection methodologies, demonstrating security vulnerabilities in modern agentic orchestration frameworks. We propose a defense framework utilizing semantic sanitization and dynamic guardrail validation to identify and neutralize malicious payload structures, improving adversarial robustness by 35% without degrading baseline reasoning performance.",
    keywords: ["AI Security", "LLMs", "Adversarial Machine Learning", "API Defense"],
    pdfLink: "#",
    codeLink: "https://github.com/RayanErold/LLM-Guardrails",
    featured: true,
    details: {
      introduction: "Large Language Models (LLMs) are increasingly integrated into multi-agent systems, carrying out active databases updates and executing operating system-level APIs. However, because they mix instruction sequences and data payloads in a single text-based input stream, they are heavily susceptible to prompt injections—attacks that manipulate the system instructions of the core model through data inputs.",
      methodology: "We evaluated direct and indirect prompt injection vectors across three state-of-the-art closed and open LLMs. Using a testing suite of 1,200 adversarial prompts, we assessed defense rates using three configurations: 1) raw inputs, 2) XML-enclosed isolation tags, and 3) our proposed dual-layer validation middleware utilizing semantic classifiers to detect adversarial prompts prior to model routing.",
      findings: "Our proposed semantic classification middleware achieved a 94.2% detection accuracy on indirect prompt injection attempts. Enforcing XML isolation boundaries mitigated 67% of direct prompt overrides. Cumulatively, our defense model improved adversarial robustness by 35% without adding more than 18ms of routing overhead, maintaining reasoning speeds.",
      citation: "Meguie, R., & Johnson, A. (2026). Adversarial Robustness in Large Language Models: A Security Analysis of Prompt Injection Vectors. In Proceedings of the IEEE International Conference on Trust, Security and Privacy in Computing (TrustCom 2026)."
    }
  },
  {
    id: 2,
    title: "Distributed Rate-Limiting Algorithms: A Comparative Evaluation of Token Bucket vs. Leaky Bucket in High-Throughput Microservices",
    authors: "Rayan Meguie",
    venue: "Journal of Systems and Software",
    year: "2025",
    abstract: "High-throughput systems require reliable rate-limiting mechanisms to prevent denial-of-service vectors and server exhaustion. This paper evaluates the latency overhead, token distribution fairness, and memory footprint of token bucket vs. leaky bucket algorithms under severe network congestion. Our benchmarks, utilizing a Redis-backed distributed cluster, show that token bucket algorithms offer 12% lower average latency, while leaky bucket exhibits superior queue smoothing.",
    keywords: ["Distributed Systems", "Network Security", "Redis", "Performance Benchmarking"],
    pdfLink: "#",
    codeLink: "#",
    featured: false,
    details: {
      introduction: "Rate limiters protect servers from API abuse, scraping, and brute force vectors. In distributed environments, scaling rate limiters requires external caches (like Redis) to coordinate requests counts across multiple instances safely and atomically.",
      methodology: "We simulated heavy network congestion (100,000 requests/sec distributed across a 5-node cluster) using Go wrk to evaluate memory footprint, request queue fair-distribution, and CPU load on Redis nodes using token bucket versus leaky bucket structures.",
      findings: "Under stress, the Token Bucket algorithm exhibited a 12% lower average latency profile under peak loads. In contrast, the Leaky Bucket algorithm successfully maintained an absolutely uniform and smoothed output flow profile but added minor latency overhead to late-arriving requests due to strictly synchronous queues.",
      citation: "Meguie, R. (2025). Distributed Rate-Limiting Algorithms: A Comparative Evaluation of Token Bucket vs. Leaky Bucket in High-Throughput Microservices. Journal of Systems and Software, 18(2), 145-156."
    }
  }
];

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

      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
            <Award size={18} />
            <span>Academic Contributions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Papers</h2>
          <p className="text-gray-400 text-lg">
            Exploring the theoretical foundations of computer science. My research focuses on the intersection of artificial intelligence security, cryptographic protocols, and distributed systems.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {papers.map((paper) => (
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

                {/* Keywords */}
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

                {/* Actions */}
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
          ))}
        </div>

        {/* --- ACADEMIC RESEARCH DETAILS MODAL OVERLAY --- */}
        <AnimatePresence>
          {selectedPaper && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPaper(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass border border-white/10 rounded-2xl flex flex-col z-10 shadow-2xl"
              >
                {/* Header */}
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

                {/* Content */}
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
                    {/* Abstract Section */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Abstract</h3>
                      <p className="p-5 rounded-xl bg-white/5 border border-white/5 italic text-gray-300">
                        {selectedPaper.abstract}
                      </p>
                    </div>

                    {/* Introduction Section */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">1. Introduction</h3>
                      <p>{selectedPaper.details.introduction}</p>
                    </div>

                    {/* Methodology Section */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">2. Methodology</h3>
                      <p>{selectedPaper.details.methodology}</p>
                    </div>

                    {/* Findings/Results Section */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">3. Key Benchmarks & Findings</h3>
                      <p>{selectedPaper.details.findings}</p>
                    </div>

                    {/* Citation Section */}
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

                  {/* PDF and Code CTAs */}
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
