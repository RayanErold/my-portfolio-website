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

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Professional Journey</h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center md:left-1/2">
                <Briefcase size={14} className="text-primary" />
              </div>

              <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:pl-12 text-left'}`}>
                <div className={`glass-card ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className={`flex items-center gap-2 mb-2 text-primary font-bold ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={16} /> {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-gray-400 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="font-medium text-white">{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <MapPin size={14} /> {exp.location}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
