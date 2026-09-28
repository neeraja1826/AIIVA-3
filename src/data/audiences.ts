import type { Audience } from '../types/content';

export const audiences: Audience[] = [
{ name: 'Residential', description: 'Family homes made calmer, safer and simpler to run.', mark: 'house' },
{ name: 'Luxury Homes', description: 'Discreet, architect-led integration for exceptional residences.', mark: 'estate' },
{ name: 'Apartments', description: 'Wireless systems that respect shared walls and rental rules.', mark: 'apartment' },
{ name: 'Villas', description: 'House, garden, pool and guest house as one connected estate.', mark: 'villa' },
{ name: 'Smart Renovations', description: 'Intelligence added to older homes without losing their character.', mark: 'renovation' }];


export const commitments = [
{ title: 'Local first', text: 'Your home keeps working without the internet. Nothing essential depends on the cloud.' },
{ title: 'Praiivate by design', text: 'No recordings leave your house unless you choose. Your routines stay yours.' },
{ title: 'Open standards', text: 'Built on systems that last, so your home is never locked to one brand.' }];


export const standards = ['KNX', 'Matter', 'Thread', 'Zigbee', 'Sonos', 'Lutron', 'Somfy'];