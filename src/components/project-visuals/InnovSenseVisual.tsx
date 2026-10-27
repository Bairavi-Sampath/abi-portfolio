import React, { useState } from 'react';
import { AlertTriangle, Power, Bell, Cpu, Activity, ArrowRight, RotateCcw } from 'lucide-react';

interface InnovSenseVisualProps {
  isModal?: boolean;
}

export const InnovSenseVisual: React.FC<InnovSenseVisualProps> = ({ isModal = false }) => {
  // Conceptual alcohol vapour input value in mg/L
  const [alcoholLevel, setAlcoholLevel] = useState<number>(0.12);
  const threshold = 0.25;
  const isTriggered = alcoholLevel >= threshold;

  const handleReset = () => {
    setAlcoholLevel(0.12);
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
          <Cpu className="w-3.5 h-3.5 text-[#F5A623]" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F5F5F2]">
            Sensor &amp; Cut-Off Logic Flow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span 
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors ${
              isTriggered 
                ? 'border-rose-500/50 bg-rose-500/15 text-rose-400 font-bold' 
                : 'border-emerald-500/50 bg-emerald-500/15 text-emerald-400'
            }`}
          >
            {isTriggered ? 'Cut-Off Triggered' : 'Ignition Active'}
          </span>
        </div>
      </div>

      {/* Four Connected Stages: 2x2 grid in card mode, 4-col in modal mode */}
      <div className={`relative z-10 my-3.5 grid gap-2.5 ${isModal ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2'}`}>
        
        {/* Stage 01: Detect */}
        <div className={`p-3 rounded-xl border transition-all ${
          isTriggered 
            ? 'bg-rose-950/20 border-rose-500/40 shadow-sm' 
            : 'bg-[#181D25] border-[#2A2F38]'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-bold text-[#F5A623]">01 · Detect</span>
            <Activity className="w-3.5 h-3.5 text-[#F5A623]" />
          </div>
          <h4 className="text-xs font-bold text-[#F5F5F2]">MQ-3 Sensor</h4>
          <p className="text-[11px] text-[#A6ABB5] mt-1 leading-snug line-clamp-2">
            Measures alcohol vapor concentration.
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#2A2F38]/60 text-[10px] font-mono text-[#A6ABB5]">
            <span className="text-[#F5A623] font-semibold">{alcoholLevel.toFixed(2)} mg/L</span>
          </div>
        </div>

        {/* Stage 02: Process */}
        <div className="p-3 rounded-xl bg-[#181D25] border border-[#2A2F38]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-bold text-cyan-400">02 · Process</span>
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <h4 className="text-xs font-bold text-[#F5F5F2]">Microcontroller</h4>
          <p className="text-[11px] text-[#A6ABB5] mt-1 leading-snug line-clamp-2">
            Compares input to safety threshold.
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#2A2F38]/60 text-[10px] font-mono text-[#A6ABB5]">
            Limit: <span className="text-cyan-400 font-semibold">{threshold} mg/L</span>
          </div>
        </div>

        {/* Stage 03: Alert */}
        <div className={`p-3 rounded-xl border transition-all ${
          isTriggered 
            ? 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)]' 
            : 'bg-[#181D25] border-[#2A2F38]'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-bold text-[#F5A623]">03 · Alert</span>
            <Bell className={`w-3.5 h-3.5 ${isTriggered ? 'text-rose-400 animate-bounce' : 'text-[#A6ABB5]'}`} />
          </div>
          <h4 className="text-xs font-bold text-[#F5F5F2]">Warning Buzzer</h4>
          <p className="text-[11px] text-[#A6ABB5] mt-1 leading-snug line-clamp-2">
            Immediate acoustic alert activation.
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#2A2F38]/60 text-[10px] font-mono">
            <span className={isTriggered ? 'text-rose-400 font-bold' : 'text-[#A6ABB5]'}>
              {isTriggered ? 'ALARM ON' : 'Standby'}
            </span>
          </div>
        </div>

        {/* Stage 04: Cut-Off */}
        <div className={`p-3 rounded-xl border transition-all ${
          isTriggered 
            ? 'bg-rose-950/25 border-rose-500/50' 
            : 'bg-emerald-950/20 border-emerald-500/30'
        }`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono font-bold text-emerald-400">04 · Cut-Off</span>
            <Power className={`w-3.5 h-3.5 ${isTriggered ? 'text-rose-400' : 'text-emerald-400'}`} />
          </div>
          <h4 className="text-xs font-bold text-[#F5F5F2]">MOSFET Switch</h4>
          <p className="text-[11px] text-[#A6ABB5] mt-1 leading-snug line-clamp-2">
            Disengages vehicle ignition circuit.
          </p>
          <div className="mt-2 pt-1.5 border-t border-[#2A2F38]/60 text-[10px] font-mono">
            <span className={isTriggered ? 'text-rose-400 font-bold' : 'text-emerald-400 font-medium'}>
              {isTriggered ? 'DISENGAGED' : 'ENGAGED'}
            </span>
          </div>
        </div>

      </div>

      {/* Large Overlaid Typography inspiring from Reference Image */}
      <div className="relative z-10 w-full flex items-end justify-between pt-1 pb-3 px-1">
        <div>
          <div className="text-xl sm:text-2xl font-black tracking-tight text-[#F5F5F2] uppercase leading-none">
            INNOVSENSE
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase mt-1">
            ALCOHOL DETECTION &amp; CUT-OFF
          </div>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101216] border border-[#2A2F38] text-emerald-400">
          Safety Circuit
        </span>
      </div>

      {/* Interactive Simulation Controls */}
      <div className="relative z-10 pt-3 border-t border-[#2A2F38]">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <label htmlFor="innovsense-slider" className="text-[11px] text-[#A6ABB5] flex items-center gap-1 cursor-pointer">
            <AlertTriangle className="w-3 h-3 text-[#F5A623]" />
            <span>Simulate Sensor Level:</span>
          </label>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tabular-nums">
              <span className={isTriggered ? 'text-rose-400' : 'text-emerald-400'}>
                {alcoholLevel.toFixed(2)} mg/L
              </span>
            </span>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#1C2027] hover:bg-[#252A34] text-[#A6ABB5] hover:text-[#F5F5F2] border border-[#2A2F38] transition-colors cursor-pointer"
              title="Reset to default normal reading"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <input 
          id="innovsense-slider"
          type="range" 
          min="0.00" 
          max="0.60" 
          step="0.01"
          value={alcoholLevel}
          onChange={(e) => setAlcoholLevel(parseFloat(e.target.value))}
          className="w-full accent-[#F5A623] bg-[#1F242D] h-1.5 rounded-lg cursor-pointer"
        />

        <div className="flex justify-between text-[10px] font-mono text-[#A6ABB5] mt-1">
          <span>0.00 (Normal)</span>
          <span className="text-[#F5A623] font-semibold">| 0.25 (Threshold)</span>
          <span>0.60 (Elevated)</span>
        </div>
      </div>
    </div>
  );
};
