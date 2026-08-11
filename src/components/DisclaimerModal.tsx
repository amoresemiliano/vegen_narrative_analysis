import React from 'react';
import { X, ShieldCheck, AlertCircle, Cpu, HelpCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F1F2F4] border border-[#CDD0D5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 text-[#292C32] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#626773] hover:text-[#292C32] p-2 rounded-lg bg-white border border-[#CDD0D5] hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-violet-100 text-violet-700 rounded-xl border border-violet-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#292C32]">Principios metodológicos y éticos</h2>
            <p className="text-xs text-[#626773] font-mono">Marco conceptual de Narrative Intelligence</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#292C32] leading-relaxed">
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs text-orange-950 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-orange-900 mb-1">AVISO DE PROTOTIPO — DATOS SIMULADOS</p>
              <p>
                Datos simulados con fines de demostración. Todos los indicadores y resultados en esta aplicación evalúan la navegación y los modelos de visualización analítica.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-[#292C32] text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-600" />
              Lineamientos de interpretación
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg border border-[#CDD0D5]">
                <span className="text-xs font-bold text-emerald-800 block mb-1">✅ Análisis del contenido</span>
                <p className="text-xs text-[#626773]">
                  Estos indicadores describen patrones observados en el contenido analizado.
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#CDD0D5]">
                <span className="text-xs font-bold text-rose-800 block mb-1">❌ Sin diagnósticos individuales</span>
                <p className="text-xs text-[#626773]">
                  No representan diagnósticos psicológicos ni características individuales de autores o usuarios.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-[#292C32] text-sm">Separación conceptual de la evidencia</h3>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2 items-start p-2 bg-white rounded border border-[#CDD0D5]">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-emerald-50 text-emerald-800 font-bold rounded border border-emerald-200 shrink-0">OBSERVACIÓN</span>
                <span>Datos observados directamente en las publicaciones o comentarios analizados.</span>
              </div>
              <div className="flex gap-2 items-start p-2 bg-white rounded border border-[#CDD0D5]">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-orange-50 text-orange-800 font-bold rounded border border-orange-200 shrink-0">CORRELACIÓN</span>
                <span>Variables y temas que coinciden en la muestra. Una relación observada no implica causalidad.</span>
              </div>
              <div className="flex gap-2 items-start p-2 bg-white rounded border border-[#CDD0D5]">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-violet-50 text-violet-800 font-bold rounded border border-violet-200 shrink-0">INTERPRETACIÓN</span>
                <span>Modelos analíticos que explican posibles encuadres y dinámicas de la audiencia.</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#CDD0D5] text-xs text-[#626773] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-[#292C32]">
              <HelpCircle className="w-4 h-4 text-[#626773]" />
              Módulo de verificación de afirmaciones:
            </span>
            <span className="font-mono text-[#626773] bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-300">
              Métrica experimental
            </span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
