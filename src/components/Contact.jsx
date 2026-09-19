import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-border">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="eyebrow mb-3"><span className="text-muted">06</span> Get in touch</span>
          <h2 className="font-display text-3xl md:text-[2.6rem] mt-3 text-foreground leading-tight">
            Let's build something <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="text-muted text-base mt-5 max-w-[48ch] leading-relaxed">
            Looking for an AI engineer for your team, have a backend system challenge, or just want to connect? Reach out directly — I read every message.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://github.com/RayanErold" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GitHub <ArrowRight size={14} className="-rotate-45" />
            </a>
            <a href="https://linkedin.com/in/rayanmeguie" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn <ArrowRight size={14} className="-rotate-45" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-px bg-border border border-border"
        >
          <a href="mailto:rayanerold@gmail.com" className="bg-background hover:bg-background-raised transition-colors flex items-center justify-between gap-3 p-5">
            <span>
              <span className="font-mono text-[0.72rem] uppercase tracking-wide text-muted flex items-center gap-1.5"><Mail size={13} /> Direct email</span>
              <span className="font-mono text-[0.95rem] text-foreground block mt-1">rayanerold@gmail.com</span>
            </span>
            <ArrowRight size={16} className="text-accent shrink-0" />
          </a>
          <a href="tel:9296607912" className="bg-background hover:bg-background-raised transition-colors flex items-center justify-between gap-3 p-5">
            <span>
              <span className="font-mono text-[0.72rem] uppercase tracking-wide text-muted flex items-center gap-1.5"><Phone size={13} /> Phone</span>
              <span className="font-mono text-[0.95rem] text-foreground block mt-1">929-660-7912</span>
            </span>
            <ArrowRight size={16} className="text-accent shrink-0" />
          </a>
          <div className="bg-background flex items-center justify-between gap-3 p-5">
            <span>
              <span className="font-mono text-[0.72rem] uppercase tracking-wide text-muted flex items-center gap-1.5"><MapPin size={13} /> Location</span>
              <span className="font-mono text-[0.95rem] text-foreground block mt-1">New York City, NY</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
