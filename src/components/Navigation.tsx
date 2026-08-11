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
      <header className="hidden md:block sticky top-0 z-40 bg-[#E7E8EB]/90 backdrop-blur-md border-b border-[#CDD0D5] text-[#292C32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectView('home')}
              className="flex items-center gap-2.5 text-left group transition cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-violet-600 to-orange-500 p-0.5 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-violet-600 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <div>
                <span className="font-bold tracking-tight text-[#292C32] text-base font-sans block leading-none">
                  Narrative <span className="text-violet-700 font-bold">Intelligence</span>
                </span>
                <span className="text-[10px] font-mono text-[#626773] tracking-widest uppercase block mt-0.5">
                  Laboratorio de investigación digital
                </span>
              </div>
            </button>

            {/* Active Topic Tag */}
            {activeTopicName && activeView !== 'home' && (
              <div className="hidden lg:flex items-center gap-2 ml-4 pl-4 border-l border-[#CDD0D5]">
                <span className="text-[10px] uppercase font-mono text-[#626773] font-semibold">Tema en análisis:</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white text-violet-800 border border-[#CDD0D5] shadow-xs">
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
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all relative cursor-pointer ${
                    isActive
                      ? 'bg-white text-blue-700 shadow-xs border border-[#CDD0D5]'
                      : 'text-[#626773] hover:text-[#292C32] hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-mono uppercase bg-blue-50 text-blue-700 px-1.5 py-0.2 rounded border border-blue-200">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#626773]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="hidden xl:inline text-[#292C32] font-medium">Datos simulados</span>
            <span className="px-2 py-0.5 bg-white text-[#626773] rounded border border-[#CDD0D5] text-[11px] font-semibold">
              DEMO DE PRUEBA
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden sticky top-0 z-40 bg-[#E7E8EB]/95 backdrop-blur-md border-b border-[#CDD0D5] text-[#292C32] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => onSelectView('home')}
          className="flex items-center gap-2 text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 p-0.5 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight text-[#292C32]">Narrative Intelligence</span>
            <span className="block text-[9px] font-mono text-[#626773] uppercase">Investigación digital</span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          {activeTopicName && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-violet-50 text-violet-800 border border-violet-200 max-w-[120px] truncate">
              {activeTopicName}
            </span>
          )}
          <span className="text-[9px] font-mono bg-white text-[#626773] px-1.5 py-0.5 rounded border border-[#CDD0D5]">
            MUESTRA
          </span>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F1F2F4]/95 backdrop-blur-xl border-t border-[#CDD0D5] px-2 py-1 shadow-lg">
        <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className={`min-h-[48px] flex flex-col items-center justify-center rounded-lg transition-all text-center py-1 cursor-pointer ${
                  isActive
                    ? 'text-blue-700 bg-white font-bold shadow-xs border border-[#CDD0D5]'
                    : 'text-[#626773] hover:text-[#292C32]'
                }`}
              >
                <div className={`p-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-700' : ''}`}>
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
