import React from 'react';
import { RevealImage } from '../RevealImage';
import { dayMoments } from '../../data/dayMoments';

export function JourneyStack() {
  return (
    <ol className="relative mx-5 border-l border-ink/15 pb-24 md:mx-10">
      {dayMoments.map((m) =>
      <li key={m.time} className="relative pb-16 pl-6 last:pb-0 md:pl-10">
          <span className="absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full bg-terracotta" aria-hidden="true" />
          <div className="flex items-baseline gap-4">
            <p className="font-display text-6xl font-light leading-none tracking-[-0.03em] tabular-nums">{m.time}</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-terracotta">{m.label}</p>
          </div>
          <RevealImage src={m.image} alt={m.alt} className="mt-6 aspect-[4/5] md:aspect-[16/10]" parallax />
          <h3 className="mt-6 font-display text-2xl font-light">{m.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{m.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {m.automations.map((a) =>
          <li key={a.name} className="flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 text-[12px] text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                <span className="font-semibold text-ink">{a.name}</span> {a.state}
              </li>
          )}
          </ul>
        </li>
      )}
    </ol>);

}