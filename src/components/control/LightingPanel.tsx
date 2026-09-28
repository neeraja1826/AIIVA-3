import React, { useState } from 'react';
import { RangeSlider } from './RangeSlider';
import { Toggle } from './Toggle';
import { lightScenes, lightZones } from '../../data/control';

export function LightingPanel() {
  const [zones, setZones] = useState(lightZones);
  const [scene, setScene] = useState<string | null>(null);
  const onCount = zones.filter((z) => z.on).length;

  const update = (id: string, patch: Partial<{on: boolean;level: number;}>) => {
    setScene(null);
    setZones((prev) => prev.map((z) => z.id === id ? { ...z, ...patch } : z));
  };

  const applyScene = (id: string) => {
    const s = lightScenes.find((x) => x.id === id);
    if (!s) return;
    setScene(id);
    setZones((prev) =>
    prev.map((z) => {
      const level = s.levels[z.id] ?? z.level;
      return { ...z, on: level > 0, level: level > 0 ? level : z.level };
    })
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-4xl font-light">{onCount} lights on</h3>
          <p className="text-[13px] text-ink/60">Across {zones.length} zones · circadian mode active</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setScene(null);
            setZones((prev) => prev.map((z) => ({ ...z, on: false })));
          }}
          className="self-start rounded-full border border-ink/15 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] hover:border-ink/40 sm:self-auto">
          
          All off
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="radiogroup" aria-label="Lighting scenes">
        {lightScenes.map((s) =>
        <button
          key={s.id}
          type="button"
          role="radio"
          aria-checked={scene === s.id}
          onClick={() => applyScene(s.id)}
          className={`rounded-full border px-4 py-2 text-[13px] transition-colors duration-150 ${
          scene === s.id ? 'border-terracotta bg-terracotta/10 text-ink' : 'border-ink/15 text-ink/70 hover:border-ink/35'}`
          }>
          
            {s.label}
          </button>
        )}
      </div>

      <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
        {zones.map((z) =>
        <li key={z.id} className="border-t border-ink/10 py-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[15px] font-medium">{z.name}</p>
                <p className="text-[13px] tabular-nums text-ink/55">{z.on ? `${z.level}%` : 'Off'}</p>
              </div>
              <Toggle checked={z.on} onChange={(v) => update(z.id, { on: v })} label={`${z.name} lights`} />
            </div>
            <RangeSlider
            label={`${z.name} brightness`}
            value={z.level}
            onChange={(v) => update(z.id, { level: v })}
            disabled={!z.on}
            showHeader={false} />
          
          </li>
        )}
      </ul>
    </div>);

}