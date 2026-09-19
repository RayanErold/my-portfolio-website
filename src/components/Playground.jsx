import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, RefreshCw, Terminal, Shirt,
  ShieldCheck, AlertCircle, ChevronRight, HelpCircle
} from 'lucide-react';

const agentSimulations = {
  fitfindr: {
    title: "FitFindr (AI Styling Agent)",
    tagline: "Parses queries deterministically, queries local inventory, and generates styling + captions via LLM.",
    queries: [
      {
        id: "ff-1",
        label: "Vintage Graphic Tee under $30",
        query: "vintage graphic tee under $30, size M",
        logs: [
          { time: "0.0s", text: "⚡ Initiating FitFindr Agent loop with query: 'vintage graphic tee under $30, size M'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Parsing parameters using deterministic regex (_parse_query)...", type: "info" },
          { time: "0.6s", text: "   » Description extracted: 'vintage graphic tee'", type: "success" },
          { time: "0.8s", text: "   » Size filter matching: 'M'", type: "success" },
          { time: "1.0s", text: "   » Budget ceiling detected: $30.00", type: "success" },
          { time: "1.3s", text: "📦 Step 2: Querying local JSON product inventory...", type: "info" },
          { time: "1.6s", text: "   » Found 8 listings containing keyword overlaps.", type: "success" },
          { time: "1.9s", text: "   » Calculating overlap scores: distinct * 1000 + occurrences...", type: "info" },
          { time: "2.1s", text: "   » Top candidate selected: '90s Nirvana In Utero Tee' ($25.00, Size M)", type: "success" },
          { time: "2.5s", text: "🤖 Step 3: Triggering Groq API styling loop (llama-3.3-70b-versatile, temp=0.7)...", type: "info" },
          { time: "2.8s", text: "   » Injecting active wardrobe items: ['Distressed Light Wash Jeans', 'Leather Jacket', 'Converse']", type: "success" },
          { time: "3.2s", text: "   » Styling plan generated successfully.", type: "success" },
          { time: "3.6s", text: "✍️ Step 4: Generating social media copy (llama-3.3-70b-versatile, temp=1.0)...", type: "info" },
          { time: "4.0s", text: "   » OOTD caption generated.", type: "success" },
          { time: "4.3s", text: "🎉 Agent pipeline completed successfully.", type: "success" }
        ],
        result: {
          title: "90s Nirvana In Utero Tee",
          price: "$25.00",
          wardrobe: "Leather Jacket, Jeans, Converse",
          outfit: "Rock a classic grunge aesthetic by layering this vintage Nirvana tee under your black leather jacket. Pair it with the distressed light-wash jeans and Converse Chucks for a laid-back, concert-ready vibe.",
          caption: "Vintage Nirvana tee + distressed denim + Chucks. Classic grunge, zero effort. 🎸 Thrifted for only $25! #OOTD #GrungeAesthetic #Thrifted",
          status: "success"
        }
      },
      {
        id: "ff-2",
        label: "Leather Boots size 9, max $80",
        query: "leather boots size 9, max budget $80",
        logs: [
          { time: "0.0s", text: "⚡ Initiating FitFindr Agent loop with query: 'leather boots size 9, max budget $80'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Parsing parameters using deterministic regex...", type: "info" },
          { time: "0.6s", text: "   » Description extracted: 'leather boots'", type: "success" },
          { time: "0.8s", text: "   » Size filter matching: '9'", type: "success" },
          { time: "1.0s", text: "   » Budget ceiling detected: $80.00", type: "success" },
          { time: "1.3s", text: "📦 Step 2: Querying local JSON product inventory...", type: "info" },
          { time: "1.6s", text: "   » Match Selected: 'Vintage Chelsea Boots' ($68.00, Size 9)", type: "success" },
          { time: "2.0s", text: "🤖 Step 3: Triggering Groq API styling loop...", type: "info" },
          { time: "2.4s", text: "   » Styling plan generated successfully.", type: "success" },
          { time: "2.8s", text: "✍️ Step 4: Generating social media copy...", type: "info" },
          { time: "3.2s", text: "🎉 Agent pipeline completed successfully.", type: "success" }
        ],
        result: {
          title: "Vintage Chelsea Boots",
          price: "$68.00",
          wardrobe: "Dark Denim, Trench Coat",
          outfit: "Dress up your Chelsea boots by styling them with raw dark denim and a structured camel trench coat. The clean lines of the boots anchor the coat's silhouette, giving you an effortless smart-casual look.",
          caption: "Fall uniform locked in. 🍂 Chelsea boots + trench coat is a cheat code. Got these boots for under $70! #ThriftFinds #ChelseaBoots #OOTD",
          status: "success"
        }
      },
      {
        id: "ff-3",
        label: "Designer Ballgown under $5",
        query: "designer ballgown size XXS under $5",
        logs: [
          { time: "0.0s", text: "⚡ Initiating FitFindr Agent loop with query: 'designer ballgown size XXS under $5'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Parsing parameters using deterministic regex...", type: "info" },
          { time: "0.6s", text: "   » Description extracted: 'designer ballgown'", type: "success" },
          { time: "0.8s", text: "   » Size filter matching: 'XXS'", type: "success" },
          { time: "1.0s", text: "   » Budget ceiling detected: $5.00", type: "success" },
          { time: "1.3s", text: "📦 Step 2: Querying local JSON product inventory...", type: "info" },
          { time: "1.6s", text: "   ❌ No matches found in database satisfying description, size, and budget.", type: "error" },
          { time: "1.9s", text: "⚠️ Early exit triggered. Refusing to call Groq LLM downstream modules to save token costs.", type: "error" },
          { time: "2.2s", text: "🛑 Session terminated: No search results.", type: "error" }
        ],
        result: {
          title: "No Match Found",
          error: "I couldn't find any listings matching 'designer ballgown' in size XXS under $5.00. Try removing the size filter or raising your budget.",
          status: "fail"
        }
      }
    ]
  },
  rag: {
    title: "Consumer Rights AI (RAG Agent)",
    tagline: "Semantic retrieval using ChromaDB vector database and deterministic temperature=0.0 LLM validation.",
    queries: [
      {
        id: "rag-1",
        label: "Credit Bureau Dispute Timeline",
        query: "How long does a credit bureau have to investigate a dispute?",
        logs: [
          { time: "0.0s", text: "⚖️ Initiating Consumer Rights Agent loop with query: 'How long does a credit bureau have to investigate a dispute?'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Slicing query and computing query vector...", type: "info" },
          { time: "0.7s", text: "   » Embedding generated locally using sentence-transformers (384-dimensions)", type: "success" },
          { time: "1.1s", text: "📁 Step 2: Querying local ChromaDB vector store...", type: "info" },
          { time: "1.4s", text: "   » Calculated cosine distances across indexed federal statutory frameworks...", type: "info" },
          { time: "1.7s", text: "   » Retrieved 4 high-signal document chunks from Fair Credit Reporting Act (FCRA).", type: "success" },
          { time: "1.9s", text: "     [Chunk 1] 15 U.S.C. § 1681i(a)(1) - Dispute resolution timeline (30 days) [Score: 0.89]", type: "success" },
          { time: "2.2s", text: "🤖 Step 3: Compiling defensive system prompt...", type: "info" },
          { time: "2.5s", text: "   » Injecting retrieved statutory context to Groq API (llama-3.3-70b-versatile, temp=0.0)", type: "success" },
          { time: "3.0s", text: "   » Inference completed. Answer strictly grounded in section 15 U.S.C. § 1681i.", type: "success" },
          { time: "3.3s", text: "🎉 Agent loop completed. Grounded answer and citations compiled.", type: "success" }
        ],
        result: {
          title: "Fair Credit Reporting Act (FCRA) Dispute Resolution",
          citation: "15 U.S.C. § 1681i(a)",
          law: "Under the Fair Credit Reporting Act (FCRA), credit bureaus (Equifax, Experian, and TransUnion) generally have 30 days from the date they receive your dispute to investigate and update or delete any inaccurate or unverifiable information. If they fail to complete their verification within this timeline, the disputed item must be removed from your profile immediately.",
          warning: "Note: The timeline can be extended by up to 15 days if the consumer sends additional relevant materials during the initial 30-day investigation window.",
          status: "success"
        }
      },
      {
        id: "rag-2",
        label: "Debt Collector Call Limits",
        query: "Are there limits on how often a debt collector can call me?",
        logs: [
          { time: "0.0s", text: "⚖️ Initiating Consumer Rights Agent loop with query: 'Are there limits on how often a debt collector can call me?'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Slicing query and computing query vector...", type: "info" },
          { time: "0.7s", text: "   » Embedding generated locally...", type: "success" },
          { time: "1.0s", text: "📁 Step 2: Querying local ChromaDB vector store...", type: "info" },
          { time: "1.3s", text: "   » Retrieved 3 high-signal document chunks from Fair Debt Collection Practices Act (FDCPA).", type: "success" },
          { time: "1.5s", text: "     [Chunk 1] 15 U.S.C. § 1692d(5) - Repeated harassing phone calls [Score: 0.86]", type: "success" },
          { time: "1.8s", text: "🤖 Step 3: Compiling defensive system prompt...", type: "info" },
          { time: "2.1s", text: "   » Forwarding context to Groq API (llama-3.3-70b-versatile, temp=0.0)...", type: "success" },
          { time: "2.6s", text: "   » Inference completed. Answer verified.", type: "success" },
          { time: "2.9s", text: "🎉 Agent loop completed successfully.", type: "success" }
        ],
        result: {
          title: "Fair Debt Collection Practices Act (FDCPA) Restrictions",
          citation: "15 U.S.C. § 1692d & 12 CFR § 1006.14",
          law: "Yes, federal regulations enforce strict limits. Under Regulation F, a debt collector is presumed to violate the law if they call you more than 7 times within 7 consecutive days regarding a specific debt, or within 7 days after having a telephone conversation with you about that debt. Furthermore, calls before 8:00 AM and after 9:00 PM local time are prohibited.",
          warning: "Note: You can submit a written 'Cease and Desist' letter requesting the collector stop all phone contacts, which they must legally honor.",
          status: "success"
        }
      },
      {
        id: "rag-3",
        label: "Best Savings Account Rates",
        query: "What is the best savings account interest rate right now?",
        logs: [
          { time: "0.0s", text: "⚖️ Initiating Consumer Rights Agent loop with query: 'What is the best savings account interest rate right now?'", type: "info" },
          { time: "0.4s", text: "🔍 Step 1: Slicing query and computing query vector...", type: "info" },
          { time: "0.7s", text: "📁 Step 2: Querying local ChromaDB vector store...", type: "info" },
          { time: "1.0s", text: "   ❌ ChromaDB returned 0 relevant statutory chunks. Similarity distance > threshold limit.", type: "error" },
          { time: "1.3s", text: "🤖 Step 3: Activating Zero-Hallucination Safe Refusal Guardrails...", type: "info" },
          { time: "1.6s", text: "   » Query is outside statutory scope (does not match tenant, credit, or debt rights).", type: "error" },
          { time: "1.9s", text: "   » System triggers pre-determined refusal response to avoid hallucinations.", type: "success" },
          { time: "2.1s", text: "🛑 Agent loop terminated: Out of Scope query refused.", type: "error" }
        ],
        result: {
          title: "Out of Scope / Refusal",
          error: "I'm sorry, but I can only answer questions related to federal consumer rights, such as dispute timelines, credit reporting laws, and debt collection restrictions. I do not have access to commercial banking product listings or real-time interest rates.",
          status: "fail"
        }
      }
    ]
  }
};

