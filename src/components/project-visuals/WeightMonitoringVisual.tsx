import React, { useState } from 'react';
import { Scale, RotateCcw, AlertCircle, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

interface WeightMonitoringVisualProps {
  isModal?: boolean;
}

export const WeightMonitoringVisual: React.FC<WeightMonitoringVisualProps> = ({ isModal = false }) => {
  // Front axle and rear axle load values in kg (illustrative simulation sample)
  const [frontLoad, setFrontLoad] = useState<number>(1400);
  const [rearLoad, setRearLoad] = useState<number>(1600);

  const totalLoad = frontLoad + rearLoad;
  const configuredCapacity = 4000; // Configurable example limit
  const isOverloaded = totalLoad > configuredCapacity;
  const axleBiasRatio = Math.abs(frontLoad - rearLoad) / totalLoad;
  const isUnbalanced = !isOverloaded && axleBiasRatio > 0.35;
  const utilizationPercent = Math.min(100, Math.round((totalLoad / configuredCapacity) * 100));

  const handleReset = () => {
    setFrontLoad(1400);
    setRearLoad(1600);
  };

  return (
    <div className={`relative w-full rounded-2xl bg-[#14171E] border border-[#2A2F38] overflow-hidden font-sans ${isModal ? 'p-6 sm:p-7' : 'p-4 sm:p-5'}`}>
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Header telemetry / schematic status */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#2A2F38] gap-2">
        <div className="flex items-center gap-2">
          <Scale className="w-3.5 h-3.5 text-[#F5A623]" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F5F5F2]">
            Axle Load Distribution &amp; Safety
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span 
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors ${
              isOverloaded 
                ? 'border-rose-500/50 bg-rose-500/15 text-rose-400 font-bold' 
                : isUnbalanced 
                ? 'border-[#F5A623]/50 bg-[#F5A623]/15 text-[#F5A623] font-semibold'
                : 'border-emerald-500/50 bg-emerald-500/15 text-emerald-400'
            }`}
          >
            {isOverloaded ? 'Overload' : isUnbalanced ? 'Imbalance' : 'Normal Load'}
          </span>
        </div>
      </div>

      {/* Vehicle Top-Down Load Diagram & Indicators */}
      <div className={`relative z-10 my-3.5 grid gap-3 items-center ${isModal ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
        
        {/* Left: Top-Down Vehicle Visualization */}
        <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-[#181D25] border border-[#2A2F38] flex flex-col items-center">
          <div className="w-full flex items-center justify-between text-xs text-[#A6ABB5] mb-2 font-mono">
            <span>Front Axle: <strong className="text-[#F5A623]">{frontLoad} kg</strong></span>
            <span>Rear Axle: <strong className="text-[#F5A623]">{rearLoad} kg</strong></span>
          </div>

          {/* Top-Down Schematic SVG */}
          <div className="w-full py-2 flex justify-center">
            <svg 
              viewBox="0 0 420 170" 
              className="w-full max-w-[380px] h-auto select-none drop-shadow-sm"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Vehicle Body Outline (Top-Down) */}
              <rect x="70" y="35" width="280" height="100" rx="20" fill="#14171E" stroke="#2A2F38" strokeWidth="2" />
              
              {/* Cabin Area */}
              <path d="M 280 45 L 335 45 C 342 45 345 52 345 60 L 345 110 C 345 118 342 125 335 125 L 280 125 Z" fill="#1C212B" stroke="#2A2F38" strokeWidth="1.5" />
              <text x="312" y="90" fill="#A6ABB5" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
                Cabin
              </text>

              {/* Cargo Bed Load Visual */}
              <rect 
                x="85" 
                y="45" 
                width="180" 
                height="80" 
                rx="8" 
                fill={isOverloaded ? '#E11D48' : '#F5A623'} 
                opacity="0.15" 
                className="transition-all duration-300"
              />
              <rect x="85" y="45" width="180" height="80" rx="8" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <text x="175" y="90" fill="#F5F5F2" fontSize="11" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Cargo Load Bed
              </text>

              {/* Front Axle Load Cells & Wheels */}
              <g transform="translate(290, 85)">
                {/* Axle Line */}
                <line x1="0" y1="-65" x2="0" y2="65" stroke="#374151" strokeWidth="4" />
                {/* Top Wheel */}
                <rect x="-10" y="-72" width="20" height="14" rx="3" fill="#1E242F" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
                {/* Bottom Wheel */}
                <rect x="-10" y="58" width="20" height="14" rx="3" fill="#1E242F" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
                {/* Load Cell Sensor Nodes */}
                <circle cx="0" cy="-45" r="5" fill="#F5A623" />
                <circle cx="0" cy="45" r="5" fill="#F5A623" />
              </g>

              {/* Rear Axle Load Cells & Wheels */}
              <g transform="translate(130, 85)">
                {/* Axle Line */}
                <line x1="0" y1="-65" x2="0" y2="65" stroke="#374151" strokeWidth="4" />
                {/* Top Wheel */}
                <rect x="-10" y="-72" width="20" height="14" rx="3" fill="#1E242F" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
                {/* Bottom Wheel */}
                <rect x="-10" y="58" width="20" height="14" rx="3" fill="#1E242F" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
                {/* Load Cell Sensor Nodes */}
                <circle cx="0" cy="-45" r="5" fill="#F5A623" />
                <circle cx="0" cy="45" r="5" fill="#F5A623" />
              </g>

              {/* Center of Mass Indicator */}
              <circle 
                cx={130 + (frontLoad / totalLoad) * 160} 
                cy="85" 
                r="6" 
                fill="#38BDF8" 
                stroke="#FFFFFF" 
                strokeWidth="1.5" 
                className="transition-all duration-300"
              />
            </svg>
          </div>

          <div className="w-full flex items-center justify-between text-[11px] text-[#A6ABB5] pt-2 border-t border-[#2A2F38]/60">
            <span>Rear Axle Sensors</span>
            <span className="flex items-center gap-1 text-[#38BDF8]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" /> Center of Weight
            </span>
            <span>Front Axle Sensors</span>
          </div>
        </div>

        {/* Right: Metrics & Load Breakdown */}
        <div className={`${isModal ? 'lg:col-span-5' : 'w-full'} p-4 rounded-xl bg-[#181D25] border border-[#2A2F38] flex flex-col justify-between space-y-3`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5] block">
                Estimated Total Vehicle Load
              </span>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums ${isOverloaded ? 'text-rose-400' : 'text-[#F5F5F2]'}`}>
                  {totalLoad}
                </span>
                <span className="text-xs text-[#A6ABB5] font-mono">KG</span>
              </div>
            </div>
            <div className="text-right text-[11px] text-[#A6ABB5] font-mono">
              Limit: <span className="text-[#F5F5F2] font-semibold">{configuredCapacity} kg</span>
            </div>
          </div>

          {/* Capacity Utilization Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
              <span className="text-[#A6ABB5]">Capacity Utilization</span>
              <span className={isOverloaded ? 'text-rose-400 font-bold' : 'text-[#F5A623] font-bold'}>
                {((totalLoad / configuredCapacity) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-[#101216] overflow-hidden border border-[#2A2F38]">
              <div 
                className={`h-full transition-all duration-300 ${isOverloaded ? 'bg-rose-500' : 'bg-[#F5A623]'}`}
                style={{ width: `${utilizationPercent}%` }}
              />
            </div>
          </div>

          {/* Status Message */}
          <div className="p-2.5 rounded-lg bg-[#14171E] border border-[#2A2F38] text-[11px]">
            <div className="flex items-center gap-1.5">
              {isOverloaded ? (
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              )}
              <span className="font-semibold text-[#F5F5F2]">
                {isOverloaded 
                  ? 'Exceeds Safety Threshold' 
                  : isUnbalanced 
                  ? 'Uneven Load Distribution'
                  : 'Load Within Safe Limits'}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Large Overlaid Typography inspiring from Reference Image */}
      <div className="relative z-10 w-full flex items-end justify-between pt-1 pb-3 px-1">
        <div>
          <div className="text-xl sm:text-2xl font-black tracking-tight text-[#F5F5F2] uppercase leading-none">
            SMART WEIGHT
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
            OVERLOAD MONITORING IN TRANSPORT
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101216] border border-[#2A2F38] text-amber-400">
          Research Paper
        </span>
      </div>

      {/* Interactive Controls */}
      <div className="relative z-10 pt-3 border-t border-[#2A2F38]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-[#A6ABB5]">
            Axle Load Sliders:
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#1C2027] hover:bg-[#252A34] text-[#A6ABB5] hover:text-[#F5F5F2] border border-[#2A2F38] transition-colors cursor-pointer"
            title="Reset to default load"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <div className="flex justify-between text-[#A6ABB5] text-[11px] mb-1">
              <span>Front Axle:</span>
              <span className="font-mono text-[#F5A623]">{frontLoad} kg</span>
            </div>
            <input 
              type="range" 
              min="800" 
              max="2400" 
              step="50"
              value={frontLoad} 
              onChange={(e) => setFrontLoad(Number(e.target.value))}
              className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[#A6ABB5] text-[11px] mb-1">
              <span>Rear Axle:</span>
              <span className="font-mono text-[#F5A623]">{rearLoad} kg</span>
            </div>
            <input 
              type="range" 
              min="800" 
              max="2400" 
              step="50"
              value={rearLoad} 
              onChange={(e) => setRearLoad(Number(e.target.value))}
              className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Research Presentation Highlight */}
      <div className="mt-3 pt-2.5 border-t border-[#2A2F38] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px]">
        <div className="flex items-center gap-1.5 text-[#F5F5F2]">
          <Award className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
          <span>
            <strong className="text-[#F5A623]">Presented at CIT:</strong> Coimbatore Institute of Technology
          </span>
        </div>
        <span className="font-mono text-[#A6ABB5] italic">
          * Conceptual demo
        </span>
      </div>

    </div>
  );
};
