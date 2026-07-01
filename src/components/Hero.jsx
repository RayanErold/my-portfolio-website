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
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
                Available for Internships & Projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Hi, I'm <span className="text-gradient">Erold Rayan.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl opacity-90 font-serif"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Software engineer specializing in AI-integrated systems, multi-agent architectures, and full-stack platforms. Currently pursuing a B.S. in Computer Science & Information Security while engineering at the intersection of robust backend systems and modern intelligence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                Contact Me
              </a>
              <button className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-3 px-6">
                <Download size={20} /> Resume
              </button>
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
                className="absolute inset-0 border border-primary/20 rounded-xl"
              />
              <motion.div 
                animate={{ rotate: -2 }}
                whileHover={{ rotate: 2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute inset-3 border border-accent/15 rounded-xl pointer-events-none"
              />
              
              {/* Corner tech marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br" />

              {/* Profile image frame */}
              <div className="absolute inset-4 overflow-hidden border border-white/10 bg-secondary rounded-lg">
                <img 
                  src={profilePic} 
                  alt="Erold Rayan Portrait" 
                  className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Tech scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,230,118,0.03)_50%)] bg-[size:100%_4px] pointer-events-none" />
              </div>
              
              {/* Decorative Metadata tag */}
              <div className="absolute -bottom-3 right-6 px-3 py-1 rounded bg-black border border-white/10 text-[10px] font-mono text-gray-400 tracking-wider">
                LOC: 40.7128° N // SYS: CL1-ENG
              </div>
              
              <div className="absolute -top-3 left-6 px-3 py-1 rounded bg-black border border-primary/20 text-[10px] font-mono text-primary tracking-widest uppercase font-bold">
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
