import React from 'react';
import { GraduationCap, School, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#101216]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              EDUCATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            My Academic Journey
          </h2>
          <p className="mt-3 text-base text-[#A6ABB5]">
            Strong foundations in mathematics, biological sciences, and autonomous engineering computer science.
          </p>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative border-l border-[#2A2F38] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EDUCATION_HISTORY.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker node */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                item.active 
                  ? 'bg-[#101216] border-[#F5A623] shadow-[0_0_12px_rgba(245,166,35,0.3)]' 
                  : 'bg-[#101216] border-[#2A2F38] group-hover:border-[#A6ABB5]'
              }`}>
                <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-[#F5A623]' : 'bg-[#A6ABB5]'}`} />
              </div>

              {/* Education Card Container */}
              <div className="rounded-2xl bg-[#171A20] border border-[#2A2F38] p-6 sm:p-7 hover:border-[#F5A623]/30 transition-all shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#2A2F38]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] mb-1">
                      {item.active ? (
                        <GraduationCap className="w-4 h-4" />
                      ) : (
                        <School className="w-4 h-4 text-[#A6ABB5]" />
                      )}
                      <span className="uppercase tracking-wider font-semibold">
                        {item.active ? 'Undergraduate Degree' : 'School Education'}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                      {item.degree}
                    </h3>

                    <div className="text-sm font-medium text-[#A6ABB5] mt-1">
                      {item.institution}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#A6ABB5]/80 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Academic Score Pill */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-[#14171E] border border-[#2A2F38]">
                      <span className="text-[10px] font-mono text-[#A6ABB5] block uppercase">
                        {item.scoreLabel}
                      </span>
                      <span className="text-base font-bold font-mono text-[#F5A623] tabular-nums">
                        {item.score}
                      </span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1 text-xs font-mono text-[#A6ABB5] mt-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A6ABB5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
