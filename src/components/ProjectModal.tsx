import React, { useEffect } from 'react';
import { X, Cpu, CheckCircle2, ArrowRight, Lightbulb, Compass, Award, ExternalLink } from 'lucide-react';
import { ProjectDetail } from '../types';
import { AquaVeloVisual } from './project-visuals/AquaVeloVisual';
import { InnovSenseVisual } from './project-visuals/InnovSenseVisual';
import { WeightMonitoringVisual } from './project-visuals/WeightMonitoringVisual';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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

  const renderVisual = () => {
    switch (project.visualType) {
      case 'water-car':
        return <AquaVeloVisual />;
      case 'alcohol-detector':
        return <InnovSenseVisual />;
      case 'weight-monitoring':
        return <WeightMonitoringVisual />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#171A20] border border-[#2A2F38] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2F38] bg-[#14171E] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5A623] px-2 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/25">
              Case Study & System Details
            </span>
            {project.academicContext && (
              <span className="hidden sm:inline-block text-xs text-[#A6ABB5]">
                {project.academicContext}
              </span>
            )}
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#A6ABB5] hover:text-[#F5F5F2] hover:bg-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 focus:outline-none">
          {/* Title and Subtitle */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F5A623] font-semibold">
              {project.subtitle}
            </span>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] mt-1 tracking-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-[#A6ABB5] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Interactive Visual or Schematic */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A6ABB5] font-mono mb-2">
              Interactive System Architecture & Schematic
            </div>
            {renderVisual()}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <div className="flex items-center gap-2 text-[#F5A623] mb-2 font-semibold text-sm">
                <Lightbulb className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-sm text-[#A6ABB5] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <div className="flex items-center gap-2 text-emerald-400 mb-2 font-semibold text-sm">
                <Compass className="w-4 h-4" />
                Engineered Solution
              </div>
              <p className="text-sm text-[#A6ABB5] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#A6ABB5] font-mono mb-3">
              Technologies & Methodologies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-[#1C2027] border border-[#2A2F38] text-[#F5F5F2] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actual Contribution */}
          <div className="p-5 rounded-xl bg-[#14171E] border border-[#2A2F38]">
            <h3 className="text-sm font-semibold text-[#F5F5F2] flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#F5A623]" />
              Role & Contribution
            </h3>
            <p className="text-sm text-[#A6ABB5] leading-relaxed">
              {project.actualContribution}
            </p>
          </div>

          {/* Process and Workflow */}
          <div>
            <h3 className="text-sm font-semibold text-[#F5F5F2] mb-3">
              Process & Implementation Stages
            </h3>
            <div className="space-y-2.5">
              {project.processAndWorkflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#1C2027]/70 border border-[#2A2F38]/60 text-sm">
                  <span className="font-mono text-xs font-bold text-[#F5A623] mt-0.5 shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="text-[#A6ABB5]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className="text-sm font-semibold text-[#F5F5F2] mb-3">
                Documented Results & Learnings
              </h3>
              <ul className="space-y-2 text-sm text-[#A6ABB5]">
                {project.resultsAndLearnings.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#F5F5F2] mb-3">
                Planned Future Improvements
              </h3>
              <ul className="space-y-2 text-sm text-[#A6ABB5]">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Replacement notice */}
          <div className="p-4 rounded-lg bg-[#101216] border border-[#2A2F38] text-xs text-[#A6ABB5]">
            <span className="text-[#F5F5F2] font-semibold">Note for Portfolio Owner: </span>
            To attach live hardware photos, circuit CAD diagrams or test videos for this project, 
            update the <code className="text-[#F5A623] font-mono">customImagePath</code> property in 
            <code className="text-[#F5A623] font-mono"> src/data/portfolioData.ts</code>.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#14171E] border-t border-[#2A2F38] flex items-center justify-between">
          <span className="text-xs text-[#A6ABB5]">
            Abina Kumar · Engineering Portfolio
          </span>
          <button 
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#F5F5F2] bg-[#1F242D] hover:bg-[#2A2F38] border border-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
