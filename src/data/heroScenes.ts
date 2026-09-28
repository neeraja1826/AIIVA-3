import { images } from './images';
import type { HeroScene } from '../types/content';

export const heroScenes: HeroScene[] = [
  {
    id: 'living',
    index: '01',
    label: 'Smart Living',
    caption: 'Hyderabad Residence — Smart Lighting & Motorized Curtains',
    image: images.heroLiving,
    alt: 'Sunlit luxury living room with motorized linen curtains and smart lighting'
  },
  {
    id: 'comfort',
    index: '02',
    label: 'Atmosphere & Climate',
    caption: 'Jubilee Hills Villa — Evening Ambience & Climate Zoning',
    image: images.eveningLiving,
    alt: 'Living room in the evening lit by automated warm scene lighting with smart AC control'
  },
  {
    id: 'security',
    index: '03',
    label: 'Keyless Security',
    caption: 'Palace Colony Suite — Biometric Access & Smart Entry',
    image: images.arrivingExterior,
    alt: 'Smart home exterior at dusk with automated welcome illumination and keyless access'
  }
];