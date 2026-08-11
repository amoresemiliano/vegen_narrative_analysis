import React, { useState } from 'react';
import { Connection } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Share2, Network, Sparkles, AlertTriangle, Layers, Hash } from 'lucide-react';

interface Props {
  connections: Connection[];
}

export const ConnectionsView: React.FC<Props> = ({ connections }) => {
  const [selectedConn, setSelectedConn] = useState<Connection>(connections[0]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-3 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#4C6FFF]" />
            <h2 className="text-lg font-extrabold text-[#292C32]">Conexiones discursivas entre fenómenos</h2>
          </div>
          <ObservationBadge type="correlation" />
        </div>
        <p className="text-xs text-[#626773] font-medium">
          Identifica superposiciones temáticas, vocabulario y narrativas compartidas entre temas digitales en la muestra
        </p>
      </div>

      {/* Network Graph Interactive Canvas / Nodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Node Network Visualizer */}
        <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#292C32] flex items-center gap-2">
              <Network className="w-4 h-4 text-[#7257E8]" />
              Mapa interactivo de superposición de temas
            </span>
            <span className="text-[10px] font-mono text-[#626773] font-semibold">Selecciona un nodo para explorar</span>
          </div>

          {/* Graphical Node Canvas Representation */}
          <div className="relative min-h-[360px] bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 rounded-2xl border border-indigo-100/80 p-6 flex items-center justify-center overflow-hidden shadow-2xs">
            {/* Background constellation lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-300/60" strokeWidth="1.5">
              <line x1="50%" y1="50%" x2="20%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="85%" y2="75%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="15%" y2="75%" strokeDasharray="4" />
            </svg>

            {/* Central Node */}
            <div className="z-10 p-4 bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold rounded-2xl shadow-md border border-white/40 text-center max-w-[160px]">
              <span className="text-[10px] block font-mono font-extrabold uppercase tracking-wider text-indigo-100">TEMA PRINCIPAL</span>
              <span className="text-sm tracking-tight block font-extrabold">Terraplanismo</span>
            </div>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedConn(connections[0])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[0].id
                      ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold border-indigo-300 ring-2 ring-indigo-400/30'
                      : 'bg-white/90 text-[#292C32] border-indigo-100 hover:border-[#7257E8] font-semibold'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-extrabold ${selectedConn.id === connections[0].id ? 'text-indigo-100' : 'text-[#7257E8]'}`}>92% Coincidencia</span>
                  <span className="line-clamp-2">Desconfianza institucional</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[1])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[1].id
                      ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold border-indigo-300 ring-2 ring-indigo-400/30'
                      : 'bg-white/90 text-[#292C32] border-indigo-100 hover:border-[#7257E8] font-semibold'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-extrabold ${selectedConn.id === connections[1].id ? 'text-indigo-100' : 'text-[#7257E8]'}`}>96% Coincidencia</span>
                  <span className="line-clamp-2">Escepticismo sobre la NASA</span>
                </button>
              </div>

              <div className="flex justify-between mt-auto">
                <button
                  onClick={() => setSelectedConn(connections[2])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[2].id
                      ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold border-indigo-300 ring-2 ring-indigo-400/30'
                      : 'bg-white/90 text-[#292C32] border-indigo-100 hover:border-[#7257E8] font-semibold'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-extrabold ${selectedConn.id === connections[2].id ? 'text-indigo-100' : 'text-[#7257E8]'}`}>64% Coincidencia</span>
                  <span className="line-clamp-2">Consenso sobre vacunas</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[3])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[3].id
                      ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold border-indigo-300 ring-2 ring-indigo-400/30'
                      : 'bg-white/90 text-[#292C32] border-indigo-100 hover:border-[#7257E8] font-semibold'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-extrabold ${selectedConn.id === connections[3].id ? 'text-indigo-100' : 'text-[#7257E8]'}`}>82% Coincidencia</span>
                  <span className="line-clamp-2">Crítica a medios masivos</span>
                </button>
              </div>
            </div>
          </div>

          {/* Node Selector Buttons List */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-[#626773] font-bold block">Todos los fenómenos conectados:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {connections.map((conn) => (
                <button
                  key={conn.id}
                  onClick={() => setSelectedConn(conn)}
                  className={`p-3 rounded-xl border text-left text-xs transition flex justify-between items-center cursor-pointer ${
                    selectedConn.id === conn.id
                      ? 'bg-indigo-50/80 border-[#7257E8] text-[#7257E8] font-bold shadow-2xs'
                      : 'bg-white/90 border-indigo-100/80 text-[#292C32] hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate pr-2">{conn.targetTopic}</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-lg bg-indigo-100/80 text-[#7257E8] font-extrabold border border-indigo-200/60 shrink-0">
                    {conn.connectionStrength}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Connection Detail Box */}
        <div className="lg:col-span-5 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-6 space-y-5 shadow-sm">
          <div className="border-b border-indigo-100 pb-3">
            <span className="text-[10px] font-mono uppercase text-[#7257E8] font-extrabold block mb-1">
              CONEXIÓN SELECCIONADA
            </span>
            <h3 className="text-lg font-extrabold text-[#292C32]">{selectedConn.targetTopic}</h3>
            <span className="text-xs font-mono text-[#4C6FFF] font-bold block mt-1">{selectedConn.relationCategory}</span>
          </div>

          <p className="text-xs text-[#626773] leading-relaxed font-medium">{selectedConn.description}</p>

          {/* "Why are these topics connected?" Section */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-extrabold text-[#292C32] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F28C45]" />
              ¿Por qué están conectados estos temas?
            </h4>

            {/* Shared Keywords */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#626773] font-bold flex items-center gap-1">
                <Hash className="w-3 h-3 text-[#F28C45]" />
                Vocabulario y palabras clave compartidas
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white text-[10px] font-mono text-[#292C32] border border-indigo-100 font-semibold">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Narratives */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#626773] font-bold flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#7257E8]" />
                Encuadres narrativos compartidos
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedNarratives.map((nar, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-lg bg-indigo-50 text-[#7257E8] text-[10px] font-mono font-bold border border-indigo-200/80">
                    {nar}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Overlap Percentages */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
              <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="text-[#626773] block text-[10px] font-semibold">Superposición de fuentes</span>
                <span className="text-[#F28C45] font-extrabold">{selectedConn.whyConnected.sourceOverlapPercentage}%</span>
              </div>
              <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="text-[#626773] block text-[10px] font-semibold">Superposición de audiencia</span>
                <span className="text-[#7257E8] font-extrabold">{selectedConn.whyConnected.audienceOverlapPercentage}%</span>
              </div>
            </div>

            <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 text-xs text-[#626773] shadow-2xs font-medium">
              <strong className="text-[#292C32] block mb-1 font-mono text-[11px] font-bold">Similitud emocional:</strong>
              {selectedConn.whyConnected.emotionalSimilarity}
            </div>
          </div>

          {/* CRITICAL CAUSALITY DISCLAIMER as strictly requested */}
          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-[11px] text-amber-950 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <AlertTriangle className="w-3.5 h-3.5 text-[#F28C45]" />
              <span>AVISO DE CAUSALIDAD</span>
            </div>
            <p className="leading-relaxed font-medium">
              Patrones observados en la muestra analizada. Una relación observada no implica causalidad ni que todos los participantes compartan las mismas creencias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
