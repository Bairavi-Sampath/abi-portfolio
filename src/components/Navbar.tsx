import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download } from 'lucide-react';
import { RESUME_CONFIG } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#101216]/90 backdrop-blur-md border-b border-[#2A2F38] shadow-lg shadow-black/20 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="text-lg font-bold tracking-wider text-[#F5F5F2] hover:text-[#F5A623] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#F5A623] inline-block" />
            ABINA K
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-[#A6ABB5]" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-[#F5A623] font-semibold' : 'hover:text-[#F5F5F2]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5A623] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onResumeClick}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#F5F5F2] bg-[#1C2027] hover:bg-[#252A34] border border-[#2A2F38] hover:border-[#F5A623]/60 rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#F5A623]" />
              Download Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#A6ABB5] hover:text-[#F5F5F2] hover:bg-[#1C2027] rounded-lg transition-colors cursor-pointer border border-[#2A2F38]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14171E] border-b border-[#2A2F38] px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#1C2027] text-[#F5A623] font-semibold border border-[#2A2F38]' 
                      : 'text-[#A6ABB5] hover:text-[#F5F5F2] hover:bg-[#1C2027]/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#2A2F38]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
