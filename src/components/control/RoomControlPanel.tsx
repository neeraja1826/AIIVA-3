import React, { useState } from "react";
import { AlarmClockIcon, BlindsIcon, LightbulbIcon, MinusIcon, MusicIcon, PauseIcon, PlayIcon, PlusIcon, ThermometerIcon, BoxIcon } from "lucide-react";
import { RangeSlider } from "./RangeSlider";
import { Segmented } from "./Segmented";
import { Toggle } from "./Toggle";
import { roomConfigs } from "../../data/control";
type Tone = 'warm' | 'neutral' | 'daylight';
interface RoomControlPanelProps {
  roomId: 'living' | 'bedroom';
}
export function RoomControlPanel({
  roomId
}: RoomControlPanelProps) {
  const config = roomConfigs[roomId];
  const [light, setLight] = useState(config.light);
  const [tone, setTone] = useState<Tone>('warm');
  const [curtains, setCurtains] = useState(config.curtains);
  const [temp, setTemp] = useState(config.temp);
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(28);
  const [wakeOn, setWakeOn] = useState(true);
  return <div>
      <div className="relative h-44 overflow-hidden rounded-2xl md:h-56">
        <img src={config.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute bottom-5 left-6 text-cream">
          <p className="text-[12px] text-cream/85">{config.occupancy}</p>
          <h3 className="font-display text-4xl font-light">{config.name}</h3>
        </div>
        <div className="absolute bottom-5 right-6 text-right text-cream">
          <p className="font-display text-4xl font-light tabular-nums">{temp.toFixed(1)}°</p>
          <p className="text-[12px] text-cream/85">Target</p>
        </div>
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
        <Group icon={LightbulbIcon} title="Lighting">
          <RangeSlider label="Brightness" value={light} onChange={setLight} />
          <div className="mt-4">
            <Segmented<Tone> label="Colour temperature" value={tone} onChange={setTone} options={[{
            value: 'warm',
            label: 'Warm'
          }, {
            value: 'neutral',
            label: 'Neutral'
          }, {
            value: 'daylight',
            label: 'Daylight'
          }]} />
          </div>
        </Group>

        <Group icon={BlindsIcon} title="Curtains">
          <RangeSlider label="Open" value={curtains} onChange={setCurtains} />
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={() => setCurtains(100)} className="rounded-full border border-ink/15 px-4 py-1.5 text-[12px] font-medium hover:border-ink/40">
              Open
            </button>
            <button type="button" onClick={() => setCurtains(0)} className="rounded-full border border-ink/15 px-4 py-1.5 text-[12px] font-medium hover:border-ink/40">
              Close
            </button>
          </div>
        </Group>

        <Group icon={ThermometerIcon} title="Climate">
          <div className="flex items-center gap-5">
            <button type="button" aria-label="Lower temperature" onClick={() => setTemp((t) => Math.max(16, +(t - 0.5).toFixed(1)))} className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 hover:border-terracotta hover:text-terracotta">
              <MinusIcon className="h-4 w-4" />
            </button>
            <p className="w-28 text-center font-display text-5xl font-light tabular-nums">{temp.toFixed(1)}°</p>
            <button type="button" aria-label="Raise temperature" onClick={() => setTemp((t) => Math.min(28, +(t + 0.5).toFixed(1)))} className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 hover:border-terracotta hover:text-terracotta">
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-[13px] text-ink/55">Currently {(temp - 0.4).toFixed(1)}° · reaching target in ~12 min</p>
        </Group>

        {config.media ? <Group icon={MusicIcon} title="Audio">
            <div className="flex items-center gap-4">
              <button type="button" aria-label={playing ? 'Pause' : 'Play'} onClick={() => setPlaying((p) => !p)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-terracotta text-cream hover:bg-burgundy">
                {playing ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
              </button>
              <div className="min-w-0">
                <p className="truncate text-[15px] font-medium">{config.media.title}</p>
                <p className="text-[13px] text-ink/55">
                  {config.media.artist} · {playing ? 'Playing' : 'Paused'}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <RangeSlider label="Volume" value={volume} onChange={setVolume} />
            </div>
          </Group> : <Group icon={AlarmClockIcon} title="Wake gently">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-5xl font-light tabular-nums">{config.wake}</p>
                <p className="mt-1 text-[13px] text-ink/55">Weekdays · light rises 15 min before</p>
              </div>
              <Toggle checked={wakeOn} onChange={setWakeOn} label="Wake gently" />
            </div>
          </Group>}
      </div>
    </div>;
}
function Group({
  icon: Icon,
  title,
  children




}: {icon: BoxIcon;title: string;children: React.ReactNode;}) {
  return <div className="border-t border-ink/10 pt-5">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55">
        <Icon className="h-4 w-4 text-terracotta" aria-hidden="true" />
        {title}
      </p>
      {children}
    </div>;
}