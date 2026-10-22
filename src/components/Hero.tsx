import React from 'react';
import { ArrowDown, Download, Sparkles, User, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO, PORTRAIT_CONFIG, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick, onExploreClick }) => {
  const primarySocials = SOCIAL_LINKS.filter((s) => ['linkedin', 'github', 'leetcode'].includes(s.type));

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#F5A623]/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                {PERSONAL_INFO.heroEyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F2] tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-[#F5A623]">{PERSONAL_INFO.name}</span>.
            </h1>

            {/* Supporting Headline */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-[#F5F5F2]/90 leading-snug text-balance">
              {PERSONAL_INFO.heroSupportingHeadline}
            </p>

            {/* Introduction Body */}
            <p className="mt-5 text-base sm:text-lg text-[#A6ABB5] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-xl shadow-lg shadow-[#F5A623]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#F5F5F2] bg-[#1C2027] hover:bg-[#252A34] border border-[#2A2F38] hover:border-[#F5A623]/50 rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#F5A623]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="mt-10 pt-8 border-t border-[#2A2F38]/80 flex flex-wrap items-center gap-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6ABB5]">
                Connect:
              </span>
              <div className="flex items-center gap-4">
                {primarySocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#A6ABB5] hover:text-[#F5A623] transition-colors"
                  >
                    <span>{social.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Container / Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl bg-[#171A20] border border-[#2A2F38] p-4 flex flex-col justify-between overflow-hidden group shadow-2xl">
              
              {/* Subtle tech background grid within portrait container */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Orbital ambient ring inspired by Reference 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#F5A623]/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-[#2A2F38] pointer-events-none" />

              {/* Top micro status indicator */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A6ABB5]">
                <span className="flex items-center gap-1.5 text-[#F5F5F2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                  CSE · B.E. 2024–2028
                </span>
                <span>KPRIET, CBE</span>
              </div>

              {/* Main Portrait Area (Ready to replace) */}
              <div className="relative z-10 flex-1 my-4 rounded-2xl bg-[#12151B] border border-[#2A2F38] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* 
                  ========================================================================
                  PORTRAIT IMAGE REPLACEMENT CODE:
                  To add Abina's actual photo:
                  1. Place the photo in `/public/assets/abina_kumar.jpg`
                  2. Update `imagePath: '/assets/abina_kumar.jpg'` and `hasActualPhoto: true` 
                     in `/src/data/portfolioData.ts`.
                  ========================================================================
                */}
                {PORTRAIT_CONFIG.hasActualPhoto && PORTRAIT_CONFIG.imagePath ? (
                  <img 
                    src={PORTRAIT_CONFIG.imagePath} 
                    alt={PORTRAIT_CONFIG.altText}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    {/* Bespoke Geometric Portrait Placeholder */}
                    <div className="relative w-24 h-24 rounded-full bg-[#1C2027] border-2 border-[#F5A623]/40 flex items-center justify-center shadow-inner mb-4">
                      <User className="w-12 h-12 text-[#A6ABB5]/60" />
                      <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#101216] border border-[#F5A623]">
                        <Code2 className="w-3.5 h-3.5 text-[#F5A623]" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#F5F5F2]">Abina Kumar</h3>
                    <p className="text-xs text-[#A6ABB5] mt-0.5">
                      UI/UX Designer &amp; Engineer
                    </p>

                    {/* Placeholder notice */}
                    <div className="mt-4 px-3 py-1.5 rounded-lg bg-[#171A20] border border-[#2A2F38] text-[11px] font-mono text-[#F5A623]">
                      Portrait Asset Slot (Ready to replace)
                    </div>
                  </div>
                )}
              </div>

              {/* Floating tech node tags inspired by Reference 1 */}
              <div className="relative z-10 flex items-center justify-between gap-2 pt-2 border-t border-[#2A2F38]/70 text-[11px] font-mono text-[#A6ABB5]">
                <span className="px-2 py-1 rounded bg-[#1C2027] border border-[#2A2F38] text-[#F5F5F2]">
                  UI/UX Design
                </span>
                <span className="px-2 py-1 rounded bg-[#1C2027] border border-[#2A2F38] text-[#F5F5F2]">
                  Python &amp; C
                </span>
                <span className="px-2 py-1 rounded bg-[#1C2027] border border-[#2A2F38] text-[#F5F5F2]">
                  IoT &amp; AI/ML
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
