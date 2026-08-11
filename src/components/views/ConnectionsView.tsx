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
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-3 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-[#292C32]">Conexiones discursivas entre fenómenos</h2>
          </div>
          <ObservationBadge type="correlation" />
        </div>
        <p className="text-xs text-[#626773]">
          Identifica superposiciones temáticas, vocabulario y narrativas compartidas entre temas digitales en la muestra
        </p>
      </div>

      {/* Network Graph Interactive Canvas / Nodes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Node Network Visualizer */}
        <div className="lg:col-span-7 bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#292C32] flex items-center gap-2">
              <Network className="w-4 h-4 text-violet-600" />
              Mapa interactivo de superposición de temas
            </span>
            <span className="text-[10px] font-mono text-[#626773]">Selecciona un nodo para explorar</span>
          </div>

          {/* Graphical Node Canvas Representation */}
          <div className="relative min-h-[360px] bg-white rounded-xl border border-[#CDD0D5] p-6 flex items-center justify-center overflow-hidden shadow-2xs">
            {/* Background constellation lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-300" strokeWidth="1.5">
              <line x1="50%" y1="50%" x2="20%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="85%" y2="75%" strokeDasharray="4" />
              <line x1="50%" y1="50%" x2="15%" y2="75%" strokeDasharray="4" />
            </svg>

            {/* Central Node */}
            <div className="z-10 p-4 bg-blue-600 text-white font-bold rounded-2xl shadow-md border-2 border-blue-400 text-center max-w-[160px]">
              <span className="text-[10px] block font-mono font-bold uppercase tracking-wider">TEMA PRINCIPAL</span>
              <span className="text-sm tracking-tight block font-extrabold">Terraplanismo</span>
            </div>

            {/* Satellite Nodes */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedConn(connections[0])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[0].id
                      ? 'bg-violet-600 text-white font-bold border-violet-700 ring-2 ring-violet-400/50'
                      : 'bg-[#F1F2F4] text-[#292C32] border-[#CDD0D5] hover:border-violet-500 font-medium'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-bold ${selectedConn.id === connections[0].id ? 'text-violet-200' : 'text-violet-700'}`}>92% Coincidencia</span>
                  <span className="line-clamp-2">Desconfianza institucional</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[1])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[1].id
                      ? 'bg-violet-600 text-white font-bold border-violet-700 ring-2 ring-violet-400/50'
                      : 'bg-[#F1F2F4] text-[#292C32] border-[#CDD0D5] hover:border-violet-500 font-medium'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-bold ${selectedConn.id === connections[1].id ? 'text-violet-200' : 'text-violet-700'}`}>96% Coincidencia</span>
                  <span className="line-clamp-2">Escepticismo sobre la NASA</span>
                </button>
              </div>

              <div className="flex justify-between mt-auto">
                <button
                  onClick={() => setSelectedConn(connections[2])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[2].id
                      ? 'bg-violet-600 text-white font-bold border-violet-700 ring-2 ring-violet-400/50'
                      : 'bg-[#F1F2F4] text-[#292C32] border-[#CDD0D5] hover:border-violet-500 font-medium'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-bold ${selectedConn.id === connections[2].id ? 'text-violet-200' : 'text-violet-700'}`}>64% Coincidencia</span>
                  <span className="line-clamp-2">Consenso sobre vacunas</span>
                </button>

                <button
                  onClick={() => setSelectedConn(connections[3])}
                  className={`pointer-events-auto p-2.5 rounded-xl border text-left text-xs transition shadow-xs max-w-[150px] cursor-pointer ${
                    selectedConn.id === connections[3].id
                      ? 'bg-violet-600 text-white font-bold border-violet-700 ring-2 ring-violet-400/50'
                      : 'bg-[#F1F2F4] text-[#292C32] border-[#CDD0D5] hover:border-violet-500 font-medium'
                  }`}
                >
                  <span className={`block font-mono text-[9px] font-bold ${selectedConn.id === connections[3].id ? 'text-violet-200' : 'text-violet-700'}`}>82% Coincidencia</span>
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
                      ? 'bg-white border-blue-600 text-blue-700 font-bold shadow-2xs'
                      : 'bg-white border-[#CDD0D5] text-[#292C32] hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate pr-2">{conn.targetTopic}</span>
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#F1F2F4] text-violet-800 font-bold border border-[#CDD0D5] shrink-0">
                    {conn.connectionStrength}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Connection Detail Box */}
        <div className="lg:col-span-5 bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-5 shadow-2xs">
          <div className="border-b border-[#CDD0D5] pb-3">
            <span className="text-[10px] font-mono uppercase text-violet-700 font-bold block mb-1">
              CONEXIÓN SELECCIONADA
            </span>
            <h3 className="text-lg font-bold text-[#292C32]">{selectedConn.targetTopic}</h3>
            <span className="text-xs font-mono text-blue-700 font-semibold block mt-1">{selectedConn.relationCategory}</span>
          </div>

          <p className="text-xs text-[#626773] leading-relaxed">{selectedConn.description}</p>

          {/* "Why are these topics connected?" Section */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-[#292C32] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              ¿Por qué están conectados estos temas?
            </h4>

            {/* Shared Keywords */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#626773] font-bold flex items-center gap-1">
                <Hash className="w-3 h-3 text-orange-600" />
                Vocabulario y palabras clave compartidas
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedKeywords.map((kw, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white text-[10px] font-mono text-[#292C32] border border-[#CDD0D5] font-medium">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Narratives */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#626773] font-bold flex items-center gap-1">
                <Layers className="w-3 h-3 text-violet-600" />
                Encuadres narrativos compartidos
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedConn.whyConnected.sharedNarratives.map((nar, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-violet-50 text-violet-800 text-[10px] font-mono font-bold border border-violet-200">
                    {nar}
                  </span>
                ))}
              </div>
            </div>

            {/* Shared Overlap Percentages */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
              <div className="p-2.5 bg-white rounded-lg border border-[#CDD0D5] shadow-2xs">
                <span className="text-[#626773] block text-[10px] font-semibold">Superposición de fuentes</span>
                <span className="text-orange-700 font-bold">{selectedConn.whyConnected.sourceOverlapPercentage}%</span>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-[#CDD0D5] shadow-2xs">
                <span className="text-[#626773] block text-[10px] font-semibold">Superposición de audiencia</span>
                <span className="text-violet-800 font-bold">{selectedConn.whyConnected.audienceOverlapPercentage}%</span>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-[#CDD0D5] text-xs text-[#626773] shadow-2xs">
              <strong className="text-[#292C32] block mb-1 font-mono text-[11px] font-bold">Similitud emocional:</strong>
              {selectedConn.whyConnected.emotionalSimilarity}
            </div>
          </div>

          {/* CRITICAL CAUSALITY DISCLAIMER as strictly requested */}
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-[11px] text-orange-950 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-orange-900">
              <AlertTriangle className="w-3.5 h-3.5 text-orange-600" />
              <span>AVISO DE CAUSALIDAD</span>
            </div>
            <p className="leading-relaxed">
              Patrones observados en la muestra analizada. Una relación observada no implica causalidad ni que todos los participantes compartan las mismas creencias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
