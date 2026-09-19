import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Philosophy', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Arsenal', href: '#skills' },
  { name: 'Credentials', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
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
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'py-4 bg-background/90 backdrop-blur-md border-border' : 'py-6 bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
        <a
          href="#"
          className="font-mono text-[0.82rem] tracking-wide flex items-center gap-2.5 shrink-0 group"
        >
          <span className="w-8 h-8 border-[1.5px] border-foreground flex items-center justify-center font-mono font-bold text-xs">RM</span>
          <span className="hidden sm:inline text-foreground group-hover:text-accent transition-colors">
            RAYAN&nbsp;EROLD&nbsp;TSAPI&nbsp;MEGUIE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border">
            <a
              href="/Rayan_Erold_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-3.5 !py-1.5"
            >
              <FileText size={14} />
              <span>Résumé</span>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 border border-border text-muted hover:text-foreground hover:border-border-strong transition-all cursor-pointer"
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to blueprint (dark) mode' : 'Switch to paper (light) mode'}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors p-1">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors p-1">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border border-border text-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="p-2 text-foreground border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-wider text-muted hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-between gap-4 mt-2 pt-4 border-t border-border">
                <a
                  href="/Rayan_Erold_Resume_Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary !px-4 !py-2"
                >
                  <FileText size={16} />
                  <span>Résumé</span>
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                    <Github size={22} />
                  </a>
                  <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                    <Linkedin size={22} />
                  </a>
                  <a href="mailto:rayanerold@gmail.com" className="text-muted hover:text-foreground">
                    <Mail size={22} />
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
