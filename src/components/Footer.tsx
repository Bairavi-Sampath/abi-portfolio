import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#101216] border-t border-[#2A2F38] text-[#A6ABB5] py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2A2F38]">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#F5A623] inline-block" />
              <span className="text-xl font-bold tracking-wider text-[#F5F5F2]">
                ABINA K
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Computer Science &amp; Engineering student at KPR Institute of Engineering and Technology, 
              Coimbatore. Interested in UI/UX design, software development, and turning ideas into practical solutions.
            </p>
            <div className="text-xs font-mono text-[#F5A623]">
              B.E. CSE · Class of 2024–2028
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F2]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F2]">
              Connected Profiles
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              {SOCIAL_LINKS.filter(s => s.isConfigured).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#F5A623] transition-colors"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#171A20] border border-[#2A2F38] text-[#A6ABB5] hover:text-[#F5F5F2] hover:border-[#F5A623]/50 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
