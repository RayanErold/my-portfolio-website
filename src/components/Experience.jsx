import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Mentor Me Collective — edtech nonprofit Empowering First-Generation Technologists",
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
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.92, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 1
    } 
  }
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15 
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional Journey</h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto relative space-y-12"
        >
          {/* Left Vertical Timeline Line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="relative flex flex-col gap-4"
            >
              {/* Timeline Dot */}
              <motion.div
                variants={dotVariants}
                className="absolute left-4 top-6 w-8 h-8 -translate-x-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10"
              >
                <Briefcase size={14} className="text-primary" />
              </motion.div>

              {/* Card Container */}
              <div className="w-full pl-12 md:pl-16">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card hover:border-primary/30 transition-all duration-300 text-left w-full"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 border-b border-white/5 pb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                        <span className="font-semibold text-white">{exp.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                        <MapPin size={12} className="text-primary" /> {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold text-xs bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit sm:shrink-0">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-gray-300 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
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
