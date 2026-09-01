import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
              // Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6 text-foreground">
              Let's Build Something <span className="text-gradient font-light">Extraordinary.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 font-light leading-relaxed">
              Whether you are looking for an AI engineer for your team, have a backend system challenge, or just want to connect, feel free to reach out.
            </p>

            <div className="space-y-6 font-light">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Direct Email</p>
                  <a href="mailto:rayanerold@gmail.com" className="text-base sm:text-lg font-light text-foreground hover:text-primary transition-colors">
                    rayanerold@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Phone</p>
                  <a href="tel:9296607912" className="text-base sm:text-lg font-light text-foreground hover:text-accent transition-colors">
                    929-660-7912
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <MapPin className="text-sky-400" size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-base sm:text-lg font-light text-foreground">New York City, NY</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-white/10 shadow-2xl"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <h3 className="text-2xl font-light text-foreground mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm font-light mb-8 max-w-sm">
                  Thank you for reaching out. I'll get back to your email as soon as possible.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all font-light"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your inquiry or opportunity..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-none font-light"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

