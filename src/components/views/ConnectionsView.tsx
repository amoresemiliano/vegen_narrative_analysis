import React, { useState } from 'react';
import { Connection } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Share2, Network, ArrowRight, ShieldAlert, Sparkles, AlertTriangle, Layers, Users, Hash } from 'lucide-react';

interface Props {
  connections: Connection[];
}

export const ConnectionsView: React.FC<Props> = ({ connections }) => {
  const [selectedConn, setSelectedConn] = useState<Connection>(connections[0]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-slate-100">Discourse & Phenomenon Connections</h2>
          </div>
          <ObservationBadge type="correlation" />
        </div>
        <p className="text-xs text-slate-400">
          Discovers thematic, vocabulary, and narrative overlaps across digital topics in sample dataset
        </p>
      </div>

      {/* Network Graph Interactive Canvas / Nodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Node Network Visualizer (Touch-friendly & Desktop Responsive) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
              <Network className="w-4 h-4 text-indigo-400" />
              Interactive Topic Overlap Map
            </span>
            <span className="text-[10px] font-mono text-slate-400">Select node to explore shared traits</span>
          </div>

          {/* Graphical Node Canvas Representation */}
          <div className="relative min-h-[360px] bg-slate-950 rounded-xl border border-slate-800 p-6 flex items-center justify-center overflow-hidden">
            {/* Background constellation lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-800/80" strokeWidth="1">
              <line x1="50%" y1="50%" x2="20%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="85%" y2="75%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="15%" y2="75%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="50%" y2="90%" strokeDasharray="4" />
            </svg>

            {/* Central Node */}
            <div className="z-10 p-4 bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 font-bold rounded-2xl shadow-2xl border-2 border-amber-300 text-center max-w-[160px]">
              <span className="text-xs block font-mono">PRIMARY TOPIC</span>
              <span className="text-sm tracking-tight block">Flat Earth</span>
            </div>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedConn(connections[0])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-lg max-w-[150px] ${
                    selectedConn.id === connections[0].id
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 ring-2 ring-amber-400/50'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <span className="block font-mono text-[9px] text-amber-300">92% Match</span>
                  <span className="line-clamp-2">Institutional Distrust</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[1])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-lg max-w-[150px] ${
                    selectedConn.id === connections[1].id
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 ring-2 ring-amber-400/50'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <span className="block font-mono text-[9px] text-amber-300">96% Match</span>
                  <span className="line-clamp-2">NASA Skepticism</span>
                </button>
              </div>

              <div className="flex justify-between mt-auto">
                <button
                  onClick={() => setSelectedConn(connections[2])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-lg max-w-[150px] ${
                    selectedConn.id === connections[2].id
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 ring-2 ring-amber-400/50'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <span className="block font-mono text-[9px] text-amber-300">64% Match</span>
                  <span className="line-clamp-2">Vaccine Consensus</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[3])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-lg max-w-[150px] ${
                    selectedConn.id === connections[3].id
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 ring-2 ring-amber-400/50'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <span className="block font-mono text-[9px] text-amber-300">82% Match</span>
                  <span className="line-clamp-2">MSM Media Distrust</span>
                </button>
              </div>
            </div>
          </div>

          {/* Node Selector Buttons List */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-slate-400 block">All Connected Phenomena:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {connections.map((conn) => (
                <button
                  key={conn.id}
                  onClick={() => setSelectedConn(conn)}
                  className={`p-3 rounded-xl border text-left text-xs transition flex justify-between items-center ${
                    selectedConn.id === conn.id
                      ? 'bg-slate-800 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="truncate pr-2">{conn.targetTopic}</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-700 shrink-0">
                    {conn.connectionStrength}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Connection Detail Box: "Why are these topics connected?" */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
              SELECTED CONNECTION
            </span>
            <h3 className="text-lg font-bold text-slate-100">{selectedConn.targetTopic}</h3>
            <span className="text-xs font-mono text-indigo-300 block mt-1">{selectedConn.relationCategory}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{selectedConn.description}</p>

          {/* "Why are these topics connected?" Section */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Why are these topics connected?
            </h4>

            {/* Shared Keywords */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Hash className="w-3 h-3 text-amber-400" />
                Shared Vocabulary & Keywords
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Narratives */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <Layers className="w-3 h-3 text-indigo-400" />
                Shared Narrative Framings
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedNarratives.map((nar, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                    {nar}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Overlap Percentages */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Source Overlap</span>
                <span className="text-amber-400 font-bold">{selectedConn.whyConnected.sourceOverlapPercentage}%</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px]">Audience Overlap</span>
                <span className="text-indigo-300 font-bold">{selectedConn.whyConnected.audienceOverlapPercentage}%</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
              <strong className="text-slate-200 block mb-1 font-mono text-[11px]">Emotional Similarity:</strong>
              {selectedConn.whyConnected.emotionalSimilarity}
            </div>
          </div>

          {/* CRITICAL CAUSALITY DISCLAIMER as strictly requested */}
          <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-[11px] text-rose-200/90 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-rose-300">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>CAUSALITY DISCLAIMER</span>
            </div>
            <p className="leading-relaxed">
              Patterns observed within the analyzed sample. Does NOT imply causality or that all participants share all beliefs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
