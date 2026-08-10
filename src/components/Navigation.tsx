import React from 'react';
import { ViewMode } from '../types';
import { Home, Compass, Cpu, Layers, Share2, Library, Sparkles } from 'lucide-react';

interface Props {
  activeView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  activeTopicName?: string;
}

export const Navigation: React.FC<Props> = ({ activeView, onSelectView, activeTopicName }) => {
  const navItems: { id: ViewMode; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'explore', label: 'Explore', icon: <Compass className="w-5 h-5" /> },
    { id: 'analyze', label: 'Analyze', icon: <Cpu className="w-5 h-5" />, badge: 'Manual' },
    { id: 'narratives', label: 'Narratives', icon: <Layers className="w-5 h-5" /> },
    { id: 'connections', label: 'Connections', icon: <Share2 className="w-5 h-5" /> },
    { id: 'library', label: 'Library', icon: <Library className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop Top Navigation Bar */}
      <header className="hidden md:block sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('home')}
              className="flex items-center gap-2.5 text-left group transition"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-950">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <div>
                <span className="font-bold tracking-tight text-slate-100 text-base font-sans block leading-none">
                  Narrative <span className="text-amber-400 font-normal">Intelligence</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                  Discourse Research Lab
                </span>
              </div>
            </button>

            {/* Active Topic Tag */}
            {activeTopicName && activeView !== 'home' && (
              <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400">Research Topic:</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  {activeTopicName}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all relative ${
                    isActive
                      ? 'bg-slate-800 text-amber-300 shadow-sm border border-slate-700/80 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono uppercase bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded border border-indigo-500/30">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-8 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden xl:inline text-slate-300">Prototype Dataset</span>
            <span className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700 text-[11px]">
              MOCK DEMO
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => onSelectView('home')}
          className="flex items-center gap-2 text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 p-0.5 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-slate-100">Narrative Intelligence</span>
            <span className="block text-[9px] font-mono text-slate-400 uppercase">Research Prototype</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {activeTopicName && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 max-w-[120px] truncate">
              {activeTopicName}
            </span>
          )}
          <span className="text-[9px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">
            MOCK
          </span>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Touch-optimized, 44px+ height targets) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-2 py-1 shadow-2xl">
        <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className={`min-h-[48px] flex flex-col items-center justify-center rounded-lg transition-all text-center py-1 ${
                  isActive
                    ? 'text-amber-400 bg-slate-900/90 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className={`p-1 rounded-md ${isActive ? 'bg-amber-400/10 text-amber-300' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-sans leading-tight tracking-tight mt-0.5 truncate w-full">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
