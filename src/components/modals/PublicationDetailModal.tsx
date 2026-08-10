import React from 'react';
import { Publication } from '../../types';
import { X, ExternalLink, Globe2, MessageSquare, Layers, Shield, FileText } from 'lucide-react';
import { ObservationBadge } from '../ObservationBadge';

interface Props {
  publication: Publication;
  onClose: () => void;
}

export const PublicationDetailModal: React.FC<Props> = ({ publication, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 text-slate-200 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              {publication.sourcePlatform}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5" />
              {publication.country} ({publication.countryCode})
            </span>
            <span className="text-xs font-mono text-slate-400">• {publication.date}</span>
            <ObservationBadge type="observation" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">{publication.title}</h2>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Author: <strong className="text-slate-200">{publication.author}</strong> ({publication.authorHandle})</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Publication Text / Transcript</span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "{publication.fullText || publication.summary}"
          </p>
        </div>

        {/* Associated Claims */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            Key Observable Claims in Content
          </h3>
          <div className="space-y-2">
            {publication.claims.map((claim, idx) => (
              <div key={idx} className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold">{idx + 1}.</span>
                <span>{claim}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Associated Narrative & Tone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Associated Framing</span>
            <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
              {publication.mainNarrativeTitle}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">Predominant Tone</span>
            <span className="text-sm font-semibold text-slate-200 font-mono">{publication.predominantTone}</span>
          </div>
        </div>

        {/* Sample Comments */}
        {publication.sampleComments && publication.sampleComments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              Audience Reaction Snippets
            </h3>
            <div className="space-y-2">
              {publication.sampleComments.map((comment, idx) => (
                <div key={idx} className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/80 text-xs text-slate-300">
                  <p className="italic">"{comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono"
          >
            <span>Simulated URL: {publication.url}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};
