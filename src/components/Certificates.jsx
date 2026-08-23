import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Trophy, Check, Copy, Calendar, Tag, FileText } from 'lucide-react';

const certificates = [
  {
    id: "codepath-ai-eng-2026",
    title: "Applications of AI Engineering",
    issuer: "CodePath",
    issuerLogo: "CODE PATH",
    issueDate: "Summer 2026",
    credentialId: "428956",
    distinction: "Honors",
    isHonors: true,
    pdfUrl: "/CodepathAI201_Certificate.pdf",
    description: "Awarded for outstanding performance during the successful completion of the CodePath Applications of AI Engineering Course.",
    skills: [
      "AI Engineering",
      "LLMs & RAG Pipelines",
      "Multi-Agent Architectures",
      "Prompt Engineering",
      "Vector Databases",
      "Model Fine-Tuning"
    ],
    signatory: {
      name: "Michael Ellison",
      title: "Co-Founder & CEO, CodePath"
    }
  }
];

export default function Certificates() {
  const [copiedId, setCopiedId] = useState(false);

  const copyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="certificates" className="py-24 bg-white/[0.01] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-primary font-semibold mb-3 font-sans text-sm tracking-wider uppercase">
            <Award size={18} className="animate-bounce" />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl opacity-90">
            Professional certifications and honors demonstrating technical expertise, continuous learning, and mastery in advanced software development & AI engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card relative group flex flex-col justify-between overflow-hidden border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-accent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-5 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 border border-primary/20 text-primary flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck size={14} /> {cert.issuer}
                    </span>
                    {cert.isHonors && (
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-400/30 text-amber-300 flex items-center gap-1">
                        <Trophy size={13} className="text-amber-400" /> {cert.distinction}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Calendar size={12} /> {cert.issueDate}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-2"
                  >
                    <span>{cert.title}</span>
                    <ExternalLink size={16} className="inline-block text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-90">
                  {cert.description}
                </p>

                {/* Skills Badges */}
                <div className="mb-6">
                  <p className="text-xs font-mono text-gray-400 mb-2.5 flex items-center gap-1">
                    <Tag size={12} className="text-primary" /> Competencies Validated:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:text-emerald-300 font-semibold text-xs transition-all border border-primary/20 flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <FileText size={15} />
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={() => copyId(cert.credentialId)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/10 cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Copy Certificate ID"
                >
                  {copiedId ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>ID: #{cert.credentialId}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

