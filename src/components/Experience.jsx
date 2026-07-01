import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Mentor Me Collective",
    period: "Current",
    location: "NYC",
    description: [
      "Built REST APIs for scalable backend systems.",
      "Created notification system integrating Slack and email.",
      "Designed administrative dashboard APIs for internal tracking.",
      "Optimized engagement metrics through data-driven API design."
    ]
  },
  {
    role: "Applications of AI Engineering Fellow",
    company: "CodePath (AI 201)",
    period: "Spring 2026",
    location: "Remote",
    description: [
      "Engineered end-to-end AI systems including semantic RAG pipelines (ChromaDB) and multi-tool agent pipelines in Python.",
      "Designed deterministic query parsing architectures and LLM validation middleware to avoid hallucinations.",
      "Collaborated inside production codebases, leading bug hunts, writing commits, and performing code reviews.",
      "Contributed open-source features to PathReview, an automated AI-powered evaluation assistant."
    ]
  },
  {
    role: "IT Support Intern",
    company: "MTA (Metropolitan Transportation Authority)",
    period: "Previous",
    location: "NYC",
    description: [
      "Automated onboarding workflows, reducing manual setup time by 20%.",
      "Managed Active Directory and ServiceNow for efficient IT operations.",
      "Supported large-scale system deployments across the agency."
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
                    <div className="flex items-center gap-1.5 text-primary font-bold text-xs bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit sm:shrink-0 font-sans">
                      <Calendar size={12} /> {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-gray-400 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
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
