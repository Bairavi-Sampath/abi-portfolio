import React, { useState, useRef, useEffect } from 'react';
import { Droplets, Play, RotateCcw, Gauge } from 'lucide-react';

interface AquaVeloVisualProps {
  isModal?: boolean;
}

export const AquaVeloVisual: React.FC<AquaVeloVisualProps> = ({ isModal = false }) => {
  const [pressureLevel, setPressureLevel] = useState<number>(75);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [rpm, setRpm] = useState<number>(0);
  const intervalRef = useRef<any>(null);

  const triggerImpulse = () => {
    if (isRunning) return;
    setIsRunning(true);
    let currentRpm = 0;
    const targetRpm = Math.round(pressureLevel * 22);

    intervalRef.current = setInterval(() => {
      currentRpm += 120;
      if (currentRpm >= targetRpm) {
        setRpm(targetRpm);
        clearInterval(intervalRef.current);
        // Spin down naturally
        setTimeout(() => {
          let decayRpm = targetRpm;
          const decayInterval = setInterval(() => {
            decayRpm = Math.max(0, decayRpm - 180);
            setRpm(decayRpm);
            if (decayRpm <= 0) {
              clearInterval(decayInterval);
              setIsRunning(false);
            }
          }, 60);
        }, 1200);
      } else {
        setRpm(currentRpm);
      }
    }, 40);
  };

  const resetImpulse = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setRpm(0);
    setPressureLevel(75);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={`relative w-full rounded-2xl bg-[#14171E] border border-[#2A2F38] overflow-hidden font-sans ${isModal ? 'p-6 sm:p-7' : 'p-4 sm:p-5'}`}>
      {/* Background technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5A623 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Header schematic label & state */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#2A2F38]">
        <div className="flex items-center gap-2">
          <Droplets className="w-3.5 h-3.5 text-[#F5A623]" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F5F5F2]">
            Hydrodynamic Conversion Schematic
          </span>
        </div>
        <span className="text-[10px] text-[#A6ABB5] font-mono">
          <span className={isRunning ? 'text-[#F5A623] font-bold' : 'text-[#A6ABB5]'}>
            {isRunning ? 'Discharging Impulse' : 'Ready'}
          </span>
        </span>
      </div>

      {/* Main SVG Schematic illustration */}
      <div className="relative z-10 my-3 py-1 flex flex-col items-center justify-center">
        <svg 
          viewBox="0 0 540 210" 
          className="w-full max-w-[480px] h-auto drop-shadow-md select-none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Forward Direction of Motion Indicator */}
          <g transform="translate(60, 24)">
            <line x1="0" y1="0" x2="80" y2="0" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 2" />
            <polygon points="80,-4 88,0 80,4" fill="#F5A623" />
            <text x="0" y="-8" fill="#F5A623" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
              DIRECTION OF MOTION →
            </text>
          </g>

          {/* Base Chassis Outline */}
          <path 
            d="M 60 145 L 130 145 L 170 100 L 340 100 L 390 125 L 480 140 L 490 150 L 50 150 Z" 
            fill="#1A1F29" 
            stroke="#2A2F38" 
            strokeWidth="2"
          />

          {/* Aerodynamic contour line */}
          <path 
            d="M 40 105 Q 180 55 490 115" 
            stroke="#F5A623" 
            strokeWidth="1.5" 
            strokeDasharray="4 4" 
            opacity="0.3"
          />

          {/* Hydraulic Water Chamber */}
          <rect 
            x="130" 
            y="75" 
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
            y={126 - (pressureLevel * 0.46)} 
            width="162" 
            height={pressureLevel * 0.46} 
            rx="3" 
            fill="url(#waterGradientAqua)" 
            opacity="0.85"
            className="transition-all duration-300"
          />

          {/* Chamber Labels */}
          <text x="145" y="93" fill="#BAE6FD" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
            Water Chamber
          </text>
          <text x="145" y="110" fill="#7DD3FC" fontSize="11" fontFamily="monospace">
            {pressureLevel}% Fill
          </text>

          {/* Constriction Nozzle */}
          <polygon 
            points="300,87 345,99 345,107 300,119" 
            fill="#1E293B" 
            stroke="#0284C7" 
            strokeWidth="2"
          />
          <text x="315" y="77" fill="#A6ABB5" fontSize="9" fontFamily="sans-serif">
            Nozzle
          </text>

          {/* Water Expulsion Jets (Animated on impulse) */}
          {isRunning ? (
            <g className="animate-pulse">
              <path d="M 345 103 L 440 95 L 420 103 L 440 111 Z" fill="#38BDF8" opacity="0.85" />
              <line x1="345" y1="103" x2="460" y2="103" stroke="#F5A623" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="460,99 468,103 460,107" fill="#F5A623" />
              <text x="360" y="125" fill="#F5A623" fontSize="9" fontFamily="sans-serif" fontWeight="bold">
                Water Expulsion →
              </text>
            </g>
          ) : (
            <g>
              <line x1="345" y1="103" x2="410" y2="103" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <polygon points="410,100 416,103 410,106" fill="#F5A623" opacity="0.6" />
              <text x="350" y="122" fill="#A6ABB5" fontSize="9" fontFamily="sans-serif">
                Expulsion Port
              </text>
            </g>
          )}

          {/* Front Wheel */}
          <g transform="translate(420, 150)">
            <circle cx="0" cy="0" r="26" fill="#111827" stroke="#F5A623" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#F5A623" />
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
          </g>

          {/* Rear Wheel */}
          <g transform="translate(100, 150)">
            <circle cx="0" cy="0" r="26" fill="#111827" stroke="#F5A623" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="5" fill="#F5A623" />
            <line x1="-12" y1="0" x2="12" y2="0" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
            <line x1="0" y1="-12" x2="0" y2="12" stroke="#4B5563" strokeWidth="2" transform={`rotate(${rpm % 360})`} />
          </g>

          {/* Drive Axle Linkage */}
          <line x1="126" y1="150" x2="394" y2="150" stroke="#374151" strokeWidth="2" strokeDasharray="3 3" />
          <text x="260" y="170" fill="#A6ABB5" fontSize="9" fontFamily="sans-serif" textAnchor="middle">
            Drive Chassis &amp; Wheels
          </text>

          {/* SVG Gradients */}
          <defs>
            <linearGradient id="waterGradientAqua" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Large Overlaid Typography inspiring from Reference Image */}
        <div className="w-full flex items-end justify-between pt-2 px-1">
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-[#F5F5F2] uppercase leading-none">
              AQUA VELO
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
              WATER-POWERED CAR MODEL
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101216] border border-[#2A2F38] text-cyan-400">
            Kinetic Model
          </span>
        </div>
      </div>

      {/* Interactive Simulation Controls */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[#2A2F38] text-xs">
        {/* Pressure Slider */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-[#A6ABB5] text-[11px]">
            <span className="flex items-center gap-1">
              <Gauge className="w-3 h-3 text-cyan-400" /> Chamber Fill
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
            className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        {/* Live Drive RPM readout */}
        <div className="flex flex-col justify-center px-2.5 py-1 rounded-lg bg-[#191D24] border border-[#2A2F38]">
          <span className="text-[9px] text-[#A6ABB5] font-medium uppercase tracking-wider">
            Impulse Motion
          </span>
          <span className="font-mono text-xs font-bold text-[#F5F5F2] tabular-nums">
            {rpm} <span className="text-[10px] font-normal text-[#A6ABB5]">RPM</span>
          </span>
        </div>

        {/* Action Buttons: Simulate Impulse & Reset */}
        <div className="flex items-center gap-1.5">
          <button 
            type="button"
            onClick={triggerImpulse}
            disabled={isRunning}
            className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-black bg-[#F5A623] hover:bg-[#e0951b] disabled:opacity-50 rounded-lg transition-colors cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{isRunning ? 'Discharging...' : 'Simulate'}</span>
          </button>
          <button 
            type="button"
            onClick={resetImpulse}
            title="Reset simulation parameters"
            className="p-1.5 text-[#A6ABB5] hover:text-[#F5F5F2] bg-[#1F242D] hover:bg-[#272D38] border border-[#2A2F38] rounded-lg transition-colors cursor-pointer"
            aria-label="Reset simulation"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
