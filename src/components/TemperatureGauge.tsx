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
  return (
    <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-4 sm:p-6 text-[#292C32] shadow-sm relative overflow-hidden">
      {/* Background ambient halo */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-orange-50 text-[#F28C45] border border-orange-200/80 shadow-2xs">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-[#292C32]">Temperatura de la conversación</h3>
            <p className="text-xs text-[#626773]">Indicador de fricción discursiva y activación emocional en la muestra</p>
          </div>
        </div>
        <ObservationBadge type="interpretation" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
        {/* Main Intensity Meter */}
        <div className="md:col-span-5 bg-white/90 rounded-xl p-4 border border-indigo-100/80 shadow-2xs">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-mono font-bold uppercase text-[#626773]">Nivel de intensidad</span>
            <span className="text-2xl font-extrabold font-mono text-[#F28C45]">{temperature.intensityScore}/100</span>
          </div>

          {/* Progress bar */}
          <div className="h-3.5 w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5 border border-slate-300/60 mb-3 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4C6FFF] via-[#F28C45] to-[#E11D48] transition-all duration-700 shadow-xs"
              style={{ width: `${temperature.intensityScore}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] font-mono text-[#626773] font-medium">
            <span>Baja fricción</span>
            <span className="text-[#F28C45] font-extrabold">Intensidad {temperature.intensityLabel}</span>
            <span>Crítica</span>
          </div>
        </div>

        {/* Breakdown metrics */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-white/90 p-3.5 rounded-xl border border-indigo-100/80 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#F28C45]" />
              <span className="font-semibold">Polarización</span>
            </div>
            <div className="text-sm font-extrabold text-[#292C32]">{temperature.polarizationLevel}</div>
            <div className="text-[10px] text-[#626773] mt-0.5 font-medium">Posturas contrapuestas</div>
          </div>

          <div className="bg-white/90 p-3.5 rounded-xl border border-indigo-100/80 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <Activity className="w-3.5 h-3.5 text-rose-500" />
              <span className="font-semibold">Activación emocional</span>
            </div>
            <div className="text-sm font-extrabold text-[#292C32]">{temperature.emotionalActivation}</div>
            <div className="text-[10px] text-[#626773] mt-0.5 font-medium">Carga de lenguaje</div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white/90 p-3.5 rounded-xl border border-indigo-100/80 shadow-2xs">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <Gauge className="w-3.5 h-3.5 text-[#7257E8]" />
              <span className="font-semibold">Desconfianza inst.</span>
            </div>
            <div className="text-sm font-extrabold text-[#7257E8] font-mono">{temperature.distrustLevel}%</div>
            <div className="text-[10px] text-[#626773] mt-0.5 font-medium">En muestra analizada</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-indigo-100/80 flex items-center justify-between text-xs text-[#626773] relative z-10">
        <span className="font-semibold text-[#292C32]">Reacción predominante:</span>
        <span className="text-[#F28C45] font-mono text-[11px] bg-orange-50 px-2.5 py-0.5 rounded-lg border border-orange-200/80 font-bold">
          {temperature.predominantReaction}
        </span>
      </div>
    </div>
  );
};
