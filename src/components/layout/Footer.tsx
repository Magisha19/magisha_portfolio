import React from 'react';
import { PageId } from '../../types/portfolio';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F2EFE9] dark:bg-[#0D0D0F] border-t border-[#E2DDD5] dark:border-[#222226] text-[#4A4A4A] dark:text-[#A1A1AA] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#800020] text-white flex items-center justify-center font-serif font-bold text-base">
                M
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4F4F5]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-[#555555] dark:text-[#A1A1AA]">
              B.E. Computer Science and Engineering (Cyber Security) candidate at Sriram Engineering College. Hands-on experience in security operations, LLM security testing, and industrial equipment protection.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#71717A] dark:text-[#888890] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>Open to L1 SOC & Security Roles</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] dark:text-[#F4F4F5]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'skills', label: 'Skills & Tech' },
                { id: 'projects', label: 'Featured Projects' },
                { id: 'experience', label: 'Internships' },
                { id: 'certifications', label: 'Certificates' },
                { id: 'education', label: 'Education' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#1A1A1A] dark:text-[#F4F4F5]">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#800020] dark:text-[#D4AF37]" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71717A] hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  Back to top
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#E2DDD5] dark:border-[#222226] flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] dark:text-[#71717A] gap-4">
          <p>© {new Date().getFullYear()} Magisha N. Editorial Personal Portfolio. All verified details documented from original credentials.</p>
          <div className="flex items-center gap-4">
            <span>Chennai & Tiruttani, India</span>
            <span aria-hidden="true">·</span>
            <span>Security Operations & Research</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
