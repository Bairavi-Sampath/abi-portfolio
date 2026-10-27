import React from 'react';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#101216]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              EDUCATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
            My Academic Journey
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#A6ABB5]">
            Educational background and academic foundations.
          </p>
        </div>

        {/* Short & Sweet Vertical Timeline */}
        <div className="relative border-l border-[#2A2F38] ml-3 sm:ml-4 pl-5 sm:pl-8 space-y-5 sm:space-y-6">
          {EDUCATION_HISTORY.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker node */}
              <div 
                className={`absolute -left-[27px] sm:-left-[39px] top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  item.active 
                    ? 'bg-[#101216] border-[#F5A623] shadow-[0_0_10px_rgba(245,166,35,0.4)]' 
                    : 'bg-[#101216] border-[#2A2F38] group-hover:border-[#A6ABB5]'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-[#F5A623]' : 'bg-[#A6ABB5]'}`} />
              </div>

              {/* Compact & Clean Education Card */}
              <div className="rounded-xl bg-[#171A20] border border-[#2A2F38] p-4 sm:p-5 hover:border-[#F5A623]/40 transition-all shadow-md group-hover:bg-[#191D24]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Left: Degree & Institution */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5A623]">
                      {item.active ? (
                        <GraduationCap className="w-3.5 h-3.5" />
                      ) : (
                        <School className="w-3.5 h-3.5 text-[#A6ABB5]" />
                      )}
                      <span className="uppercase tracking-wider font-semibold">
                        {item.active ? 'Undergraduate Degree · Present' : 'School Education'}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#F5F5F2] tracking-tight">
                      {item.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#A6ABB5]">
                      <span className="font-medium text-[#F5F5F2]/90">{item.institution}</span>
                      <span className="text-[#2A2F38] hidden sm:inline">•</span>
                      <span className="flex items-center gap-1 text-[#A6ABB5]/80">
                        <MapPin className="w-3 h-3 text-[#F5A623]/80" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Right: Score & Period */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#2A2F38]/50 shrink-0">
                    <div className="px-2.5 py-1 rounded-lg bg-[#14171E] border border-[#2A2F38] text-right">
                      <span className="text-[10px] font-mono text-[#A6ABB5] block uppercase leading-none mb-0.5">
                        {item.scoreLabel}
                      </span>
                      <span className="text-sm sm:text-base font-bold font-mono text-[#F5A623] tabular-nums leading-tight">
                        {item.score}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#A6ABB5]">
                      <Calendar className="w-3 h-3 text-[#A6ABB5]/70" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
