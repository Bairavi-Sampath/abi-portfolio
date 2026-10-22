import React, { useState } from 'react';
import { Scale, Wifi, ShieldAlert, CheckCircle2, Truck, FileText } from 'lucide-react';

export const WeightMonitoringVisual: React.FC = () => {
  // Front axle and rear axle load in kilograms
  const [frontLoad, setFrontLoad] = useState<number>(1450);
  const [rearLoad, setRearLoad] = useState<number>(1850);

  const totalLoad = frontLoad + rearLoad;
  const maxRatedCapacity = 4000;
  const isOverloaded = totalLoad > maxRatedCapacity;
  const axleBiasRatio = Math.abs(frontLoad - rearLoad) / totalLoad;
  const isUnbalanced = axleBiasRatio > 0.35;

  let systemStatus = 'NORMAL LOAD STATUS';
  let statusColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';

  if (isOverloaded) {
    systemStatus = 'CRITICAL OVERLOAD DETECTED';
    statusColor = 'text-rose-400 border-rose-500/50 bg-rose-500/10';
  } else if (isUnbalanced) {
    systemStatus = 'AXLE IMBALANCE DETECTED';
    statusColor = 'text-[#F5A623] border-[#F5A623]/50 bg-[#F5A623]/10';
  }

  return (
    <div className="relative w-full rounded-xl bg-[#14171E] border border-[#2A2F38] p-5 overflow-hidden font-sans">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Header status */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-[#2A2F38] gap-2">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#F5A623]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5A623]">
            Axle Load Cells & AI/ML Classification
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${statusColor}`}>
            {systemStatus}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-mono text-[#A6ABB5] bg-[#181D25] px-2 py-0.5 rounded border border-[#2A2F38]">
            <Wifi className="w-3 h-3 text-cyan-400" /> IoT SYNC
          </span>
        </div>
      </div>

      {/* Visual Vehicle Chassis & Strain Gauge Matrix */}
      <div className="relative z-10 my-4 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {/* Left: Vehicle Load Diagram */}
        <div className="md:col-span-2 p-4 rounded-lg bg-[#181D25] border border-[#2A2F38]">
          <div className="flex items-center justify-between text-xs text-[#A6ABB5] mb-2">
            <span className="flex items-center gap-1.5 text-[#F5F5F2] font-medium">
              <Truck className="w-4 h-4 text-[#F5A623]" /> Vehicle Load Profile
            </span>
            <span className="font-mono text-[11px] text-[#A6ABB5]">
              Capacity: <span className="text-[#F5F5F2] font-semibold">{maxRatedCapacity} kg</span>
            </span>
          </div>

          {/* SVG Vehicle Chassis with Strain Gauge Nodes */}
          <div className="py-2">
            <svg viewBox="0 0 400 120" className="w-full h-auto drop-shadow-sm" fill="none">
              {/* Transport Body */}
              <rect x="50" y="30" width="290" height="48" rx="4" fill="#1F242F" stroke="#2A2F38" strokeWidth="2" />
              {/* Cabin Glass */}
              <polygon points="310,32 338,48 338,70 310,70" fill="#0E1726" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
              
              {/* Load Capacity Fill Gauge inside body */}
              <rect 
                x="54" 
                y="34" 
                width={(totalLoad / maxRatedCapacity) * 250} 
                height="40" 
                rx="2" 
                fill={isOverloaded ? '#E11D48' : '#F5A623'} 
                opacity="0.3"
                className="transition-all duration-300" 
              />

              {/* Rear Axle Load Cells */}
              <circle cx="100" cy="80" r="14" fill="#12151B" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
              <circle cx="100" cy="80" r="6" fill="#F5A623" />
              <text x="100" y="108" fill="#A6ABB5" fontSize="9" fontFamily="monospace" textAnchor="middle">
                REAR: {rearLoad}kg
              </text>

              {/* Front Axle Load Cells */}
              <circle cx="280" cy="80" r="14" fill="#12151B" stroke={isOverloaded ? '#E11D48' : '#F5A623'} strokeWidth="2" />
              <circle cx="280" cy="80" r="6" fill="#F5A623" />
              <text x="280" y="108" fill="#A6ABB5" fontSize="9" fontFamily="monospace" textAnchor="middle">
                FRONT: {frontLoad}kg
              </text>

              {/* Center of Gravity Marker */}
              <circle 
                cx={100 + (frontLoad / totalLoad) * 180} 
                cy="54" 
                r="5" 
                fill="#38BDF8" 
                stroke="#FFFFFF" 
                strokeWidth="1.5"
                className="transition-all duration-300"
              />
            </svg>
          </div>
        </div>

        {/* Right: AI/ML Analysis Card */}
        <div className="p-4 rounded-lg bg-[#181D25] border border-[#2A2F38] flex flex-col justify-between h-full">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5]">
              AI/ML Inference Matrix
            </span>
            <div className="mt-2 text-2xl font-bold font-mono text-[#F5F5F2] tabular-nums">
              {totalLoad} <span className="text-xs font-normal text-[#A6ABB5]">KG</span>
            </div>
            <div className="text-[11px] text-[#A6ABB5] mt-1 font-mono">
              Utilization: <span className={isOverloaded ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                {((totalLoad / maxRatedCapacity) * 100).toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#2A2F38]/80 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#F5F5F2]">
              {isOverloaded ? (
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              )}
              <span>{isOverloaded ? 'Exceeds Safety Threshold' : 'Load Within Safety Margins'}</span>
            </div>
            <div className="mt-1 text-[10px] text-[#A6ABB5]">
              Axle load delta: {Math.abs(frontLoad - rearLoad)} kg
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#2A2F38] text-xs">
        <div>
          <div className="flex justify-between text-[#A6ABB5] mb-1">
            <span>Front Axle Sensor Array:</span>
            <span className="font-mono text-[#F5F5F2]">{frontLoad} kg</span>
          </div>
          <input 
            type="range" 
            min="600" 
            max="2600" 
            step="50"
            value={frontLoad} 
            onChange={(e) => setFrontLoad(Number(e.target.value))}
            className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between text-[#A6ABB5] mb-1">
            <span>Rear Axle Sensor Array:</span>
            <span className="font-mono text-[#F5F5F2]">{rearLoad} kg</span>
          </div>
          <input 
            type="range" 
            min="600" 
            max="2600" 
            step="50"
            value={rearLoad} 
            onChange={(e) => setRearLoad(Number(e.target.value))}
            className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      {/* Academic Citation Footnote */}
      <div className="mt-3 text-[10px] text-[#A6ABB5] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="flex items-center gap-1">
          <FileText className="w-3 h-3 text-[#F5A623]" />
          Research Paper presented at Coimbatore Institute of Technology (CIT), Coimbatore
        </span>
        <span className="text-[#A6ABB5]/80 italic">Conceptual system dashboard</span>
      </div>
    </div>
  );
};
