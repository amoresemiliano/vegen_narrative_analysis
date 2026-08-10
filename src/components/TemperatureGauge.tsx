import React from 'react';
import { ObservationBadge } from './ObservationBadge';
import { Flame, ShieldAlert, Activity, Gauge } from 'lucide-react';

interface Props {
  temperature: {
    intensityScore: number;
    intensityLabel: string;
    predominantReaction: string;
    polarizationLevel: string;
    emotionalActivation: string;
    distrustLevel: number;
  };
}

export const TemperatureGauge: React.FC<Props> = ({ temperature }) => {
  const getGradient = (score: number) => {
    if (score > 75) return 'from-amber-500 via-rose-500 to-red-600';
    if (score > 50) return 'from-blue-500 via-amber-500 to-rose-500';
    return 'from-emerald-500 to-blue-500';
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl relative overflow-hidden">
      {/* Subtle ambient accent */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base tracking-tight text-slate-100">Conversation Temperature</h3>
            <p className="text-xs text-slate-400">Experimental indicator of discourse friction & emotional heat</p>
          </div>
        </div>
        <ObservationBadge type="interpretation" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Main Intensity Meter */}
        <div className="md:col-span-5 bg-slate-950/80 rounded-lg p-4 border border-slate-800/80">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-mono uppercase text-slate-400">Heat Score</span>
            <span className="text-2xl font-bold font-mono text-rose-400">{temperature.intensityScore}/100</span>
          </div>

          {/* Progress bar */}
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50 mb-3">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${getGradient(temperature.intensityScore)} transition-all duration-700`}
              style={{ width: `${temperature.intensityScore}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>Low Friction</span>
            <span className="text-amber-400 font-semibold">{temperature.intensityLabel} Intensity</span>
            <span>Critical</span>
          </div>
        </div>

        {/* Breakdown metrics */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Polarization</span>
            </div>
            <div className="text-sm font-semibold text-slate-200">{temperature.polarizationLevel}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Dual-block stance</div>
          </div>

          <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <Activity className="w-3.5 h-3.5 text-rose-400" />
              <span>Activation</span>
            </div>
            <div className="text-sm font-semibold text-slate-200">{temperature.emotionalActivation}</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Valence / Arousal</div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-slate-950/50 p-3 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <Gauge className="w-3.5 h-3.5 text-indigo-400" />
              <span>Institutional Distrust</span>
            </div>
            <div className="text-sm font-semibold text-indigo-300 font-mono">{temperature.distrustLevel}%</div>
            <div className="text-[10px] text-slate-400 mt-0.5">In sample sample</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium text-slate-300">Predominant Reaction Pattern:</span>
        <span className="text-amber-300 font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          {temperature.predominantReaction}
        </span>
      </div>
    </div>
  );
};
