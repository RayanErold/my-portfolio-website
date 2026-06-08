import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Search, BookOpen, Tag, X, Share2, Laptop, Server, Database, Brain, Sparkles, Globe, CreditCard, ArrowDown, ArrowRight, Cpu, FileText, Layers, ShieldCheck } from 'lucide-react';

// Visual System Architecture Diagram Component
const ArchitectureDiagram = () => (
  <div className="flex flex-col items-center gap-8 py-8 px-4 bg-secondary/20 border border-border rounded-2xl my-8 shadow-2xl relative overflow-hidden">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-[80px]" />

    <div className="text-center font-bold text-lg mb-2 text-foreground flex items-center gap-2">
      <Globe className="text-primary animate-pulse" size={20} />
      <span>DateSpark System Architecture</span>
    </div>

    {/* Row 1: Client Application */}
    <div className="flex flex-col items-center">
      <div className="px-6 py-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center gap-3 shadow-lg shadow-primary/10 hover:scale-105 transition-all">
        <Laptop className="text-primary" size={24} />
        <div className="text-left">
          <div className="text-sm font-bold text-foreground">User App</div>
          <div className="text-xs text-muted">React 19 / Client View</div>
        </div>
      </div>
      <ArrowDown className="text-primary mt-4 animate-bounce" size={20} />
    </div>

    {/* Row 2: Gateway */}
    <div className="flex flex-col items-center">
      <div className="px-6 py-4 bg-secondary border border-border rounded-xl flex items-center gap-3 shadow-lg hover:scale-105 transition-all">
        <Server className="text-green-400" size={24} />
        <div className="text-left">
          <div className="text-sm font-bold text-foreground">Gateway API</div>
          <div className="text-xs text-muted">Node.js Express Server</div>
        </div>
      </div>
    </div>

    {/* Connected Services (Row 3 Grid) */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-3xl mt-4">
      {/* Supabase */}
      <div className="p-4 bg-secondary/40 border border-border rounded-xl flex flex-col items-center text-center hover:border-green-500/30 transition-all duration-300 hover:scale-105">
        <Database className="text-green-500 mb-2" size={24} />
        <div className="text-xs font-bold text-foreground">Supabase</div>
        <div className="text-[10px] text-muted mt-1">PostgreSQL & Auth (RLS)</div>
      </div>

      {/* AI Orchestrator */}
      <div className="p-4 bg-secondary/40 border border-border rounded-xl flex flex-col items-center text-center hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
        <Brain className="text-purple-400 mb-2" size={24} />
        <div className="text-xs font-bold text-foreground">Python AI</div>
        <div className="text-[10px] text-muted mt-1">FastAPI Orchestrator</div>
        <ArrowDown className="text-purple-500 my-1" size={12} />
        <div className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded flex items-center gap-1 font-mono">
          <Sparkles size={8} /> Gemini 2.5 Pro
        </div>
      </div>

      {/* Ticketmaster/SeatGeek */}
      <div className="p-4 bg-secondary/40 border border-border rounded-xl flex flex-col items-center text-center hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
        <Globe className="text-blue-400 mb-2" size={24} />
        <div className="text-xs font-bold text-foreground">External APIs</div>
        <div className="text-[10px] text-muted mt-1">Ticketmaster & SeatGeek</div>
      </div>

      {/* Stripe */}
      <div className="p-4 bg-secondary/40 border border-border rounded-xl flex flex-col items-center text-center hover:border-yellow-500/30 transition-all duration-300 hover:scale-105">
        <CreditCard className="text-yellow-400 mb-2" size={24} />
        <div className="text-xs font-bold text-foreground">Stripe Engine</div>
        <div className="text-[10px] text-muted mt-1">Live Payment Webhooks</div>
      </div>
    </div>
  </div>
);

// Visual Sequence Diagram Component
const SequenceDiagram = () => {
  const steps = [
    { sender: "React Frontend", receiver: "Node.js Gateway", label: "Request Plan", desc: "Location, Budget, Vibe, Weather inputs forwarded." },
    { sender: "Node.js Gateway", receiver: "Python AI Service", label: "Trigger Generative Pipeline", desc: "Initiate prompt crafting and vector searches." },
    { sender: "Python AI Service", receiver: "Google Gemini 2.5", label: "Generate Structural Plan", desc: "Enforcing strict structured JSON schemas." },
    { sender: "Google Gemini 2.5", receiver: "Python AI Service", label: "Structured Slots & Coordinates", desc: "Returns coordinate vectors & walk connectors." },
    { sender: "Python AI Service", receiver: "Node.js Gateway", label: "Parsed Structural Plan", desc: "Raw structured JSON layout compiled." },
    { sender: "Node.js Gateway", receiver: "Ticketmaster / Search", label: "Validate Stops & Fetch Events", desc: "Queries Ticketmaster & SeatGeek APIs." },
    { sender: "Ticketmaster / Search", receiver: "Node.js Gateway", label: "Real-time Venue & Ticket Details", desc: "Hours validated, live ticket links attached." },
    { sender: "Node.js Gateway", receiver: "React Frontend", label: "Stunning Experience Plan", desc: "Fully rendered visual itinerary displayed." }
  ];

  return (
    <div className="my-8 p-6 bg-secondary/20 border border-border rounded-2xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-[80px]" />

      <div className="text-center font-bold text-lg mb-6 text-foreground flex items-center justify-center gap-2">
        <Sparkles className="text-primary animate-pulse" size={20} />
        <span>Double-Pass AI Pipeline Sequence Flow</span>
      </div>

      <div className="flex flex-col gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-3 bg-secondary/40 border border-border/50 rounded-xl hover:bg-secondary transition-all">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
              {idx + 1}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted font-mono shrink-0">
              <span className="text-foreground font-semibold">{step.sender}</span>
              <ArrowRight size={12} className="text-primary shrink-0" />
              <span className="text-foreground font-semibold">{step.receiver}</span>
            </div>
            <div className="md:ml-auto text-left">
              <div className="text-sm font-semibold text-primary">{step.label}</div>
              <div className="text-xs text-muted mt-0.5">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Formatting Helper for Paragraphs to support Links, Bold and Code tags
const renderTextWithFormatting = (text) => {
  if (!text) return "";
  
  // Matches:
  // 1. Links: \[([^\]]+)\]\(([^)]+)\)
  // 2. Bold: \*\*([^*]+)\*\*
  // 3. Inline Code: `([^`]+)`
  const regex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(`([^`]+)`)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // Link match
      parts.push(
        <a
          key={match.index}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      // Bold match
      parts.push(
        <strong key={match.index} className="font-bold text-foreground">
          {match[5]}
        </strong>
      );
    } else if (match[6]) {
      // Inline code match
      parts.push(
        <code key={match.index} className="px-1.5 py-0.5 rounded bg-secondary text-emerald-400 font-mono text-sm border border-border/30">
          {match[7]}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

// Visual RAG System Architecture Diagram Component
const RagArchitectureDiagram = () => {
  return (
    <div className="my-10 p-6 md:p-8 bg-secondary/20 border border-border rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center font-bold text-lg mb-8 text-foreground flex items-center justify-center gap-2">
        <Cpu className="text-primary animate-pulse" size={20} />
        <span>Production-Grade RAG Engine Architecture</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Connector line for large screens */}
        <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-border border-dashed z-0" />

        {/* Phase 1: Ingestion Track */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="text-sm font-bold text-primary flex items-center gap-2 border-b border-border/50 pb-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-[11px] font-bold">1</span>
            <span>DATA INGESTION & VECTOR INDEXING</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* Step 1.1 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-primary/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                <FileText size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">10 Raw txt Files</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">Raw statutory frameworks, PDFs, and legal text documents ingested.</p>
              </div>
            </div>

            <div className="flex justify-center text-primary/60"><ArrowDown size={16} /></div>

            {/* Step 1.2 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-primary/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                <Layers size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">Sliding-Window Chunking</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">String normalization & division into 500-char blocks with 100-char overlap.</p>
              </div>
            </div>

            <div className="flex justify-center text-primary/60"><ArrowDown size={16} /></div>

            {/* Step 1.3 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-primary/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                <Brain size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">all-MiniLM-L6-v2 Model</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">On-device local vector embeddings generation (384-dimensional space).</p>
              </div>
            </div>

            <div className="flex justify-center text-primary/60"><ArrowDown size={16} /></div>

            {/* Step 1.4 */}
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-emerald-500/30">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Database size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-emerald-400">Local ChromaDB Vector Store</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">Persistent DB configuration saving immutable indexes & .gov metadata.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Inference Track */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 border-b border-border/50 pb-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-[11px] font-bold">2</span>
            <span>SEMANTIC RETRIEVAL & INFERENCE</span>
          </div>

          <div className="flex flex-col gap-4">
            {/* Step 2.1 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-emerald-500/30">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Laptop size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">User Query</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">Plain English input containing user's consumer rights dispute query.</p>
              </div>
            </div>

            <div className="flex justify-center text-emerald-500/60"><ArrowDown size={16} /></div>

            {/* Step 2.2 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-emerald-500/30">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Search size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">Semantic similarity Matrix Match</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">ChromaDB calculates cosine distance comparison between query and indexes.</p>
              </div>
            </div>

            <div className="flex justify-center text-emerald-500/60"><ArrowDown size={16} /></div>

            {/* Step 2.3 */}
            <div className="p-4 bg-secondary/40 border border-border rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-emerald-500/30">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                <Sparkles size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-foreground">Context & Metadata payload</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">Top-K (4 chunks) + metadata extracted to create defensive system prompt.</p>
              </div>
            </div>

            <div className="flex justify-center text-emerald-500/60"><ArrowDown size={16} /></div>

            {/* Step 2.4 */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-all hover:border-primary/30">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-primary font-mono">llama-3.3-70b-versatile</h4>
                <p className="text-[11px] text-muted mt-1 leading-relaxed">Deterministic inference (Temp=0.0). Safe Refusal / Citations output UI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: "Building DateSpark: How I Engineered an AI-Powered Social Discovery Platform",
    excerpt: "In an era dominated by doom-scrolling and digital fatigue, social platforms often succeed by keeping users glued to their screens. But what if we built a platform designed specifically to get people off their screens and into the real world? Enter DateSpark...",
    date: "May 22, 2026",
    readTime: "8 min read",
    category: "Projects & Build Logs",
    tags: ["AI Agents", "React 19", "Node.js", "System Architecture"],
    content: [
      { type: "paragraph", text: "In an era dominated by doom-scrolling and digital fatigue, social platforms often succeed by keeping users glued to their screens. But what if we built a platform designed specifically to get people off their screens and into the real world?" },
      { type: "paragraph", text: "Enter DateSpark—a premium, state-of-the-art social discovery platform that leverages advanced artificial intelligence and live event APIs to orchestrate personalized real-life couple experiences. Here is an in-depth breakdown of how we architected, built, and optimized DateSpark from the ground up." },

      { type: "heading", text: "🗺️ The Architecture at a Glance" },
      { type: "paragraph", text: "DateSpark is built on a high-performance, containerized microservices architecture. It separates frontend visual performance from backend data intensive operations and AI orchestration." },

      // Architecture diagram block
      { type: "diagram", name: "architecture" },

      { type: "heading", text: "The Technology Stack" },
      { type: "paragraph", text: "1. Core Frontend: React 19, Vite (for lighting-fast local hot reloading and optimized assets compilation), Framer Motion (for premium micro-animations and sleek card transitions), and Lucide-React icons.\n2. Gateway API Backend: Node.js/Express handling secure sessions, payment processing, proxying, and caching.\n3. AI Logic Engine: Python/FastAPI microservice handling high-density prompts, vector embeddings, and structured JSON parsing.\n4. Cloud Database & Auth: Supabase PostgreSQL with Real-time synchronization and Row-Level Security (RLS) policies.\n5. Third-Party Integrations: Google Gemini 2.5 Pro, Stripe (Live Mode), Ticketmaster Discovery API, and SeatGeek Client API." },

      { type: "heading", text: "⚡ The Double-Pass AI Pipeline" },
      { type: "paragraph", text: "One of the biggest challenges in building an AI date planner is accuracy. If an AI hallucinates a venue that closed in 2021 or suggests an outdoor picnic during a rainstorm, user trust is destroyed." },
      { type: "paragraph", text: "To solve this, we engineered a bulletproof Double-Pass AI Pipeline that couples the generative intelligence of Gemini with real-world validation APIs." },

      // Sequence diagram block
      { type: "diagram", name: "sequence" },

      { type: "heading", text: "Phase 1: Structural Generation (The AI Pass)" },
      { type: "paragraph", text: "Instead of asking the LLM to write a generic text description, we enforce a strict JSON schema. The AI acts as a logistical scheduler, determining the optimal sequence of events (e.g., matching cozy morning coffee places to romantic sunset dinner viewpoints), precise coordinate vectors for geographic constraints, and logical transition steps (e.g., injecting a customized \"Walk Time Connector\" between two stops)." },

      { type: "heading", text: "Phase 2: Live Enrichment (The API Pass)" },
      { type: "paragraph", text: "Once the structure is generated, our Node.js Gateway intercepts it and queries real-world location and event discovery engines. We verify operating hours (ensuring the venue is actually open), live events (pulling live performance tickets from Ticketmaster or SeatGeek), and atmospherics (\"Vibe Tags\" like Cozy, Hidden Gem, or Highly Rated for immediate visual feedback)." },

      { type: "heading", text: "🎨 Premium Design System & Micro-Animations" },
      { type: "paragraph", text: "We wanted DateSpark's first impression to be absolutely breathtaking. We rejected default styling and standard Tailwind configurations to craft a custom dark-mode-first glassmorphic system." },
      { type: "heading", text: "Key Interface Innovations:" },
      { type: "paragraph", text: "• The \"Visual Spark Card\": A high-performance card component that displays immersive, high-quality images of the target venues, weather forecasts, and customized route navigation overlays in real-time.\n• Atmospheric Spark Chat: An interactive conversational chat window equipped with customized typing prompts, which lets users easily guide the AI to regenerate or swap specific schedule stops on the fly.\n• Responsive BottomNav: An HSL-tailored floating menu that feels premium and responsive on both native mobile screen widths and desktop layouts." },

      { type: "paragraph", text: "Here is an example of the clean, motion-enhanced UI structure used for key transitions:" },
      {
        type: "code", language: "javascript", text: `// A snippet showcasing our high-fidelity, interactive Framer Motion wrapper
import { motion, AnimatePresence } from 'framer-motion';

export const FadeInUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
    >
        {children}
    </motion.div>
);` },

      { type: "heading", text: "🛠️ Overcoming Core Engineering Challenges" },
      { type: "heading", text: "1. The \"UUID UUID\" Database Gotcha" },
      { type: "paragraph", text: "When building high-speed client interactions with Supabase, executing queries directly from the client can occasionally lead to unexpected 400 Bad Request responses (such as client-side library type-mismatches)." },
      { type: "paragraph", text: "• The Fix: We built a robust proxy layer in the Node.js Express server. By utilizing a secure service role client on the backend, the client forwards request signatures and queries standard databases safely, neutralizing client-side UUID issues entirely." },

      { type: "heading", text: "2. Live Stripe Mode Integration" },
      { type: "paragraph", text: "We integrated Stripe's checkout system to allow immediate conversion from regular accounts to Elite Premium Memberships." },
      { type: "paragraph", text: "• The Fix: We utilized a secure webhook listener (/api/webhook) that safely parses raw request buffers to verify cryptographical Stripe signatures. Once Stripe clears a transaction, a secure update immediately adjusts the user profile's is_premium flag and premium_expiry date in real time." },

      { type: "heading", text: "📈 What I Learned" },
      { type: "paragraph", text: "Building DateSpark taught me valuable lessons about building production ready AI applications:" },
      { type: "paragraph", text: "1. User Control is Critical: Users do not want the AI to make every decision. They want the capability to accept, decline, swap, or re-prompt specific choices within an itinerary before committing to it.\n2. Speed & Caching: AI generation can take a few seconds. We implemented aggressive, localized server-side caching (node-cache) for trending itineraries and static location results to maintain sub-second load times for hot-path user actions." },

      { type: "heading", text: "🚀 Try It Today!" },
      { type: "paragraph", text: "DateSpark is now live and fully operational on the cloud!\n\n• Explore the Platform: [datespark.live](https://datespark.live)\n• Under the Hood: Log in with your profile to configure personal preferences, discover local hotspots, and access tailored schedules." }
    ]
  },
  {
    id: 2,
    title: "5 Ways Small Businesses Can Use AI Automation",
    excerpt: "Let’s be real: AI automation isn't some futuristic concept anymore. Over the next five years, the business landscape is going to look completely different for anyone who relies on AI to handle their administrative heavy lifting.",
    date: "May 22, 2026",
    readTime: "6 min read",
    category: "AI & Automation",
    tags: ["AI Automation", "Small Business", "Efficiency", "ROI"],
    content: [
      { type: "paragraph", text: "Let’s be real: AI automation isn't some futuristic concept anymore. Over the next five years, the business landscape is going to look completely different for anyone who relies on AI to handle their administrative heavy lifting." },
      { type: "paragraph", text: "Think about the tasks that used to take hours, days, or even weeks to get through. Today, those exact same processes are being knocked out in a matter of minutes. It’s a massive shift, and if you run a small local business, it is incredibly important to start looking at where these tools can fit into your daily setup." },
      { type: "paragraph", text: "I get it—a lot of people are still intimidated by AI. But instead of avoiding it, we need to get our hands dirty and actually learn how it works. Technology moves way too fast. If you ignore tools that are quickly becoming \"must-haves,\" you’re going to get left behind. It’s just how it goes. Big companies already see the writing on the wall and are pouring millions into automation. Luckily, you don't need a massive budget to see a high ROI." },
      { type: "paragraph", text: "Here are the five areas where I see AI making the biggest impact for small businesses right now." },

      { type: "heading", text: "1. 24/7 Customer Support" },
      { type: "paragraph", text: "Customer support is the actual engine of your business. When it’s great, it drives up your value; when it’s messy, it drags everything down.\n\nThe problem is that traditional support relies entirely on humans handling every single ticket, call, and customer issue manually. We have physical limits, we need breaks, and covering different shifts means hiring multiple teams." },
      { type: "paragraph", text: "By introducing AI automation, you can set up smart chatbots and virtual assistants to take care of the baseline stuff: answering common questions, routing complex issues to your specialist team, or handling simple tasks like booking appointments and checking order statuses. Your customers get the fast responses they want, and you don’t have to stay glued to a screen all day." },

      { type: "heading", text: "2. Marketing" },
      { type: "paragraph", text: "Consistency is usually the first thing to go when you're running a small team. AI has the ability to draft emails, generate social media posts, personalize your campaigns, and brainstorm content ideas tailored right to your target audience." },
      { type: "paragraph", text: "When you have an AI handling the initial legwork, staying consistent with your marketing becomes ten times easier. You get to maintain a solid brand presence across all your channels without needing the budget for a dedicated marketing team." },

      { type: "heading", text: "3. Automated Bookkeeping and Invoicing" },
      { type: "paragraph", text: "No one goes into business because they love manual data entry. Integrating AI into your financial tools can automatically categorize your expenses, reconcile bank statements, and scan digital invoices to extract data instantly." },
      { type: "paragraph", text: "On top of making the whole system move faster, it can automatically fire off polite payment reminders for outstanding invoices. It takes the human error out of the equation and keeps your cash flow moving." },

      { type: "heading", text: "4. Frictionless Scheduling" },
      { type: "paragraph", text: "The endless back-and-forth emails just to find a meeting time is a massive time sink. AI scheduling tools eliminate that headache entirely by finding open slots, booking appointments, and sending out reminders automatically." },
      { type: "paragraph", text: "This is huge for service-based businesses or any team that handles a lot of calendar coordination. It keeps you from missing out on hot leads because the system locks them in immediately. It essentially does the work of a full-time assistant, running 24/7 without a break. That’s pure ROI." },

      { type: "heading", text: "5. Streamlining Internal Workflows" },
      { type: "paragraph", text: "Behind the scenes, small businesses can use AI to summarize meetings, route incoming emails, assign tasks, and connect different apps so routine work just happens in the background." },
      { type: "paragraph", text: "This keeps your team moving fast and prevents projects from stalling out due to a missed follow-up." },
      { type: "paragraph", text: "Take a local hair salon, for example. They could use AI to automatically answer booking inquiries, send out text reminders to clients, post weekly promotions, and even summarize staff meetings. Over the long term, that kind of efficiency completely changes how much a business can handle." },

      { type: "heading", text: "The Next Step" },
      { type: "paragraph", text: "At the end of the day, you don't need to automate your entire operation overnight. Pick one bottleneck, whether it’s your inbox, your calendar, or your customer service—and test it out." }
    ]
  },
  {
    id: 3,
    title: "Zero-Hallucination AI: Building a Production-Grade RAG Engine for Consumer Rights",
    excerpt: "In the modern digital economy, consumers are constantly entering binding agreements, handling banking transactions, and navigating tenant workflows. While federal statutes guarantee powerful baseline protections, this critical information is rarely accessible when a dispute occurs. To bridge this gap, I built a production-grade Retrieval-Augmented Generation (RAG) engine that performs local semantic vector queries and synthesizes grounded, mathematically cited legal guardrails.",
    date: "June 08, 2026",
    readTime: "7 min read",
    category: "Software Engineering",
    tags: ["RAG Engine", "ChromaDB", "LLMs", "Consumer Rights", "Llama 3.3"],
    fontFamily: "'Times New Roman', Times, serif",
    content: [
      { type: "paragraph", text: "In the modern digital economy, consumers are constantly entering binding agreements, handling banking transactions, and navigating tenant workflows. While federal statutes—like the Fair Credit Reporting Act (FCRA) or the Truth in Lending Act (TILA)—explicitly guarantee citizens powerful baseline protections, this critical information is rarely accessible when a dispute occurs." },
      { type: "paragraph", text: "To bridge this gap, I built a production-grade Retrieval-Augmented Generation (RAG) engine. This system exposes a natural language interface that ingests unmanipulated regulatory frameworks, performs local semantic vector queries, and synthesizes grounded, mathematically cited legal guardrails for everyday citizens." },
      
      { type: "heading", text: "The Problem: Information Asymmetry" },
      { type: "paragraph", text: "The primary roadblock to consumer equity is information asymmetry. Corporate legal teams and massive financial institutions rely on the fact that ordinary consumers do not have the technical capability, time, or legal training to parse dense, multi-page regulatory portals or statutory PDFs during a high-stress dispute." },
      { type: "paragraph", text: "When attempting to use standard Large Language Models (LLMs) to answer these questions, developers run into a critical security risk: stochastic hallucinations. In a legal or financial context, an AI model confidently inventing a non-existent timeline, grace period, or statutory exception is catastrophic. Standard LLMs lack an explicit mechanism to prove the provenance of their assertions, making them fundamentally unsafe for deployment in deterministic domains." },
      
      { type: "heading", text: "The Solution: Decoupled RAG Architecture" },
      { type: "paragraph", text: "The solution is a decoupled architecture that completely separates factual knowledge storage from linguistic reasoning. By building a RAG pipeline, the system does not rely on the LLM's static pre-trained data to remember laws." },
      { type: "paragraph", text: "Instead, the system uses a local, high-signal vector database to mathematically isolate exact, pre-verified legal clauses matching a user's plain-English query. This text is then injected directly into a highly guardrailed LLM runtime environment. The model is restricted to acting purely as an in-context processing engine, transforming complex legal prose into an actionable, user-friendly response while programmatically outputting official source citations." },
      
      { type: "heading", text: "Tech Stack" },
      { type: "paragraph", text: "• **Data Processing & Ingestion**: Python 3.11 with an isolated virtual environment (`.venv`) utilizing sliding-window string slice segmentations.\n• **Embedding Model**: `sentence-transformers/all-MiniLM-L6-v2` running locally on-device for zero-cost, low-latency vector generation.\n• **Vector Database**: `ChromaDB` (Persistent Local Client configuration) for index immutability, metadata mapping, and local cosine distance scoring.\n• **Inference Layer**: Groq API Cloud Client utilizing `llama-3.3-70b-versatile` operating at a deterministic `temperature=0.0`.\n• **User Interface**: `Gradio` web application server displaying segregated execution outputs." },
      
      { type: "heading", text: "Architecture & Workflow" },
      { type: "diagram", name: "rag-architecture" },
      
      { type: "paragraph", text: "1. **Ingestion & Schema Mapping**: Raw source documents are preprocessed to strip out layout noise. They are broken into uniform chunks of 500 characters with a 100-character sliding overlap.\n2. **Vector Indexing**: Chunks are vectorized using the `all-MiniLM-L6-v2` model and saved to a local persistent disk repository (`/chroma_db`). Crucially, each vector is explicitly bound to a metadata schema dictionary tracking its parent file and its official `.gov` URL.\n3. **Semantic Retrieval**: When a user poses a question, `ChromaDB` executes a local similarity matrix match, calculating the absolute mathematical closeness of the query to the text indexes.\n4. **Context-Injected Generation**: The top 4 matching blocks, along with their metadata fields, are structured inside an aggressive system prompt and passed to Groq. The LLM synthesizes the final text, and the UI maps the response into segregated, un-editable presentation panels." },
      
      { type: "heading", text: "Engineering Challenges: Strict Systemic Grounding" },
      { type: "paragraph", text: "The single greatest engineering hurdle was enforcing strict systemic grounding. LLMs natively try to prioritize their vast pre-trained knowledge base when answering common financial questions." },
      { type: "paragraph", text: "To overcome this, I engineered a highly defensive prompt payload that treated the LLM as an immutable black box with a zero-tolerance constraint for external logic. Combined with pinning the model's inference parameter to a completely deterministic `temperature=0.0`, any out-of-scope query (e.g., asking about high-yield interest rates or sports scores) immediately triggered our pipeline's fallback handler, causing the system to safely return an explicit refusal string rather than a plausible hallucination." },
      
      { type: "heading", text: "Key Takeaways & Learnings" },
      { type: "paragraph", text: "Through this project, I gained a deep operational understanding of how chunk sizing alters vector density and semantic retrieval precision." },
      { type: "paragraph", text: "Initially, utilizing loose, large paragraph boundaries diluted the mathematical distinctness of the underlying laws. Slicing data into small, high-density 500-character blocks ensured that specific numeric constraints (such as the Fair Credit Reporting Act's strict 30-day investigation timeline) remained highly concentrated. I learned that the effectiveness of an intelligent system is completely dependent on data preparation; if your database ingestion splits text poorly, the most advanced LLM in the world still cannot generate an accurate answer." },
      
      { type: "heading", text: "Future Roadmap" },
      { type: "paragraph", text: "While the current architecture delivers exceptional text precision, it exhibits an operational bottleneck when handling complex, multi-variable edge cases requiring arithmetic deductions (such as calculating if a precise corporate paycheck deduction violates the Fair Labor Standards Act's minimum wage floor based on a custom hourly rate)." },
      { type: "paragraph", text: "To resolve this, future iterations will feature a Two-Step Hybrid RAG Router:\n\n• **Agentic Tool-Calling**: An upstream supervisor agent will analyze the query structure. If numeric values or mathematical operations are present, the system will temporarily bypass semantic search and execute an isolated Python script execution loop to calculate the exact financial delta.\n• **Hybrid BM25 Vector Re-ranking**: Merging keyword-matching algorithms with our current semantic database index will guarantee absolute keyword recall on hyper-specific legal references and section codes.\n• **Chunking strategy**: For this project I mainly used semantic chunking but I look forward to implementing others chunking methods such as fixed chunking and size chunking to see how the embedding model handles these cases and what accuracy the vectors embedded have." },
      
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Building this consumer protection RAG engine demonstrated that software engineering can directly level the financial playing field between individual citizens and massive corporate institutions. By treating the AI model purely as an algorithmic processing engine rather than an oracle of truth, we can deploy zero-hallucination architectures that provide transparent, mathematically verifiable, and traceably cited information to users when they need it most." }
    ]
  }
];

const categories = ["All", "AI & Automation", "Software Engineering", "Projects & Build Logs", "Career & Growth"];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = (blog, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + `#blogs?id=${blog.id}`);
    setCopiedId(blog.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="blogs" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary font-semibold mb-2">
              <BookOpen size={18} />
              <span>Technical Writing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Blogs</h2>
            <p className="text-muted max-w-xl text-lg">
              Writing to learn and sharing to teach. Here I document architectural decisions, security concepts, and engineering breakthroughs.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/50 border border-border rounded-full pl-11 pr-4 py-2.5 outline-none focus:border-primary transition-colors text-sm text-foreground placeholder:text-muted"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'bg-secondary border border-border text-muted hover:text-foreground hover:bg-secondary/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.article
                layout
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedBlog(blog)}
                className="glass-card flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-muted px-2 py-0.5 bg-secondary border border-border/50 rounded">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Read Article <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <button
                      onClick={(e) => handleShare(blog, e)}
                      className="p-1.5 rounded-lg bg-secondary border border-border/50 text-muted hover:text-foreground hover:bg-secondary transition-all text-xs flex items-center gap-1"
                    >
                      <Share2 size={14} />
                      <span>{copiedId === blog.id ? "Copied!" : "Share"}</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted text-lg">Articles are currently being drafted. Stay tuned!</p>
          </motion.div>
        )}

        {/* --- PREMIUM BLOG READER MODAL OVERLAY --- */}
        <AnimatePresence>
          {selectedBlog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
              {/* Blur Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBlog(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              />

              {/* Reader Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass rounded-2xl flex flex-col z-10 shadow-2xl"
              >
                {/* Close Button Header */}
                <div className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                      {selectedBlog.category}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Clock size={12} /> {selectedBlog.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="p-2 rounded-xl bg-secondary border border-border text-muted hover:text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Article Body */}
                <div className="p-6 md:p-12">
                  <header className="mb-10 pb-8 border-b border-border">
                    <div className="text-sm text-muted mb-3 flex items-center gap-2">
                      <Calendar size={14} /> Published on {selectedBlog.date} by Erold Rayan
                    </div>
                    <h1
                      style={selectedBlog.fontFamily ? { fontFamily: selectedBlog.fontFamily } : {}}
                      className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground"
                    >
                      {selectedBlog.title}
                    </h1>
                  </header>

                  <div
                    style={selectedBlog.fontFamily ? { fontFamily: selectedBlog.fontFamily } : {}}
                    className="space-y-6 text-foreground/90 text-lg leading-relaxed"
                  >
                    {selectedBlog.content.map((block, index) => {
                      if (block.type === 'paragraph') {
                        return (
                          <p key={index} className="whitespace-pre-line text-foreground/90">
                            {renderTextWithFormatting(block.text)}
                          </p>
                        );
                      } else if (block.type === 'heading') {
                        return <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground pt-6 mt-4 flex items-center gap-2">{block.text}</h2>;
                      } else if (block.type === 'code') {
                        return (
                          <div key={index} className="my-6 rounded-xl overflow-hidden border border-border bg-secondary/80 p-5 font-mono text-sm leading-relaxed text-left text-gradient bg-clip-text select-text overflow-x-auto max-w-full">
                            <div className="flex justify-between items-center text-xs text-muted mb-3 border-b border-border pb-2 uppercase tracking-wider font-semibold">
                              <span>{block.language}</span>
                              <span className="text-primary">Source Snippet</span>
                            </div>
                            <pre className="text-foreground font-mono whitespace-pre">{block.text}</pre>
                          </div>
                        );
                      } else if (block.type === 'diagram') {
                        if (block.name === 'architecture') {
                          return <ArchitectureDiagram key={index} />;
                        } else if (block.name === 'sequence') {
                          return <SequenceDiagram key={index} />;
                        } else if (block.name === 'rag-architecture') {
                          return <RagArchitectureDiagram key={index} />;
                        }
                      }
                      return null;
                    })}
                  </div>

                  {/* Article footer tags */}
                  <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
                    {selectedBlog.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs text-muted px-3 py-1 bg-secondary border border-border rounded-full">
                        <Tag size={12} /> {tag}
                      </span>
                    ))}
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
