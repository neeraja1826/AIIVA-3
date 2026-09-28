import React, { useState } from 'react';
import { LockIcon, ShieldCheckIcon, ShieldIcon, UnlockIcon } from 'lucide-react';
import { Toggle } from './Toggle';
import { securityCameras, securityEvents, securityLocks } from '../../data/control';

export function SecurityPanel() {
  const [armed, setArmed] = useState(false);
  const [locks, setLocks] = useState(securityLocks);
  const unlocked = locks.filter((l) => !l.locked).length;

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <div className="flex flex-col gap-5 rounded-2xl bg-sand/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className={`grid h-14 w-14 place-items-center rounded-full ${armed ? 'bg-terracotta text-cream' : 'bg-sage/40 text-sage-deep'}`}>
              {armed ? <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" /> : <ShieldIcon className="h-6 w-6" aria-hidden="true" />}
            </span>
            <div>
              <h3 className="font-display text-3xl font-light">{armed ? 'House is armed' : 'House is disarmed'}</h3>
              <p className="text-[13px] text-ink/60">
                {armed ? 'Sensors and cameras are watching.' : '2 people at home'} · {unlocked === 0 ? 'All doors locked' : `${unlocked} door unlocked`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setArmed((a) => !a)}
            className="rounded-full bg-ink px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-200 hover:bg-burgundy">
            
            {armed ? 'Disarm' : 'Arm house'}
          </button>
        </div>

        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Doors & locks</p>
        <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
          {locks.map((l) =>
          <li key={l.id} className="flex items-center gap-4 py-3.5">
              {l.locked ?
            <LockIcon className="h-4 w-4 text-ink/50" aria-hidden="true" /> :

            <UnlockIcon className="h-4 w-4 text-terracotta" aria-hidden="true" />
            }
              <span className="flex-1 text-[15px] font-medium">{l.name}</span>
              <span className="text-[13px] text-ink/55">{l.locked ? 'Locked' : 'Unlocked'}</span>
              <Toggle
              checked={l.locked}
              onChange={(v) => setLocks((prev) => prev.map((x) => x.id === l.id ? { ...x, locked: v } : x))}
              label={`Lock ${l.name}`} />
            
            </li>
          )}
        </ul>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {securityCameras.map((c) =>
          <div key={c.id} className="relative aspect-video overflow-hidden rounded-xl">
              <img src={c.image} alt={`${c.name} camera view`} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 text-[11px] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" /> Live
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium">{c.name}</span>
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Today</p>
        <ol className="mt-4 space-y-4 border-l border-ink/10 pl-5">
          {securityEvents.map((e) =>
          <li key={e.time + e.text} className="relative">
              <span className="absolute -left-[23px] top-1.5 h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
              <p className="text-[12px] tabular-nums text-ink/50">{e.time}</p>
              <p className="text-[14px]">{e.text}</p>
            </li>
          )}
        </ol>
      </div>
    </div>);

}