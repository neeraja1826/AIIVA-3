export interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  applicableFor: string[];
  iconName: string;
  image: string;
}

export const mainServices: ServiceDetail[] = [
  {
    id: "smart-home",
    title: "Smart Home Automation",
    category: "Residential Solutions",
    shortDesc: "Comprehensive intelligent living for apartments, duplexes, and luxury villas with centralized touch, app, and voice control.",
    fullDesc: "Transform your living space into a truly smart residence. AIIVA integrates lighting, climate, motorized curtains, entertainment systems, and security into one synchronized ecosystem that anticipates your routine and simplifies daily life.",
    benefits: [
      "One-touch whole house control from anywhere in the world",
      "Tailored morning, movie, dinner, and goodnight scenes",
      "Seamless control via AIIVA Glass Panels, Mobile App, and Voice (Alexa / Google Assistant)"
    ],
    features: [
      "Circadian mood lighting and dimming",
      "Whisper-quiet motorized curtains & blinds",
      "Multi-zone air conditioning & climate zoning",
      "Multi-room audio and home theater automation"
    ],
    applicableFor: ["Apartments", "Villas", "Penthouses", "Gated Communities"],
    iconName: "Home",
    image: "/889ba9e3-e0c4-48cb-8c84-baa842bb8b91.jpg"
  },
  {
    id: "commercial-automation",
    title: "Commercial Automation",
    category: "Corporate & Enterprise",
    shortDesc: "Automated smart conference rooms, intelligent energy scheduling, and centralized office control for higher productivity.",
    fullDesc: "Designed for corporate offices, retail stores, co-working spaces, and boutique studios across Hyderabad. AIIVA commercial automation streamlines operations, reduces unnecessary power consumption, and provides intuitive meeting room controls with single-touch presentation modes.",
    benefits: [
      "Drastically cuts commercial utility bills by 20–35%",
      "Automated conference room presets for video meetings and presentations",
      "Centralized master controls for facilities managers"
    ],
    features: [
      "Occupancy-based conference lighting and AC shut-off",
      "Projector, screen, and motorized blackout blind synchronization",
      "Keyless access control for secure employee zones",
      "Time-scheduled perimeter and facade lighting"
    ],
    applicableFor: ["Corporate Offices", "Boardrooms", "Showrooms", "Boutiques", "Clinics"],
    iconName: "Building2",
    image: "/45b1c124-a2d5-4620-80b1-2760c7553def.jpg"
  },
  {
    id: "building-automation",
    title: "Building Automation & IoT",
    category: "Infrastructure & Real Estate",
    shortDesc: "Connected IoT infrastructure for residential towers, clubhouse facilities, and shared community spaces.",
    fullDesc: "AIIVA deploys scalable building automation systems that connect common areas, security checkpoints, clubhouse amenities, pump rooms, and outdoor landscape illumination to a centralized smart dashboard for efficient facility management.",
    benefits: [
      "Centralized management of multi-floor residential and commercial buildings",
      "Real-time alerts for system faults, water levels, and security triggers",
      "Scalable wireless and wired IoT mesh architecture"
    ],
    features: [
      "Lobby and corridor motion-sensor lighting",
      "Automated landscape and facade architectural lighting",
      "Clubhouse smart lighting and climate scheduling",
      "Centralized emergency lockdown and alert broadcast"
    ],
    applicableFor: ["Residential Towers", "Gated Enclaves", "Clubhouses", "Commercial Complexes"],
    iconName: "Layers",
    image: "/48bd6e3e-66bc-44f4-846f-8f282223af08.jpg"
  },
  {
    id: "lighting-curtain",
    title: "Lighting & Curtain Automation",
    category: "Comfort & Ambience",
    shortDesc: "Architectural lighting scenes combined with whisper-quiet motorized curtains that sync with natural sunlight.",
    fullDesc: "Light shapes the emotion of any interior. AIIVA combines tunable circadian lighting, warm dimming, and precision-engineered motorized drapery tracks to create stunning ambiences that transition naturally from dawn to dusk.",
    benefits: [
      "Protects luxury furniture and flooring from harsh afternoon sun",
      "Eliminates wall clutter with elegant multi-scene touch panels",
      "Automated opening at sunrise and closing at dusk"
    ],
    features: [
      "0–100% smooth dimming with zero flicker",
      "Motorized straight, curved, and double-height curtain tracks",
      "Automated Roman and roller blinds",
      "Custom programmable mood scenes (Relax, Dinner, Party, Work)"
    ],
    applicableFor: ["Living Rooms", "Master Suites", "Double-Height Atriums", "Offices"],
    iconName: "SunMedium",
    image: "/1bbae7cc-f774-4a16-9333-67846c6084f5.jpg"
  },
  {
    id: "security-access",
    title: "Security & Access Control",
    category: "Protection & Safety",
    shortDesc: "Next-generation biometric locks, video entry doorbells, and smart intrusion sensors for peace of mind.",
    fullDesc: "Protect your family and property with AIIVA's comprehensive security suite. Keyless 5-in-1 biometric smart door locks, video door phones with remote unlock, and intelligent perimeter sensors keep you informed in real time.",
    benefits: [
      "Never worry about lost keys with instant biometric and mobile entry",
      "See and speak to visitors at the door from your phone anywhere",
      "Instant push alerts if doors or windows open unexpectedly"
    ],
    features: [
      "3D Semiconductor fingerprint recognition (<0.3s)",
      "Temporary OTP passcodes for cleaners, guests & deliveries",
      "Door/window magnetic contact sensors & motion detectors",
      "Integrated emergency panic button and alarm trigger"
    ],
    applicableFor: ["Main Entrances", "Private Bedrooms", "Office Server Rooms", "Villas"],
    iconName: "Shield",
    image: "/7183263f-df09-417d-8dd8-dc6756317b7d.jpg"
  },
  {
    id: "retrofit-new-construction",
    title: "New Construction & Retrofit Solutions",
    category: "Engineering & Installation",
    shortDesc: "Zero-damage retrofit solutions for existing homes and complete planned wiring for ongoing new constructions.",
    fullDesc: "Whether your home is fully finished or currently in brick-and-mortar phase, AIIVA has the ideal solution. Our retrofit modules fit inside your existing switch boxes without wall chipping or repainting, while our new-build architectures offer enterprise-grade wired/wireless robustness.",
    benefits: [
      "100% retrofit ready — upgrade any existing home in less than 1 day",
      "No repainting, no rewiring, no mess in finished homes",
      "Dedicated technical CAD coordination with architects & interior designers"
    ],
    features: [
      "Direct fit into standard 2, 4, 6, 8, 12-module Indian gang boxes",
      "Hybrid wired KNX/RS485 and wireless Zigbee/Matter compatibility",
      "Turnkey project execution by AIIVA's certified electrical engineers",
      "Comprehensive on-site demo, commissioning & handover training"
    ],
    applicableFor: ["Existing Homes & Flasts", "New Villa Constructions", "Renovations", "Architectural Projects"],
    iconName: "Wrench",
    image: "/2dfd1a4f-e55a-42f2-86c3-34a1f8aa4a9b.jpg"
  }
];
