import React from 'react';
import { X, ShieldCheck, AlertCircle, Cpu, HelpCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
      <div className="bg-white/95 backdrop-blur-xl border border-white/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 text-[#292C32] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#626773] hover:text-[#292C32] p-2 rounded-xl bg-white/90 border border-indigo-100 hover:bg-white transition cursor-pointer shadow-2xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-50 text-[#7257E8] rounded-xl border border-indigo-200/80 shadow-2xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[#292C32]">Principios metodológicos y éticos</h2>
            <p className="text-xs text-[#626773] font-mono font-bold">Marco conceptual de Narrative Intelligence</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#292C32] leading-relaxed">
          <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl text-xs text-amber-950 flex gap-3 items-start shadow-2xs">
            <AlertCircle className="w-5 h-5 text-[#F28C45] shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold text-amber-900 mb-1">AVISO DE PROTOTIPO — DATOS SIMULADOS</p>
              <p className="font-medium">
                Datos simulados con fines de demostración. Todos los indicadores y resultados en esta aplicación evalúan la navegación y los modelos de visualización analítica.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-extrabold text-[#292C32] text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#7257E8]" />
              Lineamientos de interpretación
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="text-xs font-extrabold text-emerald-800 block mb-1">✅ Análisis del contenido</span>
                <p className="text-xs text-[#626773] font-medium">
                  Estos indicadores describen patrones observados en el contenido analizado.
                </p>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="text-xs font-extrabold text-rose-800 block mb-1">❌ Sin diagnósticos individuales</span>
                <p className="text-xs text-[#626773] font-medium">
                  No representan diagnósticos psicológicos ni características individuales de autores o usuarios.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-extrabold text-[#292C32] text-sm">Separación conceptual de la evidencia</h3>
            <div className="space-y-2 text-xs font-medium">
              <div className="flex gap-2 items-start p-2.5 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-emerald-50 text-emerald-800 font-extrabold rounded-md border border-emerald-200 shrink-0">OBSERVACIÓN</span>
                <span>Datos observados directamente en las publicaciones o comentarios analizados.</span>
              </div>
              <div className="flex gap-2 items-start p-2.5 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-orange-50 text-[#F28C45] font-extrabold rounded-md border border-orange-200/80 shrink-0">CORRELACIÓN</span>
                <span>Variables y temas que coinciden en la muestra. Una relación observada no implica causalidad.</span>
              </div>
              <div className="flex gap-2 items-start p-2.5 bg-white/90 rounded-xl border border-indigo-100/80 shadow-2xs">
                <span className="px-2 py-0.5 font-mono text-[10px] bg-indigo-50 text-[#7257E8] font-extrabold rounded-md border border-indigo-200/80 shrink-0">INTERPRETACIÓN</span>
                <span>Modelos analíticos que explican posibles encuadres y dinámicas de la audiencia.</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white/90 rounded-xl border border-indigo-100/80 text-xs text-[#626773] flex items-center justify-between shadow-2xs">
            <span className="flex items-center gap-1.5 font-semibold text-[#292C32]">
              <HelpCircle className="w-4 h-4 text-[#7257E8]" />
              Módulo de verificación de afirmaciones:
            </span>
            <span className="font-mono text-[#7257E8] bg-indigo-50 px-2 py-0.5 rounded-md text-[10px] font-extrabold border border-indigo-200/80">
              Métrica experimental
            </span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gradient-to-r from-[#7257E8] to-[#4C6FFF] hover:opacity-95 text-white rounded-xl text-xs font-extrabold transition shadow-xs cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
