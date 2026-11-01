import React from 'react';
import { PageId, Project } from '../types/portfolio';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCES_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { CyberTerminal } from '../components/terminal/CyberTerminal';
import {
  ArrowRight,
  Download,
  Shield,
  FileCheck,
  ChevronRight,
  ExternalLink,
  Layers,
  Award,
  Terminal,
  Activity,
  Briefcase,
  GraduationCap
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
  onOpenRecruiter: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenRecruiter,
}) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION — Split Editorial Layout */}
      <section className="pt-8 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#800020] dark:text-[#D4AF37]">
              <span>Security Operations · Intrusion Detection · AI Safety</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4F4F5] leading-[1.1]">
              Magisha N
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#800020] dark:text-[#D4AF37] font-semibold italic">
              Cybersecurity Enthusiast & Security Operations Specialist
            </p>

            <p className="text-base text-[#4A4A4A] dark:text-[#A1A1AA] leading-relaxed max-w-2xl">
              Final-year B.E. Computer Science and Engineering (Cyber Security) undergraduate at Sriram Engineering College (8.7 CGPA, 2nd Rank). Hands-on experience in L1 SOC security monitoring, log and event analysis, Modbus/TCP industrial security, and prompt-based LLM safety testing. Published peer-reviewed IDS research at ICCET 2026.
            </p>

            {/* Target Role Tags */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#71717A] dark:text-[#71717A] block mb-2">
                Actively Pursuing Opportunities In:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['SOC Analyst (L1)', 'Security Operations', 'Information Security', 'AI Safety & Testing'].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-white dark:bg-[#1E1E22] text-[#1A1A1A] dark:text-[#E4E4E7] border border-[#E7E2DA] dark:border-[#2E2E33] rounded font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-white bg-[#800020] hover:bg-[#68001a] dark:bg-[#800020] dark:hover:bg-[#990026] rounded-md transition-all shadow-sm cursor-pointer"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Magisha_N_Cybersecurity_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] bg-white dark:bg-[#202024] hover:bg-[#FAF8F5] dark:hover:bg-[#27272A] border border-[#D5CFCE] dark:border-[#333338] rounded-md transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                Download Resume
              </a>

              <button
                onClick={() => onNavigate('certifications')}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-[#666] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4" />
                View 20+ Credentials
              </button>
            </div>
          </div>

          {/* Right Column: Magisha's Authentic High-Res Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-3 bg-[#EFECE6] dark:bg-[#1C1C20] rounded-2xl -rotate-1 border border-[#E2DDD5] dark:border-[#2E2E33] -z-10" />
              
              <div className="rounded-xl overflow-hidden border-2 border-[#800020]/20 dark:border-[#D4AF37]/30 shadow-2xl bg-white dark:bg-[#121214]">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Magisha N - Cybersecurity Candidate"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[3/4] hover:scale-[1.01] transition-transform duration-300"
                />
                
                {/* Photo Caption Strip */}
                <div className="p-4 bg-[#FAF8F5] dark:bg-[#141416] border-t border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-sm text-[#1A1A1A] dark:text-[#F4F4F5]">
                      Magisha N
                    </p>
                    <p className="text-[11px] text-[#6B7280] dark:text-[#A1A1AA]">
                      B.E. CSE (Cyber Security) · Sriram Engg. College
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#800020] dark:text-[#D4AF37] px-2 py-0.5 bg-[#800020]/10 dark:bg-[#D4AF37]/10 rounded">
                    CGPA 8.7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI Strip Below Split */}
        <div className="mt-14 pt-8 border-t border-[#E7E2DA] dark:border-[#27272A] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold font-serif text-[#800020] dark:text-[#D4AF37] tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-[#6B7280] dark:text-[#A1A1AA] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK RECRUITER EXECUTIVE CALLOUT */}
      <section className="p-6 sm:p-8 bg-white dark:bg-[#1A1A1E] rounded-xl border border-[#E7E2DA] dark:border-[#2A2A30] shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37]">
              <Shield className="w-4 h-4" />
              <span>Recruiter Overview · Verified Candidate Qualifications</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Trained in SOC Operations, Industrial Protocols, and AI Red Teaming
            </h3>
            <p className="text-sm text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
              Seeking immediate entry-level and internship placements in Security Operations (L1), Vulnerability Analysis, Threat Monitoring, or AI Safety. Readily available for technical discussions and coding/triage evaluations.
            </p>
          </div>
          <button
            onClick={onOpenRecruiter}
            className="shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded-md transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Open 10-Second Summary
          </button>
        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7E2DA] dark:border-[#27272A] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
              Engineering Case Studies
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Featured Technical Projects
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] hover:underline cursor-pointer"
          >
            View All Projects
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#18181B] rounded-xl overflow-hidden border border-[#E7E2DA] dark:border-[#27272A] hover:border-[#800020]/40 dark:hover:border-[#D4AF37]/50 transition-all duration-200 flex flex-col shadow-sm"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] bg-[#121214] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-mono px-2 py-1 bg-black/75 backdrop-blur-sm text-white rounded">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] group-hover:text-[#800020] dark:group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA]">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#555555] dark:text-[#A1A1AA] line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#E7E2DA] dark:border-[#27272A]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#202024] text-[#666] dark:text-[#D4D4D8] rounded border border-[#E7E2DA] dark:border-[#333]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-[#71717A]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] bg-[#800020]/5 hover:bg-[#800020]/10 dark:bg-[#800020]/20 dark:hover:bg-[#800020]/30 rounded transition-colors cursor-pointer"
                  >
                    Inspect Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE INTERACTIVE TERMINAL SECTION */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            Signature Interactive Feature
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
            Cybersecurity Analyst Diagnostic Terminal
          </h2>
          <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
            Query profile records, project outcomes, and verification hashes directly via pre-configured safe commands.
          </p>
        </div>

        <CyberTerminal onNavigate={onNavigate} />
      </section>

      {/* INTERNSHIPS & EXPERIENCE OVERVIEW */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E7E2DA] dark:border-[#27272A] pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
              Field Experience
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Internships & Industry Training
            </h2>
          </div>
          <button
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] hover:underline cursor-pointer"
          >
            View Full Timeline
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES_DATA.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="p-6 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#800020] dark:text-[#D4AF37] font-semibold block">
                  {exp.duration}
                </span>
                <h3 className="font-serif font-bold text-base text-[#1A1A1A] dark:text-[#F4F4F5]">
                  {exp.role}
                </h3>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium">
                  {exp.organization} · {exp.workMode}
                </p>
                <p className="text-xs text-[#555555] dark:text-[#D4D4D8] line-clamp-3 leading-relaxed">
                  {exp.responsibilities[0]}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between text-[11px]">
                <span className="text-[#71717A]">{exp.toolsAndTech.slice(0, 2).join(' · ')}</span>
                <button
                  onClick={() => onNavigate('experience')}
                  className="text-[#800020] dark:text-[#D4AF37] font-semibold hover:underline cursor-pointer"
                >
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION STRIP */}
      <section className="p-8 sm:p-12 bg-[#800020] text-white rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
            Let's Collaborate
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to contribute to your Security Operations or Threat Research team.
          </h2>
          <p className="text-sm text-rose-100 leading-relaxed">
            Open for SOC Analyst (L1), Cybersecurity Associate, Vulnerability Management, and AI Safety positions across India or remote.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#FAF8F5] hover:bg-white rounded-md transition-all shadow cursor-pointer"
          >
            Get In Touch
          </button>
          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="Magisha_N_Cybersecurity_Resume.pdf"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 rounded-md transition-all cursor-pointer"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>

    </div>
  );
};
