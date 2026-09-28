import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Segmented } from './Segmented';
import { Toggle } from './Toggle';
import { climateRooms } from '../../data/control';

type Mode = 'heat' | 'cool' | 'auto' | 'off';

const MIN = 16;
const MAX = 28;
const R = 100;
const C = 2 * Math.PI * R;
const ARC = C * 0.75;

export function ClimatePanel() {
  const [target, setTarget] = useState(21.5);
  const [mode, setMode] = useState<Mode>('auto');
  const [setback, setSetback] = useState(true);
  const pct = (target - MIN) / (MAX - MIN);
  const off = mode === 'off';

  return (
    <div className="grid gap-10 xl:grid-cols-[320px_minmax(0,1fr)]">
      <div className="flex flex-col items-center">
        <div className="relative h-60 w-60">
          <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
            <circle
              cx={120}
              cy={120}
              r={R}
              fill="none"
              stroke="#202321"
              strokeOpacity={0.1}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={`${ARC} ${C}`}
              transform="rotate(135 120 120)" />
            
            <circle
              cx={120}
              cy={120}
              r={R}
              fill="none"
              stroke={off ? '#A8B09B' : '#B9684A'}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={`${ARC * pct} ${C}`}
              transform="rotate(135 120 120)"
              style={{ transition: 'stroke-dasharray 200ms cubic-bezier(0.23,1,0.32,1), stroke 200ms ease-out' }} />
            
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center" aria-live="polite">
            <p className="text-[12px] text-ink/55">{off ? 'Climate off' : mode === 'cool' ? 'Cooling to' : 'Heating to'}</p>
            <p className="font-display text-6xl font-light tabular-nums tracking-[-0.03em]">{target.toFixed(1)}°</p>
            <p className="text-[12px] text-ink/55">Now 21.1°</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4">
          <button
            type="button"
            aria-label="Lower target temperature"
            onClick={() => setTarget((t) => Math.max(MIN, +(t - 0.5).toFixed(1)))}
            className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 hover:border-terracotta hover:text-terracotta">
            
            <MinusIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Raise target temperature"
            onClick={() => setTarget((t) => Math.min(MAX, +(t + 0.5).toFixed(1)))}
            className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 hover:border-terracotta hover:text-terracotta">
            
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6">
          <Segmented<Mode>
            label="Climate mode"
            value={mode}
            onChange={setMode}
            options={[
            { value: 'heat', label: 'Heat' },
            { value: 'cool', label: 'Cool' },
            { value: 'auto', label: 'Auto' },
            { value: 'off', label: 'Off' }]
            } />
          
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Rooms</p>
        <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
          {climateRooms.map((r) =>
          <li key={r.name} className="flex items-center justify-between gap-4 py-4">
              <span className="text-[15px] font-medium">{r.name}</span>
              <span className="flex items-center gap-6 text-[14px] tabular-nums text-ink/65">
                <span>{r.humidity}% RH</span>
                <span className="w-14 text-right font-display text-2xl font-light text-ink">{r.temp.toFixed(1)}°</span>
              </span>
            </li>
          )}
        </ul>

        <div className="mt-8 flex items-center justify-between gap-6 rounded-2xl bg-sand/50 p-5">
          <div>
            <p className="text-[15px] font-medium">Night setback</p>
            <p className="text-[13px] text-ink/60">Every night at 22:00, bedrooms cool to 18.5°</p>
          </div>
          <Toggle checked={setback} onChange={setSetback} label="Night setback" />
        </div>
      </div>
    </div>);

}