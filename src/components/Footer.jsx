import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="font-mono text-sm tracking-wide text-foreground flex items-center gap-2">
              <span className="w-6 h-6 border border-foreground flex items-center justify-center text-[0.65rem] font-bold">RM</span>
            </a>
            <p className="text-muted text-xs font-mono mt-2">
              Engineering AI &amp; distributed systems with impact.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Github size={17} />
            </a>
            <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              <Linkedin size={17} />
            </a>
            <a href="mailto:rayanerold@gmail.com" className="text-muted hover:text-foreground transition-colors">
              <Mail size={17} />
            </a>
          </div>

          <p className="text-muted text-xs font-mono">
            © {currentYear} Rayan Erold Tsapi Meguie.
          </p>
        </div>
      </div>
    </footer>
  );
}
