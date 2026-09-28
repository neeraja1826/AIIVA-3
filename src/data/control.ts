import { images } from './images';
import type { ControlView, LightZone, LockItem, RoomConfig, SceneId } from '../types/control';

export const controlNav: {id: ControlView;label: string;}[] = [
{ id: 'home', label: 'Home' },
{ id: 'living', label: 'Living Room' },
{ id: 'bedroom', label: 'Bedroom' },
{ id: 'security', label: 'Security' },
{ id: 'climate', label: 'Climate' },
{ id: 'lighting', label: 'Lighting' },
{ id: 'energy', label: 'Energy' }];


export const homeScenes: {id: SceneId;label: string;time: string;description: string;}[] = [
{ id: 'morning', label: 'Morning', time: '06:30', description: 'Curtains open, lights rise with the sun, coffee on.' },
{ id: 'away', label: 'Away', time: 'Auto', description: 'Everything off, doors locked, heating on eco.' },
{ id: 'evening', label: 'Evening', time: '19:00', description: 'Everyone’s home. The house is set for a slow evening.' },
{ id: 'sleep', label: 'Sleep', time: '23:00', description: 'Lights off, doors checked, bedroom cooling to 18.5°.' }];


export const homeRooms = [
{ id: 'living', name: 'Living room', status: 'Lights 40% · music playing', temp: '21.5°', on: true },
{ id: 'kitchen', name: 'Kitchen', status: 'Pendants 50%', temp: '21.0°', on: true },
{ id: 'bedroom', name: 'Bedroom', status: 'Curtains closed', temp: '19.0°', on: false },
{ id: 'terrace', name: 'Terrace', status: 'Path lights 60%', temp: '14.0°', on: true }];


export const roomConfigs: Record<'living' | 'bedroom', RoomConfig> = {
  living: {
    name: 'Living Room',
    occupancy: '2 people · Evening scene',
    image: images.eveningLiving,
    light: 40,
    curtains: 0,
    temp: 21.5,
    media: { title: 'Says', artist: 'Nils Frahm' }
  },
  bedroom: {
    name: 'Bedroom',
    occupancy: 'Empty · Sleep at 23:00',
    image: images.morningBedroom,
    light: 0,
    curtains: 0,
    temp: 19,
    wake: '06:30'
  }
};

export const securityLocks: LockItem[] = [
{ id: 'front', name: 'Front door', locked: true },
{ id: 'terrace', name: 'Terrace door', locked: false },
{ id: 'garage', name: 'Garage', locked: true },
{ id: 'gate', name: 'Garden gate', locked: true }];


export const securityCameras = [
{ id: 'entry', name: 'Entrance', image: images.entryHall },
{ id: 'garden', name: 'Garden', image: images.outdoorTerrace }];


export const securityEvents = [
{ time: '18:32', text: 'Front door unlocked by Maya' },
{ time: '18:31', text: 'Arraiival recognised — alarm disarmed' },
{ time: '16:05', text: 'Parcel delivered at the entrance' },
{ time: '13:12', text: 'Terrace motion — the cat, again' },
{ time: '08:34', text: 'House armed after last person left' }];


export const climateRooms = [
{ name: 'Living room', temp: 21.1, humidity: 46 },
{ name: 'Kitchen', temp: 21.0, humidity: 49 },
{ name: 'Bedroom', temp: 19.0, humidity: 44 },
{ name: 'Bath', temp: 23.5, humidity: 58 }];


export const lightZones: LightZone[] = [
{ id: 'living', name: 'Living room', on: true, level: 40 },
{ id: 'kitchen', name: 'Kitchen', on: true, level: 80 },
{ id: 'dining', name: 'Dining', on: false, level: 60 },
{ id: 'hall', name: 'Hallway', on: true, level: 20 },
{ id: 'bedroom', name: 'Bedroom', on: false, level: 30 },
{ id: 'terrace', name: 'Terrace', on: true, level: 60 }];


export const lightScenes: {id: string;label: string;levels: Record<string, number>;}[] = [
{ id: 'bright', label: 'Bright', levels: { living: 100, kitchen: 100, dining: 90, hall: 80, bedroom: 80, terrace: 80 } },
{ id: 'relax', label: 'Relax', levels: { living: 35, kitchen: 20, dining: 30, hall: 15, bedroom: 0, terrace: 40 } },
{ id: 'dinner', label: 'Dinner', levels: { living: 25, kitchen: 45, dining: 60, hall: 10, bedroom: 0, terrace: 50 } },
{ id: 'night', label: 'Night light', levels: { living: 0, kitchen: 0, dining: 0, hall: 5, bedroom: 5, terrace: 0 } }];


export const energyHours = [
{ used: 0.2, solar: 0 }, { used: 0.18, solar: 0 }, { used: 0.16, solar: 0 }, { used: 0.16, solar: 0 },
{ used: 0.18, solar: 0 }, { used: 0.22, solar: 0.02 }, { used: 0.5, solar: 0.1 }, { used: 0.62, solar: 0.3 },
{ used: 0.4, solar: 0.55 }, { used: 0.24, solar: 0.8 }, { used: 0.22, solar: 1.0 }, { used: 0.25, solar: 1.15 },
{ used: 0.35, solar: 1.2 }, { used: 0.28, solar: 1.18 }, { used: 0.24, solar: 1.05 }, { used: 0.26, solar: 0.85 },
{ used: 0.3, solar: 0.6 }, { used: 0.42, solar: 0.35 }, { used: 0.7, solar: 0.12 }, { used: 0.78, solar: 0.02 },
{ used: 0.62, solar: 0 }, { used: 0.5, solar: 0 }, { used: 0.34, solar: 0 }, { used: 0.24, solar: 0 }];


export const energyBreakdown = [
{ name: 'Climate', share: 42 },
{ name: 'Kitchen', share: 22 },
{ name: 'Lighting', share: 14 },
{ name: 'Media', share: 9 },
{ name: 'Other', share: 13 }];