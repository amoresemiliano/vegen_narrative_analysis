import React from 'react';
import { MethodologyType } from '../types';
import { Eye, GitCommit, Compass, AlertTriangle } from 'lucide-react';

interface Props {
  type: MethodologyType;
  size?: 'sm' | 'md';
  className?: string;
}

export const ObservationBadge: React.FC<Props> = ({ type, size = 'sm', className = '' }) => {
  const configs: Record<MethodologyType, { label: string; bg: string; text: string; border: string; icon: React.ReactNode; tooltip: string }> = {
    observation: {
      label: 'OBSERVACIÓN',
      bg: 'bg-emerald-50',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
      icon: <Eye className="w-3 h-3 text-emerald-600" />,
      tooltip: 'Observado directamente en los datos de la muestra'
    },
    correlation: {
      label: 'CORRELACIÓN',
      bg: 'bg-orange-50',
      text: 'text-orange-800',
      border: 'border-orange-200',
      icon: <GitCommit className="w-3 h-3 text-orange-600" />,
      tooltip: 'Variables con comportamiento relacionado en la muestra'
    },
    interpretation: {
      label: 'INTERPRETACIÓN',
      bg: 'bg-violet-50',
      text: 'text-violet-800',
      border: 'border-violet-200',
      icon: <Compass className="w-3 h-3 text-violet-600" />,
      tooltip: 'Marco analítico e interpretación de patrones'
    },
    causality_warning: {
      label: 'CAUSALIDAD NO INFERIDA',
      bg: 'bg-rose-50',
      text: 'text-rose-800',
      border: 'border-rose-200',
      icon: <AlertTriangle className="w-3 h-3 text-rose-600" />,
      tooltip: 'Una relación observada no implica causalidad'
    }
  };

  const config = configs[type];
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      title={config.tooltip}
      className={`inline-flex items-center gap-1 font-mono font-semibold tracking-wider rounded border ${config.bg} ${config.text} ${config.border} ${sizeClasses} ${className}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
