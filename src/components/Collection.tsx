import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { RevealImage } from './RevealImage';
import { ArrowButton } from './ArrowButton';
import { collection } from '../data/collection';

const layout: Record<string, {wrap: string;aspect: string;title: string;}> = {
  light: { wrap: 'lg:col-span-7', aspect: 'aspect-[4/3]', title: 'text-[14vw] lg:text-[6.4vw]' },
  climate: { wrap: 'lg:col-span-4 lg:col-start-9 lg:mt-48', aspect: 'aspect-square', title: 'text-[12vw] lg:text-[3.6vw]' },
  security: { wrap: 'lg:col-span-4 lg:col-start-2 lg:mt-8', aspect: 'aspect-[2/3]', title: 'text-[12vw] lg:text-[3.6vw]' },
  entertainment: { wrap: 'lg:col-span-6 lg:col-start-7 lg:mt-56', aspect: 'aspect-[16/10]', title: 'text-[9.4vw] lg:text-[4.6vw]' },
  curtains: { wrap: 'lg:col-span-3 lg:col-start-9 lg:mt-12', aspect: 'aspect-[4/5]', title: 'text-[12vw] lg:text-[3.2vw]' }
};

export function Collection() {
  return (
    <section id="collection" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>04 / Automation collection</Label>
            <RevealText
              as="h2"
              text={'What your home\ncan take care of.'}
              accent={['care']}
              className="mt-6 font-display text-[clamp(2.75rem,6vw,6.5rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]" />
            
          </div>
        </div>

        <div className="mt-16 grid gap-y-20 lg:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {collection.map((item) => {
            const l = layout[item.id];
            return (
              <a key={item.id} href="#control" className={`group block ${l.wrap}`}>
                <div className="relative">
                  <RevealImage src={item.image} alt={item.alt} className={l.aspect} zoomOnHover parallax />
                  <span className="absolute left-4 top-4 bg-cream px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                    {item.index}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6 border-t border-ink/15 pt-5">
                  <div>
                    <h3 className={`font-display font-light uppercase leading-[0.88] tracking-[-0.03em] ${l.title}`}>{item.title}</h3>
                    <p className="mt-2 font-display text-xl italic text-terracotta md:text-2xl">{item.tagline}</p>
                  </div>
                  <span className="mt-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors duration-200 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink/65">{item.description}</p>
              </a>);

          })}

          <div className="lg:col-span-5 lg:col-start-2 lg:row-start-3 lg:mt-24 lg:self-center">
            <p className="font-display text-3xl font-light leading-tight md:text-4xl">
              Five systems. <span className="italic text-terracotta">One</span> intelligence — controlled from a single, beautifully simple app.
            </p>
            <div className="mt-8">
              <ArrowButton href="#control">Meet AIIVA Control</ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>);

}