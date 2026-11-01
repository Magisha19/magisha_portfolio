import React, { useState } from 'react';
import { PageId } from '../../types/portfolio';
import { Sun, Moon, Menu, X, FileText, Sparkles, Shield } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenRecruiter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  onToggleTheme,
  onOpenRecruiter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 dark:bg-[#121214]/90 backdrop-blur-md border-b border-[#E7E2DA] dark:border-[#27272A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Brand — Nav Links — Primary Action */}
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Magisha N Portfolio Home"
          >
            <div className="w-9 h-9 rounded-md bg-[#800020] text-white flex items-center justify-center font-serif text-lg font-bold tracking-tight shadow-sm transition-transform group-hover:scale-105">
              M
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4F4F5] whitespace-nowrap group-hover:text-[#800020] dark:group-hover:text-[#D4AF37] transition-colors font-serif">
                MAGISHA N
              </span>
              <p className="text-[11px] text-[#6B7280] dark:text-[#A1A1AA] tracking-wider uppercase font-medium">
                Cybersecurity Enthusiast
              </p>
            </div>
          </button>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#800020] dark:text-[#D4AF37] font-semibold'
                      : 'text-[#555555] dark:text-[#A1A1AA] hover:text-[#1A1A1A] dark:hover:text-[#F4F4F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#800020] dark:bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action + Theme Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-[#555555] dark:text-[#A1A1AA] hover:bg-[#EFECE6] dark:hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#1A1A1A]" />}
            </button>

            <button
              onClick={onOpenRecruiter}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] dark:bg-[#800020] dark:hover:bg-[#990026] rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              Recruiter Snapshot
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#555555] dark:text-[#A1A1AA] hover:bg-[#EFECE6] dark:hover:bg-[#27272A] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] dark:bg-[#121214] border-b border-[#E7E2DA] dark:border-[#27272A] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#800020]/10 text-[#800020] dark:bg-[#800020]/30 dark:text-[#D4AF37] font-semibold'
                      : 'text-[#444444] dark:text-[#D4D4D8] hover:bg-[#EFECE6] dark:hover:bg-[#1E1E22]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#E7E2DA] dark:border-[#27272A] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenRecruiter();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#800020] hover:bg-[#68001a] rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              Recruiter 10-Second Snapshot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
