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
      label: 'OBSERVATION',
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-500/30',
      icon: <Eye className="w-3 h-3" />,
      tooltip: 'Directly observed in sample data'
    },
    correlation: {
      label: 'CORRELATION',
      bg: 'bg-amber-500/10 dark:bg-amber-500/20',
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-500/30',
      icon: <GitCommit className="w-3 h-3" />,
      tooltip: 'Variables that appear related in sample'
    },
    interpretation: {
      label: 'INTERPRETATION',
      bg: 'bg-indigo-500/10 dark:bg-indigo-500/20',
      text: 'text-indigo-700 dark:text-indigo-300',
      border: 'border-indigo-500/30',
      icon: <Compass className="w-3 h-3" />,
      tooltip: 'Analytical framework / potential model'
    },
    causality_warning: {
      label: 'CAUSALITY NOT INFERRED',
      bg: 'bg-rose-500/10 dark:bg-rose-500/20',
      text: 'text-rose-700 dark:text-rose-300',
      border: 'border-rose-500/30',
      icon: <AlertTriangle className="w-3 h-3" />,
      tooltip: 'Correlation does not imply direct causation'
    }
  };

  const config = configs[type];
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      title={config.tooltip}
      className={`inline-flex items-center gap-1 font-mono font-medium tracking-wider rounded border ${config.bg} ${config.text} ${config.border} ${sizeClasses} ${className}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
