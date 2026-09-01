import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-sky-400 z-[60] origin-left shadow-[0_0_10px_rgba(79,70,229,0.5)]"
        style={{ scaleX }}
      />

      {/* Ambient Mouse Spotlight Follower */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        animate={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.06), transparent 80%)`,
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Playground />
        <Experience />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

