import React, { useState } from 'react';
import { SAMPLE_SEARCH_TOPICS } from '../../data/mockData';
import { Search, Sparkles, Cpu, ArrowRight, Activity, TrendingUp, Shield, HelpCircle } from 'lucide-react';
import { ViewMode } from '../../types';

interface Props {
  onSearchTopic: (query: string) => void;
  onSelectView: (view: ViewMode) => void;
  onOpenDisclaimer: () => void;
}

export const HomeView: React.FC<Props> = ({ onSearchTopic, onSelectView, onOpenDisclaimer }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchTopic(searchInput.trim());
    } else {
      onSearchTopic('Flat Earth / Terraplanismo');
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:py-16 text-center">
        {/* Ambient mesh background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-amber-500/10 to-rose-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300 shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Discourse & Phenomenon Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-sans leading-tight">
            Understand the narratives <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              shaping digital conversations.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Investigate how topics unfold across networks, analyze dominant claims, track audience reaction friction, and map hidden connections across digital phenomena.
          </p>

          {/* Large Search Form */}
          <form onSubmit={handleSubmit} className="pt-4 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-2xl rounded-2xl bg-slate-900 border border-slate-700/80 p-1.5 focus-within:border-amber-400/80 transition-all">
              <Search className="w-6 h-6 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="What do you want to understand? (e.g. Flat Earth)"
                className="w-full bg-transparent px-3 py-3 text-slate-100 placeholder-slate-400 text-sm sm:text-base focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Explore Topic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Suggested Topic Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-mono text-[11px] mr-1">Suggested Topics:</span>
            {SAMPLE_SEARCH_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onSearchTopic(topic.name)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 transition flex items-center gap-1.5 group"
              >
                <span>{topic.name}</span>
                <span className="text-[10px] text-slate-400 font-mono group-hover:text-amber-400">({topic.tag})</span>
              </button>
            ))}
          </div>

          {/* Secondary Action & Methodological Note */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <button
              onClick={() => onSelectView('analyze')}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Or analyze a specific publication manually</span>
            </button>

            <button
              onClick={onOpenDisclaimer}
              className="text-slate-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1 transition"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Read research ethics & methodology</span>
            </button>
          </div>
        </div>
      </section>

      {/* Five Core Analytical Questions Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-400" />
                The 5 Questions of Narrative Intelligence
              </h2>
              <p className="text-xs text-slate-400">
                Progressive framework to deconstruct digital phenomena without diagnosing individuals.
              </p>
            </div>
            <span className="px-3 py-1 bg-slate-800 text-amber-300 text-xs font-mono rounded-lg border border-slate-700">
              FRAMEWORK V1.2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">01 / Content</span>
              <h3 className="font-semibold text-sm text-slate-200">What is being said?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Key claims, entities, keywords, and linguistic markers in the analyzed sample.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">02 / Narrative</span>
              <h3 className="font-semibold text-sm text-slate-200">How is it built?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Core framing, institutional distrust, and empirical intuition structures.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">03 / Reaction</span>
              <h3 className="font-semibold text-sm text-slate-200">How does audience respond?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Agreement, rejection, hostility, ridicule, uncertainty, and indignation.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">04 / Communities</span>
              <h3 className="font-semibold text-sm text-slate-200">What patterns emerge?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Discourse traits across source groups and country clusters.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">05 / Connections</span>
              <h3 className="font-semibold text-sm text-slate-200">What else is linked?</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Shared vocabulary and narrative overlap with other digital topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Demo Launcher */}
      <section className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              Recent Simulated Research Projects
            </h2>
            <p className="text-xs text-slate-400">Click to explore pre-loaded prototype datasets instantly</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Demo Card */}
          <div
            onClick={() => onSearchTopic('Flat Earth / Terraplanismo')}
            className="group bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-semibold">
                FEATURED DATASET
              </span>
              <span className="text-xs font-mono text-slate-400">1,420 Publications</span>
            </div>

            <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
              Flat Earth / Terraplanismo
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Comprehensive analysis of empirical skepticism, laser curvature demonstrations, anti-NASA narratives, and Antarctic Treaty geopolitical discourse.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
              <span className="bg-slate-950 px-2 py-0.5 rounded">High Polarization</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded">4 Main Narratives</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded">12 Countries</span>
            </div>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Open Research Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Secondary Mock Datasets */}
          <div className="space-y-3">
            <div
              onClick={() => onSearchTopic('AI misinformation')}
              className="p-4 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl transition cursor-pointer flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-sm text-slate-200">AI Misinformation & Deepfakes</h4>
                <p className="text-xs text-slate-400">Discourse around synthetic media in political campaigns</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>

            <div
              onClick={() => onSearchTopic('Argentina World Cup')}
              className="p-4 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl transition cursor-pointer flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-sm text-slate-200">Argentina World Cup Narratives</h4>
                <p className="text-xs text-slate-400">Sports euphoria, national pride & online identity dynamics</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>

            <div
              onClick={() => onSearchTopic('Cancel culture')}
              className="p-4 bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-xl transition cursor-pointer flex justify-between items-center"
            >
              <div>
                <h4 className="font-semibold text-sm text-slate-200">Cancel Culture & Stigmatization</h4>
                <p className="text-xs text-slate-400">Moral outrage escalation and public figure pushback</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Methodological Principles Footnote */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-slate-300">Methodology Policy:</strong> Analyzes content and observable discourse patterns. Does NOT diagnose individuals or assign psychological traits.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-amber-400 hover:underline font-mono text-[11px] shrink-0"
          >
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
};
