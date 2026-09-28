import React from 'react';
import { Label } from './Label';
import { RevealText } from './RevealText';
import { RevealImage } from './RevealImage';
import { gallery } from '../data/gallery';

const layout: Record<string, {wrap: string;aspect: string;lifted?: boolean;}> = {
  living: { wrap: 'lg:col-span-7 lg:col-start-1 lg:row-start-1', aspect: 'aspect-[3/2]' },
  bedroom: { wrap: 'lg:col-span-4 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:-ml-20 lg:mt-40', aspect: 'aspect-[3/4]', lifted: true },
  kitchen: { wrap: 'lg:col-span-4 lg:col-start-2 lg:row-start-2 lg:-mt-24', aspect: 'aspect-square', lifted: true },
  entrance: { wrap: 'lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:mt-40', aspect: 'aspect-[3/4]', lifted: true },
  theatre: { wrap: 'lg:col-span-8 lg:col-start-4 lg:row-start-3 lg:mt-16', aspect: 'aspect-[16/10]' },
  outdoor: { wrap: 'lg:col-span-11 lg:col-start-2 lg:row-start-4 lg:-mt-16', aspect: 'aspect-[21/9]' }
};

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Label>09 / Lifestyle</Label>
            <RevealText
              as="h2"
              text={'Life, quietly\nassisted.'}
              accent={['quietly']}
              className="mt-6 font-display text-[clamp(2.75rem,6vw,6.5rem)] font-light uppercase leading-[0.9] tracking-[-0.025em]" />
            
          </div>
          <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-3 lg:col-start-10">
            Homes we’ve connected, photographed as they are lived in. The technology is there — you just don’t see it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          {gallery.map((item) => {
            const l = layout[item.id];
            return (
              <figure key={item.id} className={`group relative ${l.wrap} ${l.lifted ? 'z-10 lg:bg-cream lg:p-3' : 'z-0'}`}>
                <div className="relative">
                  <RevealImage src={item.image} alt={item.alt} className={l.aspect} zoomOnHover parallax />
                  <figcaption className="absolute bottom-4 left-4 bg-cream px-3 py-2">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">{item.title}</span>
                    <span className="block font-display text-[13px] italic text-ink/65">{item.caption}</span>
                  </figcaption>
                </div>
              </figure>);

          })}
        </div>
      </div>
    </section>);

}