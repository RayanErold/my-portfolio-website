import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Activity, Users, CreditCard } from 'lucide-react';

const projects = [
  {
    title: "SubsTrack",
    description: "Subscription management platform with ML-powered churn prediction and real-time cross-platform synchronization.",
    icon: <CreditCard className="text-purple-400" />,
    tech: ["React Native", "Supabase", "Stripe", "Resend", "ML"],
    metrics: ["-15% Churn Reduction", "Real-time Sync"],
    github: "https://github.com/RayanErold/SubsTrack",
    live: "#",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "DateSpark",
    description: "AI-powered date recommendation platform with location intelligence and subscription systems.",
    icon: <Sparkles className="text-yellow-400" />,
    tech: ["Node.js", "Supabase", "LLM APIs", "Stripe", "Google Maps"],
    metrics: ["AI-Powered Recommendations", "Real-time Locations"],
    github: "https://github.com/RayanErold/DateSpark",
    live: "https://datespark.live/",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Mentor Matching AI",
    description: "Python-based matching system utilizing LLMs to connect mentors and mentees effectively.",
    icon: <Users className="text-blue-400" />,
    tech: ["Python", "OpenAI", "PostgreSQL", "Automation"],
    metrics: ["-20% Manual Effort", "+70% Accuracy"],
    github: "#",
    live: "#",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Engagement Analytics",
    description: "Real-time behavior tracking and analytics dashboard for user retention optimization.",
    icon: <Activity className="text-green-400" />,
    tech: ["REST APIs", "Redis", "React", "Data Vis"],
    metrics: ["+8% User Retention", "Real-time Tracking"],
    github: "#",
    live: "#",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A selection of projects where I've combined backend engineering with artificial intelligence to solve real problems.
            </p>
          </div>
          <a href="https://github.com/RayanErold" target="_blank" className="text-primary hover:underline flex items-center gap-2 font-medium">
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col h-full glass-card overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  {project.metrics.map(m => (
                    <div key={m} className="text-sm text-primary font-medium flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" /> {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={project.live} className="flex-grow flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  View Project <ExternalLink size={16} />
                </a>
                <a href={project.github} className="w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
