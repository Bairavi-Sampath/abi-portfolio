import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Lightbulb, Compass, Award, Target, BookOpen, AlertCircle } from 'lucide-react';
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
        return <AquaVeloVisual isModal={true} />;
      case 'alcohol-detector':
        return <InnovSenseVisual isModal={true} />;
      case 'weight-monitoring':
        return <WeightMonitoringVisual isModal={true} />;
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
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#171A20] border border-[#2A2F38] rounded-2xl shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2F38] bg-[#14171E] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5A623] px-2.5 py-0.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/25 font-bold">
              {project.category || 'PROJECT CASE STUDY'}
            </span>
            {project.academicContext && (
              <span className="hidden sm:inline-block text-xs text-[#A6ABB5] truncate max-w-xs">
                {project.academicContext}
              </span>
            )}
          </div>
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 text-[#A6ABB5] hover:text-[#F5F5F2] hover:bg-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 focus:outline-none">
          
          {/* 1. Overview */}
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F5A623] font-semibold">
              {project.subtitle}
            </span>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] mt-1 tracking-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-[#A6ABB5] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* 2. Interactive Prototype / Simulation Visual */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A6ABB5] font-mono mb-2.5">
              Prototype &amp; Simulation Model
            </div>
            {renderVisual()}
          </div>

          {/* 3. Problem & Project Goal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <div className="flex items-center gap-2 text-[#F5A623] mb-2 font-bold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Problem &amp; Motivation</span>
              </div>
              <p className="text-sm text-[#A6ABB5] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <div className="flex items-center gap-2 text-cyan-400 mb-2 font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>Project Goal</span>
              </div>
              <p className="text-sm text-[#A6ABB5] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 4. How the System Works */}
          <div>
            <h3 className="text-sm font-bold text-[#F5F5F2] mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#F5A623]" />
              <span>How the System Works</span>
            </h3>
            <div className="space-y-2.5">
              {project.processAndWorkflow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#1C2027]/70 border border-[#2A2F38]/60 text-sm">
                  <span className="font-mono text-xs font-bold text-[#F5A623] mt-0.5 shrink-0">
                    Step {idx + 1}
                  </span>
                  <span className="text-[#A6ABB5] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Technologies & Engineering Concepts */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#A6ABB5] font-mono mb-3">
              Technologies &amp; Engineering Concepts
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

          {/* 6. My Contribution (Verified details only) */}
          <div className="p-5 rounded-xl bg-[#14171E] border border-[#2A2F38]">
            <h3 className="text-sm font-bold text-[#F5F5F2] flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-[#F5A623]" />
              <span>My Contribution</span>
            </h3>
            <p className="text-sm text-[#A6ABB5] leading-relaxed">
              {project.actualContribution}
            </p>
          </div>

          {/* 7. What I Learned & Current Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <h3 className="text-sm font-bold text-[#F5F5F2] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>What I Learned</span>
              </h3>
              <ul className="space-y-2 text-sm text-[#A6ABB5]">
                {project.resultsAndLearnings.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
              <h3 className="text-sm font-bold text-[#F5F5F2] mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#F5A623]" />
                <span>Current Limitations &amp; Scope</span>
              </h3>
              <ul className="space-y-2 text-sm text-[#A6ABB5]">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer with Back to Projects Link */}
        <div className="px-6 py-4 bg-[#14171E] border-t border-[#2A2F38] flex items-center justify-between">
          <span className="text-xs text-[#A6ABB5] font-mono">
            Abina K · Engineering Projects
          </span>
          <button 
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-lg transition-colors cursor-pointer"
          >
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};
