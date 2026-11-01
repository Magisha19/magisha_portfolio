import React, { useState } from 'react';
import { PageId, Project } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';
import {
  Layers,
  ExternalLink,
  Github,
  ArrowRight,
  Shield,
  Cpu,
  BookOpen,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI Safety', label: 'AI Safety & Red Teaming' },
    { id: 'Industrial Security', label: 'Industrial & OT Security' },
    { id: 'Research', label: 'Conference Research' },
    { id: 'Cybersecurity', label: 'Computer Vision & Security' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <section className="border-b border-[#E7E2DA] dark:border-[#27272A] pb-8 pt-4">
        <span className="text-xs uppercase font-bold tracking-wider text-[#800020] dark:text-[#D4AF37]">
          Engineering Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5] mt-1">
          Technical Projects & Research
        </h1>
        <p className="text-base text-[#6B7280] dark:text-[#A1A1AA] mt-2 max-w-3xl">
          Comprehensive engineering case studies spanning large language model security testing, Modbus/TCP industrial SCADA monitoring, and published minority attack detection algorithms.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] dark:bg-[#1F1F24] rounded-lg mt-8 overflow-x-auto w-full sm:w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-[#2E2E35] text-[#1A1A1A] dark:text-[#F4F4F5] shadow-sm'
                  : 'text-[#6B7280] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-[#F4F4F5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Detailed List / Case Studies */}
      <section className="space-y-16">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="p-6 sm:p-10 bg-white dark:bg-[#18181B] rounded-2xl border border-[#E7E2DA] dark:border-[#27272A] shadow-sm space-y-8"
          >
            {/* Top row: Category, Title, Subtitle, and GitHub/Conference links */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#E7E2DA] dark:border-[#27272A] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-semibold">
                  <span>0{index + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-[#71717A] dark:text-[#A1A1AA]">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#FAF8F5] dark:bg-[#222226] border border-[#E7E2DA] dark:border-[#333] rounded hover:border-[#800020] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded transition-colors cursor-pointer"
                >
                  Full Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Split Media and Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Screenshot / Architecture visual */}
              <div
                className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E7E2DA] dark:border-[#27272A] bg-[#121214] shadow cursor-pointer group"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Problem Statement, Objective, and KPI Callouts */}
              <div className="lg:col-span-5 space-y-5 text-xs text-[#555555] dark:text-[#D4D4D8]">
                
                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 bg-[#FAF8F5] dark:bg-[#1E1E22] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]"
                      >
                        <p className="text-[10px] uppercase font-bold tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                          {m.label}
                        </p>
                        <p className="text-sm font-bold text-[#800020] dark:text-[#D4AF37] font-mono mt-0.5">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem Statement */}
                <div className="space-y-1">
                  <h4 className="font-bold uppercase tracking-wider text-[11px] text-[#1A1A1A] dark:text-[#F4F4F5] flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                    Problem Statement
                  </h4>
                  <p className="leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Objective */}
                <div className="space-y-1">
                  <h4 className="font-bold uppercase tracking-wider text-[11px] text-[#1A1A1A] dark:text-[#F4F4F5]">
                    Engineering Objective
                  </h4>
                  <p className="leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] block">
                    Core Stack:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#FAF8F5] dark:bg-[#1E1E22] border border-[#E7E2DA] dark:border-[#333] rounded text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Individual Contribution Section */}
            <div className="p-5 bg-[#FAF8F5] dark:bg-[#141416] rounded-xl border border-[#E7E2DA] dark:border-[#27272A] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37]">
                My Individual Engineering Contribution & Responsibilities
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#444444] dark:text-[#D4D4D8]">
                {project.myContribution.map((contrib, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

          </article>
        ))}
      </section>

    </div>
  );
};
