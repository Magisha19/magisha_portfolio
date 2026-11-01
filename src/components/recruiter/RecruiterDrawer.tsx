import React from 'react';
import { X, Download, ExternalLink, Mail, Phone, Linkedin, Github, CheckCircle2, Award, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { PageId } from '../../types/portfolio';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#FAF8F5] dark:bg-[#18181B] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-2xl flex flex-col border-l border-[#E7E2DA] dark:border-[#27272A] animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between bg-[#F2EFE9] dark:bg-[#121214]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#800020] dark:bg-[#D4AF37]" />
              <h2 className="text-base font-bold font-serif uppercase tracking-wider text-[#1A1A1A] dark:text-[#F4F4F5]">
                Recruiter 10-Second Executive Summary
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#71717A] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#E7E2DA] dark:hover:bg-[#27272A] transition-colors cursor-pointer"
              aria-label="Close summary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
            
            {/* Quick Profile Bio */}
            <div className="flex items-start gap-4 p-4 bg-white dark:bg-[#202024] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-md object-cover border border-[#E7E2DA] dark:border-[#333]"
              />
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-[#800020] dark:text-[#D4AF37] font-semibold">
                  {PERSONAL_INFO.title} · Final Year Student
                </p>
                <p className="text-xs text-[#555555] dark:text-[#A1A1AA]">
                  {PERSONAL_INFO.degree}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#71717A] dark:text-[#A1A1AA] pt-0.5">
                  <span className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">CGPA: 8.7</span>
                  <span aria-hidden="true">·</span>
                  <span>{PERSONAL_INFO.college}</span>
                </div>
              </div>
            </div>

            {/* Target Opportunities */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                1. Target Roles Seeking
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="text-xs px-2.5 py-1 bg-[#F2EFE9] dark:bg-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] rounded border border-[#E7E2DA] dark:border-[#3F3F46]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Work & Internships */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                2. Practical Experience (5 Verified Highlights)
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <p className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                    Infotact Solutions — Security Associate L1 Intern (Jun–Aug 2026)
                  </p>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-0.5">
                    Security operations monitoring, log and event analysis, troubleshooting tools, and basic incident handling documentation.
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <p className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                    Mastercard (Forage) — Cybersecurity Job Simulation (Jun 2026)
                  </p>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-0.5">
                    Simulated phishing email campaign design and response analysis for employee security awareness.
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <p className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                    Marcello Tech — Cyber Security Intern (Oct 2026)
                  </p>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-0.5">
                    Intensive on-site hands-on cybersecurity tools and vulnerability assessment workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Projects */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                3. Primary Engineering Projects
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">NeuroFence (AI Security Testing)</span>
                    <span className="text-[#800020] dark:text-[#D4AF37] font-medium">Python · PyQt5</span>
                  </div>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-1">
                    Red-teaming framework evaluating 36 prompts over 252 runs, categorizing risk severity, with a PyQt5 SOC-style telemetry UI.
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">VoltGuard (Industrial Equipment Security)</span>
                    <span className="text-[#800020] dark:text-[#D4AF37] font-medium">Modbus/TCP · Scapy</span>
                  </div>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-1">
                    Integrated Modbus/TCP SCADA telemetry (RPM, pressure, flow) with Scapy packet analysis for anomalous network commands.
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-[#202024] rounded border border-[#E7E2DA] dark:border-[#2E2E33]">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">Research Paper: Two-Stage IDS</span>
                    <span className="text-[#800020] dark:text-[#D4AF37] font-medium">ICCET 2026</span>
                  </div>
                  <p className="text-[#555555] dark:text-[#A1A1AA] mt-1">
                    Presented at the 14th International Conference on Contemporary Engineering and Technology, solving minority attack class imbalance.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Links */}
            <div className="pt-2 border-t border-[#E7E2DA] dark:border-[#27272A] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                4. Immediate Contact
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 p-2 bg-[#F2EFE9] dark:bg-[#27272A] rounded hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-2 p-2 bg-[#F2EFE9] dark:bg-[#27272A] rounded hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-[#E7E2DA] dark:border-[#27272A] bg-[#F2EFE9] dark:bg-[#121214] flex flex-col sm:flex-row gap-3">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Magisha_N_Cybersecurity_Resume.pdf"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#800020] hover:bg-[#68001a] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <button
              onClick={() => {
                onNavigate('resume');
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-[#27272A] border border-[#D5CFCE] dark:border-[#3F3F46] text-[#1A1A1A] dark:text-[#F4F4F5] text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#FAF8F5] dark:hover:bg-[#323238] transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
