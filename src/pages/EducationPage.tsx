import React from 'react';
import { PageId } from '../types/portfolio';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface EducationPageProps {
  onNavigate: (page: PageId) => void;
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-14 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Academic Background
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Education & Academic Honors
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Comprehensive scholastic timeline from foundational secondary schooling in Tiruttani to specialized engineering in Computer Science (Cyber Security) at Sriram Engineering College.
        </p>

        {/* Academic Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-5 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-1">
            <span className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Current Degree</span>
            <p className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">B.E. CSE (Cyber Security)</p>
            <p className="text-xs text-[#6B7280]">Anna University Affiliation · AICTE Approved</p>
          </div>

          <div className="p-5 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-1">
            <span className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Scholastic Standing</span>
            <p className="font-serif text-xl font-bold text-[#800020] dark:text-[#D4AF37]">8.7 CGPA · 2nd Rank</p>
            <p className="text-xs text-[#6B7280]">Academic Excellence Award 2024–2025</p>
          </div>

          <div className="p-5 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-1">
            <span className="text-xs uppercase font-bold text-[#71717A] dark:text-[#A1A1AA]">Expected Completion</span>
            <p className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">June 2027</p>
            <p className="text-xs text-[#6B7280]">Actively pursuing internships & final placements</p>
          </div>
        </div>
      </section>

      {/* Detailed Academic Timeline */}
      <section className="space-y-10">
        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={edu.id}
            className="p-6 sm:p-8 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-6"
          >
            {/* Degree and Institution Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E7E2DA] dark:border-[#27272A] pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>{edu.duration}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                  {edu.degree}
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  <span className="font-semibold text-[#1A1A1A] dark:text-white">{edu.institution}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {edu.score && (
                <div className="p-3 bg-[#FAF8F5] dark:bg-[#202024] rounded-lg border border-[#E7E2DA] dark:border-[#333] text-center shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block">
                    {edu.scoreLabel || 'Score'}
                  </span>
                  <span className="text-xl font-bold font-serif text-[#800020] dark:text-[#D4AF37] tabular-nums">
                    {edu.score}
                  </span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                Scholastic Highlights & Activities
              </h3>
              <ul className="space-y-2 text-xs text-[#444444] dark:text-[#D4D4D8]">
                {edu.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coursework if applicable */}
            {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
              <div className="p-4 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F4F4F5] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                  Relevant Engineering Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 text-xs bg-white dark:bg-[#27272A] border border-[#E7E2DA] dark:border-[#3F3F46] rounded text-[#1A1A1A] dark:text-[#E4E4E7]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="p-6 bg-[#F2EFE9] dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F4F4F5]">
            Review formal credentials and transcripts
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA] mt-0.5">
            Download Magisha's updated single-page professional resume or view verified certificates.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => onNavigate('resume')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded transition-colors cursor-pointer"
          >
            Go to Resume
          </button>
        </div>
      </section>

    </div>
  );
};
