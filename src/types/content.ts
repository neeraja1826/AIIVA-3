export interface NavLink {
  label: string;
  href: string;
  image?: string;
}

export interface HeroScene {
  id: string;
  index: string;
  label: string;
  caption: string;
  image: string;
  alt: string;
}

export interface StatusLine {
  name: string;
  state: string;
}

export interface Room {
  id: string;
  name: string;
  rect: {x: number;y: number;w: number;h: number;};
  labelPos: {x: number;y: number;};
  markers: {x: number;y: number;}[];
  summary: string;
  automations: StatusLine[];
  scene: {name: string;detail: string;};
}

export interface DayMoment {
  time: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tint: string;
  automations: StatusLine[];
}

export interface CollectionItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
}

export interface AskAction {
  id: string;
  phrase: string;
  image: string;
  alt: string;
  responses: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  detail: string;
  meta: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export type AudienceMarkType = 'house' | 'estate' | 'apartment' | 'villa' | 'renovation';

export interface Audience {
  name: string;
  description: string;
  mark: AudienceMarkType;
}