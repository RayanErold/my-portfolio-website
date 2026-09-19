import { motion } from 'framer-motion';

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

export default function Experience() {
  return (
    <section id="experience" className="section-container border-t border-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div>
          <span className="eyebrow mb-3"><span className="text-muted">03</span> Professional history</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 text-foreground">Experience &amp; impact</h2>
        </div>
        <p className="text-muted max-w-md text-sm md:text-base leading-relaxed">
          Scalable APIs, LLM matching algorithms, and automated pipeline tooling, delivered in collaborative teams.
        </p>
      </div>

      <div>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 90, damping: 20, delay: i * 0.08 }}
            className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 ${i > 0 ? 'border-t border-border' : ''}`}
          >
            <div className="font-mono text-[0.78rem] text-muted leading-relaxed">
              {exp.location}<br />{exp.period}
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-foreground">{exp.role}</h3>
              <div className="font-mono text-sm text-accent mt-1.5">{exp.company}</div>
              <ul className="mt-4 space-y-2.5">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-muted text-sm leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
