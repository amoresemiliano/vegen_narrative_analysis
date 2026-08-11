import React, { useState } from 'react';
import { CommentReaction } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { MessageSquare, Flame, Tag } from 'lucide-react';

interface Props {
  comments: CommentReaction[];
}

export const ReactionsView: React.FC<Props> = ({ comments }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = [
    'Todas',
    'Apoyo',
    'Acuerdo',
    'Desacuerdo',
    'Rechazo',
    'Ridiculización',
    'Hostilidad',
    'Indignación',
    'Desconfianza',
    'Incertidumbre',
    'Preguntas',
  ];

  const categoryMap: Record<string, string> = {
    'Apoyo': 'Support',
    'Acuerdo': 'Agreement',
    'Desacuerdo': 'Disagreement',
    'Rechazo': 'Rejection',
    'Ridiculización': 'Ridicule',
    'Hostilidad': 'Hostility',
    'Indignación': 'Indignation',
    'Desconfianza': 'Distrust',
    'Incertidumbre': 'Uncertainty',
    'Preguntas': 'Questions',
  };

  const filteredComments = selectedCategory === 'Todas'
    ? comments
    : comments.filter((c) => c.category === selectedCategory || c.category === categoryMap[selectedCategory]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-[#292C32] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-violet-600" />
              Análisis de reacciones y categorías de comentarios
            </h2>
            <p className="text-xs text-[#626773]">
              Muestra categorizada de intervenciones de la audiencia en distintas plataformas
            </p>
          </div>
          <ObservationBadge type="observation" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const targetCat = cat === 'Todas' ? 'Todas' : (categoryMap[cat] || cat);
            const count = cat === 'Todas' 
              ? comments.length 
              : comments.filter((c) => c.category === cat || c.category === targetCat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'bg-white text-[#292C32] hover:text-blue-700 border border-[#CDD0D5]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Experimental Product Metric: Conversation Temperature Card as specified */}
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-4 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-600" />
            <h3 className="font-bold text-[#292C32] text-sm sm:text-base">Matriz de temperatura de la conversación</h3>
          </div>
          <span className="text-[10px] font-mono text-violet-800 bg-violet-50 px-2 py-0.5 rounded border border-violet-200 font-bold">
            MÉTRICA EXPERIMENTAL
          </span>
        </div>

        <p className="text-xs text-[#626773] leading-relaxed">
          Combina intensidad emocional, tasa de hostilidad, índice de polarización, desacuerdo y velocidad de respuesta en la muestra.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs font-mono">
          <div className="p-3 bg-white rounded-xl border border-[#CDD0D5] shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Intensidad emocional</span>
            <span className="text-orange-600 font-bold text-sm">7.8 / 10</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[#CDD0D5] shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Tasa de hostilidad</span>
            <span className="text-rose-700 font-bold text-sm">18.4%</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[#CDD0D5] shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Índice de polarización</span>
            <span className="text-orange-600 font-bold text-sm">84 / 100</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[#CDD0D5] shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Desacuerdo</span>
            <span className="text-violet-700 font-bold text-sm">38.2%</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 bg-white rounded-xl border border-[#CDD0D5] shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Velocidad de interacción</span>
            <span className="text-emerald-700 font-bold text-sm">Alta</span>
          </div>
        </div>

        <div className="text-[11px] text-[#626773] font-mono italic pt-1">
          * Métrica experimental de producto — sujeta a tamaño de muestra y validación de contexto.
        </div>
      </div>

      {/* Comment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-white border border-[#CDD0D5] rounded-xl space-y-3 shadow-2xs hover:border-blue-400 transition"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#292C32] font-bold">{comment.author}</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#F1F2F4] text-violet-800 border border-[#CDD0D5] text-[10px] font-semibold">
                  {comment.platform}
                </span>
                <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-800 border border-orange-200 text-[10px] font-bold">
                  {comment.category}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#292C32] leading-relaxed font-sans italic">
              "{comment.text}"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#CDD0D5] text-[10px] font-mono text-[#626773]">
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#626773]" />
                <span>Marcadores: {comment.linguisticMarkers.join(', ')}</span>
              </div>
              <span className="text-rose-700 font-bold">Intensidad: {comment.emotionalIntensity}/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
