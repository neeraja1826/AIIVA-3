import { images } from './images';
import type { NavLink } from '../types/content';

export const menuLinks: NavLink[] = [
  { label: 'Company Profile', href: '#company', image: images.architecture },
  { label: 'Services & Solutions', href: '#services', image: images.heroLiving },
  { label: 'Product Showcase', href: '#products', image: "/images/aiiva/media_1790578647847.jpg" },
  { label: 'Experience Room-by-Room', href: '#system', image: images.kitchen },
  { label: 'Interactive Live Control', href: '#control', image: images.climateDetail },
  { label: 'Completed Projects', href: '#projects', image: images.outdoorTerrace },
  { label: 'Cost Estimator', href: '#estimator', image: images.eveningLiving },
  { label: 'Directors & Leadership', href: '#leadership', image: images.entryHall },
  { label: 'Contact & Studio', href: '#contact', image: images.arrivingExterior }
];

export const footerLinks: NavLink[] = [
  { label: 'Company Overview', href: '#company' },
  { label: 'Smart Solutions', href: '#services' },
  { label: 'AIIVA Products', href: '#products' },
  { label: 'Projects & Case Studies', href: '#projects' },
  { label: 'Instant Cost Estimator', href: '#estimator' },
  { label: 'Contact Us', href: '#contact' }
];