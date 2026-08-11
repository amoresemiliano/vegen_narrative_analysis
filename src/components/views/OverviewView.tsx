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
        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-[#F28C45]" />
              <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base">Palabras clave y terminología dominante</h3>
            </div>
            <ObservationBadge type="observation" />
          </div>

          <div className="flex flex-wrap gap-2">
            {topic.keywords.map((kw, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-xl border border-indigo-100 text-xs font-mono shadow-2xs hover:border-indigo-300 transition-all cursor-default"
              >
                <span className="text-[#292C32] font-semibold">{kw.word}</span>
                <span className="text-[10px] text-[#7257E8] font-extrabold">({kw.count.toLocaleString()})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Entities */}
        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7257E8]" />
              <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base">Entidades mencionadas principales</h3>
            </div>
            <ObservationBadge type="observation" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {topic.entities.map((ent, i) => (
              <div
                key={i}
                className="p-3 bg-white/90 rounded-xl border border-indigo-100 flex items-center justify-between shadow-2xs hover:border-indigo-300 transition-all"
              >
                <div>
                  <span className="text-xs font-bold text-[#292C32] block">{ent.name}</span>
                  <span className="text-[10px] font-mono text-[#7257E8] font-bold">{ent.type}</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#626773]">{ent.mentions} menciones</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Dominant Emotions & Sentiment Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dominant Emotions */}
        <div className="md:col-span-2 bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-500" />
              <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base">Espectro emocional dominante en la muestra</h3>
            </div>
            <ObservationBadge type="interpretation" />
          </div>

          <div className="space-y-3 pt-1">
            {topic.emotions.map((emo, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-[#292C32] font-bold">{emo.emotion}</span>
                  <span className="font-mono font-bold text-[#626773]">{emo.percentage}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200/80 rounded-full overflow-hidden border border-slate-300/60 p-0.5">
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
        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#F28C45]" />
              <h3 className="font-extrabold text-[#292C32] text-sm">Postura general</h3>
            </div>

            <div className="p-4 bg-white/90 rounded-xl border border-indigo-100/80 space-y-3 shadow-2xs">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-rose-600 font-bold">Negativo / Crítico</span>
                <span className="font-bold text-rose-600">{topic.sentimentBreakdown.negative}%</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#626773] font-bold">Neutral / Informativo</span>
                <span className="font-bold text-[#292C32]">{topic.sentimentBreakdown.neutral}%</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-emerald-600 font-bold">Positivo / Validador</span>
                <span className="font-bold text-emerald-600">{topic.sentimentBreakdown.positive}%</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-indigo-100 text-xs text-[#626773]">
            <button
              onClick={() => onNavigateTab('reactions')}
              className="w-full py-2.5 bg-white hover:bg-slate-50 text-[#7257E8] border border-indigo-200/80 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explorar categorías de reacción detalladas</span>
              <Layers className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Simulated Time Series Volume Chart */}
      <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#4C6FFF]" />
            <div>
              <h3 className="font-extrabold text-[#292C32] text-sm sm:text-base">Volumen temporal y polarización observados</h3>
              <p className="text-xs text-[#626773] font-medium">Frecuencia mensual de publicaciones en la muestra analizada</p>
            </div>
          </div>
          <ObservationBadge type="correlation" />
        </div>

        <div className="h-64 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={topic.temporalData}>
              <defs>
                <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7257E8" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#4C6FFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#626773" tick={{ fill: '#292C32', fontSize: 11 }} />
              <YAxis stroke="#626773" tick={{ fill: '#292C32', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cdd0d5', borderRadius: '12px', color: '#292c32', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
              />
              <Area type="monotone" dataKey="volume" stroke="#7257E8" strokeWidth={2.5} fillOpacity={1} fill="url(#volumeGrad)" name="Publicaciones mensuales" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
