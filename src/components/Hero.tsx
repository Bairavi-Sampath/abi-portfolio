import React from 'react';
import { ArrowDown, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PORTRAIT_CONFIG, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick, onExploreClick }) => {
  // Extract primary social links: LinkedIn, GitHub, LeetCode, CodeChef
  const primarySocials = SOCIAL_LINKS.filter((s) => ['linkedin', 'github', 'leetcode', 'codechef'].includes(s.type));

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting and subtle tech grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Global ambient radial glow behind hero */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F5A623]/8 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================================================================= */}
          {/* Left Column: Typographic Introduction & Actions                   */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Small Eyebrow Heading */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5A623]">
                {PERSONAL_INFO.heroEyebrow}
              </span>
              <span className="w-6 h-[1.5px] bg-[#F5A623]" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F2] tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-[#F5A623]">{PERSONAL_INFO.name}</span>.
            </h1>

            {/* Short Introduction */}
            <p className="mt-5 text-xl sm:text-2xl font-semibold text-[#F5F5F2]/95 leading-snug">
              {PERSONAL_INFO.heroSupportingHeadline}
            </p>

            {/* Supporting Paragraph in Friendly, Simple English */}
            <p className="mt-4 text-base sm:text-lg text-[#A6ABB5] leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA: Explore My Projects */}
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-full shadow-lg shadow-[#F5A623]/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA: View My Resume */}
              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F5F5F2] bg-[#171A20] hover:bg-[#1F242D] border border-[#2A2F38] hover:border-[#F5A623]/60 rounded-full transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#F5A623]" />
                <span>View My Resume</span>
              </button>
            </div>

            {/* Social Links below buttons */}
            <div className="mt-10 pt-6 border-t border-[#2A2F38]/80 flex flex-wrap items-center gap-5">
              <span className="text-xs uppercase font-mono tracking-wider text-[#A6ABB5]">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                {primarySocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14171E] border border-[#2A2F38] hover:border-[#F5A623]/60 text-xs font-medium text-[#A6ABB5] hover:text-[#F5F5F2] transition-all group"
                  >
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 text-[#A6ABB5] group-hover:text-[#F5A623] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ================================================================= */}
          {/* Right Column: Uploaded Circular Profile Graphic                   */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
            {/* Visual Container: Centered, balanced, natural 1:1 aspect ratio, max 520px */}
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] aspect-square flex items-center justify-center">
              
              {/* Soft circular ambient orange glow directly behind the portrait */}
              <div 
                className="absolute inset-4 rounded-full blur-3xl opacity-75 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 166, 35, 0.22) 0%, rgba(245, 166, 35, 0.08) 48%, transparent 72%)',
                }}
                aria-hidden="true"
              />

              {/* Uploaded Circular Profile Graphic with Real Transparency */}
              <img 
                src={PORTRAIT_CONFIG.imagePath} 
                alt={PORTRAIT_CONFIG.altText}
                className="relative z-10 w-full h-auto aspect-square object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
