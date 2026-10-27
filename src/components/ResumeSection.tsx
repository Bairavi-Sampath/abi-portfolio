import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { RESUME_CONFIG, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onResumeClick: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onResumeClick }) => {
  return (
    <section id="resume" className="py-24 bg-[#101216]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container Card */}
        <div className="relative rounded-3xl bg-[#171A20] border border-[#2A2F38] p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Ambient background glow */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Description & Value proposition */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-5 bg-[#F5A623]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                  CURRICULUM VITAE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
                Academic &amp; Technical Resume
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#A6ABB5] leading-relaxed max-w-2xl">
                A summary of my coursework, hands-on engineering projects, technical skills, and academic background in Computer Science and Engineering.
              </p>

              {/* Quick resume metadata badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A6ABB5]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                  <span>KPRIET B.E. CSE</span>
                </div>
                <span className="text-[#2A2F38]">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                  <span>CGPA: {PERSONAL_INFO.cgpa}</span>
                </div>
                <span className="text-[#2A2F38]">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A623]" />
                  <span>3 Engineering Showcases</span>
                </div>
              </div>
            </div>

            {/* Right Column: Download Button & Status Details */}
            <div className="lg:col-span-4 flex flex-col sm:items-end justify-center">
              <div className="w-full sm:w-auto p-5 rounded-2xl bg-[#14171E] border border-[#2A2F38] flex flex-col items-center sm:items-end text-center sm:text-right">
                
                <div className="flex items-center gap-2 text-xs font-mono text-[#A6ABB5] mb-3">
                  <FileText className="w-4 h-4 text-[#F5A623]" />
                  <span>{RESUME_CONFIG.fileName}</span>
                </div>

                {/* Main Action Button */}
                <button
                  type="button"
                  onClick={onResumeClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-xl shadow-lg shadow-[#F5A623]/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                {/* State explanation */}
                <span className="text-[11px] font-mono text-[#A6ABB5] mt-3">
                  <span className="text-emerald-400">Click to view verified PDF in browser</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
