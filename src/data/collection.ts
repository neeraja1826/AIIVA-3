import { images } from './images';
import type { CollectionItem } from '../types/content';

export const collection: CollectionItem[] = [
{
  id: 'light',
  index: '01',
  title: 'Light',
  tagline: 'Set the mood.',
  description: 'Circadian lighting that follows the sun, and scenes that change a room with a single word.',
  image: images.eveningLiving,
  alt: 'Living room glowing with warm lamp light in the evening'
},
{
  id: 'climate',
  index: '02',
  title: 'Climate',
  tagline: 'Feel comfortable.',
  description: 'Room-by-room temperature that learns your rhythm and saves energy when nobody is home.',
  image: images.climateDetail,
  alt: 'Round cream thermostat on a warm plaster wall'
},
{
  id: 'security',
  index: '03',
  title: 'Security',
  tagline: 'Stay protected.',
  description: 'Locks, cameras and sensors that work together — and stay out of the way until needed.',
  image: images.securityDoor,
  alt: 'Tall oak front door with a slim smart lock at dusk'
},
{
  id: 'entertainment',
  index: '04',
  title: 'Entertainment',
  tagline: 'Press play.',
  description: 'Whole-home audio and a cinema that dims the lights and closes the curtains for you.',
  image: images.homeTheatre,
  alt: 'Home cinema lounge with a burgundy velvet sofa and oak panelling'
},
{
  id: 'curtains',
  index: '05',
  title: 'Curtains',
  tagline: 'Let the light in.',
  description: 'Silent motorised shading that follows the sun to protect floors, furniture and comfort.',
  image: images.curtainsDetail,
  alt: 'Sheer linen curtains glowing in the morning sun'
}];