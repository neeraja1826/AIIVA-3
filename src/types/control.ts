export type ControlView = 'home' | 'living' | 'bedroom' | 'security' | 'climate' | 'lighting' | 'energy';

export type SceneId = 'morning' | 'away' | 'evening' | 'sleep';

export interface RoomConfig {
  name: string;
  occupancy: string;
  image: string;
  light: number;
  curtains: number;
  temp: number;
  media?: {title: string;artist: string;};
  wake?: string;
}

export interface LightZone {
  id: string;
  name: string;
  on: boolean;
  level: number;
}

export interface LockItem {
  id: string;
  name: string;
  locked: boolean;
}