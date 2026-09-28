import React from "react";
import { BedDoubleIcon, HomeIcon, LightbulbIcon, ShieldCheckIcon, SofaIcon, ThermometerIcon, ZapIcon, BoxIcon } from "lucide-react";
import { controlNav } from "../../data/control";
import { ControlView } from "../../types/control";
const icons: Record<ControlView, BoxIcon> = {
  home: HomeIcon,
  living: SofaIcon,
  bedroom: BedDoubleIcon,
  security: ShieldCheckIcon,
  climate: ThermometerIcon,
  lighting: LightbulbIcon,
  energy: ZapIcon
};
interface ControlSidebarProps {
  view: ControlView;
  onChange: (view: ControlView) => void;
}
export function ControlSidebar({
  view,
  onChange
}: ControlSidebarProps) {
  return <aside className="flex border-b border-ink/10 bg-sand/40 p-3 lg:flex-col lg:border-b-0 lg:border-r lg:p-6">
      <div className="mb-8 hidden lg:block">
        <p className="font-display text-2xl font-normal">
          AIIVA<span className="text-terracotta">.</span>
        </p>
        <p className="mt-0.5 text-[12px] text-ink/55">The Garden House</p>
      </div>
      <nav aria-label="AIIVA Control sections" className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col">
        {controlNav.map((item) => {
        const Icon = icons[item.id];
        const active = item.id === view;
        return <button key={item.id} type="button" onClick={() => onChange(item.id)} aria-current={active ? 'page' : undefined} className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-[14px] transition-colors duration-150 ${active ? 'bg-cream text-ink shadow-sm' : 'text-ink/60 hover:bg-cream/60 hover:text-ink'}`}>
              <Icon className={`h-4 w-4 ${active ? 'text-terracotta' : ''}`} aria-hidden="true" />
              {item.label}
            </button>;
      })}
      </nav>
      <div className="mt-auto hidden items-center gap-2 pt-8 text-[12px] text-ink/60 lg:flex">
        <span className="h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
        All systems normal
      </div>
    </aside>;
}