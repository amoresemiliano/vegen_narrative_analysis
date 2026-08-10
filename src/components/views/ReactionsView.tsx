import React, { useState } from 'react';
import { CommentReaction } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { MessageSquare, Flame, Filter, Tag, HeartHandshake, ShieldAlert } from 'lucide-react';

interface Props {
  comments: CommentReaction[];
}

export const ReactionsView: React.FC<Props> = ({ comments }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Support',
    'Agreement',
    'Disagreement',
    'Rejection',
    'Ridicule',
    'Hostility',
    'Indignation',
    'Distrust',
    'Uncertainty',
    'Questions',
  ];

  const filteredComments = selectedCategory === 'ALL'
    ? comments
    : comments.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              Audience Reaction Analysis & Comment Categories
            </h2>
            <p className="text-xs text-slate-400">
              Categorized sample of audience interventions across platforms
            </p>
          </div>
          <ObservationBadge type="observation" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'ALL' ? comments.length : comments.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Experimental Product Metric: Conversation Temperature Card as specified */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500 animate-pulse" />
            <h3 className="font-bold text-slate-100 text-sm sm:text-base">Conversation Temperature Matrix</h3>
          </div>
          <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            EXPERIMENTAL METRIC
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Combines emotional intensity, hostility, polarization index, disagreement, and comment velocity across sample threads.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs font-mono">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Emotional Intensity</span>
            <span className="text-rose-400 font-bold text-sm">7.8 / 10</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Hostility Rate</span>
            <span className="text-amber-400 font-bold text-sm">18.4%</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Polarization Index</span>
            <span className="text-rose-400 font-bold text-sm">84 / 100</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Disagreement</span>
            <span className="text-indigo-300 font-bold text-sm">38.2%</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 bg-slate-950 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[10px]">Engagement Velocity</span>
            <span className="text-emerald-400 font-bold text-sm">High</span>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-mono italic pt-1">
          * Experimental product metric — subject to sample size and context validation.
        </div>
      </div>

      {/* Comment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 hover:border-slate-700 transition"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-amber-300 font-semibold">{comment.author}</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800 text-[10px]">
                  {comment.platform}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                  {comment.category}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans italic">
              "{comment.text}"
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3 text-slate-400" />
                <span>Markers: {comment.linguisticMarkers.join(', ')}</span>
              </div>
              <span className="text-rose-400">Intensity: {comment.emotionalIntensity}/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
