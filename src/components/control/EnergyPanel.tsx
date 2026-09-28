import React from 'react';
import { BatteryChargingIcon, LeafIcon } from 'lucide-react';
import { energyBreakdown, energyHours } from '../../data/control';

export function EnergyPanel() {
  const max = Math.max(...energyHours.map((h) => Math.max(h.used, h.solar)));

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
          <div>
            <p className="text-[12px] text-ink/55">Used today</p>
            <p className="font-display text-6xl font-light tracking-[-0.03em]">
              8.4 <span className="text-2xl">kWh</span>
            </p>
          </div>
          <div>
            <p className="text-[12px] text-ink/55">Solar generated</p>
            <p className="font-display text-4xl font-light">11.2 kWh</p>
          </div>
          <p className="flex items-center gap-2 pb-2 text-[13px]">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
            12% less than last Saturday
          </p>
        </div>

        <figure className="mt-8">
          <div className="flex h-44 items-end gap-[3px] md:gap-1.5" role="img" aria-label="Hourly energy use and solar generation today">
            {energyHours.map((h, i) =>
            <div key={i} className="relative flex h-full flex-1 items-end">
                <div className="absolute bottom-0 w-full rounded-t-sm bg-sage/45" style={{ height: `${h.solar / max * 100}%` }} />
                <div className="relative mx-auto w-1/2 rounded-t-sm bg-terracotta" style={{ height: `${h.used / max * 100}%` }} />
              </div>
            )}
          </div>
          <div className="mt-2 flex justify-between text-[11px] tabular-nums text-ink/45">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
          <figcaption className="mt-4 flex gap-5 text-[12px] text-ink/60">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-terracotta" aria-hidden="true" /> Used
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-sm bg-sage/60" aria-hidden="true" /> Solar
            </span>
          </figcaption>
        </figure>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Where it goes</p>
        <ul className="mt-4 space-y-4">
          {energyBreakdown.map((b) =>
          <li key={b.name}>
              <div className="flex justify-between text-[14px]">
                <span>{b.name}</span>
                <span className="tabular-nums text-ink/60">{b.share}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-terracotta" style={{ width: `${b.share}%` }} />
              </div>
            </li>
          )}
        </ul>
        <div className="mt-8 space-y-3 rounded-2xl bg-sand/50 p-5 text-[13px]">
          <p className="flex items-center gap-2">
            <BatteryChargingIcon className="h-4 w-4 text-sage-deep" aria-hidden="true" /> Home battery at 86%
          </p>
          <p className="flex items-start gap-2 text-ink/70">
            <LeafIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" aria-hidden="true" />
            Curtains closing at sunset saved about 40 minutes of heating today.
          </p>
        </div>
      </div>
    </div>);

}