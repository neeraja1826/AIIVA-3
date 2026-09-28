import React from 'react';

interface SegmentedProps<T extends string> {
  options: {value: T;label: string;}[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}

export function Segmented<T extends string>({ options, value, onChange, label }: SegmentedProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-full bg-ink/[0.06] p-1">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.value)}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-150 ${
            active ? 'bg-cream text-ink shadow-sm' : 'text-ink/60 hover:text-ink'}`
            }>
            
            {o.label}
          </button>);

      })}
    </div>);

}