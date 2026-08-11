import React from 'react';
import { Publication } from '../../types';
import { X, ExternalLink, Globe2, MessageSquare, Layers, FileText } from 'lucide-react';
import { ObservationBadge } from '../ObservationBadge';

interface Props {
  publication: Publication;
  onClose: () => void;
}

export const PublicationDetailModal: React.FC<Props> = ({ publication, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 text-[#292C32] shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#626773] hover:text-[#292C32] p-2 rounded-lg bg-white border border-[#CDD0D5] hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-violet-50 text-violet-800 border border-violet-200 text-xs font-mono font-bold">
              {publication.sourcePlatform}
            </span>
            <span className="text-xs font-mono text-[#626773] flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5" />
              {publication.country} ({publication.countryCode})
            </span>
            <span className="text-xs font-mono text-[#626773]">• {publication.date}</span>
            <ObservationBadge type="observation" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[#292C32]">{publication.title}</h2>

          <div className="flex items-center gap-2 text-xs font-mono text-[#626773]">
            <span>Autor: <strong className="text-[#292C32]">{publication.author}</strong> ({publication.authorHandle})</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-4 bg-white rounded-xl border border-[#CDD0D5] space-y-2">
          <span className="text-xs font-mono text-violet-700 uppercase tracking-widest font-bold block">Texto / Transcripción de la publicación</span>
          <p className="text-xs sm:text-sm text-[#292C32] leading-relaxed italic">
            "{publication.fullText || publication.summary}"
          </p>
        </div>

        {/* Associated Claims */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#292C32] flex items-center gap-2">
            <FileText className="w-4 h-4 text-orange-600" />
            Afirmaciones observables en el contenido
          </h3>
          <div className="space-y-2">
            {publication.claims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-[#CDD0D5] text-xs text-[#292C32] flex items-start gap-2">
                <span className="text-orange-600 font-mono font-bold">{idx + 1}.</span>
                <span>{claim}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Associated Narrative & Tone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white rounded-xl border border-[#CDD0D5]">
          <div>
            <span className="text-xs font-mono text-violet-700 uppercase tracking-widest font-bold block mb-1">Encuadre asociado</span>
            <span className="text-sm font-bold text-[#292C32] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet-600 shrink-0" />
              {publication.mainNarrativeTitle}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-orange-700 uppercase tracking-widest font-bold block mb-1">Tono predominante</span>
            <span className="text-sm font-semibold text-[#292C32] font-mono">{publication.predominantTone}</span>
          </div>
        </div>

        {/* Sample Comments */}
        {publication.sampleComments && publication.sampleComments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#292C32] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-violet-600" />
              Muestra de reacciones de la audiencia
            </h3>
            <div className="space-y-2">
              {publication.sampleComments.map((comment, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-[#CDD0D5] text-xs text-[#626773]">
                  <p className="italic">"{comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#CDD0D5]">
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-mono font-semibold"
          >
            <span>Enlace simulado: {publication.url}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-[#292C32] border border-[#CDD0D5] rounded-lg text-xs font-bold transition cursor-pointer"
          >
            Cerrar detalle
          </button>
        </div>
      </div>
    </div>
  );
};
