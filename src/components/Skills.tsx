import React, { useState } from 'react';
import { Terminal, Globe, Wrench, Code2, Palette, Plus, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Category icons mapping
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-[#F5A623]" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Platforms & Tools':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'Coding & Learning Platforms':
        return <Code2 className="w-5 h-5 text-[#F5A623]" />;
      default:
        return <Palette className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#171A20] border-t border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              SKILLS &amp; TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            Tools I Learn, Build With and Explore
          </h2>
          <p className="mt-3 text-base text-[#A6ABB5]">
            Structured technical capabilities spanning systems programming, web technologies, and computational toolkits.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            // UI/UX Design Tools handling: configurable state
            if (category.isConfigurableUIUX) {
              return (
                <div 
                  key={category.title}
                  className="rounded-2xl bg-[#1C2027]/70 border border-dashed border-[#2A2F38] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Palette className="w-5 h-5 text-purple-400" />
                        <h3 className="text-base font-bold text-[#F5F5F2]">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#F5A623] px-2 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/20">
                        Configurable Slot
                      </span>
                    </div>

                    <p className="text-xs text-[#A6ABB5] mb-5">
                      {category.description}
                    </p>

                    {/* Notice honoring instruction not to claim unverified tools */}
                    <div className="p-4 rounded-xl bg-[#12151B] border border-[#2A2F38] text-xs text-[#A6ABB5] space-y-2">
                      <p className="text-[#F5F5F2] font-medium">
                        Dedicated Space for Verified Design Software
                      </p>
                      <p>
                        In adherence to honest portfolio presentation, unverified design software 
                        is not pre-claimed. As Abina formalizes her specific UI/UX design workflow, 
                        tools can be added in <code className="text-[#F5A623] font-mono">portfolioData.ts</code>.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2A2F38] text-[11px] font-mono text-[#A6ABB5]">
                    Ready to populate: Figma, Penpot, or chosen wireframing toolkits
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={category.title}
                className="rounded-2xl bg-[#1C2027] border border-[#2A2F38] p-6 hover:border-[#F5A623]/30 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(category.title)}
                    <h3 className="text-base font-bold text-[#F5F5F2]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#A6ABB5]">
                    {category.skills.length} Items
                  </span>
                </div>

                <p className="text-xs text-[#A6ABB5] mb-6">
                  {category.description}
                </p>

                {/* Skills list - clean unboxed layout with domain context */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-3 rounded-xl bg-[#14171E] border border-[#2A2F38] hover:border-[#F5A623]/40 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                        )}
                      </div>
                      {skill.levelDescription && (
                        <div className="text-[11px] text-[#A6ABB5] mt-1 leading-snug">
                          {skill.levelDescription}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
