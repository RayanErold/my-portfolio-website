import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-xl font-light font-mono tracking-widest text-foreground flex items-center gap-1">
              <span>RM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </a>
            <p className="text-gray-500 text-xs font-mono mt-1">
              Engineering AI & Distributed Systems with Impact.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1 hover:scale-110">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-1 hover:scale-110">
              <Linkedin size={18} />
            </a>
            <a href="mailto:rayanerold@gmail.com" className="text-gray-400 hover:text-white transition-colors p-1 hover:scale-110">
              <Mail size={18} />
            </a>
          </div>

          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} Rayan Erold Tsapi Meguie.
          </p>
        </div>
      </div>
    </footer>
  );
}

