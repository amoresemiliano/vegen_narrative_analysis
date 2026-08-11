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
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-extrabold text-[#292C32] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#7257E8]" />
              Análisis de reacciones y categorías de comentarios
            </h2>
            <p className="text-xs text-[#626773] font-medium mt-0.5">
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
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold shadow-xs'
                    : 'bg-white/90 text-[#292C32] hover:text-[#7257E8] border border-indigo-100/80 hover:bg-white'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Experimental Product Metric: Conversation Temperature Card as specified */}
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-6 space-y-4 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#F28C45]" />
            <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base">Matriz de temperatura de la conversación</h3>
          </div>
          <span className="text-[10px] font-mono text-[#7257E8] bg-indigo-50 px-2.5 py-0.5 rounded-lg border border-indigo-200/80 font-extrabold">
            MÉTRICA EXPERIMENTAL
          </span>
        </div>

        <p className="text-xs text-[#626773] leading-relaxed font-medium relative z-10">
          Combina intensidad emocional, tasa de hostilidad, índice de polarización, desacuerdo y velocidad de respuesta en la muestra.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs font-mono relative z-10">
          <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Intensidad emocional</span>
            <span className="text-[#F28C45] font-extrabold text-sm">7.8 / 10</span>
          </div>
          <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Tasa de hostilidad</span>
            <span className="text-rose-600 font-extrabold text-sm">18.4%</span>
          </div>
          <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Índice de polarización</span>
            <span className="text-[#F28C45] font-extrabold text-sm">84 / 100</span>
          </div>
          <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Desacuerdo</span>
            <span className="text-[#7257E8] font-extrabold text-sm">38.2%</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
            <span className="text-[#626773] block text-[10px] font-semibold">Velocidad de interacción</span>
            <span className="text-emerald-600 font-extrabold text-sm">Alta</span>
          </div>
        </div>

        <div className="text-[11px] text-[#626773] font-mono italic pt-1 relative z-10">
          * Métrica experimental de producto — sujeta a tamaño de muestra y validación de contexto.
        </div>
      </div>

      {/* Comment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 sm:p-5 bg-white/90 border border-indigo-100/80 rounded-2xl space-y-3 shadow-2xs hover:border-[#7257E8] transition-all"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#292C32] font-extrabold">{comment.author}</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-[#7257E8] border border-indigo-200/80 text-[10px] font-bold">
                  {comment.platform}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-orange-50 text-[#F28C45] border border-orange-200/80 text-[10px] font-bold">
                  {comment.category}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#292C32] leading-relaxed font-sans italic font-medium">
              "{comment.text}"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-indigo-100 text-[10px] font-mono text-[#626773]">
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#7257E8]" />
                <span className="font-medium">Marcadores: {comment.linguisticMarkers.join(', ')}</span>
              </div>
              <span className="text-rose-600 font-bold">Intensidad: {comment.emotionalIntensity}/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
