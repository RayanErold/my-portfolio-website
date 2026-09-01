import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import profilePic from '../assets/ProfessionalHeadsot_QuaterZip.png';

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
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent/15 rounded-full blur-[140px] -z-10 animate-pulse" />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Staggered text block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-gray-300">Available for Fall 2026 Engineering Roles</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight mb-6 leading-[1.15] text-foreground"
            >
              Hi, I'm <span className="text-gradient font-light">Rayan Erold</span>
            </motion.h1>

            {/* Dynamic Role Switcher */}
            <motion.div variants={itemVariants} className="h-10 mb-6 flex items-center gap-3">
              <span className="text-sm font-mono text-primary uppercase tracking-widest flex items-center gap-1.5">
                <Terminal size={16} /> Specialized as:
              </span>
              <div className="relative overflow-hidden h-8 min-w-[260px] inline-block text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 font-medium text-lg text-accent font-sans flex items-center"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Engineering resilient backend infrastructure, RAG semantic search pipelines, and autonomous multi-agent software systems focused on performance and scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={16} />
              </a>
              <a href="#playground" className="btn-secondary">
                <Sparkles size={16} className="text-accent" /> AI Sandbox
              </a>
              <a 
                href="/Rayan_Erold_Resume_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-wider font-medium cursor-pointer shadow-sm"
              >
                <Download size={15} className="text-primary" /> Resume PDF
              </a>
            </motion.div>

            {/* Micro Tech Tags */}
            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-2">
                <Cpu size={14} className="text-primary" /> Python & Fast-APIs
              </span>
              <span className="flex items-center gap-2">
                <Layers size={14} className="text-accent" /> RAG & ChromaDB
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-purple-400" /> Multi-Agent Pipelines
              </span>
            </motion.div>
          </motion.div>

          {/* Profile Picture with Blueprint Tech Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.25 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] max-w-[380px] ml-auto group">
              {/* Outer offset accent frames */}
              <motion.div 
                animate={{ rotate: 1 }}
                whileHover={{ rotate: -1, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="absolute inset-0 border border-primary/25 rounded-2xl"
              />
              <motion.div 
                animate={{ rotate: -2 }}
                whileHover={{ rotate: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="absolute inset-3 border border-accent/20 rounded-2xl pointer-events-none"
              />
              
              {/* Corner tech marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br" />

              {/* Profile image frame */}
              <div className="absolute inset-4 overflow-hidden border border-white/10 bg-secondary rounded-xl shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Erold Rayan Portrait" 
                  className="w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(79,70,229,0.04)_50%)] bg-[size:100%_4px] pointer-events-none" />
              </div>
              
              {/* Decorative Metadata tag */}
              <div className="absolute -bottom-4 right-4 px-3 py-1 rounded-md bg-black/90 backdrop-blur border border-white/10 text-[10px] font-mono text-gray-400 tracking-wider">
                LOC: NYC // SYS: CL1-ENG
              </div>
              
              <div className="absolute -top-4 left-4 px-3 py-1 rounded-md bg-black/90 backdrop-blur border border-primary/30 text-[10px] font-mono text-primary tracking-widest uppercase font-medium">
                [ Erold Rayan ]
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

