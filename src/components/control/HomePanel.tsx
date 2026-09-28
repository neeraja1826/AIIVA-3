import React, { useState } from "react";
import { ChevronRightIcon, DoorOpenIcon, MoonIcon, SunriseIcon, SunsetIcon, BoxIcon } from "lucide-react";
import { Toggle } from "./Toggle";
import { homeRooms, homeScenes } from "../../data/control";
import { ControlView, SceneId } from "../../types/control";
const sceneIcons: Record<SceneId, BoxIcon> = {
  morning: SunriseIcon,
  away: DoorOpenIcon,
  evening: SunsetIcon,
  sleep: MoonIcon
};
interface HomePanelProps {
  onOpen: (view: ControlView) => void;
}
export function HomePanel({
  onOpen
}: HomePanelProps) {
  const [scene, setScene] = useState<SceneId>('evening');
  const [lights, setLights] = useState<Record<string, boolean>>(Object.fromEntries(homeRooms.map((r) => [r.id, r.on])));
  const current = homeScenes.find((s) => s.id === scene);
  return <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        <p className="text-[13px] text-ink/55">Saturday, 26 September</p>
        <h3 className="mt-1 font-display text-4xl font-light tracking-[-0.02em] md:text-5xl">Good evening, Maya.</h3>
        <p className="mt-2 text-[15px] text-ink/65">{current?.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Scenes">
          {homeScenes.map((s) => {
          const Icon = sceneIcons[s.id];
          const active = s.id === scene;
          return <button key={s.id} type="button" role="radio" aria-checked={active} onClick={() => setScene(s.id)} className={`flex flex-col items-start gap-6 rounded-2xl border p-4 text-left transition-colors duration-200 ${active ? 'border-terracotta bg-terracotta/10' : 'border-ink/10 hover:border-ink/25'}`}>
                <Icon className={`h-5 w-5 ${active ? 'text-terracotta' : 'text-ink/50'}`} aria-hidden="true" />
                <span>
                  <span className="block text-[14px] font-medium">{s.label}</span>
                  <span className="block text-[12px] text-ink/50">{s.time}</span>
                </span>
              </button>;
        })}
        </div>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Rooms</p>
        <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
          {homeRooms.map((r) => <li key={r.id} className="flex items-center gap-4 py-3.5">
              <button type="button" onClick={() => (r.id === 'living' || r.id === 'bedroom') && onOpen(r.id)} className="group flex min-w-0 flex-1 items-center gap-2 text-left">
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium">{r.name}</span>
                  <span className="block truncate text-[13px] text-ink/55">{r.status}</span>
                </span>
                {(r.id === 'living' || r.id === 'bedroom') && <ChevronRightIcon className="h-4 w-4 text-ink/30 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />}
              </button>
              <span className="w-12 text-right text-[14px] tabular-nums text-ink/70">{r.temp}</span>
              <Toggle checked={lights[r.id]} onChange={(v) => setLights((prev) => ({
            ...prev,
            [r.id]: v
          }))} label={`${r.name} lights`} />
            </li>)}
        </ul>
      </div>

      <div className="rounded-2xl bg-sand/50 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">Right now</p>
        <p className="mt-4 font-display text-6xl font-light tracking-[-0.03em]">21.5°</p>
        <p className="text-[13px] text-ink/60">Inside · humidity 46%</p>
        <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-[14px]">
          <div className="flex justify-between">
            <dt className="text-ink/60">Outside</dt>
            <dd>14° · Clear</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/60">Security</dt>
            <dd className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
              Disarmed
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/60">At home</dt>
            <dd>Maya, Jonas</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-ink/60">Solar today</dt>
            <dd>11.2 kWh</dd>
          </div>
        </dl>
      </div>
    </div>;
}