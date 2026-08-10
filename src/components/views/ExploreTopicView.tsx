import React from 'react';
import { TopicResearch, ExploreTab } from '../../types';
import { Compass, FileText, MessageSquare, Globe2, Calendar, Database, Layers, Flame, Share2, AlertCircle } from 'lucide-react';
import { ObservationBadge } from '../ObservationBadge';

interface Props {
  topic: TopicResearch;
  activeTab: ExploreTab;
  onSelectTab: (tab: ExploreTab) => void;
  children: React.ReactNode;
}

export const ExploreTopicView: React.FC<Props> = ({ topic, activeTab, onSelectTab, children }) => {
  const tabs: { id: ExploreTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" /> },
    { id: 'sources', label: 'Sources', icon: <FileText className="w-4 h-4" /> },
    { id: 'narratives', label: 'Narratives', icon: <Layers className="w-4 h-4" /> },
    { id: 'reactions', label: 'Reactions', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'connections', label: 'Connections', icon: <Share2 className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Research Topic Header Card */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                Active Investigation Workspace
              </span>
              <ObservationBadge type="observation" />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{topic.period}</span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight font-sans">
              {topic.name}
            </h1>
            <p className="text-sm text-slate-300 font-medium mt-1">{topic.subtitle}</p>
            <p className="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed">{topic.description}</p>
          </div>

          {/* Key Metrics Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800">
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-0.5">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>Publications</span>
              </div>
              <div className="text-lg font-bold font-mono text-slate-100">{topic.publicationCount.toLocaleString()}</div>
              <span className="text-[10px] text-slate-400">Analyzed sample</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-0.5">
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Comments</span>
              </div>
              <div className="text-lg font-bold font-mono text-slate-100">{topic.commentCount.toLocaleString()}</div>
              <span className="text-[10px] text-slate-400">Audience reactions</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-0.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sources</span>
              </div>
              <div className="text-lg font-bold font-mono text-slate-100">{topic.sourceCount}</div>
              <span className="text-[10px] text-slate-400">Channels & outlets</span>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-0.5">
                <Globe2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Countries</span>
              </div>
              <div className="text-lg font-bold font-mono text-slate-100">{topic.countries.length}</div>
              <span className="text-[10px] text-slate-400 truncate block">{topic.countries.slice(0, 3).join(', ')}...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Navigation Tabs */}
      <nav className="flex items-center gap-1 border-b border-slate-800 overflow-x-auto pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
                isActive
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-950/50'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
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
