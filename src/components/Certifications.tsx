import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-[#171A20] border-t border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-[#A6ABB5]">
            Online courses, technical assessments, and certifications I have completed.
          </p>
        </div>

        {/* Clean, Polished Credential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={cert.id}
              className="rounded-2xl bg-[#14171E] border border-[#2A2F38] p-5 sm:p-6 hover:border-[#F5A623]/40 transition-all shadow-md hover:bg-[#181D26] flex flex-col justify-between group"
            >
              <div>
                {/* Top index & date */}
                <div className="flex items-center justify-between text-xs font-mono text-[#A6ABB5] mb-3">
                  <span className="text-[#F5A623] font-semibold uppercase tracking-wider">
                    Credential 0{index + 1}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#A6ABB5]/70" />
                    {cert.date}
                  </span>
                </div>

                {/* Main certification info */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#171A20] border border-[#2A2F38] text-[#F5A623] shrink-0 group-hover:border-[#F5A623]/40 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F5F2] tracking-tight leading-snug group-hover:text-[#F5A623] transition-colors">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-xs text-[#A6ABB5] font-medium leading-relaxed">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Only show verification link if a real URL exists */}
              {cert.verificationUrl && (
                <div className="mt-4 pt-3 border-t border-[#2A2F38] flex items-center justify-end">
                  <a 
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5A623] hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
