import React from 'react';
import { Narrative } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Layers, ArrowRight, Activity, Cpu, Sparkles } from 'lucide-react';

interface Props {
  narratives: Narrative[];
  onSelectNarrative: (narrative: Narrative) => void;
}

export const NarrativesView: React.FC<Props> = ({ narratives, onSelectNarrative }) => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            Detected Narrative Structures
          </h2>
          <p className="text-xs text-slate-400">
            Discourse frameworks identified across the publication dataset
          </p>
        </div>
        <ObservationBadge type="interpretation" />
      </div>

      {/* Narratives List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {narratives.map((nar) => (
          <div
            key={nar.id}
            onClick={() => onSelectNarrative(nar)}
            className="group bg-slate-900 border border-slate-800 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden shadow-xl"
          >
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded">
                  {nar.code}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300">
                  Prevalence: <strong className="text-amber-400 text-sm">{nar.prevalencePercentage}%</strong>
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                {nar.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {nar.description}
              </p>
            </div>

            {/* Emotional profile & Keywords */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  Emotional Profile
                </span>
                <span className="text-xs text-indigo-300 font-medium">
                  {nar.emotionalProfile}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  Representative Keywords
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {nar.representativeKeywords.slice(0, 5).map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-950 rounded text-[10px] font-mono text-slate-300 border border-slate-800"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Linguistic Pattern */}
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800/80 text-xs text-slate-400 italic">
                "{nar.typicalLinguisticPatterns[0]}"
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="pt-2 flex items-center justify-between text-xs text-amber-400 font-medium border-t border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400">{nar.relatedSourceCount} Related Sources</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                <span>View Narrative DNA & Dimensions</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
