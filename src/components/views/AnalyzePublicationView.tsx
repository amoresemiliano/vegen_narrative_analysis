import React, { useState } from 'react';
import { ManualAnalysisResult } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Cpu, Sparkles, FileText, MessageSquare, RefreshCw, Shield } from 'lucide-react';

export const AnalyzePublicationView: React.FC = () => {
  const [url, setUrl] = useState('');
  const [source, setSource] = useState('YouTube');
  const [author, setAuthor] = useState('');
  const [country, setCountry] = useState('Argentina');
  const [date, setDate] = useState('2026-08-05');
  const [text, setText] = useState('');
  const [commentsText, setCommentsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ManualAnalysisResult | null>(null);

  const handleLoadPreset = () => {
    setUrl('https://youtube.com/watch?v=sample_viral_laser_test');
    setSource('YouTube');
    setAuthor('Investigador_Independiente_AR');
    setCountry('Argentina');
    setDate('2026-08-04');
    setText(
      'En este experimento de campo, dispararemos un láser verde de 500mW a lo largo de 28 km sobre el lago Nahuel Huapi. Según los cálculos de la curvatura terrestre oficial (8 pulgadas por milla al cuadrado), el objetivo debería quedar oculto tras 45 metros de curvatura de agua. Sin embargo, el sensor registró el pulso directamente. ¿Por qué la física convencional ignora las observaciones empíricas en terreno?'
    );
    setCommentsText(
      '¡Al fin alguien realiza un experimento real en lugar de confiar en renders de la NASA!\nLa refracción de la luz en capas de aire frío sobre la superficie del agua explica esto totalmente.\nOcultan esto porque las matemáticas de la curvatura colapsan al medir lagos extensos.\n¿Qué modelo de láser utilizaste? ¿Calibraste la elevación en ambas orillas?\nOtro video engañoso, dejen de confundir a la gente.\nProbé esto en el lago Titicaca y observé resultados idénticos sin curvatura detectable.'
    );
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !commentsText.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const commentLines = commentsText.split('\n').filter((l) => l.trim().length > 0);

      const mockResult: ManualAnalysisResult = {
        url: url || 'https://ejemplo.com/muestra_publicacion',
        source: source || 'Medios digitales',
        author: author || 'Creador de muestra',
        country: country || 'Internacional',
        date: date || '2026-08-05',
        text: text || 'Contenido analizado de muestra',
        commentsAnalyzedCount: commentLines.length > 0 ? commentLines.length : 12,
        contentAnalysis: {
          summary: 'La publicación presenta una prueba láser de campo sobre superficies de agua extensas para cuestionar modelos convencionales de curvatura terrestre.',
          mainTopic: 'Escepticismo empírico y geofísica alternativa',
          keywords: ['Prueba láser', 'Cálculo de curvatura', 'Nahuel Huapi', 'Experimento de campo', 'Evidencia sensorial', 'Física académica'],
          entities: ['NASA', 'Lago Nahuel Huapi', 'Modelo geométrico del globo'],
          apparentIntent: 'Cuestionar el consenso académico apelando a la observación sensorial directa y pruebas empíricas de campo.',
          targetAudience: 'Personas con escepticismo institucional y preferencia por explicaciones alternativas.',
          tone: 'Inquisitivo, asertivo y de auto-confianza epistémica',
          emotionalLanguage: 'Lenguaje que enfatiza la revelación empírica frente al dogmatismo percibido.',
          framing: 'Encuadre de Observación Empírica vs. Autoridad Institucional',
          keyClaims: [
            'El láser sigue siendo visible a 28 km sin la caída prevista de 45 m',
            'La física académica ignora los experimentos láser en superficies acuáticas',
            'La medición directa prevalece sobre los modelos teóricos'
          ],
          relevantLinguisticPatterns: [
            '"¿Por qué la física convencional ignora..."',
            '"Compruébalo tú mismo en lugar de confiar..."',
            '"Según sus propios cálculos..."'
          ]
        },
        audienceReaction: {
          agreement: 48,
          disagreement: 32,
          validation: 42,
          rejection: 28,
          support: 45,
          ridicule: 18,
          hostility: 14,
          indignation: 22,
          distrust: 68,
          uncertainty: 25,
          questions: 38,
          polarizationScore: 78,
          emotionalIntensityScore: 72
        }
      };

      setResult(mockResult);
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-3 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-violet-100 text-violet-700 rounded-lg border border-violet-200">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#292C32]">Analizador manual de publicaciones y reacciones</h1>
              <p className="text-xs text-[#626773]">Ingresa texto y comentarios personalizados para simular el análisis del discurso</p>
            </div>
          </div>

          <button
            onClick={handleLoadPreset}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-violet-800 text-xs font-mono font-bold rounded-lg border border-[#CDD0D5] transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Cargar publicación viral de ejemplo</span>
          </button>
        </div>
      </div>

      {/* Form Input */}
      <form onSubmit={handleAnalyze} className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-6 shadow-2xs">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#292C32] font-mono flex items-center gap-2">
          <FileText className="w-4 h-4 text-orange-600" />
          Detalles de la publicación
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">URL (Enlace simulado)</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full bg-white border border-[#CDD0D5] rounded-lg px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">Plataforma de origen</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-white border border-[#CDD0D5] rounded-lg px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-blue-600 font-medium"
            >
              <option value="YouTube">YouTube</option>
              <option value="X (Twitter)">X (Twitter)</option>
              <option value="TikTok">TikTok</option>
              <option value="Reddit">Reddit</option>
              <option value="Medio digital">Medio digital</option>
              <option value="Telegram">Telegram</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">Autor / Creador</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="ej. @HorizonteLibre"
              className="w-full bg-white border border-[#CDD0D5] rounded-lg px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">País</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="ej. Argentina"
              className="w-full bg-white border border-[#CDD0D5] rounded-lg px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">Fecha de publicación</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white border border-[#CDD0D5] rounded-lg px-3 py-2 text-xs text-[#292C32] focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Text Areas */}
        <div className="space-y-4">
          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">Texto / Transcripción de la publicación</label>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Pega el texto del artículo, publicación o transcripción..."
              className="w-full bg-white border border-[#CDD0D5] rounded-lg p-3 text-xs text-[#292C32] placeholder-[#626773] focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="text-xs text-[#626773] block mb-1 font-semibold">Comentarios de la audiencia (Uno por línea)</label>
            <textarea
              rows={4}
              value={commentsText}
              onChange={(e) => setCommentsText(e.target.value)}
              placeholder="Pega comentarios de muestra línea por línea..."
              className="w-full bg-white border border-[#CDD0D5] rounded-lg p-3 text-xs text-[#292C32] placeholder-[#626773] focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isAnalyzing}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Ejecutando análisis del motor de narrativas...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Analizar publicación</span>
            </>
          )}
        </button>
      </form>

      {/* Analysis Output Result */}
      {result && (
        <div className="space-y-8 animate-fade-in pt-4">
          <div className="p-4 bg-white border border-[#CDD0D5] rounded-xl text-xs text-[#626773] flex items-center justify-between shadow-2xs">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong className="text-[#292C32]">Aviso ético:</strong> Evalúa patrones en el texto y comentarios de la muestra. No realiza diagnósticos individuales.</span>
            </span>
            <ObservationBadge type="interpretation" />
          </div>

          {/* TWO MAIN BLOCKS as required: CONTENT ANALYSIS & AUDIENCE REACTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BLOCK 1: CONTENT ANALYSIS */}
            <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#CDD0D5] pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" />
                  <h3 className="font-bold text-[#292C32] text-base">Análisis del contenido</h3>
                </div>
                <ObservationBadge type="observation" />
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#626773] block font-mono font-bold">Resumen</span>
                  <p className="text-[#292C32] mt-0.5">{result.contentAnalysis.summary}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-white rounded-lg border border-[#CDD0D5] shadow-2xs">
                    <span className="text-[#626773] block font-mono text-[10px] font-semibold">Tema principal</span>
                    <span className="font-bold text-[#292C32]">{result.contentAnalysis.mainTopic}</span>
                  </div>

                  <div className="p-2.5 bg-white rounded-lg border border-[#CDD0D5] shadow-2xs">
                    <span className="text-[#626773] block font-mono text-[10px] font-semibold">Tono</span>
                    <span className="font-bold text-violet-800">{result.contentAnalysis.tone}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#626773] block font-mono font-bold mb-1">Palabras clave</span>
                  <div className="flex flex-wrap gap-1.5">
                    {result.contentAnalysis.keywords.map((kw, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white border border-[#CDD0D5] font-mono text-[11px] text-[#292C32] font-semibold">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[#626773] block font-mono font-bold mb-1">Intención aparente y encuadre</span>
                  <p className="p-2.5 bg-white rounded-lg border border-[#CDD0D5] text-[#292C32] shadow-2xs">
                    {result.contentAnalysis.apparentIntent}
                  </p>
                </div>

                <div>
                  <span className="text-[#626773] block font-mono font-bold mb-1">Afirmaciones observables clave</span>
                  <div className="space-y-1.5">
                    {result.contentAnalysis.keyClaims.map((claim, idx) => (
                      <div key={idx} className="p-2 bg-white rounded border border-[#CDD0D5] text-[#292C32] shadow-2xs">
                        • {claim}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: AUDIENCE REACTION */}
            <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl p-6 space-y-5 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#CDD0D5] pb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-violet-600" />
                  <h3 className="font-bold text-[#292C32] text-base">Reacciones de la audiencia ({result.commentsAnalyzedCount} Comentarios)</h3>
                </div>
                <ObservationBadge type="correlation" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-[#CDD0D5] space-y-1 shadow-2xs">
                  <span className="text-[#626773] font-mono text-[10px] block font-semibold">Acuerdo vs Desacuerdo</span>
                  <div className="flex justify-between font-mono font-bold">
                    <span className="text-emerald-700">{result.audienceReaction.agreement}% Acuerdo</span>
                    <span className="text-rose-700">{result.audienceReaction.disagreement}% Desacuerdo</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#CDD0D5] space-y-1 shadow-2xs">
                  <span className="text-[#626773] font-mono text-[10px] block font-semibold">Nivel de desconfianza</span>
                  <span className="text-orange-700 font-mono font-bold text-base block">{result.audienceReaction.distrust}%</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <span className="text-[#626773] font-mono block font-bold">Desglose por categoría de reacción</span>

                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Validación:</span>
                    <span className="font-bold text-violet-800">{result.audienceReaction.validation}%</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Rechazo:</span>
                    <span className="font-bold text-rose-700">{result.audienceReaction.rejection}%</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Hostilidad:</span>
                    <span className="font-bold text-rose-800">{result.audienceReaction.hostility}%</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Ridiculización:</span>
                    <span className="font-bold text-violet-700">{result.audienceReaction.ridicule}%</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Incertidumbre:</span>
                    <span className="font-bold text-blue-700">{result.audienceReaction.uncertainty}%</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#CDD0D5] flex justify-between shadow-2xs">
                    <span className="text-[#626773]">Preguntas:</span>
                    <span className="font-bold text-[#292C32]">{result.audienceReaction.questions}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