export default function Playground() {
  const [activeTab, setActiveTab] = useState("fitfindr");
  const [selectedQuery, setSelectedQuery] = useState(agentSimulations.fitfindr.queries[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentLogs, setCurrentLogs] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const consoleEndRef = useRef(null);
  const timeoutRef = useRef(null);

  // Sync selected query when tab changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsRunning(false);
    setSelectedQuery(agentSimulations[activeTab].queries[0]);
    setCurrentLogs([]);
    setShowResult(false);
  }, [activeTab]);

  // Clean up running timeouts if query selection changes manually
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsRunning(false);
    setCurrentLogs([]);
    setShowResult(false);
  }, [selectedQuery]);

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Scroll to bottom of terminal logs (only once logs actually exist —
  // otherwise this fires on first mount and yanks the whole page down)
  useEffect(() => {
    if (consoleEndRef.current && currentLogs.length > 0) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [currentLogs]);

  const handleRunSimulation = () => {
    if (isRunning) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsRunning(true);
    setCurrentLogs([]);
    setShowResult(false);

    const logsToPrint = selectedQuery.logs;
    let logIndex = 0;

    const printNextLog = () => {
      if (logIndex < logsToPrint.length) {
        const nextLog = logsToPrint[logIndex];
        setCurrentLogs(prev => [...prev, nextLog]);
        logIndex++;
        timeoutRef.current = setTimeout(printNextLog, 300 + Math.random() * 200);
      } else {
        setIsRunning(false);
        setShowResult(true);
      }
    };

    timeoutRef.current = setTimeout(printNextLog, 200);
  };

  return (
    <section id="playground" className="section-container border-t border-border">
      <div className="mb-14 max-w-2xl">
        <span className="eyebrow mb-3"><span className="text-muted">—</span> Live system sandbox</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 text-foreground">AI agent playground</h2>
        <p className="text-muted text-sm md:text-base mt-3 leading-relaxed">
          Interact with simulated versions of my autonomous AI agent pipelines. Watch real-time tool-calling execution, vector embedding lookup, and fallback guardrails.
        </p>
      </div>

      {/* Tab Controls */}
      <div className="flex flex-wrap gap-3 mb-10 font-mono">
        {Object.entries(agentSimulations).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 text-sm border transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === key
                ? 'bg-foreground text-background border-foreground'
                : 'border-border-strong text-muted hover:text-foreground'
            }`}
          >
            {key === "fitfindr" ? <Shirt size={15} /> : <ShieldCheck size={15} />}
            {value.title}
          </button>
        ))}
      </div>

      {/* Simulator Grid */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">

        {/* Left Panel: Query and Terminal Console */}
        <div className="plate flex flex-col justify-between h-full">
          <div>
            <h3 className="font-display text-xl mb-2 flex items-center gap-2 text-foreground">
              <HelpCircle size={17} className="text-accent" />
              Select query input
            </h3>
            <p className="text-sm text-muted mb-6">
              {agentSimulations[activeTab].tagline}
            </p>

            <div className="flex flex-col gap-2.5">
              {agentSimulations[activeTab].queries.map(q => (
                <button
                  key={q.id}
                  onClick={() => {
                    if (!isRunning) {
                      setSelectedQuery(q);
                      setCurrentLogs([]);
                      setShowResult(false);
                    }
                  }}
                  disabled={isRunning}
                  className={`w-full p-4 text-left border transition-all text-sm flex justify-between items-center ${
                    selectedQuery.id === q.id
                      ? 'bg-accent-soft border-accent text-foreground'
                      : 'border-border text-muted hover:border-border-strong hover:text-foreground'
                  } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span className="flex flex-col">
                    <span className="font-mono text-foreground text-xs uppercase tracking-wide opacity-80 mb-0.5">{q.label}</span>
                    <span className="font-mono text-sm">"{q.query}"</span>
                  </span>
                  <ChevronRight size={16} className={`transition-transform shrink-0 ${selectedQuery.id === q.id ? 'translate-x-1 text-accent' : 'text-muted'}`} />
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            disabled={isRunning}
            className="btn-primary w-full mt-8 !py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? (
              <>
                <RefreshCw size={17} className="animate-spin" />
                Executing pipeline...
              </>
            ) : (
              <>
                <Play size={17} />
                Run agent pipeline
              </>
            )}
          </button>
        </div>

        {/* Right Panel: Terminal Output & Result */}
        <div className="flex flex-col gap-6">
          <div className="border border-border flex flex-col h-[420px] bg-[#0b1220] overflow-hidden relative font-mono text-xs md:text-sm">
            <div className="flex items-center justify-between bg-black/30 border-b border-white/10 px-4 py-2 text-zinc-500 select-none">
              <span className="flex items-center gap-2">
                <Terminal size={13} className="text-[#7FE0FF]" />
                <span className="font-semibold text-[10px] tracking-wider uppercase">Agent Sandbox Terminal</span>
              </span>
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/40" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <span className="w-2 h-2 rounded-full bg-green-500/40" />
              </span>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-2 select-text text-left">
              {currentLogs.length === 0 && !isRunning && (
                <div className="h-full flex flex-col items-center justify-center text-center text-zinc-600 font-sans">
                  <Terminal size={30} className="opacity-30 mb-3" />
                  <p>Select a query and click "Run Agent Pipeline"</p>
                  <p className="text-[11px] mt-1">Sandbox logs will stream here...</p>
                </div>
              )}
              {currentLogs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    log.type === "success"
                      ? "text-green-400 font-medium"
                      : log.type === "error"
                      ? "text-red-400 font-semibold"
                      : "text-zinc-300"
                  }`}
                >
                  <span className="text-zinc-600 select-none mr-2">[{log.time}]</span>
                  {log.text}
                </motion.div>
              ))}
              <div ref={consoleEndRef} />
            </div>
          </div>

          {/* Output Card display */}
          <div className="min-h-[160px] flex items-stretch">
            <AnimatePresence mode="wait">
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="w-full"
                >
                  {selectedQuery.result.status === "success" ? (
                    activeTab === "fitfindr" ? (
                      <div className="plate flex flex-col justify-between h-full text-left border-l-2 !border-l-accent">
                        <div>
                          <div className="flex items-center justify-between mb-4 border-b border-border pb-2.5">
                            <span className="flex items-center gap-1.5 text-xs text-accent font-mono uppercase tracking-wide">
                              <Shirt size={14} /> Item matched
                            </span>
                            <span className="text-sm font-mono text-foreground px-2.5 py-0.5 bg-accent-soft">
                              {selectedQuery.result.price}
                            </span>
                          </div>
                          <h4 className="font-display text-xl mb-3 text-foreground">{selectedQuery.result.title}</h4>

                          <div className="mb-4">
                            <span className="text-[10px] text-muted uppercase font-mono">Suggested style pairing</span>
                            <p className="text-sm text-foreground mt-1 leading-relaxed">
                              {selectedQuery.result.outfit}
                            </p>
                          </div>

                          <div className="p-3 bg-accent-soft font-sans text-xs italic text-foreground relative">
                            <span className="absolute right-3 top-2.5 text-[9px] uppercase tracking-wide bg-foreground text-background font-mono px-1">Social copy</span>
                            <p className="pr-16 leading-normal">{selectedQuery.result.caption}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="plate flex flex-col justify-between h-full text-left border-l-2 !border-l-accent">
                        <div>
                          <div className="flex items-center justify-between mb-4 border-b border-border pb-2.5">
                            <span className="flex items-center gap-1.5 text-xs text-accent font-mono uppercase tracking-wide">
                              <ShieldCheck size={14} /> Grounded citation found
                            </span>
                            <span className="text-[10px] font-mono text-foreground bg-accent-soft px-2 py-0.5">
                              {selectedQuery.result.citation}
                            </span>
                          </div>
                          <h4 className="font-display text-lg mb-3 text-foreground">{selectedQuery.result.title}</h4>
                          <p className="text-sm text-foreground leading-relaxed mb-4">
                            {selectedQuery.result.law}
                          </p>
                          <div className="flex items-start gap-2 border border-signal/40 p-3 text-[11px] text-signal">
                            <AlertCircle size={14} className="shrink-0 mt-0.5" />
                            <span>{selectedQuery.result.warning}</span>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    <div className="plate flex flex-col justify-center text-left h-full border-l-2 !border-l-red-500">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                          <AlertCircle size={19} />
                        </div>
                        <div>
                          <h4 className="text-sm font-mono uppercase tracking-wide text-red-500 mb-1.5">
                            {selectedQuery.result.title}
                          </h4>
                          <p className="text-sm text-muted leading-relaxed">
                            {selectedQuery.result.error}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
