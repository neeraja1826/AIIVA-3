import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface ArrowButtonProps {
  href: string;
  children: React.ReactNode;
  tone?: 'ink' | 'cream';
}

export function ArrowButton({ href, children, tone = 'ink' }: ArrowButtonProps) {
  const toneClass =
  tone === 'ink' ? 'bg-ink text-cream hover:bg-burgundy' : 'bg-cream text-ink hover:bg-sand';
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center gap-4 rounded-full py-2 pl-6 pr-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta ${toneClass}`}>
      
      <span className="whitespace-nowrap">{children}</span>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta text-cream">
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-editorial group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </a>);

}