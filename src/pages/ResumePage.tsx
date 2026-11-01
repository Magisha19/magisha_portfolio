import React, { useState } from 'react';
import { PageId } from '../types/portfolio';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCES_DATA, EDUCATION_DATA, CERTIFICATES_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import {
  Download,
  Printer,
  ExternalLink,
  Eye,
  FileText,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface ResumePageProps {
  onNavigate: (page: PageId) => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Action Bar */}
      <section className="no-print border-b border-[#E7E2DA] dark:border-[#27272A] pb-6 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
            Curriculum Vitae
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
            Professional Resume
          </h1>
          <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA] mt-1">
            ATS-optimized technical resume reflecting verified coursework, internships, projects, and research.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* View mode toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#EFECE6] dark:bg-[#1F1F24] rounded-lg">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'interactive'
                  ? 'bg-white dark:bg-[#2E2E35] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-sm'
                  : 'text-[#6B7280] dark:text-[#A1A1AA]'
              }`}
            >
              Interactive ATS View
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-white dark:bg-[#2E2E35] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-sm'
                  : 'text-[#6B7280] dark:text-[#A1A1AA]'
              }`}
            >
              Original PDF Preview
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] bg-white dark:bg-[#202024] border border-[#D5CFCE] dark:border-[#333] rounded hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>

          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="Magisha_N_Cybersecurity_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </div>
      </section>

      {/* PDF View Mode */}
      {viewMode === 'pdf' && (
        <section className="bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] p-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E7E2DA] dark:border-[#27272A] mb-4 text-xs text-[#6B7280]">
            <span>Displaying Original Resume PDF Document</span>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#800020] dark:text-[#D4AF37] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Open in New Window <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <iframe
            src={PERSONAL_INFO.resumePdfUrl}
            title="Magisha N Original Resume"
            className="w-full h-[850px] rounded border border-[#E7E2DA] dark:border-[#333]"
          />
        </section>
      )}

      {/* Interactive Clean ATS Resume View */}
      {viewMode === 'interactive' && (
        <section className="bg-white dark:bg-[#18181B] text-[#1A1A1A] dark:text-[#F4F4F5] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] p-8 sm:p-14 shadow-lg max-w-4xl mx-auto space-y-8 font-sans">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b-2 border-[#1A1A1A] dark:border-[#F4F4F5] pb-6">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4F4F5]">
              MAGISHA N
            </h1>
            <p className="text-xs text-[#555555] dark:text-[#A1A1AA] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>·</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#800020] dark:text-[#D4AF37] underline">
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#800020] dark:text-[#D4AF37] underline">
                {PERSONAL_INFO.linkedinDisplay}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#800020] dark:text-[#D4AF37] underline">
                {PERSONAL_INFO.githubDisplay}
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-[#444444] dark:text-[#D4D4D8] leading-relaxed">
              {PERSONAL_INFO.shortSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <span className="font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                  B.E. Computer Science and Engineering (Cyber Security) | Sriram Engineering College, Chennai
                </span>
                <span className="text-[#71717A] font-mono text-[11px] shrink-0">
                  Expected June 2027 | CGPA: 8.7 (2nd Rank)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[#555555] dark:text-[#A1A1AA]">
                <span>Higher Secondary (12th) | Govt. Higher Secondary School, Maddur, Tiruttani</span>
                <span className="font-mono text-[11px] shrink-0">March 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[#555555] dark:text-[#A1A1AA]">
                <span>Secondary (10th) | Govt. Higher Secondary School, Maddur, Tiruttani</span>
                <span className="font-mono text-[11px] shrink-0">March 2021</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-[#444444] dark:text-[#D4D4D8]">
              <p>
                <span className="font-bold text-[#1A1A1A] dark:text-white">Cybersecurity and Networking: </span>
                Security Monitoring, Log and Event Analysis, Incident Handling, Intrusion Detection (IDS), Phishing Simulation, Ethical Hacking and Penetration Testing Basics, Nmap, Wireshark, Scapy, TCP/IP, DNS, HTTP/HTTPS, Modbus/TCP
              </p>
              <p>
                <span className="font-bold text-[#1A1A1A] dark:text-white">AI and LLM: </span>
                Large Language Models (LLMs), Prompt-Based Testing, AI Safety Testing, AI Agents Concepts, Anomaly Detection, AI and ML Fundamentals
              </p>
              <p>
                <span className="font-bold text-[#1A1A1A] dark:text-white">Testing and Analysis: </span>
                Test Case Design, Failure Analysis, Risk Categorization, Result Analysis, Issue Documentation, Bug Reporting
              </p>
              <p>
                <span className="font-bold text-[#1A1A1A] dark:text-white">Programming and Data: </span>
                Python, C, C++, Java (Basic), PyQt5, Data Preprocessing, Data Analysis, Data Visualization
              </p>
              <p>
                <span className="font-bold text-[#1A1A1A] dark:text-white">Tools & Environments: </span>
                Git, GitHub, Linux, Windows, Cloud Computing, IoT
              </p>
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Internship Experience
            </h2>
            
            {/* Marcello Tech */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>Cyber Security Intern | Marcello Tech</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">05 Oct 2026 – 12 Oct 2026</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Completed a hands-on intensive internship programme in Cyber Security and vulnerability assessment.</li>
              </ul>
            </div>

            {/* Infotact */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>Security Associate L1 Intern | Infotact Solutions (Remote)</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Jun 2026 – Aug 2026</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Worked on security operations fundamentals, including security monitoring, log and event analysis, and basic incident handling.</li>
                <li>Used security diagnostic tools for troubleshooting and prepared comprehensive documentation of findings.</li>
              </ul>
            </div>

            {/* Mastercard */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>Cybersecurity Job Simulation | Mastercard (Forage)</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Jun 2026</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Designed an authentic phishing email simulation and interpreted campaign employee response results.</li>
              </ul>
            </div>

            {/* E16 */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>AI Intern | E16 AI XR Technology (Naan Mudhalvan)</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Jan 2026 – Feb 2026</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Applied AI concepts to practical problem-solving tasks and built AI-based workflows.</li>
              </ul>
            </div>

            {/* Mandalo */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>Data Science Intern | Mandalo Tech</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Jul 2025 – Aug 2025</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Performed data preprocessing, analysis, and visualization on real-world datasets to identify patterns and present findings with "Excellent" assessment.</li>
              </ul>
            </div>
          </div>

          {/* Projects and Research */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Projects and Research
            </h2>

            {/* NeuroFence */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>NeuroFence – AI Security and Reliability Testing</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Python, PyQt5, GitHub</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Designed and executed structured prompt-based tests to identify unsafe and unexpected LLM behavior and failure cases.</li>
                <li>Analyzed a test set of 36 prompts across 252 runs, categorized results by risk level, and documented issues.</li>
                <li>Improved testing workflow and contributed to a PyQt5 SOC-style interface in a team using GitHub.</li>
              </ul>
            </div>

            {/* VoltGuard */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>VoltGuard – Industrial Equipment Monitoring and Security</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">Python, C++, PyQt5, Scapy</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Tested and integrated a Modbus/TCP industrial monitoring system using RPM, pressure, and flow sensor data.</li>
                <li>Supported bug fixing and prepared test reports and GitHub README documentation.</li>
              </ul>
            </div>

            {/* Research Paper */}
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-baseline font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                <span>Research Paper: A Secure-Driven Two Stage IDS for Reliable Detection of Minority Attack</span>
                <span className="font-mono text-[11px] text-[#71717A] font-normal">ICCET 2026</span>
              </div>
              <ul className="list-disc list-inside text-[#555555] dark:text-[#D4D4D8] space-y-0.5">
                <li>Presented at ICCET 2026 (14th International Conference on Contemporary Engineering and Technology), Chennai, March 2026.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Certifications
            </h2>
            <p className="text-xs text-[#555555] dark:text-[#D4D4D8] leading-relaxed">
              Cisco – Introduction to Cybersecurity | Mastercard (Forage) – Cybersecurity Job Simulation (2026) | NPTEL – Introduction to Large Language Models (2026) | UNICEF YuWaah – Digital Literacy and Cyber Safety (2026) | UNICEF YuWaah – Digital Productivity with AI (2026) | IBM SkillsBuild – AI Fundamentals (2025) | Simplilearn – Introduction to Cybercrime (2025) | NPTEL – Cloud Computing (2025) | NPTEL – Introduction to Internet of Things (2025)
            </p>
          </div>

          {/* Achievements and Training */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] border-b border-[#E7E2DA] dark:border-[#27272A] pb-1">
              Achievements and Training
            </h2>
            <ul className="list-disc list-inside text-xs text-[#555555] dark:text-[#D4D4D8] space-y-1">
              <li>Second Rank, Cyber Security Department, Academic Excellence Award 2024–25. Finalist, TNSDC Naan Mudhalvan Advanced AI/ML Hackathon 2026 (Project Smart Darshan, Intel Digital Readiness).</li>
              <li>First Place, Pencilvania Event, CyberXelerate 2.0 National Symposium, R.M.K. College of Engineering and Technology. Winner, Escape Room Event, CIT College.</li>
              <li>Workshops: Hands-on Penetration Testing (with TCS Consultant); LLM and AI Agents (2-day training); IoT Systems.</li>
            </ul>
          </div>

        </section>
      )}

    </div>
  );
};
