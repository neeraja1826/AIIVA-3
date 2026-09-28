import { images } from './images';
import type { DayMoment } from '../types/content';

export const dayMoments: DayMoment[] = [
{
  time: '06:30',
  label: 'Morning',
  title: 'The house wakes first.',
  description: 'Curtains open slowly. Natural light enters. Climate adjusts automatically.',
  image: images.morningBedroom,
  alt: 'Bedroom at sunrise with morning light through sheer curtains',
  tint: 'rgba(185, 104, 74, 0.16)',
  automations: [
  { name: 'Curtains', state: 'Opening to 70%' },
  { name: 'Climate', state: '21°C' },
  { name: 'Light', state: 'Daylight 3000K' }]

},
{
  time: '08:30',
  label: 'Leaving',
  title: 'One touch by the door.',
  description: 'Lights fade out, every door locks and the heating steps back while the house is empty.',
  image: images.entryHall,
  alt: 'Entrance hallway with an oak front door and a smart lock keypad',
  tint: 'rgba(32, 35, 33, 0.28)',
  automations: [
  { name: 'Doors', state: 'Locked' },
  { name: 'Lights', state: 'All off' },
  { name: 'Climate', state: 'Eco 18°C' }]

},
{
  time: '13:00',
  label: 'Away',
  title: 'Quietly keeping watch.',
  description: 'Blinds soften the midday sun, sensors watch for leaks, and you get a calm note only if something needs you.',
  image: images.awayLiving,
  alt: 'Empty living and dining room in bright midday sunlight',
  tint: 'rgba(32, 35, 33, 0.3)',
  automations: [
  { name: 'Shading', state: 'Sun protection' },
  { name: 'Security', state: 'Armed' },
  { name: 'Energy', state: 'Solar to battery' }]

},
{
  time: '18:30',
  label: 'Arriving',
  title: 'Welcome home.',
  description: 'Entrance lights actaiivate. Security recognises your arraiival. The living room prepares for the evening.',
  image: images.arrivingExterior,
  alt: 'Modern house at dusk with entrance lights switched on',
  tint: 'rgba(67, 45, 50, 0.3)',
  automations: [
  { name: 'Entry', state: 'Lights on' },
  { name: 'Security', state: 'Disarmed' },
  { name: 'Living', state: 'Warming to 21.5°C' }]

},
{
  time: '21:00',
  label: 'Evening',
  title: 'The light settles.',
  description: 'Lamps drop to a low amber, curtains close, and music follows you from room to room.',
  image: images.eveningLiving,
  alt: 'Living room in the evening lit by a warm floor lamp',
  tint: 'rgba(67, 45, 50, 0.32)',
  automations: [
  { name: 'Light', state: 'Amber 30%' },
  { name: 'Curtains', state: 'Closed' },
  { name: 'Audio', state: 'Living + Kitchen' }]

},
{
  time: '23:00',
  label: 'Sleep',
  title: 'Goodnight, house.',
  description: 'Every light off, every door checked, and the bedroom cools for a deeper night’s sleep.',
  image: images.nightBedroom,
  alt: 'Bedroom at night with a very dim warm glow under the bed',
  tint: 'rgba(32, 35, 33, 0.42)',
  automations: [
  { name: 'Lights', state: 'Off' },
  { name: 'Doors', state: 'Locked' },
  { name: 'Climate', state: '18.5°C' }]

}];