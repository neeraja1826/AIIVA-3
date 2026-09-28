import React from 'react';

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  disabled?: boolean;
  showHeader?: boolean;
}

export function RangeSlider({
  value,
  onChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  unit = '%',
  disabled = false,
  showHeader = true
}: RangeSliderProps) {
  const pct = (value - min) / (max - min) * 100;

  return (
    <div className={disabled ? 'opacity-40' : ''}>
      {showHeader &&
      <div className="flex items-center justify-between text-[13px]">
          <span className="text-ink/70">{label}</span>
          <span className="font-medium tabular-nums text-ink">
            {value}
            {unit}
          </span>
        </div>
      }
      <div className="relative mt-2 flex h-7 items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-ink/10" />
        <div className="absolute left-0 h-1.5 rounded-full bg-terracotta" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          aria-label={label}
          onChange={(e) => onChange(Number(e.target.value))}
          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed" />
        
        <div
          className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 rounded-full border-2 border-terracotta bg-cream shadow-sm peer-focus-visible:ring-4 peer-focus-visible:ring-terracotta/25"
          style={{ left: `${pct}%` }} />
        
      </div>
    </div>);

}