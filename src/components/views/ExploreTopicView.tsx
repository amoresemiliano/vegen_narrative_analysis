import React from 'react';
import { TopicResearch, ExploreTab } from '../../types';
import { Compass, FileText, MessageSquare, Globe2, Calendar, Database, Layers, Share2 } from 'lucide-react';
import { ObservationBadge } from '../ObservationBadge';

interface Props {
  topic: TopicResearch;
  activeTab: ExploreTab;
  onSelectTab: (tab: ExploreTab) => void;
  children: React.ReactNode;
}

export const ExploreTopicView: React.FC<Props> = ({ topic, activeTab, onSelectTab, children }) => {
  const tabs: { id: ExploreTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Resumen general', icon: <Compass className="w-4 h-4" /> },
    { id: 'sources', label: 'Fuentes', icon: <FileText className="w-4 h-4" /> },
    { id: 'narratives', label: 'Narrativas', icon: <Layers className="w-4 h-4" /> },
    { id: 'reactions', label: 'Reacciones', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'connections', label: 'Conexiones', icon: <Share2 className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Research Topic Header Card */}
      <section className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 sm:p-7 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-indigo-50 text-[#7257E8] border border-indigo-200/80 text-[10px] font-mono font-bold uppercase tracking-wider">
                Espacio de investigación activo
              </span>
              <ObservationBadge type="observation" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#626773] font-mono font-semibold">
              <Calendar className="w-3.5 h-3.5 text-[#7257E8]" />
              <span>{topic.period}</span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292C32] tracking-tight font-sans">
              {topic.name}
            </h1>
            <p className="text-sm text-[#292C32] font-semibold mt-1">{topic.subtitle}</p>
            <p className="text-xs text-[#626773] mt-2 max-w-3xl leading-relaxed">{topic.description}</p>
          </div>

          {/* Key Metrics Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-indigo-100">
            <div className="bg-white/90 p-3 rounded-xl border border-indigo-100/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Database className="w-3.5 h-3.5 text-[#4C6FFF]" />
                <span className="font-semibold">Publicaciones</span>
              </div>
              <div className="text-lg font-extrabold font-mono text-[#292C32]">{topic.publicationCount.toLocaleString()}</div>
              <span className="text-[10px] text-[#626773]">Muestra analizada</span>
            </div>

            <div className="bg-white/90 p-3 rounded-xl border border-indigo-100/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#7257E8]" />
                <span className="font-semibold">Comentarios</span>
              </div>
              <div className="text-lg font-extrabold font-mono text-[#292C32]">{topic.commentCount.toLocaleString()}</div>
              <span className="text-[10px] text-[#626773]">Reacciones de audiencia</span>
            </div>

            <div className="bg-white/90 p-3 rounded-xl border border-indigo-100/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">Fuentes</span>
              </div>
              <div className="text-lg font-extrabold font-mono text-[#292C32]">{topic.sourceCount}</div>
              <span className="text-[10px] text-[#626773]">Canales y medios</span>
            </div>

            <div className="bg-white/90 p-3 rounded-xl border border-indigo-100/80 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Globe2 className="w-3.5 h-3.5 text-[#F28C45]" />
                <span className="font-semibold">Países</span>
              </div>
              <div className="text-lg font-extrabold font-mono text-[#292C32]">{topic.countries.length}</div>
              <span className="text-[10px] text-[#626773] truncate block">{topic.countries.slice(0, 3).join(', ')}...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Tabs */}
      <nav className="flex items-center gap-1.5 border-b border-indigo-200/60 overflow-x-auto pb-1.5 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] text-white font-bold shadow-sm shadow-indigo-500/20'
                  : 'bg-white/60 hover:bg-white/90 text-[#626773] hover:text-[#292C32] border border-white/60'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Render Active Sub-View */}
      <main className="animate-fade-in">{children}</main>
    </div>
  );
};
