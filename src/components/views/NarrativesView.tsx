import React from 'react';
import { Narrative } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Layers, ArrowRight } from 'lucide-react';

interface Props {
  narratives: Narrative[];
  onSelectNarrative: (narrative: Narrative) => void;
}

export const NarrativesView: React.FC<Props> = ({ narratives, onSelectNarrative }) => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm">
        <div>
          <h2 className="text-lg font-extrabold text-[#292C32] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#7257E8]" />
            Estructuras narrativas detectadas
          </h2>
          <p className="text-xs text-[#626773] font-medium mt-0.5">
            Marcos discursivos identificados en el conjunto de publicaciones analizado
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
            className="group bg-white/90 border border-indigo-100 hover:border-[#7257E8] rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden shadow-2xs hover:shadow-md"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-all" />

            {/* Header */}
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-indigo-50 text-[#7257E8] border border-indigo-200/80 px-2.5 py-0.5 rounded-lg">
                  {nar.code}
                </span>
                <span className="text-xs font-mono font-semibold text-[#626773]">
                  Prevalencia: <strong className="text-[#7257E8] text-sm font-mono font-extrabold">{nar.prevalencePercentage}%</strong>
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#292C32] group-hover:text-[#7257E8] transition-colors">
                {nar.title}
              </h3>

              <p className="text-xs text-[#626773] leading-relaxed font-medium">
                {nar.description}
              </p>
            </div>

            {/* Emotional profile & Keywords */}
            <div className="space-y-3 pt-3 border-t border-indigo-100 relative z-10">
              <div>
                <span className="text-[10px] font-mono text-[#7257E8] font-extrabold uppercase tracking-widest block mb-1">
                  Perfil emocional
                </span>
                <span className="text-xs text-[#292C32] font-semibold">
                  {nar.emotionalProfile}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#626773] font-bold uppercase tracking-widest block mb-1">
                  Palabras clave representativas
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {nar.representativeKeywords.slice(0, 5).map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100/80 rounded-md text-[10px] font-mono text-[#292C32] border border-slate-200/60 font-semibold"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Linguistic Pattern */}
              <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-xs text-[#626773] italic">
                "{nar.typicalLinguisticPatterns[0]}"
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#7257E8] font-extrabold border-t border-indigo-100 relative z-10">
              <span className="text-[11px] font-mono text-[#626773] font-semibold">{nar.relatedSourceCount} fuentes relacionadas</span>
              <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Ver ADN y dimensiones narrativas</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
