import React, { useState } from 'react';
import { ManualAnalysisResult } from '../../types';
import { ObservationBadge } from '../ObservationBadge';
import { Cpu, Sparkles, FileText, MessageSquare, AlertCircle, RefreshCw, BarChart2, Shield } from 'lucide-react';

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
      'In this field experiment, we shot a 500mW green laser across 28km over Lake Nahuel Huapi. According to globe math (8 inches per mile squared), the target should be hidden behind 45 meters of water curvature. Instead, the sensor recorded the pulse directly. Why does textbook physics ignore atmospheric field observations?'
    );
    setCommentsText(
      'Finally someone does a real experiment instead of trusting NASA artwork!\nLight refraction in cooler air layers near water surface explains this completely.\nThey hide this because curvature math collapses once you measure long lakes.\nWhat laser model did you use? Did you calibrate for elevation at both shores?\nAnother fake video, stop tricking naive viewers.\nI tested this in Lake Titicaca and observed identical non-curvature results.'
    );
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() && !commentsText.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const commentLines = commentsText.split('\n').filter((l) => l.trim().length > 0);

      const mockResult: ManualAnalysisResult = {
        url: url || 'https://example.com/publication_sample',
        source: source || 'Digital Outlets',
        author: author || 'Sample Creator',
        country: country || 'International',
        date: date || '2026-08-05',
        text: text || 'Sample analyzed content',
        commentsAnalyzedCount: commentLines.length > 0 ? commentLines.length : 12,
        contentAnalysis: {
          summary: 'The publication presents an empirical laser field test over long water surfaces to question official terrestrial curvature models.',
          mainTopic: 'Empirical Skepticism & Alternative Geophysics',
          keywords: ['Laser test', 'Curvature math', 'Nahuel Huapi', 'Field experiment', 'Sensory proof', 'Textbook physics'],
          entities: ['NASA', 'Lake Nahuel Huapi', 'Globe Geometry Model'],
          apparentIntent: 'Challenge academic consensus by appealing to direct sensory observation and empirical field tests.',
          targetAudience: 'Individuals harboring institutional skepticism and interest in alternative cosmological theories.',
          tone: 'Inquisitive, Assertive, & Epistemically Self-Reliant',
          emotionalLanguage: 'Language emphasizing empirical awakening vs perceived academic dogmatism.',
          framing: 'Empirical Observation vs. Institutional Authority framing',
          keyClaims: [
            'Target laser remains visible at 28km without predicted 45m drop',
            'Academic physics curricula ignore non-globe laser field results',
            'Direct sensory measurement supersedes theoretical mathematical models'
          ],
          relevantLinguisticPatterns: [
            '"Why does textbook physics ignore..."',
            '"Test it yourself instead of trusting..."',
            '"According to their calculations..."'
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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Manual Publication & Reaction Analyzer</h1>
              <p className="text-xs text-slate-400">Input custom text and comments to simulate deep discourse analysis</p>
            </div>
          </div>

          <button
            onClick={handleLoadPreset}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-mono rounded-lg border border-slate-700 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Load Sample Viral Post</span>
          </button>
        </div>
      </div>

      {/* Form Input */}
      <form onSubmit={handleAnalyze} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-400" />
          Publication Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-slate-400 block mb-1">URL (Simulated Link)</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Source Platform</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            >
              <option value="YouTube">YouTube</option>
              <option value="X (Twitter)">X (Twitter)</option>
              <option value="TikTok">TikTok</option>
              <option value="Reddit">Reddit</option>
              <option value="News Blog">News Blog</option>
              <option value="Telegram">Telegram</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Author / Creator</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. @HorizonteLibre"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. Argentina"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Publication Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Text Areas */}
        <div className="space-y-4">
          <div>
            <label className="text-xs text-slate-400 block mb-1">Publication Text / Transcript</label>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste main article, post text, or transcript..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 block mb-1">Audience Comments (One per line)</label>
            <textarea
              rows={4}
              value={commentsText}
              onChange={(e) => setCommentsText(e.target.value)}
              placeholder="Paste sample comments line by line..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isAnalyzing}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Running Narrative Engine Analysis...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Analyze Publication</span>
            </>
          )}
        </button>
      </form>

      {/* Analysis Output Result */}
      {result && (
        <div className="space-y-8 animate-fade-in pt-4">
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <strong>Ethical Notice:</strong> Evaluates discourse & audience patterns in sample text. Does NOT diagnose individuals.
            </span>
            <ObservationBadge type="interpretation" />
          </div>

          {/* TWO MAIN BLOCKS as required: CONTENT ANALYSIS & AUDIENCE REACTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BLOCK 1: CONTENT ANALYSIS */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-slate-100 text-base">Content Analysis</h3>
                </div>
                <ObservationBadge type="observation" />
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono">Summary</span>
                  <p className="text-slate-200 mt-0.5">{result.contentAnalysis.summary}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block font-mono text-[10px]">Main Topic</span>
                    <span className="font-semibold text-slate-200">{result.contentAnalysis.mainTopic}</span>
                  </div>

                  <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block font-mono text-[10px]">Tone</span>
                    <span className="font-semibold text-amber-300">{result.contentAnalysis.tone}</span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono mb-1">Keywords</span>
                  <div className="flex flex-wrap gap-1.5">
                    {result.contentAnalysis.keywords.map((kw, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono mb-1">Apparent Intent & Framing</span>
                  <p className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-300">
                    {result.contentAnalysis.apparentIntent}
                  </p>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono mb-1">Key Observable Claims</span>
                  <div className="space-y-1.5">
                    {result.contentAnalysis.keyClaims.map((claim, idx) => (
                      <div key={idx} className="p-2 bg-slate-950 rounded border border-slate-800/80 text-slate-300">
                        • {claim}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: AUDIENCE REACTION */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-bold text-slate-100 text-base">Audience Reaction ({result.commentsAnalyzedCount} Comments)</h3>
                </div>
                <ObservationBadge type="correlation" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-mono text-[10px] block">Agreement vs Disagreement</span>
                  <div className="flex justify-between font-mono font-bold">
                    <span className="text-emerald-400">{result.audienceReaction.agreement}% Agree</span>
                    <span className="text-rose-400">{result.audienceReaction.disagreement}% Disagree</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-mono text-[10px] block">Distrust Level</span>
                  <span className="text-amber-400 font-mono font-bold text-base block">{result.audienceReaction.distrust}%</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <span className="text-slate-400 font-mono block">Reaction Category Breakdown</span>

                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Validation:</span>
                    <span className="font-bold text-amber-300">{result.audienceReaction.validation}%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Rejection:</span>
                    <span className="font-bold text-rose-400">{result.audienceReaction.rejection}%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Hostility:</span>
                    <span className="font-bold text-rose-500">{result.audienceReaction.hostility}%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Ridicule:</span>
                    <span className="font-bold text-indigo-400">{result.audienceReaction.ridicule}%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Uncertainty:</span>
                    <span className="font-bold text-cyan-400">{result.audienceReaction.uncertainty}%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <span className="text-slate-300">Questions:</span>
                    <span className="font-bold text-slate-300">{result.audienceReaction.questions}%</span>
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
