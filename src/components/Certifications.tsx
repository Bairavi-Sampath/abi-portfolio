import React from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#171A20] border-t border-b border-[#2A2F38]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#F5A623]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5A623]">
              CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight">
            Learning Beyond the Classroom
          </h2>
          <p className="mt-3 text-base text-[#A6ABB5]">
            Industry-aligned coursework and validated technical credentials.
          </p>
        </div>

        {/* Minimal Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={cert.id}
              className="rounded-2xl bg-[#1C2027] border border-[#2A2F38] p-6 hover:border-[#F5A623]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A6ABB5] mb-3">
                  <span className="text-[#F5A623] font-semibold uppercase tracking-wider">
                    Credential 0{index + 1}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#14171E] border border-[#2A2F38] text-[#F5A623] mt-1 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F5F5F2] tracking-tight leading-snug">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-xs text-[#A6ABB5] mt-1 font-medium">
                        {cert.issuer}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Minimal Footnote / Configurable verification slot */}
              <div className="mt-6 pt-4 border-t border-[#2A2F38] flex items-center justify-between text-xs text-[#A6ABB5]">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Curriculum
                </span>

                {cert.verificationUrl ? (
                  <a 
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F5A623] hover:underline font-medium"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-[#A6ABB5]/70">
                    Verification link slot configurable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Configuration Notice */}
        <div className="mt-8 p-4 rounded-xl bg-[#14171E] border border-[#2A2F38] flex items-center justify-between text-xs text-[#A6ABB5]">
          <span>
            Certificate asset URLs and scanned PDF links can be plugged directly into <code className="text-[#F5A623] font-mono">portfolioData.ts</code>.
          </span>
          <span className="hidden sm:inline-block font-mono text-[#F5A623]">
            4 Verified Records
          </span>
        </div>

      </div>
    </section>
  );
};
