import React from 'react';
import { User, MapPin, GraduationCap, Calendar, Award, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#171A20] border-t border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              {PERSONAL_INFO.aboutLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            {PERSONAL_INFO.aboutHeading}
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-[#A6ABB5] text-base sm:text-lg leading-relaxed">
            <p>
              {PERSONAL_INFO.aboutContent}
            </p>
            <p className="text-base text-[#A6ABB5]/90">
              My engineering education at KPR Institute of Engineering and Technology fuels my curiosity 
              for structural systems, while my passion for UI/UX drives me to craft interfaces that feel natural, 
              accessible, and purposeful. I believe great design isn't just decoration—it's how clearly a 
              person can accomplish what they set out to do.
            </p>

            {/* Design Philosophy Pillar Quotes */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F5A623] mb-1">
                  <Compass className="w-4 h-4" />
                  <span>User-Centered Focus</span>
                </div>
                <p className="text-xs text-[#A6ABB5]">
                  Prioritizing clarity, legible typography, and intuitive workflows across complex engineering contexts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C2027] border border-[#2A2F38]">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Technical Foundation</span>
                </div>
                <p className="text-xs text-[#A6ABB5]">
                  Grounding interactive concepts in solid computer science principles, hardware sensors, and algorithmic logic.
                </p>
              </div>
            </div>
          </div>

          {/* Refined Academic & Profile Data Block */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#1C2027] border border-[#2A2F38] p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#2A2F38]">
                <span className="text-xs uppercase font-mono tracking-widest text-[#F5A623]">
                  Academic Profile
                </span>
                <span className="text-[11px] font-mono text-[#A6ABB5]">
                  Active Student Status
                </span>
              </div>

              {/* Data Items */}
              <div className="space-y-4 text-sm">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Full Name</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.fullName}</span>
                  </div>
                </div>

                {/* Degree */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Degree &amp; Major</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.degree}</span>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Institution</span>
                    <span className="font-semibold text-[#F5F5F2]">{PERSONAL_INFO.institution}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Location</span>
                    <span className="font-medium text-[#F5F5F2]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#F5A623] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-[#A6ABB5] block">Study Period</span>
                    <span className="font-mono text-[#F5F5F2]">{PERSONAL_INFO.studyPeriod}</span>
                  </div>
                </div>
              </div>

              {/* CGPA Highlight Badge */}
              <div className="pt-4 border-t border-[#2A2F38] bg-[#14171E] -mx-6 -mb-6 p-5 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#A6ABB5]">
                      Cumulative Grade Point
                    </span>
                    <div className="text-2xl font-bold font-mono text-[#F5A623] tabular-nums mt-0.5">
                      {PERSONAL_INFO.cgpa}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#A6ABB5] block">
                      {PERSONAL_INFO.cgpaNote}
                    </span>
                    <span className="text-[10px] text-[#A6ABB5]/80 font-mono">
                      Autonomous Curriculum
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
