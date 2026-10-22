/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetail } from './types';
import { RESUME_CONFIG } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle centralized resume click
  const handleResumeClick = () => {
    if (RESUME_CONFIG.isAvailable) {
      // Direct download if physical file exists
      const link = document.createElement('a');
      link.href = RESUME_CONFIG.filePath;
      link.download = RESUME_CONFIG.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Honest placeholder status modal
      setIsResumeModalOpen(true);
    }
  };

  const handleExploreClick = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section for navigation highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'education', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#101216] text-[#F5F5F2] font-sans selection:bg-[#F5A623]/25 selection:text-[#F5A623] relative">
      {/* 1. Navigation */}
      <Navbar 
        onResumeClick={handleResumeClick} 
        activeSection={activeSection} 
      />

      <main>
        {/* 2. Home / Hero */}
        <Hero 
          onResumeClick={handleResumeClick} 
          onExploreClick={handleExploreClick} 
        />

        {/* 3. About Me */}
        <About />

        {/* 4. Featured Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* 5. Skills and Technologies */}
        <Skills />

        {/* 6. Education */}
        <Education />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Resume Download */}
        <ResumeSection onResumeClick={handleResumeClick} />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
