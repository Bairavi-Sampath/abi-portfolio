import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDetail } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const aquaVelo = PROJECTS.find((p) => p.id === 'aqua-velo') || PROJECTS[0];
  const innovsense = PROJECTS.find((p) => p.id === 'innovsense') || PROJECTS[1];
  const weightMonitoring = PROJECTS.find((p) => p.id === 'smart-weight-monitoring') || PROJECTS[2];

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      // Estimate active index based on card width
      const cardWidth = 360;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveCardIndex(Math.min(Math.max(0, index), 2));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState, { passive: true });
      updateScrollState();
      window.addEventListener('resize', updateScrollState);
      return () => {
        el.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollDistance = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  };

  const projectCards = [
    {
      data: aquaVelo,
      displayTitle: 'AQUA VELO',
      displaySubtitle: 'WATER-POWERED CAR MODEL',
      category: 'PHYSICS & MECHANICS',
      badge: 'Hydrodynamics',
      summary: 'Demonstrates forward vehicular motion using pressurized water displacement and gravity without conventional fuel.',
      technologies: ['Fluid Mechanics', 'Hydrodynamics', 'Mechanical Prototyping'],
      renderVisual: () => (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#0e131b] via-[#141b24] to-[#0b0e14] overflow-hidden flex flex-col justify-between p-4 rounded-xl border border-[#2A2F38]">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top telemetry tags */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-black/60 border border-cyan-500/30 text-cyan-400">
              01 · Kinetic Prototype
            </span>
            <span className="text-[#A6ABB5]">Water-Pressure Propulsion</span>
          </div>

          {/* Vector Schematic Illustration */}
          <div className="relative z-10 my-auto flex justify-center py-2">
            <svg viewBox="0 0 320 110" className="w-full max-w-[270px] h-auto drop-shadow-lg select-none" fill="none">
              {/* Velocity motion lines */}
              <line x1="20" y1="20" x2="100" y2="20" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />
              <polygon points="100,17 106,20 100,23" fill="#F5A623" />
              <text x="20" y="14" fill="#F5A623" fontSize="8" fontFamily="monospace" fontWeight="bold">IMPULSE MOTION →</text>

              {/* Aerodynamic car body */}
              <path d="M 40 80 L 85 80 L 115 50 L 220 50 L 255 65 L 295 78 L 290 85 L 35 85 Z" fill="#1A2230" stroke="#38BDF8" strokeWidth="1.5" />
              
              {/* Water pressure cylinder */}
              <rect x="120" y="55" width="85" height="22" rx="4" fill="#0284C7" opacity="0.35" stroke="#38BDF8" strokeWidth="1.2" />
              <text x="132" y="70" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">H₂O CHAMBER</text>

              {/* Wheels */}
              <circle cx="75" cy="85" r="14" fill="#11161F" stroke="#F5A623" strokeWidth="2" />
              <circle cx="75" cy="85" r="5" fill="#F5A623" />
              <circle cx="255" cy="85" r="14" fill="#11161F" stroke="#F5A623" strokeWidth="2" />
              <circle cx="255" cy="85" r="5" fill="#F5A623" />

              {/* Nozzle jet spray */}
              <path d="M 38 78 L 10 70 L 15 88 Z" fill="url(#waterSpray)" opacity="0.8" />

              <defs>
                <linearGradient id="waterSpray" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Reference-Inspired Overlaid Typography */}
          <div className="relative z-10 w-full flex items-end justify-between pt-2 border-t border-white/5">
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white uppercase leading-none">
                AQUA VELO
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
                WATER-POWERED CAR MODEL
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#A6ABB5] px-1.5 py-0.5 rounded bg-black/40 border border-[#2A2F38]">
              Prototype
            </span>
          </div>
        </div>
      ),
    },
    {
      data: innovsense,
      displayTitle: 'INNOVSENSE',
      displaySubtitle: 'ALCOHOL DETECTION & CUT-OFF',
      category: 'EMBEDDED SYSTEMS',
      badge: 'Automotive Safety',
      summary: 'Interlocks vehicle ignition by detecting alcohol vapor with an MQ-3 sensor, triggering alerts and an automatic circuit cut-off.',
      technologies: ['MQ-3 Gas Sensor', 'Microcontroller', 'MOSFET Switching'],
      renderVisual: () => (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#0e131b] via-[#151c17] to-[#0b0e14] overflow-hidden flex flex-col justify-between p-4 rounded-xl border border-[#2A2F38]">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top telemetry tags */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-black/60 border border-emerald-500/30 text-emerald-400">
              02 · Embedded System
            </span>
            <span className="text-[#A6ABB5]">Automatic Interlock</span>
          </div>

          {/* Vector Schematic Illustration */}
          <div className="relative z-10 my-auto flex justify-center py-2">
            <svg viewBox="0 0 320 110" className="w-full max-w-[270px] h-auto drop-shadow-lg select-none" fill="none">
              {/* MQ-3 Sensor Scanner */}
              <circle cx="65" cy="55" r="28" fill="#14201A" stroke="#10B981" strokeWidth="1.5" />
              <circle cx="65" cy="55" r="18" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="65" cy="55" r="8" fill="#F5A623" />
              <text x="44" y="94" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="bold">MQ-3 SENSOR</text>

              {/* Connecting circuit bus */}
              <path d="M 93 55 L 140 55" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="140" cy="55" r="3" fill="#F5A623" />

              {/* Microcontroller MCU */}
              <rect x="145" y="32" width="55" height="46" rx="4" fill="#171F29" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="156" y="52" fill="#F5F5F2" fontSize="8" fontFamily="monospace" fontWeight="bold">MCU</text>
              <text x="151" y="64" fill="#38BDF8" fontSize="7" fontFamily="monospace">ADC 0.25V</text>

              {/* Output bus to cut-off switch */}
              <path d="M 200 55 L 245 55" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 2" />

              {/* Power MOSFET Switch */}
              <rect x="245" y="38" width="50" height="34" rx="4" fill="#1C1820" stroke="#F43F5E" strokeWidth="1.5" />
              <text x="254" y="52" fill="#F43F5E" fontSize="7" fontFamily="monospace" fontWeight="bold">CUT-OFF</text>
              <text x="256" y="63" fill="#A6ABB5" fontSize="7" fontFamily="monospace">MOSFET</text>
            </svg>
          </div>

          {/* Reference-Inspired Overlaid Typography */}
          <div className="relative z-10 w-full flex items-end justify-between pt-2 border-t border-white/5">
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white uppercase leading-none">
                INNOVSENSE
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
                ALCOHOL DETECTION &amp; CUT-OFF
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#A6ABB5] px-1.5 py-0.5 rounded bg-black/40 border border-[#2A2F38]">
              Interlock
            </span>
          </div>
        </div>
      ),
    },
    {
      data: weightMonitoring,
      displayTitle: 'SMART WEIGHT',
      displaySubtitle: 'OVERLOAD MONITORING SYSTEM',
      category: 'SMART MONITORING',
      badge: 'Presented at CIT',
      summary: 'Monitors vehicle axle weight distribution using pressure sensors to detect overloading early, presented as a research paper at CIT Coimbatore.',
      technologies: ['Load Cell Telemetry', 'Microcontroller', 'Data Analysis'],
      renderVisual: () => (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#0e131b] via-[#1d1912] to-[#0b0e14] overflow-hidden flex flex-col justify-between p-4 rounded-xl border border-[#2A2F38]">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top telemetry tags */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-black/60 border border-amber-500/30 text-[#F5A623]">
              03 · Research Paper
            </span>
            <span className="text-[#A6ABB5]">Presented at CIT</span>
          </div>

          {/* Vector Schematic Illustration */}
          <div className="relative z-10 my-auto flex justify-center py-2">
            <svg viewBox="0 0 320 110" className="w-full max-w-[270px] h-auto drop-shadow-lg select-none" fill="none">
              {/* Vehicle body wireframe top-down */}
              <rect x="40" y="28" width="240" height="54" rx="10" fill="#161A22" stroke="#2A2F38" strokeWidth="1.5" />
              
              {/* Front Axle & Load Cells */}
              <line x1="225" y1="18" x2="225" y2="92" stroke="#F5A623" strokeWidth="2.5" />
              <rect x="218" y="14" width="14" height="18" rx="3" fill="#1C212B" stroke="#F5A623" strokeWidth="1.5" />
              <rect x="218" y="78" width="14" height="18" rx="3" fill="#1C212B" stroke="#F5A623" strokeWidth="1.5" />
              <text x="200" y="106" fill="#F5A623" fontSize="7" fontFamily="monospace" fontWeight="bold">FRONT AXLE</text>

              {/* Rear Axle & Load Cells */}
              <line x1="90" y1="18" x2="90" y2="92" stroke="#F5A623" strokeWidth="2.5" />
              <rect x="83" y="14" width="14" height="18" rx="3" fill="#1C212B" stroke="#F5A623" strokeWidth="1.5" />
              <rect x="83" y="78" width="14" height="18" rx="3" fill="#1C212B" stroke="#F5A623" strokeWidth="1.5" />
              <text x="68" y="106" fill="#F5A623" fontSize="7" fontFamily="monospace" fontWeight="bold">REAR AXLE</text>

              {/* Center of weight marker */}
              <circle cx="150" cy="55" r="7" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="150" cy="55" r="14" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <text x="122" y="44" fill="#38BDF8" fontSize="7" fontFamily="monospace">LOAD CENTER</text>
            </svg>
          </div>

          {/* Reference-Inspired Overlaid Typography */}
          <div className="relative z-10 w-full flex items-end justify-between pt-2 border-t border-white/5">
            <div>
              <div className="text-lg sm:text-xl font-black tracking-tight text-white uppercase leading-none">
                SMART WEIGHT
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
                OVERLOAD MONITORING IN TRANSPORT
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#A6ABB5] px-1.5 py-0.5 rounded bg-black/40 border border-[#2A2F38]">
              CIT Paper
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#101216] border-t border-[#2A2F38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================= */}
        {/* Header Bar: FEATURED PROJECTS & Horizontal Scroll Navigation      */}
        {/* ================================================================= */}
        <div className="flex items-center justify-between pb-5 border-b border-[#2A2F38] gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623] shadow-[0_0_12px_rgba(245,166,35,0.2)]">
              <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#F5F5F2]">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Scroll Navigation Arrows & Status */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-[#A6ABB5] hidden sm:inline mr-2">
              Scroll to explore
            </span>
            
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-xl bg-[#171A20] border border-[#2A2F38] text-[#A6ABB5] hover:text-[#F5A623] hover:border-[#F5A623]/40 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="Scroll left to previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-xl bg-[#171A20] border border-[#2A2F38] text-[#A6ABB5] hover:text-[#F5A623] hover:border-[#F5A623]/40 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              aria-label="Scroll right to next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Intro */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] tracking-tight">
              Engineering Projects &amp; Research
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#A6ABB5] max-w-2xl leading-relaxed">
              Explore hands-on models spanning fluid dynamics, embedded microcontroller interlocks, and vehicle weight safety. Click any project card to view full details and interactive simulations.
            </p>
          </div>

          {/* Quick interactive dots */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {projectCards.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToProject(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeCardIndex === idx
                    ? 'w-6 bg-[#F5A623]'
                    : 'w-2 bg-[#2A2F38] hover:bg-[#A6ABB5]'
                }`}
                aria-label={`Jump to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* Horizontal Scrollable Row of Compact Cards (Reference Inspired)   */}
        {/* ================================================================= */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-0.5 scrollbar-thin scrollbar-thumb-[#2A2F38] scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {projectCards.map((card, index) => {
            const project = card.data;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative flex flex-col justify-between w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start rounded-2xl bg-[#14171E] border border-[#2A2F38] hover:border-[#F5A623]/60 transition-all duration-300 shadow-xl hover:shadow-[0_12px_35px_rgba(245,166,35,0.08)] cursor-pointer overflow-hidden"
              >
                {/* 1. Visual Showcase Panel */}
                <div className="p-3 bg-[#101216]/60">
                  {card.renderVisual()}
                </div>

                {/* 2. Compact Middle Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#F5A623] block mb-1">
                      {card.category}
                    </span>
                    <p className="text-xs sm:text-sm text-[#A6ABB5] leading-relaxed line-clamp-2">
                      {card.summary}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {card.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-[#F5F5F2] bg-[#1C2027] border border-[#2A2F38] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Reference-Inspired Bottom Footer Bar */}
                <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#171A20] border-t border-[#2A2F38] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-[#F5F5F2] group-hover:text-[#F5A623] transition-colors truncate">
                      {project.title}
                    </h4>
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#A6ABB5] truncate mt-0.5">
                      {card.category}
                    </div>
                  </div>

                  {/* Action Button: View Details with signature ↗ icon */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs font-semibold text-[#F5A623] group-hover:underline hidden sm:inline">
                      View Details
                    </span>
                    <div className="p-2 rounded-xl bg-[#1F242D] border border-[#2A2F38] text-[#A6ABB5] group-hover:text-black group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar / Exploration Trigger */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#14171E] border border-[#2A2F38] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A6ABB5]">
            <BookOpen className="w-4 h-4 text-[#F5A623] shrink-0" />
            <span>
              Click any project card above to explore full engineering documentation, schematics, and interactive simulation models.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onSelectProject(aquaVelo)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1F242D] hover:bg-[#282F3B] text-[#F5F5F2] border border-[#2A2F38] transition-colors cursor-pointer"
            >
              Aqua Velo Details
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(innovsense)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1F242D] hover:bg-[#282F3B] text-[#F5F5F2] border border-[#2A2F38] transition-colors cursor-pointer"
            >
              InnovSense Details
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(weightMonitoring)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1F242D] hover:bg-[#282F3B] text-[#F5F5F2] border border-[#2A2F38] transition-colors cursor-pointer"
            >
              Smart Weight Details
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
