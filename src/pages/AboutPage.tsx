import React from 'react';
import { PageId } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Shield,
  Target,
  Brain,
  Compass,
  Award,
  ArrowRight,
  CheckCircle,
  FileText,
  Lock,
  Cpu
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Candidate Narrative
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          About Magisha N
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          An emerging cybersecurity engineer dedicated to defensive operations, anomaly detection, rigorous prompt-based AI evaluation, and operational technology protection.
        </p>
      </section>

      {/* Editorial Profile Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Portrait and Quick Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-xl overflow-hidden border border-[#E7E2DA] dark:border-[#27272A] shadow-md bg-white dark:bg-[#18181B]">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt="Magisha N - Professional Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
            <div className="p-4 bg-[#FAF8F5] dark:bg-[#141416] border-t border-[#E7E2DA] dark:border-[#27272A] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA]">Current Standing</span>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">Final-Year Undergraduate</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA]">Department Rank</span>
                <span className="font-bold text-[#800020] dark:text-[#D4AF37]">2nd Rank Topper (2024–25)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA]">Cumulative CGPA</span>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">8.7 / 10</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#71717A] dark:text-[#A1A1AA]">Base Location</span>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">Tiruttani & Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Core Strengths Box */}
          <div className="p-6 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Core Competencies
            </h3>
            <ul className="space-y-2 text-xs text-[#555555] dark:text-[#D4D4D8]">
              <li className="flex items-start gap-2">
                <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                <span>Structured, empirical test case design for complex systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                <span>Alert triage, log analysis, and incident documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                <span>Industrial OT protocol inspection (Modbus/TCP, Scapy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                <span>Large Language Model (LLM) red-teaming and safety benchmarks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                <span>Published researcher with international conference defense experience</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Narrative Chapters */}
        <div className="lg:col-span-7 space-y-8 text-sm leading-relaxed text-[#4A4A4A] dark:text-[#D4D4D8]">
          
          {/* Chapter 1: Foundations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-bold">
              <span>Chapter 01</span>
              <span aria-hidden="true">·</span>
              <span>Educational Journey & Foundations</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Discipline and Scholastic Excellence in Computer Science
            </h2>
            <p>
              My technical path began at Government Higher Secondary School in Maddur, Tiruttani, where rigorous study in mathematics and science cemented my fascination with computing logic. Choosing to specialize in Computer Science and Engineering with a concentration in Cyber Security at Sriram Engineering College allowed me to channel that curiosity into safeguarding critical digital infrastructure.
            </p>
            <p>
              Throughout my academic years, I maintained consistent scholastic dedication, achieving an <span className="font-semibold text-[#1A1A1A] dark:text-white">8.7 CGPA</span> and earning the <span className="font-semibold text-[#800020] dark:text-[#D4AF37]">Academic Excellence Award (Second Rank)</span> in the Cyber Security Department for the 2024–2025 academic session.
            </p>
          </div>

          {/* Chapter 2: Practical Security Experience */}
          <div className="space-y-3 pt-4 border-t border-[#E7E2DA] dark:border-[#27272A]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-bold">
              <span>Chapter 02</span>
              <span aria-hidden="true">·</span>
              <span>The Journey into Cybersecurity & SOC</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Hands-On Operational Defense and Incident Analysis
            </h2>
            <p>
              I believe that real cybersecurity proficiency is built not in textbooks alone, but on the analysis bench. At <span className="font-semibold text-[#1A1A1A] dark:text-white">Infotact Solutions</span>, I served as a Security Associate L1 Intern, gaining operational exposure to security monitoring, log parsing, event correlation, and initial incident triage protocols.
            </p>
            <p>
              To complement my defensive foundations with social engineering awareness, I completed the <span className="font-semibold text-[#1A1A1A] dark:text-white">Mastercard Cybersecurity Job Simulation</span> on Forage, designing phishing email simulations and evaluating employee response patterns. In parallel, hands-on training at <span className="font-semibold text-[#1A1A1A] dark:text-white">Marcello Tech</span> and workshops led by industry practitioners (such as TCS security consultants) provided real-world exposure to vulnerability scanning and network troubleshooting.
            </p>
          </div>

          {/* Chapter 3: Frontiers in AI Safety & OT Protection */}
          <div className="space-y-3 pt-4 border-t border-[#E7E2DA] dark:border-[#27272A]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-bold">
              <span>Chapter 03</span>
              <span aria-hidden="true">·</span>
              <span>Frontiers: Industrial OT & AI Red Teaming</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Expanding Beyond Perimeter Defense
            </h2>
            <p>
              As computing evolves, threats increasingly target two distinct domains: industrial physical systems and emerging generative AI models. In <span className="font-semibold text-[#1A1A1A] dark:text-white">VoltGuard</span>, I tackled industrial network security by integrating Modbus/TCP sensor feeds (RPM, pressure, flow rate) with Scapy packet analysis routines to detect abnormal telemetry or unauthorized register modifications.
            </p>
            <p>
              In <span className="font-semibold text-[#1A1A1A] dark:text-white">NeuroFence</span>, I applied empirical testing rigor to AI safety, executing 252 structured evaluation passes across 36 adversarial prompt variations to detect prompt injection, jailbreaking, and unexpected model non-compliance.
            </p>
            <p>
              My curiosity about class-imbalanced attack data culminated in co-authoring and presenting a research paper entitled <span className="italic font-semibold text-[#800020] dark:text-[#D4AF37]">"A Secure-Driven Two Stage IDS for Reliable Detection of Minority Attack"</span> at the 14th International Conference on Contemporary Engineering and Technology (ICCET 2026) in Chennai.
            </p>
          </div>

          {/* Chapter 4: Career Target & Philosophy */}
          <div className="space-y-3 pt-4 border-t border-[#E7E2DA] dark:border-[#27272A]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-bold">
              <span>Chapter 04</span>
              <span aria-hidden="true">·</span>
              <span>Aspirations & Learning Philosophy</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              Continuous Learning and Professional Impact
            </h2>
            <p>
              My goal is to secure an entry-level or junior role as a <span className="font-semibold text-[#1A1A1A] dark:text-white">SOC Analyst (L1), Security Analyst, or Vulnerability Associate</span>. I approach problems methodically: understanding the baseline normal state, mapping the attack surface, formulating test cases, and documenting findings clearly so teams can remediate effectively.
            </p>
            <p>
              I am committed to lifelong learning, having earned certifications from Cisco, NPTEL (IIT Madras & IIT Kharagpur), IBM SkillsBuild, and UNICEF YuWaah. I am ready to bring discipline, technical integrity, and high curiosity to a mission-driven security team.
            </p>
          </div>

          {/* Navigation CTAs */}
          <div className="pt-6 border-t border-[#E7E2DA] dark:border-[#27272A] flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded-md transition-colors cursor-pointer"
            >
              Explore Skills Matrix
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F4F4F5] bg-white dark:bg-[#202024] border border-[#D5CFCE] dark:border-[#333] hover:bg-[#FAF8F5] rounded-md transition-colors cursor-pointer"
            >
              View Engineering Projects
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
