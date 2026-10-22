import React, { useState } from 'react';
import { AlertTriangle, Power, Bell, Cpu, Zap, Activity } from 'lucide-react';

export const InnovSenseVisual: React.FC = () => {
  // Sensor concentration in mg/L (BAC equivalent approximation)
  const [alcoholPpm, setAlcoholPpm] = useState<number>(0.12);
  const threshold = 0.25;
  const isTriggered = alcoholPpm >= threshold;

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

      {/* Header telemetry / schematic status */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-[#2A2F38]">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#F5A623]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5A623]">
            MQ-3 Sensor & Cut-Off Logic Flow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span 
            className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
              isTriggered 
                ? 'border-rose-500/50 bg-rose-500/10 text-rose-400 font-semibold' 
                : 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
            }`}
          >
            {isTriggered ? 'OVER-THRESHOLD ALERT' : 'SAFETY THRESHOLD PASS'}
          </span>
        </div>
      </div>

      {/* Embedded Flow Graphic */}
      <div className="relative z-10 my-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Node 1: MQ-3 Sensor Cell */}
        <div className={`p-3.5 rounded-lg border transition-colors ${
          isTriggered 
            ? 'bg-rose-950/20 border-rose-500/40' 
            : 'bg-[#181D25] border-[#2A2F38]'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5]">01. Sampling</span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-xs font-semibold text-[#F5F5F2]">MQ-3 Gas Sensor</div>
          <div className="text-[11px] font-mono text-[#A6ABB5] mt-1">
            Analog Vout: <span className="text-cyan-400 tabular-nums">{(0.8 + alcoholPpm * 4.2).toFixed(2)}V</span>
          </div>
          <div className="mt-2 text-[10px] text-[#A6ABB5]">
            Ethanol Vapor SnO₂ absorption
          </div>
        </div>

        {/* Node 2: Microcontroller Comparator */}
        <div className="p-3.5 rounded-lg bg-[#181D25] border border-[#2A2F38]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5]">02. Analysis</span>
            <Zap className="w-3.5 h-3.5 text-[#F5A623]" />
          </div>
          <div className="text-xs font-semibold text-[#F5F5F2]">Microcontroller ADC</div>
          <div className="text-[11px] font-mono text-[#A6ABB5] mt-1">
            Limit: <span className="text-[#F5A623]">{threshold} mg/L</span>
          </div>
          <div className="mt-2 text-[10px] text-[#A6ABB5]">
            Hardware Debounce: 50ms
          </div>
        </div>

        {/* Node 3: Warning Buzzer */}
        <div className={`p-3.5 rounded-lg border transition-colors ${
          isTriggered 
            ? 'bg-rose-950/30 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)]' 
            : 'bg-[#181D25] border-[#2A2F38]'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5]">03. Alarm</span>
            <Bell className={`w-3.5 h-3.5 ${isTriggered ? 'text-rose-400 animate-bounce' : 'text-[#A6ABB5]'}`} />
          </div>
          <div className="text-xs font-semibold text-[#F5F5F2]">Warning Buzzer</div>
          <div className="text-[11px] font-mono mt-1">
            Status: <span className={isTriggered ? 'text-rose-400 font-bold' : 'text-[#A6ABB5]'}>{isTriggered ? 'ACTIVE (2.4 kHz)' : 'STANDBY'}</span>
          </div>
          <div className="mt-2 text-[10px] text-[#A6ABB5]">
            Auditory alert to operator
          </div>
        </div>

        {/* Node 4: MOSFET Ignition Switch */}
        <div className={`p-3.5 rounded-lg border transition-colors ${
          isTriggered 
            ? 'bg-rose-950/25 border-rose-500/50' 
            : 'bg-emerald-950/20 border-emerald-500/30'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A6ABB5]">04. Interlock</span>
            <Power className={`w-3.5 h-3.5 ${isTriggered ? 'text-rose-400' : 'text-emerald-400'}`} />
          </div>
          <div className="text-xs font-semibold text-[#F5F5F2]">MOSFET Cut-off</div>
          <div className="text-[11px] font-mono mt-1">
            Engine: <span className={isTriggered ? 'text-rose-400 font-bold' : 'text-emerald-400 font-medium'}>{isTriggered ? 'IGNITION CUT' : 'RUNNING (ACTIVE)'}</span>
          </div>
          <div className="mt-2 text-[10px] text-[#A6ABB5]">
            Gate disengages ignition circuit
          </div>
        </div>
      </div>

      {/* Interactive Vapor Simulator Slider */}
      <div className="relative z-10 pt-3 border-t border-[#2A2F38]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <label htmlFor="vapor-slider" className="text-xs text-[#A6ABB5] flex items-center gap-1.5 cursor-pointer">
            <AlertTriangle className="w-3.5 h-3.5 text-[#F5A623]" />
            Simulate Alcohol Vapor Concentration:
          </label>
          <span className="font-mono text-xs font-bold tabular-nums">
            <span className={isTriggered ? 'text-rose-400' : 'text-emerald-400'}>
              {alcoholPpm.toFixed(2)} mg/L
            </span>
            <span className="text-[#A6ABB5] font-normal ml-1">
              (Threshold: {threshold} mg/L)
            </span>
          </span>
        </div>

        <input 
          id="vapor-slider"
          type="range" 
          min="0.00" 
          max="0.65" 
          step="0.01"
          value={alcoholPpm}
          onChange={(e) => setAlcoholPpm(parseFloat(e.target.value))}
          className="w-full accent-[#F5A623] bg-[#1F242D] h-2 rounded-lg cursor-pointer"
        />

        <div className="flex justify-between text-[10px] font-mono text-[#A6ABB5] mt-1.5">
          <span>0.00 (Clean Air)</span>
          <span className="text-[#F5A623] font-semibold">| 0.25 (Cut-off Limit)</span>
          <span>0.65 (High Ethanol)</span>
        </div>
      </div>

      {/* Clarifying prototype note */}
      <div className="mt-3 text-[10px] text-[#A6ABB5] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>* Conceptual Embedded Prototype Diagram — Illustrates sensor-triggered ignition interrupt</span>
        <span className="italic text-[#A6ABB5]/80">Not an automotive-certified production safety device</span>
      </div>
    </div>
  );
};
