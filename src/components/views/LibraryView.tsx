import React, { useState } from 'react';
import { LibraryCollection } from '../../types';
import { Library, Clock, ArrowRight } from 'lucide-react';

interface Props {
  collections: LibraryCollection[];
  onOpenTopic: (topicId: string) => void;
}

export const LibraryView: React.FC<Props> = ({ collections, onOpenTopic }) => {
  const [activeTab, setActiveTab] = useState<string>('Todas');

  const categories = ['Todas', 'Temas', 'Colecciones', 'Análisis guardados'];

  const categoryMap: Record<string, string> = {
    'Temas': 'Topics',
    'Colecciones': 'Collections',
    'Análisis guardados': 'Saved analyses',
  };

  const filteredCollections = activeTab === 'Todas'
    ? collections
    : collections.filter((c) => c.category === activeTab || c.category === categoryMap[activeTab]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-5 space-y-3 shadow-2xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-[#292C32] flex items-center gap-2">
              <Library className="w-5 h-5 text-violet-600" />
              Biblioteca de investigaciones y colecciones guardadas
            </h2>
            <p className="text-xs text-[#626773]">
              Espacio personal de investigación y colecciones de fenómenos guardados
            </p>
          </div>

          <span className="px-3 py-1 bg-white text-violet-800 text-xs font-mono font-bold rounded-lg border border-[#CDD0D5] shadow-2xs">
            {collections.length} Colecciones guardadas
          </span>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                activeTab === cat
                  ? 'bg-blue-600 text-white font-bold shadow-2xs'
                  : 'bg-white text-[#292C32] hover:text-blue-700 border border-[#CDD0D5]'
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
            className="group bg-white border border-[#CDD0D5] hover:border-violet-500 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-md relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded bg-violet-50 text-violet-800 border border-violet-200 text-[10px] font-bold">
                  {item.category}
                </span>
                <span className="text-[#626773] flex items-center gap-1 font-semibold">
                  <Clock className="w-3 h-3" />
                  {item.lastUpdated}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#292C32] group-hover:text-violet-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#626773] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#CDD0D5]">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#F1F2F4] text-[10px] font-mono text-[#292C32] border border-[#CDD0D5] font-semibold">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-blue-700 font-bold font-mono pt-1">
                <span>{item.itemCount.toLocaleString()} Elementos</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  <span>Reabrir espacio</span>
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
