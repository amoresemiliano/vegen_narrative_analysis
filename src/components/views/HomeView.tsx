import React, { useState } from 'react';
import { SAMPLE_SEARCH_TOPICS } from '../../data/mockData';
import { Search, Sparkles, Cpu, ArrowRight, Activity, TrendingUp, Shield, HelpCircle } from 'lucide-react';
import { ViewMode } from '../../types';

interface Props {
  onSearchTopic: (query: string) => void;
  onSelectView: (view: ViewMode) => void;
  onOpenDisclaimer: () => void;
}

export const HomeView: React.FC<Props> = ({ onSearchTopic, onSelectView, onOpenDisclaimer }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchTopic(searchInput.trim());
    } else {
      onSearchTopic('Terraplanismo / Tierra Plana');
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-10 sm:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CDD0D5] text-xs font-mono text-violet-800 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span className="font-semibold">Inteligencia de discursos digitales y fenómenos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-ping" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#292C32] font-sans leading-tight">
            Comprende las narrativas <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-700 via-violet-700 to-orange-600 bg-clip-text text-transparent">
              que moldean las conversaciones digitales.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-[#626773] max-w-2xl mx-auto font-sans leading-relaxed">
            Investiga cómo se despliegan los temas en redes, analiza afirmaciones dominantes, mide la fricción en las reacciones de la audiencia y mapea conexiones ocultas entre fenómenos digitales.
          </p>

          {/* Large Search Form */}
          <form onSubmit={handleSubmit} className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-md rounded-2xl bg-white border border-[#CDD0D5] p-1.5 focus-within:border-blue-600 transition-all">
              <Search className="w-6 h-6 text-[#626773] ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="¿Qué quieres comprender? (ej. Terraplanismo)"
                className="w-full bg-transparent px-3 py-3 text-[#292C32] placeholder-[#626773] text-sm sm:text-base focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shrink-0 shadow-sm cursor-pointer"
              >
                <span>Explorar tema</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Suggested Topic Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[#626773] font-mono text-[11px] font-semibold mr-1">Temas sugeridos:</span>
            {SAMPLE_SEARCH_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onSearchTopic(topic.name)}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#292C32] hover:text-blue-700 border border-[#CDD0D5] transition flex items-center gap-1.5 group cursor-pointer shadow-2xs"
              >
                <span className="font-medium">{topic.name}</span>
                <span className="text-[10px] text-[#626773] font-mono group-hover:text-blue-600">({topic.tag})</span>
              </button>
            ))}
          </div>

          {/* Secondary Action & Methodological Note */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#626773]">
            <button
              onClick={() => onSelectView('analyze')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-[#CDD0D5] text-[#292C32] font-semibold transition flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <Cpu className="w-4 h-4 text-violet-600" />
              <span>Analizar una publicación específica manualmente</span>
            </button>

            <button
              onClick={onOpenDisclaimer}
              className="text-[#626773] hover:text-blue-700 underline underline-offset-4 flex items-center gap-1 transition cursor-pointer font-medium"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Leer marco metodológico y ético</span>
            </button>
          </div>
        </div>
      </section>

      {/* Five Core Analytical Questions Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#CDD0D5] pb-4">
            <div>
              <h2 className="text-lg font-bold text-[#292C32] flex items-center gap-2">
                <Activity className="w-5 h-5 text-violet-600" />
                Las 5 preguntas de la Inteligencia Narrativa
              </h2>
              <p className="text-xs text-[#626773]">
                Marco analítico para desglosar fenómenos digitales evaluando patrones del contenido.
              </p>
            </div>
            <span className="px-3 py-1 bg-white text-violet-800 text-xs font-mono font-bold rounded-lg border border-[#CDD0D5]">
              MARCO METODOLÓGICO V1.2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#CDD0D5] space-y-2">
              <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block">01 / Contenido</span>
              <h3 className="font-bold text-sm text-[#292C32]">¿Qué se está diciendo?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Afirmaciones clave, entidades, palabras clave y marcadores lingüísticos.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#CDD0D5] space-y-2">
              <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block">02 / Narrativa</span>
              <h3 className="font-bold text-sm text-[#292C32]">¿Cómo se construye?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Encuadres principales, desconfianza institucional e intuición empírica.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#CDD0D5] space-y-2">
              <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block">03 / Reacción</span>
              <h3 className="font-bold text-sm text-[#292C32]">¿Cómo responde la audiencia?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Acuerdo, rechazo, hostilidad, ridiculización, incertidumbre e indignación.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#CDD0D5] space-y-2">
              <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block">04 / Comunidades</span>
              <h3 className="font-bold text-sm text-[#292C32]">¿Qué patrones emergen?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Rasgos discursivos entre fuentes y agrupaciones geográficas.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#CDD0D5] space-y-2">
              <span className="text-[10px] font-mono text-violet-700 font-bold uppercase tracking-widest block">05 / Conexiones</span>
              <h3 className="font-bold text-sm text-[#292C32]">¿Qué temas se vinculan?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Vocabulario compartido y superposición con otros temas digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Demo Launcher */}
      <section className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#292C32] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Proyectos de investigación simulados recientes
            </h2>
            <p className="text-xs text-[#626773]">Haz clic para explorar muestras precargadas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Demo Card */}
          <div
            onClick={() => onSearchTopic('Terraplanismo / Tierra Plana')}
            className="group bg-white border border-[#CDD0D5] hover:border-violet-500 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="px-2.5 py-1 rounded bg-violet-50 text-violet-800 border border-violet-200 text-[11px] font-mono font-bold">
                MUESTRA PRINCIPAL
              </span>
              <span className="text-xs font-mono text-[#626773]">1.420 Publicaciones</span>
            </div>

            <h3 className="text-xl font-bold text-[#292C32] group-hover:text-violet-700 transition-colors mb-2">
              Terraplanismo / Tierra Plana
            </h3>

            <p className="text-xs text-[#626773] leading-relaxed mb-4">
              Análisis completo sobre escepticismo empírico, demostraciones con láser, narrativa crítica hacia la NASA y discurso sobre el Tratado Antártico.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#626773] border-t border-[#CDD0D5] pt-3">
              <span className="bg-[#F1F2F4] px-2 py-0.5 rounded font-semibold text-[#292C32]">Alta polarización</span>
              <span className="bg-[#F1F2F4] px-2 py-0.5 rounded font-semibold text-[#292C32]">4 Narrativas clave</span>
              <span className="bg-[#F1F2F4] px-2 py-0.5 rounded font-semibold text-[#292C32]">12 Países</span>
            </div>

            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
              <span>Abrir espacio de trabajo</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Secondary Mock Datasets */}
          <div className="space-y-3">
            <div
              onClick={() => onSearchTopic('Desinformación con IA')}
              className="p-4 bg-white border border-[#CDD0D5] hover:border-blue-400 rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32]">Desinformación con IA y medios sintéticos</h4>
                <p className="text-xs text-[#626773]">Discursos en torno a contenidos generados por IA en campañas</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773]" />
            </div>

            <div
              onClick={() => onSearchTopic('Mundial de Fútbol y Orgullo')}
              className="p-4 bg-white border border-[#CDD0D5] hover:border-blue-400 rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32]">Narrativas del Mundial de Fútbol</h4>
                <p className="text-xs text-[#626773]">Euforia colectiva, orgullo e identidad digital</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773]" />
            </div>

            <div
              onClick={() => onSearchTopic('Cultura de la Cancelación')}
              className="p-4 bg-white border border-[#CDD0D5] hover:border-blue-400 rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32]">Cultura de la cancelación y estigmatización</h4>
                <p className="text-xs text-[#626773]">Escaladas de indignación y dinámicas de rechazo</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773]" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Methodological Principles Footnote */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-4 rounded-xl bg-white border border-[#CDD0D5] text-xs text-[#626773] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong className="text-[#292C32]">Política metodológica:</strong> Describe patrones observados en el contenido analizado. No representa diagnósticos psicológicos ni características individuales.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-blue-700 hover:underline font-mono text-[11px] font-bold shrink-0 cursor-pointer"
          >
            Saber más
          </button>
        </div>
      </section>
    </div>
  );
};
