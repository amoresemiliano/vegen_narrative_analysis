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
        {/* Soft Background Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] ambient-glow-violet rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-indigo-200/80 text-xs font-mono text-[#7257E8] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#7257E8]" />
            <span className="font-bold">Observatorio de inteligencia de discursos digitales</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7257E8] animate-ping" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#292C32] font-sans leading-tight">
            Comprende las narrativas <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#4C6FFF] via-[#7257E8] to-[#F28C45] bg-clip-text text-transparent">
              que moldean las conversaciones digitales.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-[#626773] max-w-2xl mx-auto font-sans leading-relaxed">
            Investiga cómo se despliegan los temas en redes, analiza afirmaciones dominantes, mide la fricción en las reacciones de la audiencia y mapea conexiones ocultas entre fenómenos digitales.
          </p>

          {/* Large Search Form */}
          <form onSubmit={handleSubmit} className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-lg shadow-indigo-500/5 rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-200/80 p-2 focus-within:border-[#7257E8] focus-within:ring-2 focus-within:ring-indigo-300/40 transition-all">
              <Search className="w-6 h-6 text-[#7257E8] ml-3.5 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="¿Qué quieres comprender? (ej. Terraplanismo)"
                className="w-full bg-transparent px-3 py-3 text-[#292C32] placeholder-[#626773] text-sm sm:text-base focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] hover:from-[#6042E2] hover:to-[#3856EB] text-white font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 shadow-md shadow-indigo-500/20 cursor-pointer"
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
                className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#292C32] hover:text-[#7257E8] border border-indigo-100 hover:border-indigo-300 transition-all flex items-center gap-1.5 group cursor-pointer shadow-2xs hover:shadow-xs"
              >
                <span className="font-semibold">{topic.name}</span>
                <span className="text-[10px] text-[#626773] font-mono group-hover:text-[#7257E8]">({topic.tag})</span>
              </button>
            ))}
          </div>

          {/* Secondary Action & Methodological Note */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#626773]">
            <button
              onClick={() => onSelectView('analyze')}
              className="px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white border border-indigo-200/80 text-[#292C32] font-semibold transition flex items-center gap-2 cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <Cpu className="w-4 h-4 text-[#7257E8]" />
              <span>Analizar una publicación específica manualmente</span>
            </button>

            <button
              onClick={onOpenDisclaimer}
              className="text-[#626773] hover:text-[#7257E8] underline underline-offset-4 flex items-center gap-1 transition cursor-pointer font-semibold"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#7257E8]" />
              <span>Leer marco metodológico y ético</span>
            </button>
          </div>
        </div>
      </section>

      {/* Five Core Analytical Questions Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-indigo-100 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-[#292C32] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#7257E8]" />
                Las 5 preguntas de la Inteligencia Narrativa
              </h2>
              <p className="text-xs text-[#626773] font-medium mt-0.5">
                Marco analítico para desglosar fenómenos digitales evaluando patrones del contenido.
              </p>
            </div>
            <span className="px-3 py-1 bg-indigo-50 text-[#7257E8] text-xs font-mono font-bold rounded-lg border border-indigo-200/80">
              MARCO METODOLÓGICO V1.2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white/90 p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2 shadow-2xs hover:shadow-xs group">
              <span className="text-[10px] font-mono text-[#7257E8] font-extrabold uppercase tracking-widest block">01 / Contenido</span>
              <h3 className="font-bold text-sm text-[#292C32] group-hover:text-[#7257E8] transition-colors">¿Qué se está diciendo?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Afirmaciones clave, entidades, palabras clave y marcadores lingüísticos.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2 shadow-2xs hover:shadow-xs group">
              <span className="text-[10px] font-mono text-[#7257E8] font-extrabold uppercase tracking-widest block">02 / Narrativa</span>
              <h3 className="font-bold text-sm text-[#292C32] group-hover:text-[#7257E8] transition-colors">¿Cómo se construye?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Encuadres principales, desconfianza institucional e intuición empírica.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2 shadow-2xs hover:shadow-xs group">
              <span className="text-[10px] font-mono text-[#F28C45] font-extrabold uppercase tracking-widest block">03 / Reacción</span>
              <h3 className="font-bold text-sm text-[#292C32] group-hover:text-[#F28C45] transition-colors">¿Cómo responde la audiencia?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Acuerdo, rechazo, hostilidad, ridiculización, incertidumbre e indignación.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2 shadow-2xs hover:shadow-xs group">
              <span className="text-[10px] font-mono text-[#4C6FFF] font-extrabold uppercase tracking-widest block">04 / Comunidades</span>
              <h3 className="font-bold text-sm text-[#292C32] group-hover:text-[#4C6FFF] transition-colors">¿Qué patrones emergen?</h3>
              <p className="text-xs text-[#626773] leading-relaxed">
                Rasgos discursivos entre fuentes y agrupaciones geográficas.
              </p>
            </div>

            <div className="bg-white/90 p-4 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-all space-y-2 shadow-2xs hover:shadow-xs group">
              <span className="text-[10px] font-mono text-[#7257E8] font-extrabold uppercase tracking-widest block">05 / Conexiones</span>
              <h3 className="font-bold text-sm text-[#292C32] group-hover:text-[#7257E8] transition-colors">¿Qué temas se vinculan?</h3>
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
              <TrendingUp className="w-5 h-5 text-[#4C6FFF]" />
              Proyectos de investigación simulados recientes
            </h2>
            <p className="text-xs text-[#626773]">Haz clic para explorar muestras precargadas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary Demo Card */}
          <div
            onClick={() => onSearchTopic('Terraplanismo / Tierra Plana')}
            className="group bg-white/90 border border-indigo-200/80 hover:border-[#7257E8] rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-all" />

            <div className="flex justify-between items-start mb-3">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-[#7257E8] border border-indigo-200/80 text-[11px] font-mono font-bold">
                MUESTRA PRINCIPAL
              </span>
              <span className="text-xs font-mono text-[#626773] font-semibold">1.420 Publicaciones</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#292C32] group-hover:text-[#7257E8] transition-colors mb-2">
              Terraplanismo / Tierra Plana
            </h3>

            <p className="text-xs text-[#626773] leading-relaxed mb-4">
              Análisis completo sobre escepticismo empírico, demostraciones con láser, narrativa crítica hacia la NASA y discurso sobre el Tratado Antártico.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#626773] border-t border-indigo-100 pt-3">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-[#292C32]">Alta polarización</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-[#292C32]">4 Narrativas clave</span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-[#292C32]">12 Países</span>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-xs font-extrabold text-[#7257E8] group-hover:translate-x-1 transition-transform">
              <span>Abrir espacio de trabajo</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Secondary Mock Datasets */}
          <div className="space-y-3">
            <div
              onClick={() => onSearchTopic('Desinformación con IA')}
              className="p-4 bg-white/90 border border-indigo-100 hover:border-[#4C6FFF] rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs hover:shadow-xs group"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32] group-hover:text-[#4C6FFF] transition-colors">Desinformación con IA y medios sintéticos</h4>
                <p className="text-xs text-[#626773]">Discursos en torno a contenidos generados por IA en campañas</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773] group-hover:text-[#4C6FFF] group-hover:translate-x-1 transition-all" />
            </div>

            <div
              onClick={() => onSearchTopic('Mundial de Fútbol y Orgullo')}
              className="p-4 bg-white/90 border border-indigo-100 hover:border-[#4C6FFF] rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs hover:shadow-xs group"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32] group-hover:text-[#4C6FFF] transition-colors">Narrativas del Mundial de Fútbol</h4>
                <p className="text-xs text-[#626773]">Euforia colectiva, orgullo e identidad digital</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773] group-hover:text-[#4C6FFF] group-hover:translate-x-1 transition-all" />
            </div>

            <div
              onClick={() => onSearchTopic('Cultura de la Cancelación')}
              className="p-4 bg-white/90 border border-indigo-100 hover:border-[#4C6FFF] rounded-xl transition cursor-pointer flex justify-between items-center shadow-2xs hover:shadow-xs group"
            >
              <div>
                <h4 className="font-bold text-sm text-[#292C32] group-hover:text-[#4C6FFF] transition-colors">Cultura de la cancelación y estigmatización</h4>
                <p className="text-xs text-[#626773]">Escaladas de indignación y dinámicas de rechazo</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#626773] group-hover:text-[#4C6FFF] group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Methodological Principles Footnote */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-4 rounded-xl bg-white/80 border border-indigo-100 text-xs text-[#626773] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong className="text-[#292C32]">Política metodológica:</strong> Describe patrones observados en el contenido analizado. No representa diagnósticos psicológicos ni características individuales.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-[#7257E8] hover:underline font-mono text-[11px] font-bold shrink-0 cursor-pointer"
          >
            Saber más
          </button>
        </div>
      </section>
    </div>
  );
};
