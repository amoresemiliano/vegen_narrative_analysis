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
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-2xs">
        <div>
          <h2 className="text-lg font-bold text-[#292C32] flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-600" />
            Estructuras narrativas detectadas
          </h2>
          <p className="text-xs text-[#626773]">
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
            className="group bg-white border border-[#CDD0D5] hover:border-violet-500 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 relative overflow-hidden shadow-2xs hover:shadow-md"
          >
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-violet-50 text-violet-800 border border-violet-200 px-2.5 py-0.5 rounded">
                  {nar.code}
                </span>
                <span className="text-xs font-mono font-bold text-[#626773]">
                  Prevalencia: <strong className="text-violet-700 text-sm">{nar.prevalencePercentage}%</strong>
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#292C32] group-hover:text-violet-700 transition-colors">
                {nar.title}
              </h3>

              <p className="text-xs text-[#626773] leading-relaxed">
                {nar.description}
              </p>
            </div>

            {/* Emotional profile & Keywords */}
            <div className="space-y-3 pt-3 border-t border-[#CDD0D5]">
              <div>
                <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block mb-1">
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
                      className="px-2 py-0.5 bg-[#F1F2F4] rounded text-[10px] font-mono text-[#292C32] border border-[#CDD0D5] font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Typical Linguistic Pattern */}
              <div className="p-2.5 bg-[#F1F2F4] rounded-lg border border-[#CDD0D5] text-xs text-[#626773] italic">
                "{nar.typicalLinguisticPatterns[0]}"
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="pt-2 flex items-center justify-between text-xs text-blue-700 font-bold border-t border-[#CDD0D5]">
              <span className="text-[11px] font-mono text-[#626773] font-semibold">{nar.relatedSourceCount} fuentes relacionadas</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
