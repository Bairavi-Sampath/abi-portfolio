import React, { useState } from 'react';
import { Droplets, Play, RotateCcw, Gauge, Wind } from 'lucide-react';

export const AquaVeloVisual: React.FC = () => {
  const [pressureLevel, setPressureLevel] = useState<number>(75);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [rpm, setRpm] = useState<number>(0);

  const triggerImpulse = () => {
    if (isRunning) return;
    setIsRunning(true);
    let currentRpm = 0;
    const targetRpm = Math.round(pressureLevel * 24.5);
    
    const interval = setInterval(() => {
      currentRpm += 150;
      if (currentRpm >= targetRpm) {
        setRpm(targetRpm);
        clearInterval(interval);
        setTimeout(() => {
          setIsRunning(false);
        }, 1500);
      } else {
        setRpm(currentRpm);
      }
    }, 40);
  };

  const resetImpulse = () => {
    setIsRunning(false);
    setRpm(0);
    setPressureLevel(75);
  };

  return (
    <div className="relative w-full rounded-xl bg-[#14171E] border border-[#2A2F38] p-5 overflow-hidden font-sans">
      {/* Background technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Header telemetry / schematic label */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#2A2F38]">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Hydrodynamic Conversion Schematic
          </span>
        </div>
        <span className="text-[11px] text-[#A6ABB5] font-mono">
          System State: {isRunning ? 'DISCHARGING IMPULSE' : 'PRESSURIZED READY'}
        </span>
      </div>

      {/* Main SVG Schematic illustration */}
      <div className="relative z-10 my-6 py-4 flex flex-col items-center justify-center">
        <svg 
          viewBox="0 0 540 200" 
          className="w-full max-w-[500px] h-auto drop-shadow-lg"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Chassis Outline */}
          <path 
            d="M 60 140 L 130 140 L 170 95 L 340 95 L 390 120 L 480 135 L 490 145 L 50 145 Z" 
            fill="#1A1F29" 
            stroke="#2A2F38" 
            strokeWidth="2"
          />

          {/* Aerodynamic streamline overlay */}
          <path 
            d="M 40 100 Q 180 50 490 110" 
            stroke="#38BDF8" 
            strokeWidth="1.5" 
            strokeDasharray="4 4" 
            opacity="0.35"
          />

          {/* Hydraulic Cylinder Chamber */}
          <rect 
            x="130" 
            y="70" 
            width="170" 
            height="55" 
            rx="6" 
            fill="#0F172A" 
            stroke="#38BDF8" 
            strokeWidth="2"
          />

          {/* Water Fill Level inside chamber */}
          <rect 
            x="134" 
            y={121 - (pressureLevel * 0.46)} 
            width="162" 
            height={pressureLevel * 0.46} 
            rx="3" 
            fill="url(#waterGradient)" 
            opacity="0.85"
            className="transition-all duration-300"
          />

          {/* Chamber Pressure Graduations */}
          <line x1="145" y1="80" x2="155" y2="80" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          <line x1="145" y1="95" x2="160" y2="95" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
          <line x1="145" y1="110" x2="155" y2="110" stroke="#38BDF8" strokeWidth="1" opacity="0.6" />
          
          <text x="170" y="86" fill="#7DD3FC" fontSize="10" fontFamily="monospace" opacity="0.9">
            H2O EXPULSION CORE
          </text>
          <text x="170" y="102" fill="#BAE6FD" fontSize="12" fontFamily="monospace" fontWeight="bold">
            {pressureLevel}% VOL
          </text>

          {/* Nozzle Constriction Cone */}
          <polygon 
            points="300,82 345,94 345,102 300,114" 
            fill="#1E293B" 
            stroke="#0284C7" 
            strokeWidth="2"
          />
          {/* Impulse thrust jets */}
          {isRunning && (
            <g className="animate-pulse">
              <path d="M 345 98 L 440 90 L 420 98 L 440 106 Z" fill="#38BDF8" opacity="0.75" />
              <circle cx="390" cy="98" r="4" fill="#E0F2FE" />
              <circle cx="430" cy="94" r="3" fill="#BAE6FD" />
              <circle cx="450" cy="102" r="2" fill="#7DD3FC" />
            </g>
          )}

          {/* Wheel Assembly Front */}
          <g transform="translate(420, 145)">
            <circle cx="0" cy="0" r="26" fill="#111827" stroke="#F5A623" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#F5A623" />
            {/* Spokes */}
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
          </g>

          {/* Wheel Assembly Rear */}
          <g transform="translate(100, 145)">
            <circle cx="0" cy="0" r="26" fill="#111827" stroke="#F5A623" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#F5A623" />
            {/* Spokes */}
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
          </g>

          {/* Mechanical Drive linkage */}
          <line x1="126" y1="145" x2="394" y2="145" stroke="#374151" strokeWidth="2" strokeDasharray="3 3" />

          {/* Linear Impulse Vector */}
          <g transform="translate(50, 45)">
            <line x1="0" y1="0" x2="80" y2="0" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="80,-4 88,0 80,4" fill="#F5A623" />
            <text x="0" y="-8" fill="#F5A623" fontSize="9" fontFamily="monospace">
              FORWARD THRUST VECTOR
            </text>
          </g>

          {/* SVG Gradients */}
          <defs>
            <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Simulation Controls */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2A2F38] text-xs">
        {/* Pressure Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[#A6ABB5]">
            <span className="flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" /> Chamber Fill
            </span>
            <span className="font-mono text-cyan-400 tabular-nums">{pressureLevel}%</span>
          </div>
          <input 
            type="range" 
            min="20" 
            max="100" 
            value={pressureLevel}
            disabled={isRunning}
            onChange={(e) => setPressureLevel(Number(e.target.value))}
            className="w-full accent-cyan-400 bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        {/* Live RPM / Speed readout */}
        <div className="flex flex-col justify-center px-3 py-1.5 rounded-lg bg-[#191D24] border border-[#2A2F38]/70">
          <span className="text-[10px] text-[#A6ABB5] font-medium uppercase tracking-wider">
            Impulse Drive RPM
          </span>
          <span className="font-mono text-sm font-bold text-[#F5F5F2] tabular-nums">
            {rpm} <span className="text-xs font-normal text-[#A6ABB5]">RPM</span>
          </span>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={triggerImpulse}
            disabled={isRunning}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-black bg-[#F5A623] hover:bg-[#e0951b] disabled:opacity-50 rounded-lg transition-colors cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isRunning ? 'Discharging...' : 'Simulate Impulse'}
          </button>
          <button 
            type="button"
            onClick={resetImpulse}
            title="Reset simulation parameters"
            className="p-2 text-[#A6ABB5] hover:text-[#F5F5F2] bg-[#1F242D] hover:bg-[#272D38] border border-[#2A2F38] rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Distinguishing footnote */}
      <div className="mt-3 text-[10px] text-[#A6ABB5] flex items-center justify-between">
        <span>* Conceptual Hydrodynamics Simulation — Model for fuel-less propulsion</span>
        <span className="font-mono text-[9px] text-cyan-400/80">EQ: F = ρ·A·v²</span>
      </div>
    </div>
  );
};
