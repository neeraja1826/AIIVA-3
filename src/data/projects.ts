export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  clientType: "Residential" | "Commercial" | "Villa" | "Retrofit";
  year: string;
  image: string;
  requirement: string;
  solution: string;
  productsUsed: string[];
  testimonial?: {
    quote: string;
    clientName: string;
    designation: string;
  };
}

export const completedProjects: ProjectCaseStudy[] = [
  {
    id: "jubilee-hills-villa",
    title: "Contemporary 5BHK Luxury Villa",
    location: "Jubilee Hills, Hyderabad",
    clientType: "Villa",
    year: "2025",
    image: "/48bd6e3e-66bc-44f4-846f-8f282223af08.jpg",
    requirement: "Complete automation for a 7,200 sq.ft villa including double-height motorized curtains, 6-zone climate control, smart glass touch switches, landscape lighting, and keyless biometric security.",
    solution: "AIIVA engineered a centralized hybrid system with AIIVA Glass Touch Panels throughout all rooms, automated sunrise/sunset curtain schedules, and multi-zone smart AC regulation saving over 28% in peak summer electricity bills.",
    productsUsed: [
      "AIIVA Executive Touch Switchboards",
      "AIIVA Motorized Curtain Tracks (6.5m Double Height)",
      "AIIVA Core IoT Multi-Protocol Hub",
      "AIIVA Pro 5-in-1 Biometric Smart Locks",
      "Wireless Motion & Climate Sensors"
    ],
    testimonial: {
      quote: "AIIVA Automation delivered a truly luxurious yet effortless system. The touch glass switchboards look like bespoke art on our Italian marble walls, and the team's local Hyderabad support is outstanding.",
      clientName: "Rajesh Varma",
      designation: "Homeowner & Industrialist, Jubilee Hills"
    }
  },
  {
    id: "banjara-hills-penthouse",
    title: "Sky Penthouse & Private Terrace",
    location: "Banjara Hills, Hyderabad",
    clientType: "Residential",
    year: "2025",
    image: "/889ba9e3-e0c4-48cb-8c84-baa842bb8b91.jpg",
    requirement: "Retrofit smart automation for a fully furnished 4,500 sq.ft duplex penthouse without damaging existing wood panelling, designer wallpaper, or false ceilings.",
    solution: "AIIVA deployed 100% zero-damage retrofit touch panels and micro-modules directly inside the existing gang boxes in under 3 days, providing full mobile app, voice, and touch panel control.",
    productsUsed: [
      "AIIVA Touch Switchboards with Dual Sockets",
      "AIIVA Minimal 4-Gang Touch Glass Panels",
      "Smart IR Climate Blasters for Daikin ACs",
      "Smart RGBW Architectural Accent Lighting"
    ],
    testimonial: {
      quote: "We were worried about wall chipping in our completed home, but AIIVA's retrofit switches were swapped in without a single scratch on our paint. Everything worked flawlessly on day one.",
      clientName: "Dr. Ananya Reddy",
      designation: "Resident, Banjara Hills Road No. 12"
    }
  },
  {
    id: "financial-district-office",
    title: "Fintech Corporate Headquarters & Boardroom",
    location: "Financial District, Nanakramguda, Hyderabad",
    clientType: "Commercial",
    year: "2026",
    image: "/45b1c124-a2d5-4620-80b1-2760c7553def.jpg",
    requirement: "Automated boardroom lighting, motorized blackout blinds, video conferencing scene triggers, and occupancy-based power cutoff for an 8,000 sq.ft corporate floor.",
    solution: "Created single-tap 'Presentation Mode', 'Video Conference', and 'Board Meeting' presets on wall panels, along with automatic energy shutoff 15 minutes after rooms are vacated.",
    productsUsed: [
      "AIIVA Commercial Scene Master Panels",
      "Motorized Blackout Roller Blinds",
      "Ceiling Multi-Sensor Occupancy Detectors",
      "Centralized Facility Energy Dashboard"
    ],
    testimonial: {
      quote: "Our board meetings start on time without fumbling for 5 different remotes. The automation has cut our HVAC and lighting electricity expenses by 32% every month.",
      clientName: "Kalyan Chakravarthy",
      designation: "VP of Operations, Tech Innovations Ltd"
    }
  },
  {
    id: "kokapet-4bhk",
    title: "Luxury High-Rise 4BHK Apartment",
    location: "Kokapet / Neopolis, Hyderabad",
    clientType: "Residential",
    year: "2026",
    image: "/2dfd1a4f-e55a-42f2-86c3-34a1f8aa4a9b.jpg",
    requirement: "Modern family automation with child safety features, night-light motion paths for grandparents, smart door lock, and Alexa voice integration in Telugu & English.",
    solution: "Installed soft-lit touch switches, intelligent path lights that gently illuminate bathrooms at night without waking anyone, and a 5-in-1 biometric lock with instant mobile entry alerts.",
    productsUsed: [
      "AIIVA Minimalist 4-Gang Touch Panels",
      "AIIVA Executive Fan & Socket Panels",
      "AIIVA Pro 5-in-1 Smart Door Lock",
      "Smart Night-Light Motion Sensors"
    ],
    testimonial: {
      quote: "The night mode lighting is a blessing for my elderly parents. AIIVA Automation combines smart technology with real practical everyday comfort at an unbeatable price.",
      clientName: "Srinivas Rao",
      designation: "IT Director, Kokapet"
    }
  }
];
