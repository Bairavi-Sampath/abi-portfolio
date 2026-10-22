import React from 'react';
import { ArrowUpRight, Cpu, Layers, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDetail } from '../types';
import { AquaVeloVisual } from './project-visuals/AquaVeloVisual';
import { InnovSenseVisual } from './project-visuals/InnovSenseVisual';
import { WeightMonitoringVisual } from './project-visuals/WeightMonitoringVisual';

interface ProjectsProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const supportingProjects = PROJECTS.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-24 bg-[#101216]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-5 bg-[#F5A623]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
              Projects That Turn Ideas Into Solutions
            </h2>
          </div>
          <p className="text-sm text-[#A6ABB5] max-w-sm">
            Exploring mechanical propulsion, embedded circuit logic, and AI-assisted vehicular telemetry.
          </p>
        </div>

        {/* 1. Large Featured Project: AQUA VELO */}
        <div className="mb-16">
          <div className="rounded-3xl bg-[#171A20] border border-[#2A2F38] overflow-hidden shadow-2xl transition-all hover:border-[#F5A623]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Interactive Schematic Visual */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-[#14171E] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#2A2F38]">
                <AquaVeloVisual />
              </div>

              {/* Right Column: Project Story & Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A6ABB5] mb-2">
                    <span className="text-[#F5A623] font-semibold tracking-wider uppercase">
                      Featured Project 01
                    </span>
                    <span>Physics &amp; Mechanics</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] tracking-tight mt-1">
                    {featuredProject.title}
                  </h3>
                  <div className="text-sm font-medium text-cyan-400 mt-1">
                    {featuredProject.subtitle}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#A6ABB5] leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6ABB5] block mb-2">
                      Focus Areas &amp; Mechanics
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono text-[#F5F5F2] bg-[#1C2027] border border-[#2A2F38] rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Case Study CTA */}
                <div className="mt-8 pt-6 border-t border-[#2A2F38] flex items-center justify-between">
                  <span className="text-xs text-[#A6ABB5]">
                    Zero-emission kinetic prototype
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-black bg-[#F5A623] hover:bg-[#e0951b] rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* 2. Two Supporting Project Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {supportingProjects.map((project, index) => (
            <div 
              key={project.id}
              className="rounded-3xl bg-[#171A20] border border-[#2A2F38] overflow-hidden flex flex-col justify-between transition-all hover:border-[#F5A623]/40 shadow-xl"
            >
              {/* Visual Area */}
              <div className="p-6 bg-[#14171E] border-b border-[#2A2F38]">
                {project.visualType === 'alcohol-detector' ? (
                  <InnovSenseVisual />
                ) : (
                  <WeightMonitoringVisual />
                )}
              </div>

              {/* Text & Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#A6ABB5] mb-2">
                    <span className="text-[#F5A623] font-semibold tracking-wider uppercase">
                      Featured Project 0{index + 2}
                    </span>
                    {project.academicContext ? (
                      <span className="text-[11px] text-[#A6ABB5] truncate max-w-[200px]">
                        {project.academicContext}
                      </span>
                    ) : (
                      <span>Embedded Systems</span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                    {project.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400 mt-1">
                    {project.subtitle}
                  </div>

                  <p className="mt-3 text-sm text-[#A6ABB5] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-mono text-[#F5F5F2] bg-[#1C2027] border border-[#2A2F38] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-[#A6ABB5] bg-[#1C2027] rounded">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-5 border-t border-[#2A2F38] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#A6ABB5]">
                    Interactive Model
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#F5F5F2] bg-[#1C2027] hover:bg-[#252A34] hover:text-[#F5A623] border border-[#2A2F38] hover:border-[#F5A623]/50 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
