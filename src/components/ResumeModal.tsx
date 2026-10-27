import React, { useEffect } from 'react';
import { X, FileText, Download, AlertCircle, CheckCircle2, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { RESUME_CONFIG, PERSONAL_INFO, EDUCATION_HISTORY, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#171A20] border border-[#2A2F38] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14171E] border-b border-[#2A2F38]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#F5A623]" />
            <h2 id="resume-modal-title" className="text-base font-semibold text-[#F5F5F2]">
              Resume · Abina K
            </h2>
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close resume dialog"
            className="p-1.5 text-[#A6ABB5] hover:text-[#F5F5F2] hover:bg-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Status Alert Box */}
          <div className="p-4 rounded-xl bg-[#1C2027] border border-[#F5A623]/30">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F2]">
                  Temporary Resume Placeholder State
                </h3>
                <p className="text-xs text-[#A6ABB5] mt-1 leading-relaxed">
                  The actual PDF file will be linked here shortly. As specified, the website does not attempt 
                  to link to a non-existent document or simulate a false download.
                </p>
                <div className="mt-3 p-2.5 rounded bg-[#101216] border border-[#2A2F38] text-[11px] font-mono text-[#A6ABB5]">
                  <div>Asset Target: <span className="text-[#F5A623]">{RESUME_CONFIG.filePath}</span></div>
                  <div className="mt-0.5">Toggle Status: <span className="text-cyan-400">RESUME_CONFIG.isAvailable</span> in <code className="text-[#F5F5F2]">src/data/portfolioData.ts</code></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Resume Snapshot for instant evaluation */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#A6ABB5] mb-3">
              Direct Profile Summary
            </h4>

            <div className="space-y-4">
              {/* Education */}
              <div className="p-4 rounded-xl bg-[#14171E] border border-[#2A2F38]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5A623] mb-2">
                  <GraduationCap className="w-4 h-4" /> Academic Background
                </div>
                <div className="text-sm font-medium text-[#F5F5F2]">
                  {EDUCATION_HISTORY[0].degree}
                </div>
                <div className="text-xs text-[#A6ABB5] mt-0.5">
                  {EDUCATION_HISTORY[0].institution} · {EDUCATION_HISTORY[0].location}
                </div>
                <div className="text-xs font-mono text-cyan-400 mt-1">
                  CGPA: {PERSONAL_INFO.cgpa} ({PERSONAL_INFO.cgpaNote}) · Period: {PERSONAL_INFO.studyPeriod}
                </div>
              </div>

              {/* Projects highlight */}
              <div className="p-4 rounded-xl bg-[#14171E] border border-[#2A2F38]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5A623] mb-2">
                  <Briefcase className="w-4 h-4" /> Selected Engineering Projects
                </div>
                <ul className="text-xs text-[#A6ABB5] space-y-1.5">
                  {PROJECTS.map((p) => (
                    <li key={p.id} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                      <span className="text-[#F5F5F2] font-medium">{p.title}:</span>
                      <span>{p.subtitle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Direct Contact Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
            <div className="text-xs text-[#A6ABB5] text-center sm:text-left">
              Need Abina's full CV or official transcripts right now?
            </div>
            <a 
              href={`mailto:${PERSONAL_INFO.contactEmail}?subject=Resume%20Inquiry%20-%20Abina%20Kumar`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-lg transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              Email Abina Directly
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#14171E] border-t border-[#2A2F38] flex items-center justify-between">
          <span className="text-[11px] text-[#A6ABB5]">
            Configuration variable: <code className="text-[#F5A623]">RESUME_CONFIG</code>
          </span>
          <button 
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs text-[#F5F5F2] bg-[#1F242D] hover:bg-[#2A2F38] border border-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
