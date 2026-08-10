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

  // Map DNA dimensions for Radar Chart
  const dnaDimensionsKeys = [
    { key: 'institutionalDistrust', label: 'Inst. Distrust' },
    { key: 'usVsThemLanguage', label: 'Us vs Them' },
    { key: 'groupVictimization', label: 'Victimization' },
    { key: 'perceivedThreat', label: 'Perceived Threat' },
    { key: 'linguisticCertainty', label: 'Linguistic Certainty' },
    { key: 'emotionalActivation', label: 'Emotional Activation' },
    { key: 'anecdotalEvidence', label: 'Anecdotal Evidence' },
    { key: 'conspiracyFraming', label: 'Conspiracy Framing' },
    { key: 'hostility', label: 'Hostility' },
    { key: 'collectiveIdentity', label: 'Collective Identity' },
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
          className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono rounded-xl border border-slate-800 transition flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>Back to All Narratives</span>
        </button>

        {/* Compare Selector */}
        <div className="flex items-center gap-2">
          <GitCompare className="w-4 h-4 text-indigo-400" />
          <span className="text-xs text-slate-400 font-mono">Compare with:</span>
          <select
            value={compareNarrativeId}
            onChange={(e) => setCompareNarrativeId(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-amber-300 focus:outline-none"
          >
            <option value="NONE">None (Single Narrative)</option>
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
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              {narrative.code}
            </span>
            <ObservationBadge type="interpretation" />
          </div>
          <span className="text-xs font-mono text-slate-400">
            Prevalence in Sample: <strong className="text-amber-400">{narrative.prevalencePercentage}%</strong>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">{narrative.title}</h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{narrative.description}</p>
      </section>

      {/* Narrative DNA Radar Chart & Dimensions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Radar Chart */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-100 text-sm sm:text-base flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                Narrative DNA Fingerprint
              </h3>
              <p className="text-xs text-slate-400">10-dimensional profile of observed discourse structures</p>
            </div>
          </div>

          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="dimension" stroke="#94a3b8" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={{ fontSize: 9 }} />
                <Radar name={narrative.code} dataKey={narrative.code} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                {compareNarrative && (
                  <Radar name={compareNarrative.code} dataKey={compareNarrative.code} stroke="#818cf8" fill="#818cf8" fillOpacity={0.3} />
                )}
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc', fontSize: '12px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dimension Breakdown Percentage Bars */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-slate-100 text-sm">Dimension Percentage Breakdown</h3>

          <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
            {dnaDimensionsKeys.map((item) => {
              const val1 = narrative.dna[item.key as keyof typeof narrative.dna];
              const val2 = compareNarrative ? compareNarrative.dna[item.key as keyof typeof compareNarrative.dna] : null;

              return (
                <div key={item.key} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className="text-amber-400 font-bold">{val1}%</span>
                  </div>

                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${val1}%` }} />
                    {val2 !== null && (
                      <div className="h-full bg-indigo-500/80 rounded-full absolute top-0 left-0" style={{ width: `${val2}%` }} />
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
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            Associated Claims in Content
          </h3>
          <div className="space-y-2">
            {narrative.associatedClaims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">
                • {claim}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
          <h3 className="font-bold text-slate-100 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            Typical Linguistic Patterns
          </h3>
          <div className="space-y-2">
            {narrative.typicalLinguisticPatterns.map((pat, idx) => (
              <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-amber-300 italic font-serif">
                "{pat}"
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DISCRETE DISCLAIMER as strictly requested in PANTALLA 7 */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center gap-2.5">
        <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-slate-300">Methodological Disclaimer:</strong> These indicators describe patterns observed in the analyzed content. They do not represent psychological diagnoses or individual traits.
        </p>
      </div>
    </div>
  );
};
