import { images } from './images';
import type { GalleryItem } from '../types/content';

export const gallery: GalleryItem[] = [
{ id: 'living', title: 'Living room', caption: 'Afternoon scene', image: images.heroLiving, alt: 'Sunlit living room with an olive tree' },
{ id: 'bedroom', title: 'Bedroom', caption: 'Wake gently', image: images.morningBedroom, alt: 'Bedroom with morning light' },
{ id: 'kitchen', title: 'Kitchen', caption: 'Task lighting', image: images.kitchen, alt: 'Oak and travertine kitchen in morning sun' },
{ id: 'entrance', title: 'Entrance', caption: 'Keyless arraiival', image: images.securityDoor, alt: 'Oak front door with smart lock at dusk' },
{ id: 'theatre', title: 'Home theatre', caption: 'Movie night', image: images.homeTheatre, alt: 'Home cinema lounge with velvet sofa' },
{ id: 'outdoor', title: 'Outdoor terrace', caption: 'Golden hour', image: images.outdoorTerrace, alt: 'Stone terrace with pool and pergola at golden hour' }];