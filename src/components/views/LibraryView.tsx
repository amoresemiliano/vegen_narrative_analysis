import React, { useState } from 'react';
import { LibraryCollection } from '../../types';
import { Library, Folder, BookOpen, Clock, Tag, ArrowRight, Bookmark } from 'lucide-react';

interface Props {
  collections: LibraryCollection[];
  onOpenTopic: (topicId: string) => void;
}

export const LibraryView: React.FC<Props> = ({ collections, onOpenTopic }) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const categories = ['ALL', 'Topics', 'Collections', 'Saved analyses'];

  const filteredCollections = activeTab === 'ALL'
    ? collections
    : collections.filter((c) => c.category === activeTab);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <Library className="w-5 h-5 text-amber-400" />
              Saved Investigations & Collections Library
            </h2>
            <p className="text-xs text-slate-400">
              Personal research workspace & bookmarked phenomenon collections
            </p>
          </div>

          <span className="px-3 py-1 bg-slate-800 text-amber-300 text-xs font-mono rounded-lg border border-slate-700">
            {collections.length} Saved Collections
          </span>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                activeTab === cat
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollections.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenTopic(item.sampleTopicId || 'flat-earth-demo')}
            className="group bg-slate-900 border border-slate-800 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold">
                  {item.category}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.lastUpdated}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-amber-400 font-medium font-mono pt-1">
                <span>{item.itemCount.toLocaleString()} Entries</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>Re-open Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
