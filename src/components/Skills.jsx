import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "PostgreSQL", "Supabase"]
  },
  {
    title: "AI & Data Engineering",
    skills: ["Groq & LLMs", "ChromaDB Vector DB", "RAG Pipelines", "DistilBERT Fine-Tuning", "Multi-Agent Systems", "LangChain"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud", "Docker", "CI/CD Pipelines", "Git & GitHub", "Vercel / Netlify"]
  },
  {
    title: "Frontend Engineering",
    skills: ["React.js", "React Native", "Tailwind CSS", "Framer Motion", "Gradio & Streamlit"]
  },
  {
    title: "Security & Auth",
    skills: ["JWT Authentication", "OAuth 2.0", "API Rate Limiting", "Statutory Data Compliance"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-border">
      <div className="mb-14">
        <span className="eyebrow mb-3"><span className="text-muted">04</span> Core competencies</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 text-foreground">Technical arsenal</h2>
        <p className="text-muted max-w-md text-sm md:text-base mt-3 leading-relaxed">
          Technologies and frameworks used to deliver durable production software.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.06 }}
          >
            <span className="eyebrow mb-3.5">{category.title}</span>
            <ul>
              {category.skills.map(skill => (
                <li key={skill} className="flex justify-between py-2 border-t border-border last:border-b text-sm text-foreground">
                  {skill} <span className="text-muted">—</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
