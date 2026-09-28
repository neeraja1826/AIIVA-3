import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  tone?: 'ink' | 'cream';
  className?: string;
}

export function Label({ children, tone = 'ink', className = '' }: LabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] ${
      tone === 'ink' ? 'text-ink/60' : 'text-cream/80'} ${
      className}`}>
      
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </span>);

}