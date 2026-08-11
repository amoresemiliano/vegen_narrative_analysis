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
    <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-xl p-4 sm:p-6 text-[#292C32] shadow-sm relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-orange-100 text-orange-600 border border-orange-200">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base tracking-tight text-[#292C32]">Temperatura de la conversación</h3>
            <p className="text-xs text-[#626773]">Indicador de fricción discursiva y activación emocional en la muestra</p>
          </div>
        </div>
        <ObservationBadge type="interpretation" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Main Intensity Meter */}
        <div className="md:col-span-5 bg-white rounded-lg p-4 border border-[#CDD0D5]">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-mono font-semibold uppercase text-[#626773]">Nivel de intensidad</span>
            <span className="text-2xl font-bold font-mono text-orange-600">{temperature.intensityScore}/100</span>
          </div>

          {/* Progress bar */}
          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300 mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-orange-500 to-rose-600 transition-all duration-700"
              style={{ width: `${temperature.intensityScore}%` }}
            />
          </div>

          <div className="flex justify-between text-[11px] font-mono text-[#626773]">
            <span>Baja fricción</span>
            <span className="text-orange-700 font-bold">Intensidad {temperature.intensityLabel}</span>
            <span>Crítica</span>
          </div>
        </div>

        {/* Breakdown metrics */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg border border-[#CDD0D5]">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-orange-600" />
              <span className="font-medium">Polarización</span>
            </div>
            <div className="text-sm font-bold text-[#292C32]">{temperature.polarizationLevel}</div>
            <div className="text-[10px] text-[#626773] mt-0.5">Posturas contrapuestas</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#CDD0D5]">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <Activity className="w-3.5 h-3.5 text-rose-600" />
              <span className="font-medium">Activación emocional</span>
            </div>
            <div className="text-sm font-bold text-[#292C32]">{temperature.emotionalActivation}</div>
            <div className="text-[10px] text-[#626773] mt-0.5">Carga de lenguaje</div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white p-3 rounded-lg border border-[#CDD0D5]">
            <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-1">
              <Gauge className="w-3.5 h-3.5 text-violet-600" />
              <span className="font-medium">Desconfianza inst.</span>
            </div>
            <div className="text-sm font-bold text-violet-700 font-mono">{temperature.distrustLevel}%</div>
            <div className="text-[10px] text-[#626773] mt-0.5">En muestra analizada</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#CDD0D5] flex items-center justify-between text-xs text-[#626773]">
        <span className="font-medium text-[#292C32]">Reacción predominante:</span>
        <span className="text-orange-800 font-mono text-[11px] bg-orange-100 px-2 py-0.5 rounded border border-orange-200 font-semibold">
          {temperature.predominantReaction}
        </span>
      </div>
    </div>
  );
};
