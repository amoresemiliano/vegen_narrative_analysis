import React, { useState } from 'react';
import { Publication } from '../../types';
import { Search, Filter, MessageSquare, ExternalLink, Globe2, CheckSquare, Square, Layers, Sparkles } from 'lucide-react';
import { ObservationBadge } from '../ObservationBadge';
import { PublicationDetailModal } from '../modals/PublicationDetailModal';

interface Props {
  publications: Publication[];
}

export const SourcesView: React.FC<Props> = ({ publications }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('ALL');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedNarrative, setSelectedNarrative] = useState<string>('ALL');
  const [selectedPubIds, setSelectedPubIds] = useState<string[]>([]);
  const [activeModalPub, setActiveModalPub] = useState<Publication | null>(null);
  const [showBatchNotice, setShowBatchNotice] = useState(false);

  // Extract unique platforms, countries
  const platforms = Array.from(new Set(publications.map((p) => p.sourcePlatform)));
  const countries = Array.from(new Set(publications.map((p) => p.country)));

  // Filter logic
  const filteredPubs = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'ALL' || pub.sourcePlatform === selectedPlatform;
    const matchesCountry = selectedCountry === 'ALL' || pub.country === selectedCountry;
    const matchesNarrative = selectedNarrative === 'ALL' || pub.mainNarrativeId === selectedNarrative;

    return matchesSearch && matchesPlatform && matchesCountry && matchesNarrative;
  });

  const toggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPubIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const toggleSelectAll = () => {
    if (selectedPubIds.length === filteredPubs.length) {
      setSelectedPubIds([]);
    } else {
      setSelectedPubIds(filteredPubs.map((p) => p.id));
    }
  };

  const handleAnalyzeSelected = () => {
    if (selectedPubIds.length === 0) return;
    setShowBatchNotice(true);
    setTimeout(() => setShowBatchNotice(false), 5000);
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-lg font-extrabold text-[#292C32] flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#4C6FFF]" />
              Publicaciones y muestra de fuentes analizadas
            </h2>
            <p className="text-xs text-[#626773] font-medium mt-0.5">
              Filtra e inspecciona publicaciones en plataformas digitales para evaluar encuadres y reacciones
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ObservationBadge type="observation" />
            <button
              onClick={toggleSelectAll}
              className="px-3.5 py-1.5 bg-white/90 hover:bg-white text-[#292C32] text-xs font-mono font-bold rounded-xl border border-indigo-200/80 transition cursor-pointer shadow-2xs"
            >
              {selectedPubIds.length === filteredPubs.length && filteredPubs.length > 0 ? 'Deseleccionar todo' : 'Seleccionar todo'}
            </button>
          </div>
        </div>

        {/* Search & Select dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {/* Search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#7257E8] absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar titular o autor..."
              className="w-full bg-white/90 border border-indigo-100/80 rounded-xl pl-9 pr-3 py-2 text-xs text-[#292C32] placeholder-[#626773] focus:outline-none focus:border-[#7257E8] font-medium"
            />
          </div>

          {/* Platform Filter */}
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-white/90 border border-indigo-100/80 rounded-xl px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-[#7257E8] font-semibold cursor-pointer"
          >
            <option value="ALL">Todas las plataformas ({platforms.length})</option>
            {platforms.map((plat) => (
              <option key={plat} value={plat}>
                {plat}
              </option>
            ))}
          </select>

          {/* Country Filter */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="bg-white/90 border border-indigo-100/80 rounded-xl px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-[#7257E8] font-semibold cursor-pointer"
          >
            <option value="ALL">Todos los países ({countries.length})</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Batch Action */}
          <button
            onClick={handleAnalyzeSelected}
            disabled={selectedPubIds.length === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
              selectedPubIds.length > 0
                ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] hover:opacity-95 text-white shadow-xs'
                : 'bg-slate-200/80 text-slate-400 cursor-not-allowed border border-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Analizar seleccionadas ({selectedPubIds.length})</span>
          </button>
        </div>

        {/* Batch notice banner */}
        {showBatchNotice && (
          <div className="p-3 bg-indigo-50/80 border border-indigo-200/80 rounded-xl text-xs text-indigo-950 flex items-center justify-between animate-fade-in font-medium">
            <span>
              <strong>Simulación de análisis por lote:</strong> Se generó un informe comparativo de encuadre para {selectedPubIds.length} publicación(es) seleccionada(s).
            </span>
            <button onClick={() => setShowBatchNotice(false)} className="text-[#7257E8] font-mono text-[11px] underline font-bold cursor-pointer">
              Ocultar
            </button>
          </div>
        )}
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPubs.map((pub) => {
          const isSelected = selectedPubIds.includes(pub.id);

          return (
            <div
              key={pub.id}
              onClick={() => setActiveModalPub(pub)}
              className={`group bg-white/90 border rounded-2xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between relative shadow-2xs hover:shadow-md ${
                isSelected ? 'border-[#7257E8] bg-indigo-50/30 ring-1 ring-[#7257E8]' : 'border-indigo-100 hover:border-[#7257E8]'
              }`}
            >
              <div>
                {/* Platform & Selection Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-lg bg-indigo-50 border border-indigo-200/80 text-[10px] font-mono text-[#7257E8] font-extrabold">
                      {pub.sourcePlatform}
                    </span>
                    <span className="text-[10px] font-mono text-[#626773] flex items-center gap-1 font-semibold">
                      <Globe2 className="w-3 h-3 text-[#4C6FFF]" />
                      {pub.country}
                    </span>
                  </div>

                  <button
                    onClick={(e) => toggleSelect(pub.id, e)}
                    className="text-[#626773] hover:text-[#7257E8] p-1 cursor-pointer"
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-[#7257E8]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#626773]" />
                    )}
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-sm text-[#292C32] group-hover:text-[#7257E8] transition-colors line-clamp-2 mb-2">
                  {pub.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#626773] line-clamp-3 mb-3 leading-relaxed font-medium">
                  {pub.summary}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-indigo-100">
                {/* Main Narrative & Tone */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#626773] flex items-center gap-1 truncate max-w-[200px] font-semibold">
                    <Layers className="w-3 h-3 text-[#7257E8] shrink-0" />
                    <span className="truncate">{pub.mainNarrativeTitle}</span>
                  </span>
                  <span className="text-[#F28C45] font-mono text-[10px] bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-200/80 font-bold shrink-0">
                    {pub.predominantTone}
                  </span>
                </div>

                {/* Footer Metrics */}
                <div className="flex items-center justify-between text-xs text-[#626773] font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-bold text-[#292C32]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#7257E8]" />
                      {pub.commentCount.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#626773] font-semibold">
                      Alcance: {pub.engagementScore.toLocaleString()}
                    </span>
                  </div>

                  <span className="text-[10px] text-[#7257E8] font-extrabold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Inspeccionar <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Publication Detail Modal */}
      {activeModalPub && (
        <PublicationDetailModal publication={activeModalPub} onClose={() => setActiveModalPub(null)} />
      )}
    </div>
  );
};
