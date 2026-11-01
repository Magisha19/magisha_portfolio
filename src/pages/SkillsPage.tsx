import React, { useState } from 'react';
import { PageId } from '../types/portfolio';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Shield,
  Network,
  Cpu,
  Code,
  CheckCircle,
  Search,
  Filter,
  Check,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Hands-on Experience' | 'Working Knowledge' | 'Currently Exploring'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Map icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />;
      case 'CheckCircle':
      default:
        return <CheckCircle className="w-5 h-5 text-[#800020] dark:text-[#D4AF37]" />;
    }
  };

  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case 'Hands-on Experience':
        return 'text-[#800020] dark:text-[#D4AF37] font-semibold';
      case 'Working Knowledge':
        return 'text-[#1A1A1A] dark:text-[#E4E4E7] font-medium';
      case 'Currently Exploring':
      default:
        return 'text-[#71717A] dark:text-[#A1A1AA] italic';
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Verified Capabilities
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Skills & Technical Proficiencies
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Documented technical competencies across security operations, protocol inspection, AI safety testing, and software development. Categorized transparently by verified level of practical application without arbitrary percentage meters.
        </p>

        {/* Legend / Distinction Strip */}
        <div className="mt-8 p-4 bg-white dark:bg-[#18181B] rounded-lg border border-[#E7E2DA] dark:border-[#27272A] flex flex-wrap items-center gap-6 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
            Proficiency Levels:
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#800020] dark:bg-[#D4AF37]" />
            <span className="font-semibold text-[#1A1A1A] dark:text-[#F4F4F5]">Hands-on Experience</span>
            <span className="text-[#71717A] dark:text-[#888890]">(Applied in internships, research, or projects)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#555555] dark:bg-[#A1A1AA]" />
            <span className="font-medium text-[#1A1A1A] dark:text-[#F4F4F5]">Working Knowledge</span>
            <span className="text-[#71717A] dark:text-[#888890]">(Academic coursework, labs & certifications)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A1A1AA] dark:bg-[#71717A]" />
            <span className="italic text-[#71717A] dark:text-[#A1A1AA]">Currently Exploring</span>
            <span className="text-[#71717A] dark:text-[#888890]">(Active self-study & advanced labs)</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Interactive Segmented Filter Control */}
        <div className="flex items-center gap-1 p-1 bg-[#EFECE6] dark:bg-[#1F1F24] rounded-lg w-full sm:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Proficiencies' },
            { id: 'Hands-on Experience', label: 'Hands-on Only' },
            { id: 'Working Knowledge', label: 'Working Knowledge' },
            { id: 'Currently Exploring', label: 'Currently Learning' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-white dark:bg-[#2E2E35] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-sm'
                  : 'text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-[#F4F4F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills or tools..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-[#18181B] border border-[#E7E2DA] dark:border-[#27272A] rounded-md focus:outline-none focus:border-[#800020] dark:focus:border-[#D4AF37] text-[#1A1A1A] dark:text-[#F4F4F5] placeholder-[#71717A]"
          />
        </div>
      </section>

      {/* Categorized Skills Grid */}
      <section className="space-y-10">
        {SKILL_CATEGORIES.map((category) => {
          const filteredSkills = category.skills.filter((s) => {
            const matchesFilter = selectedFilter === 'all' || s.proficiency === selectedFilter;
            const matchesSearch =
              !searchQuery ||
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.context && s.context.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesFilter && matchesSearch;
          });

          if (filteredSkills.length === 0) return null;

          return (
            <div
              key={category.title}
              className="p-6 sm:p-8 bg-white dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FAF8F5] dark:bg-[#202024] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33] shrink-0">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                    {category.title}
                  </h2>
                  <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA] mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2A2A30] space-y-1.5 flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[#1A1A1A] dark:text-[#F4F4F5]">
                          {skill.name}
                        </span>
                      </div>
                      <p className={`text-[11px] ${getProficiencyStyle(skill.proficiency)}`}>
                        {skill.proficiency}
                      </p>
                    </div>

                    {skill.context && (
                      <p className="text-[11px] text-[#6B7280] dark:text-[#A1A1AA] pt-1 border-t border-[#E7E2DA] dark:border-[#2E2E33]">
                        {skill.context}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA to Projects */}
      <section className="p-6 bg-[#F2EFE9] dark:bg-[#18181B] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#1A1A1A] dark:text-[#F4F4F5]">
            See these skills applied in production code & research
          </h3>
          <p className="text-xs text-[#6B7280] dark:text-[#A1A1AA] mt-0.5">
            Examine how Modbus/TCP, Scapy, and LLM safety testing translate into tangible case studies.
          </p>
        </div>
        <button
          onClick={() => onNavigate('projects')}
          className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded-md transition-colors shrink-0 cursor-pointer"
        >
          Explore Case Studies
        </button>
      </section>

    </div>
  );
};
