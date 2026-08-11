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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
      <div className="bg-white/95 backdrop-blur-xl border border-white/90 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 text-[#292C32] shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#626773] hover:text-[#292C32] p-2 rounded-xl bg-white/90 border border-indigo-100 hover:bg-white transition cursor-pointer shadow-2xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-[#7257E8] border border-indigo-200/80 text-xs font-mono font-extrabold">
              {publication.sourcePlatform}
            </span>
            <span className="text-xs font-mono text-[#626773] flex items-center gap-1 font-semibold">
              <Globe2 className="w-3.5 h-3.5 text-[#4C6FFF]" />
              {publication.country} ({publication.countryCode})
            </span>
            <span className="text-xs font-mono text-[#626773] font-medium">• {publication.date}</span>
            <ObservationBadge type="observation" />
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#292C32]">{publication.title}</h2>

          <div className="flex items-center gap-2 text-xs font-mono text-[#626773]">
            <span>Autor: <strong className="text-[#292C32]">{publication.author}</strong> ({publication.authorHandle})</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-4 bg-white/90 rounded-2xl border border-indigo-100/80 space-y-2 shadow-2xs">
          <span className="text-xs font-mono text-[#7257E8] uppercase tracking-widest font-extrabold block">Texto / Transcripción de la publicación</span>
          <p className="text-xs sm:text-sm text-[#292C32] leading-relaxed italic font-medium">
            "{publication.fullText || publication.summary}"
          </p>
        </div>

        {/* Associated Claims */}
        <div className="space-y-3">
          <h3 className="text-sm font-extrabold text-[#292C32] flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#F28C45]" />
            Afirmaciones observables en el contenido
          </h3>
          <div className="space-y-2">
            {publication.claims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 text-xs text-[#292C32] flex items-start gap-2 shadow-2xs font-medium">
                <span className="text-[#F28C45] font-mono font-extrabold">{idx + 1}.</span>
                <span>{claim}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Associated Narrative & Tone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white/90 rounded-2xl border border-indigo-100/80 shadow-2xs">
          <div>
            <span className="text-xs font-mono text-[#7257E8] uppercase tracking-widest font-extrabold block mb-1">Encuadre asociado</span>
            <span className="text-sm font-extrabold text-[#292C32] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#7257E8] shrink-0" />
              {publication.mainNarrativeTitle}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-[#F28C45] uppercase tracking-widest font-extrabold block mb-1">Tono predominante</span>
            <span className="text-sm font-bold text-[#292C32] font-mono">{publication.predominantTone}</span>
          </div>
        </div>

        {/* Sample Comments */}
        {publication.sampleComments && publication.sampleComments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-[#292C32] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#7257E8]" />
              Muestra de reacciones de la audiencia
            </h3>
            <div className="space-y-2">
              {publication.sampleComments.map((comment, idx) => (
                <div key={idx} className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 text-xs text-[#626773] shadow-2xs">
                  <p className="italic font-medium">"{comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-indigo-100">
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#4C6FFF] hover:underline flex items-center gap-1 font-mono font-bold"
          >
            <span>Enlace simulado: {publication.url}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/90 hover:bg-white text-[#292C32] border border-indigo-200/80 rounded-xl text-xs font-extrabold transition cursor-pointer shadow-2xs"
          >
            Cerrar detalle
          </button>
        </div>
      </div>
    </div>
  );
};
