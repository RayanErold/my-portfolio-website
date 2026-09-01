import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cloud, Brain, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-primary" size={20} />,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Backend & Systems",
    icon: <Database className="text-accent" size={20} />,
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "PostgreSQL", "Supabase"]
  },
  {
    title: "AI & Data Engineering",
    icon: <Brain className="text-purple-400" size={20} />,
    skills: ["Groq & LLMs", "ChromaDB Vector DB", "RAG Pipelines", "DistilBERT Fine-Tuning", "Multi-Agent Systems", "LangChain"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-emerald-400" size={20} />,
    skills: ["Google Cloud", "Docker", "CI/CD Pipelines", "Git & GitHub", "Vercel / Netlify"]
  },
  {
    title: "Frontend Engineering",
    icon: <Layout className="text-sky-400" size={20} />,
    skills: ["React.js", "React Native", "Tailwind CSS", "Framer Motion", "Gradio & Streamlit"]
  },
  {
    title: "Security & Auth",
    icon: <Lock className="text-red-400" size={20} />,
    skills: ["JWT Authentication", "OAuth 2.0", "API Rate Limiting", "Statutory Data Compliance"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2 font-light">
            // Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-foreground">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            Technologies and frameworks I engineer with to deliver durable production software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.12)] transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10 group-hover:border-primary/30">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-foreground tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04, y: -1 }}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

