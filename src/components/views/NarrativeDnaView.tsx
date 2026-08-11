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
          className="px-3.5 py-2 bg-white hover:bg-slate-100 text-[#292C32] text-xs font-mono font-bold rounded-xl border border-[#CDD0D5] transition flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600" />
          <span>Volver a todas las narrativas</span>
        </button>

        {/* Compare Selector */}
        <div className="flex items-center gap-2">
          <GitCompare className="w-4 h-4 text-violet-600" />
          <span className="text-xs text-[#626773] font-mono font-semibold">Comparar con:</span>
          <select
            value={compareNarrativeId}
            onChange={(e) => setCompareNarrativeId(e.target.value)}
            className="bg-white border border-[#CDD0D5] rounded-lg px-3 py-1.5 text-xs text-violet-800 font-bold focus:outline-none focus:border-blue-600"
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
      <section className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-violet-50 text-violet-800 border border-violet-200 text-xs font-mono font-bold">
              {narrative.code}
            </span>
            <ObservationBadge type="interpretation" />
          </div>
          <span className="text-xs font-mono text-[#626773] font-semibold">
            Prevalencia en la muestra: <strong className="text-violet-800 text-sm">{narrative.prevalencePercentage}%</strong>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292C32]">{narrative.title}</h1>
        <p className="text-xs sm:text-sm text-[#626773] leading-relaxed">{narrative.description}</p>
      </section>

      {/* Narrative DNA Radar Chart & Dimensions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart */}
        <div className="lg:col-span-7 bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#292C32] text-sm sm:text-base flex items-center gap-2">
                <Sliders className="w-5 h-5 text-violet-600" />
                Huella del ADN Narrativo
              </h3>
              <p className="text-xs text-[#626773]">Perfil de 10 dimensiones sobre estructuras discursivas observadas</p>
            </div>
          </div>

          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#cdd0d5" />
                <PolarAngleAxis dataKey="dimension" stroke="#626773" tick={{ fill: '#292C32', fontSize: 10, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" tick={{ fontSize: 9 }} />
                <Radar name={narrative.code} dataKey={narrative.code} stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.4} />
                {compareNarrative && (
                  <Radar name={compareNarrative.code} dataKey={compareNarrative.code} stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
                )}
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cdd0d5', borderRadius: '8px', color: '#292c32', fontSize: '12px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dimension Breakdown Percentage Bars */}
        <div className="lg:col-span-5 bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-4 shadow-2xs">
          <h3 className="font-bold text-[#292C32] text-sm">Desglose porcentual por dimensión</h3>

          <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
            {dnaDimensionsKeys.map((item) => {
              const val1 = narrative.dna[item.key as keyof typeof narrative.dna];
              const val2 = compareNarrative ? compareNarrative.dna[item.key as keyof typeof compareNarrative.dna] : null;

              return (
                <div key={item.key} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#292C32] font-semibold">{item.label}</span>
                    <span className="text-violet-800 font-bold">{val1}%</span>
                  </div>

                  <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300 relative">
                    <div className="h-full bg-violet-600 rounded-full" style={{ width: `${val1}%` }} />
                    {val2 !== null && (
                      <div className="h-full bg-blue-500/80 rounded-full absolute top-0 left-0" style={{ width: `${val2}%` }} />
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
        <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-3 shadow-2xs">
          <h3 className="font-bold text-[#292C32] text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-orange-600" />
            Afirmaciones asociadas en el contenido
          </h3>
          <div className="space-y-2">
            {narrative.associatedClaims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#CDD0D5] text-xs text-[#292C32] shadow-2xs">
                • {claim}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-3 shadow-2xs">
          <h3 className="font-bold text-[#292C32] text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-violet-600" />
            Patrones lingüísticos típicos
          </h3>
          <div className="space-y-2">
            {narrative.typicalLinguisticPatterns.map((pat, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-[#CDD0D5] text-xs text-violet-900 italic font-serif shadow-2xs">
                "{pat}"
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DISCRETE DISCLAIMER as strictly requested in PANTALLA 7 */}
      <div className="p-4 bg-white border border-[#CDD0D5] rounded-xl text-xs text-[#626773] flex items-center gap-2.5 shadow-2xs">
        <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-[#292C32]">Aviso metodológico:</strong> Estos indicadores describen patrones observados en el contenido analizado. No representan diagnósticos psicológicos ni características individuales.
        </p>
      </div>
    </div>
  );
};
