import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/ProfessionalHeadsot_QuaterZip.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-pulse" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Staggered text block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-left flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Software & AI Systems Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
              Hi, I'm <span className="text-gradient">Rayan Erold Tsapi Meguie.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl opacity-90 font-light"
            >
              Software engineer building AI-integrated systems, multi-agent architectures, and resilient backend platforms.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Contact Me</span>
              </a>
              <a 
                href="/Rayan_Erold_Resume_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:border-emerald-500/40 text-emerald-400"
              >
                <Download size={16} />
                <span>View Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture with Blueprint tech theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[420px] ml-auto group">
              {/* Outer offset accent frames */}
              <motion.div 
                animate={{ rotate: 1 }}
                whileHover={{ rotate: -1, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-0 border border-primary/30 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-cyan-500/5"
              />
              <motion.div 
                animate={{ rotate: -2 }}
                whileHover={{ rotate: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-3 border border-accent/20 rounded-2xl pointer-events-none"
              />
              
              {/* Corner tech marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br" />

              {/* Profile image frame */}
              <div className="absolute inset-4 overflow-hidden border border-white/10 bg-slate-900 rounded-xl shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Rayan Erold Tsapi Meguie Portrait" 
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(16,185,129,0.03)_50%)] bg-[size:100%_4px] pointer-events-none" />
              </div>

              {/* Floating Badge 1: Multi-Agent AI */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 px-3.5 py-1.5 rounded-xl glass border border-white/15 text-xs font-mono text-emerald-300 font-semibold shadow-xl flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Multi-Agent AI</span>
              </motion.div>

              {/* Floating Badge 2: Python / FastAPI */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-2 px-3.5 py-1.5 rounded-xl glass border border-white/15 text-xs font-mono text-cyan-300 font-semibold shadow-xl flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Python &bull; FastAPI &bull; Supabase</span>
              </motion.div>

              {/* Decorative Metadata tag */}
              <div className="absolute -bottom-3 right-6 px-3 py-1 rounded bg-black/90 border border-white/10 text-[10px] font-mono text-gray-400 tracking-wider">
                NYC &bull; CS @ John Jay
              </div>
              
              <div className="absolute -top-3 right-6 px-3 py-1 rounded bg-black/90 border border-primary/30 text-[10px] font-mono text-emerald-400 tracking-widest uppercase font-bold">
                [ Rayan Erold ]
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
