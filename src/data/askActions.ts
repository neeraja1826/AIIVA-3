import { images } from './images';
import type { AskAction } from '../types/content';

export const askActions: AskAction[] = [
{
  id: 'wake',
  phrase: 'Wake me gently.',
  image: images.morningBedroom,
  alt: 'Bedroom filling with soft morning light',
  responses: ['Curtains open over 15 minutes', 'Light rises to 3000K', 'Bathroom floor warms to 24°C']
},
{
  id: 'temperature',
  phrase: 'Set the perfect temperature.',
  image: images.climateDetail,
  alt: 'Thermostat showing 21.5 degrees on a plaster wall',
  responses: ['Living room held at 21.5°C', 'Bedroom cools to 18.5°C at 22:00', 'Humidity balanced at 45%']
},
{
  id: 'movie',
  phrase: 'Prepare movie night.',
  image: images.homeTheatre,
  alt: 'Home cinema lounge in low warm light',
  responses: ['Lights dim to 10%', 'Curtains close', 'Screen and sound switch on']
},
{
  id: 'secure',
  phrase: 'Secure the house.',
  image: images.securityDoor,
  alt: 'Front door with a smart lock at dusk',
  responses: ['Every door locks', 'Cameras arm', 'Presence lighting simulates you']
},
{
  id: 'off',
  phrase: 'Turn everything off.',
  image: images.nightBedroom,
  alt: 'Quiet dark bedroom at night',
  responses: ['23 lights off', 'Media and screens off', 'Climate steps down to eco']
},
{
  id: 'welcome',
  phrase: 'Welcome me home.',
  image: images.arrivingExterior,
  alt: 'House at dusk with path and entrance lights on',
  responses: ['Path lights on at the gate', 'Door unlocks as you arrive', 'Living room warms to 21°C']
}];