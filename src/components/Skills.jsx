import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cloud, Brain, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-emerald-400" />,
    skills: ["Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Backend",
    icon: <Database className="text-cyan-400" />,
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
  },
  {
    title: "Frontend",
    icon: <Layout className="text-blue-400" />,
    skills: ["React.js", "React Native", "Tailwind CSS"]
  },
  {
    title: "Databases",
    icon: <Database className="text-teal-400" />,
    skills: ["PostgreSQL", "Supabase", "Firebase", "NoSQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-indigo-400" />,
    skills: ["Docker", "CI/CD", "GCP", "Render", "Netlify"]
  },
  {
    title: "AI / ML",
    icon: <Brain className="text-purple-400" />,
    skills: ["LLM APIs", "Prompt Engineering", "Embeddings", "RAG Pipelines", "Multi-Agent Architectures"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 text-lg">
            A comprehensive set of technologies I use to build robust and intelligent applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-primary/30 transition-colors cursor-default"
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
