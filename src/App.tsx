import React, { useState, useEffect } from 'react';
import { PageId, Project, Certificate } from './types/portfolio';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RecruiterDrawer } from './components/recruiter/RecruiterDrawer';
import { CertificateModal } from './components/certificates/CertificateModal';
import { ProjectDetailModal } from './components/projects/ProjectDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CertificationsPage } from './pages/CertificationsPage';
import { EducationPage } from './pages/EducationPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'certifications',
        'education',
        'resume',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#121214] text-[#1A1A1A] dark:text-[#F4F4F5] transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenRecruiter={() => setRecruiterOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
            onOpenRecruiter={() => setRecruiterOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'skills' && (
          <SkillsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={handleNavigate}
            onOpenCertificate={setSelectedCertificate}
          />
        )}

        {currentPage === 'certifications' && (
          <CertificationsPage
            onNavigate={handleNavigate}
            onOpenCertificate={setSelectedCertificate}
          />
        )}

        {currentPage === 'education' && (
          <EducationPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'resume' && (
          <ResumePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Drawers */}
      <RecruiterDrawer
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
        onNavigate={handleNavigate}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
