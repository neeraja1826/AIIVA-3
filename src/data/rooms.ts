import type { Room } from '../types/content';

export const rooms: Room[] = [
{
  id: 'living',
  name: 'Living',
  rect: { x: 40, y: 300, w: 420, h: 300 },
  labelPos: { x: 58, y: 334 },
  markers: [
  { x: 170, y: 420 },
  { x: 250, y: 584 },
  { x: 420, y: 340 }],

  summary: 'The heart of the house. Light, sound and shade move together so the room is always ready for what comes next.',
  automations: [
  { name: 'Light', state: 'Warm · 40%' },
  { name: 'Climate', state: '21.5°C' },
  { name: 'Audio', state: 'Playing' },
  { name: 'Curtains', state: 'Closed at sunset' }],

  scene: { name: 'Evening', detail: 'Amber light 30% · curtains closed · music low' }
},
{
  id: 'bedroom',
  name: 'Bedroom',
  rect: { x: 40, y: 40, w: 360, h: 260 },
  labelPos: { x: 58, y: 262 },
  markers: [
  { x: 200, y: 160 },
  { x: 60, y: 110 },
  { x: 350, y: 130 }],

  summary: 'Wakes you with daylight rather than an alarm, and cools quietly for deeper sleep.',
  automations: [
  { name: 'Light', state: 'Sunrise 06:15' },
  { name: 'Climate', state: '18.5°C at night' },
  { name: 'Curtains', state: 'Open slowly' },
  { name: 'Wake', state: 'Weekdays' }],

  scene: { name: 'Wake gently', detail: 'Curtains 0 → 60% over 12 min · 3000K light' }
},
{
  id: 'bath',
  name: 'Bath',
  rect: { x: 400, y: 40, w: 180, h: 260 },
  labelPos: { x: 414, y: 228 },
  markers: [
  { x: 447, y: 120 },
  { x: 544, y: 70 }],

  summary: 'Warm floors before you step in, a softly lit mirror at night, and a sensor that notices every drop.',
  automations: [
  { name: 'Floor heating', state: '24°C at 06:00' },
  { name: 'Mirror light', state: 'Night mode' },
  { name: 'Leak sensor', state: 'Dry' },
  { name: 'Ventilation', state: 'Auto' }],

  scene: { name: 'Morning', detail: 'Floor warm · mirror 70% · fan after shower' }
},
{
  id: 'entry',
  name: 'Entry',
  rect: { x: 580, y: 40, w: 180, h: 260 },
  labelPos: { x: 596, y: 262 },
  markers: [
  { x: 660, y: 70 },
  { x: 733, y: 165 }],

  summary: 'Knows when you leave and when you return. One touch by the door sets the whole house.',
  automations: [
  { name: 'Smart lock', state: 'Locked' },
  { name: 'Doorbell', state: 'Video ready' },
  { name: 'Presence light', state: 'On arraiival' },
  { name: 'Alarm', state: 'Disarmed' }],

  scene: { name: 'Leaving', detail: 'All lights off · doors locked · heating to eco' }
},
{
  id: 'kitchen',
  name: 'Kitchen',
  rect: { x: 460, y: 300, w: 300, h: 300 },
  labelPos: { x: 478, y: 334 },
  markers: [
  { x: 615, y: 452 },
  { x: 700, y: 570 },
  { x: 520, y: 574 }],

  summary: 'Bright for cooking, soft for dinner. Appliances report in, and a leak under the sink never goes unnoticed.',
  automations: [
  { name: 'Light', state: 'Task · 80%' },
  { name: 'Appliances', state: 'Oven preheating' },
  { name: 'Leak sensor', state: 'Dry' },
  { name: 'Voice', state: 'Listening for “Dinner”' }],

  scene: { name: 'Dinner', detail: 'Pendants 50% · counter 20% · dining music' }
},
{
  id: 'outdoor',
  name: 'Outdoor',
  rect: { x: 760, y: 40, w: 200, h: 560 },
  labelPos: { x: 778, y: 76 },
  markers: [
  { x: 860, y: 200 },
  { x: 930, y: 320 },
  { x: 860, y: 590 }],

  summary: 'Garden lights that follow the sunset, irrigation that checks the forecast, and an awning that retracts before the wind does damage.',
  automations: [
  { name: 'Garden light', state: 'Sunset −10 min' },
  { name: 'Irrigation', state: 'Skipped · rain due' },
  { name: 'Cameras', state: 'Recording' },
  { name: 'Awning', state: 'Wind protected' }],

  scene: { name: 'Terrace evening', detail: 'Path lights 60% · awning out · heater on' }
}];