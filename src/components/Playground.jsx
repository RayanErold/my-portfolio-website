import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Play, RefreshCw, Terminal, ArrowRight, Search, 
  ShieldCheck, AlertCircle, Database, Brain, Tag, ExternalLink, 
  Shirt, ChevronRight, Cpu, Layers, HelpCircle
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

  // Scroll to bottom of terminal logs
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
        // Evaluate log entry synchronously outside state update callback
        const nextLog = logsToPrint[logIndex];
        setCurrentLogs(prev => [...prev, nextLog]);
        logIndex++;
        // Simulate real processing speeds by varying log intervals
        timeoutRef.current = setTimeout(printNextLog, 300 + Math.random() * 200);
      } else {
        setIsRunning(false);
        setShowResult(true);
      }
    };

    timeoutRef.current = setTimeout(printNextLog, 200);
  };

  return (
    <section id="playground" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] -z-10 animate-pulse" />

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2 bg-primary/10 px-3 py-1 rounded-full text-xs">
            <Cpu size={14} className="animate-spin" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Agent Playground</h2>
          <p className="text-gray-400 text-lg">
            Interact with simulated versions of my AI systems. Watch the backend pipeline execute tool calls and parse models in real-time.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(agentSimulations).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === key
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-secondary/40 border border-border text-gray-400 hover:text-white hover:bg-secondary/60'
              }`}
            >
              {key === "fitfindr" ? <Shirt size={16} /> : <ShieldCheck size={16} />}
              {value.title}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Panel: Query and Terminal Console */}
          <div className="flex flex-col gap-6">
            <div className="glass-card flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-foreground">
                  <HelpCircle size={18} className="text-primary" />
                  Select Query Input
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  {agentSimulations[activeTab].tagline}
                </p>

                {/* Query selections */}
                <div className="flex flex-col gap-3">
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
                      className={`w-full p-4 rounded-xl text-left border transition-all text-sm flex justify-between items-center ${
                        selectedQuery.id === q.id
                          ? 'bg-primary/10 border-primary text-primary font-medium'
                          : 'bg-secondary/20 border-border text-gray-400 hover:border-gray-600 hover:text-white'
                      } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-xs uppercase tracking-wide opacity-80 mb-0.5">{q.label}</span>
                        <span className="font-mono text-sm">"{q.query}"</span>
                      </div>
                      <ChevronRight size={16} className={`transition-transform ${selectedQuery.id === q.id ? 'translate-x-1 text-primary' : 'text-gray-500'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="btn-primary w-full flex items-center justify-center gap-2 mt-8 py-3.5 cursor-pointer disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    Executing Pipeline...
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    Run Agent Pipeline
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel: Terminal Output & Result */}
          <div className="flex flex-col gap-6">
            <div className="glass-card flex flex-col h-[420px] bg-black/60 border-border/80 overflow-hidden relative font-mono text-xs md:text-sm">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between bg-black/40 border-b border-border/50 px-4 py-2 text-gray-500 select-none">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-primary" />
                  <span className="font-semibold text-[10px] tracking-wider uppercase">Agent Sandbox Terminal</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
              </div>

              {/* Terminal Stream Screen */}
              <div className="flex-grow p-4 overflow-y-auto space-y-2 select-text scrollbar-thin text-left">
                {currentLogs.length === 0 && !isRunning && (
                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-600 font-sans">
                    <Terminal size={32} className="opacity-30 mb-3" />
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
                        : "text-gray-300"
                    }`}
                  >
                    <span className="text-gray-600 select-none mr-2 font-mono">[{log.time}]</span>
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full"
                  >
                    {selectedQuery.result.status === "success" ? (
                      activeTab === "fitfindr" ? (
                        /* FitFindr Success Card */
                        <div className="glass-card border-green-500/30 bg-green-500/[0.01] flex flex-col justify-between h-full text-left">
                          <div>
                            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                              <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold uppercase tracking-wider">
                                <Shirt size={14} /> Item Matched
                              </span>
                              <span className="text-sm font-bold text-white px-2.5 py-0.5 bg-green-500/10 rounded-full border border-green-500/20">
                                {selectedQuery.result.price}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-foreground">{selectedQuery.result.title}</h4>
                            
                            <div className="mb-4">
                              <span className="text-[10px] text-gray-500 uppercase font-semibold">Suggested Style pairing:</span>
                              <p className="text-sm text-gray-300 mt-0.5 leading-relaxed">
                                {selectedQuery.result.outfit}
                              </p>
                            </div>

                            <div className="p-3 bg-black/40 border border-border rounded-xl font-sans text-xs italic text-primary relative">
                              <span className="absolute right-3 top-2.5 text-[9px] uppercase tracking-wide bg-primary/20 text-white font-semibold px-1 rounded">Social Copy</span>
                              <p className="pr-12 text-gray-300 leading-normal">{selectedQuery.result.caption}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* RAG Success Card */
                        <div className="glass-card border-primary/30 bg-primary/[0.01] flex flex-col justify-between h-full text-left">
                          <div>
                            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                              <span className="flex items-center gap-1.5 text-xs text-primary font-semibold uppercase tracking-wider">
                                <ShieldCheck size={14} /> Grounded Citation Found
                              </span>
                              <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">
                                {selectedQuery.result.citation}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold mb-3 text-foreground">{selectedQuery.result.title}</h4>
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                              {selectedQuery.result.law}
                            </p>
                            <div className="flex items-start gap-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-3 text-[11px] text-yellow-300/80">
                              <AlertCircle size={14} className="shrink-0 mt-0.5" />
                              <span>{selectedQuery.result.warning}</span>
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      /* Failure Card (Refusals / No results) */
                      <div className="glass-card border-red-500/30 bg-red-500/[0.01] flex flex-col justify-center text-left h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                            <AlertCircle size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-1">
                              {selectedQuery.result.title}
                            </h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
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
      </div>
    </section>
  );
}
