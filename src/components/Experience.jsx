import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Mentor Me Collective — Empowering First-Gen Technologists",
    period: "June – Oct 2025",
    location: "New York, NY",
    description: [
      "Improved mentor-mentee match quality by 70%, measured by compatibility scores across 500+ users, by engineering an LLM-powered Python system with semantic embeddings that cut manual curation effort by 20%.",
      "Increased user retention by 8%, measured across 5,000+ tracked interactions, by building real-time REST APIs with Express.js that surfaced personalized engagement signals to platform users.",
      "Boosted interaction rates by 10%, measured via A/B test lift across two cohorts, by shipping automated Slack and email notification pipelines alongside a real-time admin analytics dashboard."
    ]
  },
  {
    role: "Software Engineering Fellow",
    company: "Tech Talent Pipeline",
    period: "April – June 2025",
    location: "New York, NY",
    description: [
      "Delivered 3 production-grade applications, measured by live CI/CD deployments on Render and Netlify, by completing an intensive full-stack bootcamp focused on end-to-end delivery.",
      "Accelerated feature delivery across all projects, measured by integration coverage across 6 third-party APIs, by implementing reusable JWT and OAuth auth modules alongside Claude, GPT-4o, Stripe, and Resend."
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 25 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 90,
      damping: 18
    } 
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.01] relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
            // Professional History
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-foreground">
            Experience & Impact
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Delivering scalable APIs, LLM matching algorithms, and automated pipeline tooling in collaborative environments.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto relative space-y-12"
        >
          {/* Left Vertical Timeline Line */}
          <div className="absolute left-4 top-3 bottom-3 w-[1px] bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="relative flex flex-col gap-4"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="absolute left-4 top-6 w-8 h-8 -translate-x-1/2 bg-[#080c14] border border-primary/60 rounded-full flex items-center justify-center z-10 shadow-[0_0_12px_rgba(79,70,229,0.3)]"
              >
                <Briefcase size={13} className="text-primary" />
              </motion.div>

              {/* Card Container */}
              <div className="w-full pl-12 md:pl-16">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card hover:border-primary/30 transition-all duration-300 text-left w-full p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-foreground tracking-tight">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-gray-400 text-xs sm:text-sm mt-1.5 font-light">
                        <span className="font-medium text-white">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span className="flex items-center gap-1 text-primary"><MapPin size={12} /> {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-mono text-xs bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full w-fit sm:shrink-0">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

