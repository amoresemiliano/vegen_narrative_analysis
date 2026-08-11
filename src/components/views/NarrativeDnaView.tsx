import React, { useState } from 'react';
import { Narrative } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { ArrowLeft, Shield, Sliders, GitCompare, Layers, FileText } from 'lucide-react';

interface Props {
  narrative: Narrative;
  allNarratives: Narrative[];
  onBack: () => void;
}

export const NarrativeDnaView: React.FC<Props> = ({ narrative, allNarratives, onBack }) => {
  const [compareNarrativeId, setCompareNarrativeId] = useState<string>('NONE');

  const compareNarrative = allNarratives.find((n) => n.id === compareNarrativeId);

  // Map DNA dimensions for Radar Chart in Spanish
  const dnaDimensionsKeys = [
    { key: 'institutionalDistrust', label: 'Desconfianza inst.' },
    { key: 'usVsThemLanguage', label: 'Nosotros vs Ellos' },
    { key: 'groupVictimization', label: 'Victimización' },
    { key: 'perceivedThreat', label: 'Amenaza percibida' },
    { key: 'linguisticCertainty', label: 'Certeza lingüística' },
    { key: 'emotionalActivation', label: 'Activación emocional' },
    { key: 'anecdotalEvidence', label: 'Evidencia anecdótica' },
    { key: 'conspiracyFraming', label: 'Encuadre conspirativo' },
    { key: 'hostility', label: 'Hostilidad' },
    { key: 'collectiveIdentity', label: 'Identidad colectiva' },
  ] as const;

  const radarData = dnaDimensionsKeys.map((item) => {
    const valPrimary = narrative.dna[item.key as keyof typeof narrative.dna];
    const valSecondary = compareNarrative ? compareNarrative.dna[item.key as keyof typeof compareNarrative.dna] : 0;

    return {
      dimension: item.label,
      [narrative.code]: valPrimary,
      ...(compareNarrative ? { [compareNarrative.code]: valSecondary } : {}),
    };
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Top Bar with Back Action */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-white/80 hover:bg-white text-[#292C32] text-xs font-mono font-bold rounded-xl border border-white/90 transition flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#7257E8]" />
          <span>Volver a todas las narrativas</span>
        </button>

        {/* Compare Selector */}
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/90 shadow-2xs">
          <GitCompare className="w-4 h-4 text-[#7257E8]" />
          <span className="text-xs text-[#626773] font-mono font-semibold">Comparar con:</span>
          <select
            value={compareNarrativeId}
            onChange={(e) => setCompareNarrativeId(e.target.value)}
            className="bg-indigo-50/80 border border-indigo-200/80 rounded-lg px-3 py-1 text-xs text-[#7257E8] font-bold focus:outline-none cursor-pointer"
          >
            <option value="NONE">Ninguna (Narrativa individual)</option>
            {allNarratives
              .filter((n) => n.id !== narrative.id)
              .map((n) => (
                <option key={n.id} value={n.id}>
                  {n.code}: {n.title}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Narrative DNA Title Banner */}
      <section className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-indigo-50 text-[#7257E8] border border-indigo-200/80 text-xs font-mono font-extrabold">
              {narrative.code}
            </span>
            <ObservationBadge type="interpretation" />
          </div>
          <span className="text-xs font-mono text-[#626773] font-semibold">
            Prevalencia en la muestra: <strong className="text-[#7257E8] text-sm font-extrabold">{narrative.prevalencePercentage}%</strong>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292C32] relative z-10">{narrative.title}</h1>
        <p className="text-xs sm:text-sm text-[#626773] leading-relaxed font-medium relative z-10">{narrative.description}</p>
      </section>

      {/* Narrative DNA Radar Chart & Dimensions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart */}
        <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#7257E8]" />
                Huella del ADN Narrativo
              </h3>
              <p className="text-xs text-[#626773] font-medium">Perfil de 10 dimensiones sobre estructuras discursivas observadas</p>
            </div>
          </div>

          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="dimension" stroke="#626773" tick={{ fill: '#292C32', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" tick={{ fontSize: 9 }} />
                <Radar name={narrative.code} dataKey={narrative.code} stroke="#7257E8" fill="#7257E8" fillOpacity={0.4} strokeWidth={2} />
                {compareNarrative && (
                  <Radar name={compareNarrative.code} dataKey={compareNarrative.code} stroke="#4C6FFF" fill="#4C6FFF" fillOpacity={0.35} strokeWidth={2} />
                )}
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px', fontWeight: 600 }} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cdd0d5', borderRadius: '12px', color: '#292c32', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dimension Breakdown Percentage Bars */}
        <div className="lg:col-span-5 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
          <h3 className="font-extrabold text-[#292C32] text-sm">Desglose porcentual por dimensión</h3>

          <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
            {dnaDimensionsKeys.map((item) => {
              const val1 = narrative.dna[item.key as keyof typeof narrative.dna];
              const val2 = compareNarrative ? compareNarrative.dna[item.key as keyof typeof compareNarrative.dna] : null;

              return (
                <div key={item.key} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#292C32] font-semibold">{item.label}</span>
                    <span className="text-[#7257E8] font-bold">{val1}%</span>
                  </div>

                  <div className="h-2.5 w-full bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/60 relative p-0.5">
                    <div className="h-full bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] rounded-full" style={{ width: `${val1}%` }} />
                    {val2 !== null && (
                      <div className="h-full bg-[#F28C45]/80 rounded-full absolute top-0 left-0" style={{ width: `${val2}%` }} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Associated Claims & Linguistic Patterns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-3 shadow-sm">
          <h3 className="font-extrabold text-[#292C32] text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#F28C45]" />
            Afirmaciones asociadas en el contenido
          </h3>
          <div className="space-y-2">
            {narrative.associatedClaims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 text-xs text-[#292C32] shadow-2xs font-medium">
                • {claim}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-3 shadow-sm">
          <h3 className="font-extrabold text-[#292C32] text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#7257E8]" />
            Patrones lingüísticos típicos
          </h3>
          <div className="space-y-2">
            {narrative.typicalLinguisticPatterns.map((pat, idx) => (
              <div key={idx} className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-[#7257E8] italic font-serif shadow-2xs">
                "{pat}"
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DISCRETE DISCLAIMER as strictly requested in PANTALLA 7 */}
      <div className="p-4 bg-white/90 border border-white/90 rounded-2xl text-xs text-[#626773] flex items-center gap-2.5 shadow-sm">
        <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
        <p className="leading-relaxed font-medium">
          <strong className="text-[#292C32]">Aviso metodológico:</strong> Estos indicadores describen patrones observados en el contenido analizado. No representan diagnósticos psicológicos ni características individuales.
        </p>
      </div>
    </div>
  );
};
