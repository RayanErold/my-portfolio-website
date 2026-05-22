import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter">
              RM<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Engineering systems with impact.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/RayanErold" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/rayan-meguie-88927127b" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rayanerold@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} Rayan Meguie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
