import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
      checked ? 'bg-terracotta' : 'bg-ink/15'}`
      }>
      
      <span
        className={`inline-block h-5 w-5 rounded-full bg-cream shadow-sm transition-transform duration-200 ease-editorial ${
        checked ? 'translate-x-[22px]' : 'translate-x-0.5'}`
        } />
      
    </button>);

}