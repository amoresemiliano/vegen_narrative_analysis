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
      <section className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-violet-50 text-violet-800 border border-violet-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                Espacio de investigación activo
              </span>
              <ObservationBadge type="observation" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#626773] font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#626773]" />
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#CDD0D5]">
            <div className="bg-white p-3 rounded-xl border border-[#CDD0D5]">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold">Publicaciones</span>
              </div>
              <div className="text-lg font-bold font-mono text-[#292C32]">{topic.publicationCount.toLocaleString()}</div>
              <span className="text-[10px] text-[#626773]">Muestra analizada</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#CDD0D5]">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <MessageSquare className="w-3.5 h-3.5 text-violet-600" />
                <span className="font-semibold">Comentarios</span>
              </div>
              <div className="text-lg font-bold font-mono text-[#292C32]">{topic.commentCount.toLocaleString()}</div>
              <span className="text-[10px] text-[#626773]">Reacciones de audiencia</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#CDD0D5]">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">Fuentes</span>
              </div>
              <div className="text-lg font-bold font-mono text-[#292C32]">{topic.sourceCount}</div>
              <span className="text-[10px] text-[#626773]">Canales y medios</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#CDD0D5]">
              <div className="flex items-center gap-1.5 text-[#626773] text-xs mb-0.5">
                <Globe2 className="w-3.5 h-3.5 text-orange-600" />
                <span className="font-semibold">Países</span>
              </div>
              <div className="text-lg font-bold font-mono text-[#292C32]">{topic.countries.length}</div>
              <span className="text-[10px] text-[#626773] truncate block">{topic.countries.slice(0, 3).join(', ')}...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Tabs */}
      <nav className="flex items-center gap-1 border-b border-[#CDD0D5] overflow-x-auto pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-[#626773] hover:text-[#292C32] hover:bg-slate-100'
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
