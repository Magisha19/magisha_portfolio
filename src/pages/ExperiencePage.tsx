import React from 'react';
import { PageId, Certificate } from '../types/portfolio';
import { EXPERIENCES_DATA, CERTIFICATES_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  Shield,
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenCertificate: (cert: Certificate) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onNavigate,
  onOpenCertificate,
}) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Professional Background
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Experience & Internships
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Five verified industry internships and practical simulations across Security Operations (L1), phishing analysis, AI workflow deployment, and real-world data science.
        </p>

        {/* Quick summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A]">
            <p className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Total Experiences</p>
            <p className="text-2xl font-bold font-serif text-[#800020] dark:text-[#D4AF37] mt-1">5 Verified</p>
          </div>
          <div className="p-4 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A]">
            <p className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Primary Specialization</p>
            <p className="text-2xl font-bold font-serif text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">SOC & Cyber</p>
          </div>
          <div className="p-4 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A]">
            <p className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Work Delivery</p>
            <p className="text-2xl font-bold font-serif text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">Remote & Onsite</p>
          </div>
          <div className="p-4 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A]">
            <p className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Documentation</p>
            <p className="text-2xl font-bold font-serif text-[#800020] dark:text-[#D4AF37] mt-1">100% Verified</p>
          </div>
        </div>
      </section>

      {/* Editorial Timeline */}
      <section className="space-y-12">
        {EXPERIENCES_DATA.map((exp, idx) => {
          // Find matching certificate if available
          const matchingCert = CERTIFICATES_DATA.find(
            (c) =>
              c.image === exp.certificateImage ||
              c.name.toLowerCase().includes(exp.organization.toLowerCase()) ||
              c.issuingOrganization.toLowerCase().includes(exp.organization.toLowerCase())
          );

          return (
            <div
              key={exp.id}
              className="p-6 sm:p-8 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-6"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E7E2DA] dark:border-[#27272A] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-semibold">
                    <span>{exp.type}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.workMode}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                    {exp.role}
                  </h2>
                  <p className="text-sm font-semibold text-[#555555] dark:text-[#A1A1AA]">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <span className="text-xs font-mono font-semibold px-3 py-1 bg-[#FAF8F5] dark:bg-[#222226] border border-[#E7E2DA] dark:border-[#333] rounded text-[#1A1A1A] dark:text-[#F4F4F5]">
                    {exp.duration}
                  </span>
                  {exp.verified && (
                    <span className="text-[11px] text-[#800020] dark:text-[#D4AF37] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Credential
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Responsibilities & Learning Outcomes */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                      Key Responsibilities & Operational Work
                    </h3>
                    <ul className="space-y-2 text-xs text-[#444444] dark:text-[#D4D4D8]">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                      Learning Outcomes & Applied Knowledge
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#555555] dark:text-[#D4D4D8]">
                      {exp.learningOutcomes.map((learn, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2">
                          <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                          <span>{learn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] dark:bg-[#141416] rounded-lg border border-[#E7E2DA] dark:border-[#27272A] space-y-1">
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
                      Project Deliverable & Assessment
                    </h4>
                    <p className="text-xs text-[#555555] dark:text-[#D4D4D8]">
                      {exp.projectContributions}
                    </p>
                  </div>
                </div>

                {/* Right: Tools & Certificate Preview */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block">
                      Tools & Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.toolsAndTech.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-xs bg-white dark:bg-[#27272A] border border-[#E7E2DA] dark:border-[#3F3F46] rounded text-[#1A1A1A] dark:text-[#E4E4E7]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate preview button */}
                  {exp.certificateImage && (
                    <div className="p-3 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A] space-y-2">
                      <div className="rounded overflow-hidden border border-[#E7E2DA] dark:border-[#333] max-h-32 bg-[#121214]">
                        <img
                          src={exp.certificateImage}
                          alt={`${exp.organization} Certificate`}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <button
                        onClick={() => {
                          if (matchingCert) {
                            onOpenCertificate(matchingCert);
                          } else {
                            onOpenCertificate({
                              id: exp.id,
                              name: `${exp.role} Certificate`,
                              issuingOrganization: exp.organization,
                              completionDate: exp.duration,
                              category: 'Cybersecurity',
                              image: exp.certificateImage!,
                              description: exp.projectContributions,
                              tags: exp.toolsAndTech,
                            });
                          }
                        }}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#800020] dark:text-[#D4AF37] hover:underline cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        View Verified Certificate Lightbox
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};
