import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Terminal } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF8F5] dark:bg-[#18181B] border border-[#E7E2DA] dark:border-[#27272A] rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E7E2DA] dark:border-[#27272A] flex items-center justify-between bg-[#F2EFE9] dark:bg-[#121214]">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#800020] dark:text-[#D4AF37] font-semibold">
              Engineering Case Study · {project.category}
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F4F4F5]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#71717A] hover:text-[#1A1A1A] dark:hover:text-white hover:bg-[#E7E2DA] dark:hover:bg-[#27272A] transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Main Visual */}
          <div className="rounded-lg overflow-hidden border border-[#E7E2DA] dark:border-[#27272A] bg-[#121214] shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          {/* Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white dark:bg-[#202024] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]"
                >
                  <p className="text-[11px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] font-bold">
                    {m.label}
                  </p>
                  <p className="text-base font-bold text-[#800020] dark:text-[#D4AF37] mt-0.5 font-mono">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
              Technologies & Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 bg-[#F2EFE9] dark:bg-[#27272A] text-[#1A1A1A] dark:text-[#E4E4E7] rounded border border-[#E7E2DA] dark:border-[#3F3F46]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                Project Overview
              </h4>
              <p className="text-xs text-[#444444] dark:text-[#D4D4D8] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37]" />
                Problem Statement & Objective
              </h4>
              <p className="text-xs text-[#444444] dark:text-[#D4D4D8] leading-relaxed">
                {project.problemStatement}
              </p>
              <p className="text-xs text-[#444444] dark:text-[#D4D4D8] leading-relaxed pt-1">
                <span className="font-semibold text-[#1A1A1A] dark:text-white">Objective: </span>
                {project.objective}
              </p>
            </div>
          </div>

          {/* Individual Contribution */}
          <div className="space-y-3 p-4 bg-white dark:bg-[#202024] rounded-lg border border-[#E7E2DA] dark:border-[#2E2E33]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#800020] dark:text-[#D4AF37]">
              My Individual Engineering Contribution
            </h4>
            <ul className="space-y-2 text-xs text-[#444444] dark:text-[#D4D4D8]">
              {project.myContribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#800020] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features & Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                Key Architectural Features
              </h4>
              <ul className="space-y-1.5 text-xs text-[#444444] dark:text-[#D4D4D8]">
                {project.keyFeatures.map((kf, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                Verified Outcomes & Results
              </h4>
              <ul className="space-y-1.5 text-xs text-[#444444] dark:text-[#D4D4D8]">
                {project.resultsAndOutcomes.map((ro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#800020] dark:text-[#D4AF37] font-bold">·</span>
                    <span>{ro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#E7E2DA] dark:border-[#27272A] bg-[#F2EFE9] dark:bg-[#121214] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A] dark:text-[#F4F4F5] hover:text-[#800020] dark:hover:text-[#D4AF37] transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            )}
            {project.paperConference && (
              <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] italic">
                {project.paperConference}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#800020] hover:bg-[#68001a] text-white text-xs font-semibold rounded transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
