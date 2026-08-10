import React from 'react';
import { X, ShieldCheck, AlertCircle, Cpu, Eye, GitCommit, Compass, HelpCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 text-slate-200 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Methodological & Ethical Principles</h2>
            <p className="text-xs text-slate-400 font-mono">Narrative Intelligence Prototyping Framework</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200/90 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300 mb-1">PROTOTYPE NOTICE — DEMO DATASET</p>
              <p>
                All analytical outputs in this application are simulated mock datasets designed to evaluate UX, navigation, and narrative intelligence visualization models.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-semibold text-slate-100 text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              Key Operational Guidelines
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-emerald-400 block mb-1">✅ Content-Level Analysis</span>
                <p className="text-xs text-slate-400">
                  Evaluates discourse structures, claims, emotional language, and framing in the analyzed sample text.
                </p>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-rose-400 block mb-1">❌ No Individual Diagnoses</span>
                <p className="text-xs text-slate-400">
                  Never applies psychological, clinical, or political labels directly to individual users or authors.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-semibold text-slate-100 text-sm">Conceptual Separation</h3>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2 items-start p-2 bg-slate-950/40 rounded border border-slate-800">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/30 shrink-0">OBSERVATION</span>
                <span>Directly observed data in the analyzed publication or comment sample.</span>
              </div>
              <div className="flex gap-2 items-start p-2 bg-slate-950/40 rounded border border-slate-800">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-amber-500/10 text-amber-400 rounded border border-amber-500/30 shrink-0">CORRELATION</span>
                <span>Variables and themes that co-occur in the dataset. Does NOT imply causality.</span>
              </div>
              <div className="flex gap-2 items-start p-2 bg-slate-950/40 rounded border border-slate-800">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/30 shrink-0">INTERPRETATION</span>
                <span>Analytical models explaining potential framing mechanics or audience dynamics.</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              Claim Verification Module:
            </span>
            <span className="font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded text-[10px]">
              Not available in prototype
            </span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-medium transition shadow-lg shadow-indigo-950"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
