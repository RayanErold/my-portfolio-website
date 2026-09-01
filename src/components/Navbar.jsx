import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, FileText } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-light tracking-widest font-mono flex items-center gap-1 group"
        >
          <span className="font-normal text-foreground group-hover:text-primary transition-colors">RM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 ml-2 pl-4 border-l border-white/10"
          >
            {/* Direct Resume PDF Link */}
            <a
              href="/Rayan_Erold_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-mono font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-primary/20"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-foreground hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1 hover:scale-110">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1 hover:scale-110">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/Rayan_Erold_Resume_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-xs flex items-center gap-1"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-400 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
                <a
                  href="/Rayan_Erold_Resume_Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl bg-primary text-black font-bold text-xs uppercase flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-foreground">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-foreground">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:rayanerold@gmail.com" className="text-gray-400 hover:text-foreground">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
