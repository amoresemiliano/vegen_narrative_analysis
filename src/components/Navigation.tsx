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
    { id: 'home', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'explore', label: 'Explorar', icon: <Compass className="w-5 h-5" /> },
    { id: 'analyze', label: 'Analizar', icon: <Cpu className="w-5 h-5" />, badge: 'Manual' },
    { id: 'narratives', label: 'Narrativas', icon: <Layers className="w-5 h-5" /> },
    { id: 'connections', label: 'Conexiones', icon: <Share2 className="w-5 h-5" /> },
    { id: 'library', label: 'Biblioteca', icon: <Library className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop Top Navigation Bar */}
      <header className="hidden md:block sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/60 text-[#292C32] shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('home')}
              className="flex items-center gap-2.5 text-left group transition cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7257E8] via-[#4C6FFF] to-[#F28C45] p-0.5 flex items-center justify-center shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#7257E8] group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-[#292C32] text-base font-sans block leading-none">
                  Narrative <span className="bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] bg-clip-text text-transparent font-extrabold">Intelligence</span>
                </span>
                <span className="text-[10px] font-mono text-[#626773] tracking-widest uppercase block mt-0.5 font-semibold">
                  Laboratorio de investigación digital
                </span>
              </div>
            </button>

            {/* Active Topic Tag */}
            {activeTopicName && activeView !== 'home' && (
              <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-indigo-200/60">
                <span className="text-[10px] uppercase font-mono text-[#626773] font-semibold">Tema en análisis:</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white/90 text-[#7257E8] border border-indigo-200/80 shadow-2xs">
                  {activeTopicName}
                </span>
              </div>
            )}
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="flex items-center gap-1.5 bg-slate-200/40 p-1 rounded-xl border border-white/60">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#7257E8] font-bold shadow-xs border border-indigo-100'
                      : 'text-[#626773] hover:text-[#292C32] hover:bg-white/50'
                  }`}
                >
                  <span className={isActive ? 'text-[#7257E8]' : 'text-[#626773]'}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono uppercase bg-indigo-50 text-[#7257E8] px-1.5 py-0.2 rounded font-bold border border-indigo-200/60">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] rounded-full shadow-xs" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#626773]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="hidden xl:inline text-[#292C32] font-semibold">Observatorio Activo</span>
            <span className="px-2.5 py-1 bg-white/80 text-[#7257E8] rounded-lg border border-indigo-200/60 text-[11px] font-bold font-mono shadow-2xs">
              MUESTRA DEMO
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-white/70 text-[#292C32] px-4 py-3 flex items-center justify-between shadow-xs">
        <button
          onClick={() => onSelectView('home')}
          className="flex items-center gap-2 text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#7257E8] to-[#4C6FFF] p-0.5 flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-extrabold text-sm tracking-tight text-[#292C32]">Narrative Intelligence</span>
            <span className="block text-[9px] font-mono text-[#626773] uppercase font-semibold">Investigación digital</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {activeTopicName && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-[#7257E8] border border-indigo-200 max-w-[120px] truncate">
              {activeTopicName}
            </span>
          )}
          <span className="text-[9px] font-mono bg-white text-[#626773] px-1.5 py-0.5 rounded border border-[#CDD0D5] font-bold">
            MUESTRA
          </span>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-white/80 px-2 py-1.5 shadow-xl">
        <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className={`min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-all text-center py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#7257E8] bg-indigo-50/80 font-bold shadow-2xs border border-indigo-200/60'
                    : 'text-[#626773] hover:text-[#292C32]'
                }`}
              >
                <div className={`p-1 rounded-md ${isActive ? 'text-[#7257E8]' : ''}`}>
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
