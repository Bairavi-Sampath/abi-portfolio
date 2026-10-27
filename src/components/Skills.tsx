import React from 'react';
import { Terminal, Globe, Wrench, Code2, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES, SOCIAL_LINKS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  // Category styling and metadata
  const getCategoryMeta = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return {
          icon: <Terminal className="w-5 h-5 text-[#F5A623]" />,
          tag: 'Core Languages',
          dotColor: 'bg-[#F5A623]',
        };
      case 'Web Fundamentals':
        return {
          icon: <Globe className="w-5 h-5 text-cyan-400" />,
          tag: 'Web Foundations',
          dotColor: 'bg-cyan-400',
        };
      case 'Development Tools & Platforms':
        return {
          icon: <Wrench className="w-5 h-5 text-emerald-400" />,
          tag: 'Tools & Environments',
          dotColor: 'bg-emerald-400',
        };
      case 'Problem Solving & Practice':
        return {
          icon: <Code2 className="w-5 h-5 text-[#F5A623]" />,
          tag: 'Active Platforms',
          dotColor: 'bg-[#F5A623]',
        };
      default:
        return {
          icon: <Code2 className="w-5 h-5 text-[#F5A623]" />,
          tag: 'Technical Skills',
          dotColor: 'bg-[#F5A623]',
        };
    }
  };

  // Concise 1-word context tag per skill (replaces bulky textbook definitions)
  const getSkillTag = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'python':
        return 'Core';
      case 'c':
        return 'Systems';
      case 'java':
        return 'OOP';
      case 'html':
        return 'Structure';
      case 'css':
        return 'Responsive';
      case 'github':
        return 'Repos';
      case 'matlab':
        return 'Simulation';
      case 'tinkercad':
        return 'Circuits';
      case 'google colab':
        return 'Notebooks';
      case 'kaggle':
        return 'Datasets';
      case 'leetcode':
        return 'DSA';
      case 'codechef':
        return 'Contests';
      case 'hackerrank':
        return 'Badges';
      case 'codetantra sea':
        return 'Portal';
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#171A20] border-t border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              SKILLS &amp; TECHNOLOGIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
            Tools &amp; Platforms I Work With
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#A6ABB5]">
            Core programming languages, web fundamentals, development tools, and active coding profiles.
          </p>
        </div>

        {/* Streamlined 2x2 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {SKILL_CATEGORIES.map((category) => {
            const meta = getCategoryMeta(category.title);

            return (
              <div 
                key={category.title}
                className="rounded-2xl bg-[#14171E] border border-[#2A2F38] p-5 sm:p-6 hover:border-[#F5A623]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#2A2F38]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#171A20] border border-[#2A2F38] group-hover:border-[#F5A623]/40 transition-colors">
                        {meta.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#F5F5F2]">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-[#A6ABB5]">
                          {meta.tag}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#171A20] border border-[#2A2F38] text-[#A6ABB5]">
                      {category.skills.length} items
                    </span>
                  </div>

                  {/* Skills Grid: Sleek, compact pills with no textbook definitions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => {
                      const profile = SOCIAL_LINKS.find(
                        (s) => s.isConfigured && s.name.toLowerCase() === skill.name.toLowerCase()
                      );
                      const tag = getSkillTag(skill.name);

                      const pillContent = (
                        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#171A20] border border-[#2A2F38] hover:border-[#F5A623]/50 hover:bg-[#1A1F29] transition-all group/item shadow-sm">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className={`w-1.5 h-1.5 rounded-full ${meta.dotColor} shrink-0`} />
                            <span className="text-sm font-semibold text-[#F5F5F2] group-hover/item:text-[#F5A623] transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {tag && (
                              <span className="text-[10px] font-mono text-[#A6ABB5] px-1.5 py-0.5 rounded bg-[#101216] border border-[#2A2F38]">
                                {tag}
                              </span>
                            )}
                            {profile && (
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#A6ABB5] group-hover/item:text-[#F5A623] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                            )}
                          </div>
                        </div>
                      );

                      return profile ? (
                        <a
                          key={skill.name}
                          href={profile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          title={`Open ${skill.name} profile (${profile.url})`}
                        >
                          {pillContent}
                        </a>
                      ) : (
                        <div key={skill.name}>
                          {pillContent}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
