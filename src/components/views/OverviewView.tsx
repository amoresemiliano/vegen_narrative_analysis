import React from 'react';
import { TopicResearch } from '../../types';
import { TemperatureGauge } from '../TemperatureGauge';
import { ObservationBadge } from '../ObservationBadge';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Hash, Users, HeartHandshake, TrendingUp, Sparkles, Layers } from 'lucide-react';

interface Props {
  topic: TopicResearch;
  onNavigateTab: (tab: any) => void;
}

export const OverviewView: React.FC<Props> = ({ topic, onNavigateTab }) => {
  return (
    <div className="space-y-6">
      {/* Temperature Gauge */}
      <TemperatureGauge temperature={topic.temperature} />

      {/* Grid: Keywords & Entities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Keywords */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-slate-100 text-sm sm:text-base">Dominant Keywords & Terminology</h3>
            </div>
            <ObservationBadge type="observation" />
          </div>

          <div className="flex flex-wrap gap-2">
            {topic.keywords.map((kw, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono"
              >
                <span className="text-slate-200 font-semibold">{kw.word}</span>
                <span className="text-[10px] text-slate-400 font-bold">({kw.count.toLocaleString()})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Entities */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-slate-100 text-sm sm:text-base">Key Mentioned Entities</h3>
            </div>
            <ObservationBadge type="observation" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topic.entities.map((ent, i) => (
              <div
                key={i}
                className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">{ent.name}</span>
                  <span className="text-[10px] font-mono text-indigo-400">{ent.type}</span>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">{ent.mentions} mentions</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Dominant Emotions & Sentiment Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dominant Emotions */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-400" />
              <h3 className="font-bold text-slate-100 text-sm sm:text-base">Dominant Emotional Spectrum in Sample</h3>
            </div>
            <ObservationBadge type="interpretation" />
          </div>

          <div className="space-y-3">
            {topic.emotions.map((emo, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-slate-200 font-medium">{emo.emotion}</span>
                  <span className="font-mono font-bold text-slate-300">{emo.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${emo.percentage}%`, backgroundColor: emo.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment & Stance Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-slate-100 text-sm">General Stance</h3>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-rose-400 font-semibold">Negative / Critical</span>
                <span className="font-bold text-rose-400">{topic.sentimentBreakdown.negative}%</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">Neutral / Informational</span>
                <span className="font-bold text-slate-300">{topic.sentimentBreakdown.neutral}%</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-emerald-400 font-semibold">Positive / Validating</span>
                <span className="font-bold text-emerald-400">{topic.sentimentBreakdown.positive}%</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-xs text-slate-400">
            <button
              onClick={() => onNavigateTab('reactions')}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-xs font-medium transition flex items-center justify-center gap-2"
            >
              <span>Explore Detailed Reaction Categories</span>
              <Layers className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Time Series Volume Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-slate-100 text-sm sm:text-base">Simulated Temporal Volume & Polarization</h3>
              <p className="text-xs text-slate-400">Monthly publication frequency alongside polarization index</p>
            </div>
          </div>
          <ObservationBadge type="correlation" />
        </div>

        <div className="h-64 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={topic.temporalData}>
              <defs>
                <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="date" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#f8fafc', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="volume" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#volumeGrad)" name="Monthly Posts" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
