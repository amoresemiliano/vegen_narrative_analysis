import React, { useState } from 'react';
import { Publication } from '../../types';
import { Search, Filter, MessageSquare, ExternalLink, Globe2, CheckSquare, Square, Layers, Shield, Sparkles } from 'lucide-react';
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

  // Extract unique platforms, countries, narratives
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
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Filter className="w-5 h-5 text-amber-400" />
              Analyzed Publications & Sources Sample
            </h2>
            <p className="text-xs text-slate-400">
              Filter and select publications across digital platforms to inspect framing & audience engagement
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ObservationBadge type="observation" />
            <button
              onClick={toggleSelectAll}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-lg border border-slate-700 transition"
            >
              {selectedPubIds.length === filteredPubs.length && filteredPubs.length > 0 ? 'Deselect All' : 'Select All'}
            </button>
          </div>
        </div>

        {/* Search & Select dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {/* Search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search headline or author..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400/80"
            />
          </div>

          {/* Platform Filter */}
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400/80"
          >
            <option value="ALL">All Platforms ({platforms.length})</option>
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
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400/80"
          >
            <option value="ALL">All Countries ({countries.length})</option>
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
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition ${
              selectedPubIds.length > 0
                ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Analyze Selected ({selectedPubIds.length})</span>
          </button>
        </div>

        {/* Batch notice banner */}
        {showBatchNotice && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-200 flex items-center justify-between animate-fade-in">
            <span>
              <strong>Batch Analysis Simulation:</strong> Compiled comparative framing report for {selectedPubIds.length} selected publication(s) in dataset.
            </span>
            <button onClick={() => setShowBatchNotice(false)} className="text-amber-400 font-mono text-[11px] underline">
              Dismiss
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
              className={`group bg-slate-900 border rounded-xl p-4 sm:p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between relative hover:shadow-xl ${
                isSelected ? 'border-amber-400 bg-amber-500/5' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Platform & Selection Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-amber-300 font-medium">
                      {pub.sourcePlatform}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Globe2 className="w-3 h-3" />
                      {pub.country}
                    </span>
                  </div>

                  <button
                    onClick={(e) => toggleSelect(pub.id, e)}
                    className="text-slate-400 hover:text-amber-400 p-1"
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                  {pub.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-400 line-clamp-3 mb-3 leading-relaxed">
                  {pub.summary}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                {/* Main Narrative & Tone */}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1 truncate max-w-[200px]">
                    <Layers className="w-3 h-3 text-indigo-400 shrink-0" />
                    <span className="truncate">{pub.mainNarrativeTitle}</span>
                  </span>
                  <span className="text-amber-300 font-mono text-[10px] bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 shrink-0">
                    {pub.predominantTone}
                  </span>
                </div>

                {/* Footer Metrics */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                      {pub.commentCount.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Score: {pub.engagementScore.toLocaleString()}
                    </span>
                  </div>

                  <span className="text-[10px] text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Inspect <ExternalLink className="w-3 h-3" />
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
