import { useState } from 'react';
import { ShieldCheck, ExternalLink, Trophy, Check, Copy, Calendar, Tag, FileText } from 'lucide-react';

const certificates = [
  {
    id: "codepath-ai-eng-2026",
    title: "Applications of AI Engineering",
    issuer: "CodePath",
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
    <section id="certificates" className="section-container border-t border-border">
      <div className="mb-14">
        <span className="eyebrow mb-3"><span className="text-muted">05</span> Verified credentials &amp; badges</span>
        <h2 className="font-display text-3xl md:text-5xl mt-2 text-foreground">Certifications &amp; honors</h2>
        <p className="text-muted max-w-xl text-sm md:text-base mt-3 leading-relaxed">
          Validated certifications demonstrating mastery in artificial intelligence engineering, RAG pipelines, and multi-agent system design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div key={cert.id} className="plate flex flex-col justify-between p-7">
            <div>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 border border-border-strong text-foreground flex items-center gap-1.5">
                    <ShieldCheck size={13} /> {cert.issuer}
                  </span>
                  {cert.isHonors && (
                    <span className="font-mono text-xs px-2.5 py-1 border border-signal text-signal flex items-center gap-1.5">
                      <Trophy size={13} /> {cert.distinction}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs text-muted flex items-center gap-1.5">
                  <Calendar size={12} /> {cert.issueDate}
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground">
                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-2">
                  {cert.title}
                  <ExternalLink size={15} className="text-accent" />
                </a>
              </h3>
              <p className="text-muted text-sm leading-relaxed mt-2.5 mb-5">{cert.description}</p>

              <p className="font-mono text-[0.72rem] text-muted uppercase tracking-wide mb-2.5 flex items-center gap-1.5">
                <Tag size={12} className="text-accent" /> Competencies validated
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag-chip">{skill}</span>
                ))}
              </div>

              <p className="font-mono text-[0.72rem] text-muted">
                Signed — {cert.signatory.name}, {cert.signatory.title}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-border flex items-center justify-between gap-3 flex-wrap">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !flex-1"
              >
                <FileText size={15} />
                <span>View certificate</span>
              </a>
              <button
                onClick={() => copyId(cert.credentialId)}
                className="font-mono text-xs px-3 py-2.5 border border-border-strong text-muted hover:text-foreground transition-all cursor-pointer flex items-center gap-1.5"
                title="Copy certificate ID"
              >
                {copiedId ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                <span>ID #{cert.credentialId}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
