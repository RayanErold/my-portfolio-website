import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/ProfessionalHeadsot_QuaterZip.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10 animate-pulse" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
                Available for Internships & Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Hi, I'm <span className="text-gradient">Erold Rayan.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
            >
              Computer Science student focused on APIs, automation, and real-world impact. Currently engineering at the intersection of systems and intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[450px] ml-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl rotate-6 -z-10" />
              <div className="absolute inset-0 border border-primary/20 rounded-3xl -rotate-3 -z-10" />

              <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 glass">
                <img
                  src={profilePic}
                  alt="Erold Rayan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
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
