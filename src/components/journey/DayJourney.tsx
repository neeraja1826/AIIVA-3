import React from 'react';
import { Label } from '../Label';
import { RevealText } from '../RevealText';
import { JourneyScroller } from './JourneyScroller';
import { JourneyStack } from './JourneyStack';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function DayJourney() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="day" className="bg-cream">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 pb-14 pt-24 md:px-10 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-36">
        <div className="lg:col-span-8">
          <Label>03 / From morning to night</Label>
          <RevealText
            as="h2"
            text={'One day.\nFully connected.'}
            accent={['fully']}
            className="mt-6 font-display text-[clamp(2.75rem,7vw,7.5rem)] font-light uppercase leading-[0.88] tracking-[-0.03em]" />
          
        </div>
        <p className="text-[15px] leading-relaxed text-ink/70 lg:col-span-3 lg:col-start-10">
          Follow a single day in an AIIVA home. As you move through it, the light, the rhythm and the house change with you.
        </p>
      </div>
      {isDesktop ? <JourneyScroller /> : <JourneyStack />}
    </section>);

}