export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  moduleSize: string;
  features: string[];
  specs: { [key: string]: string };
  badge?: string;
  highlight?: boolean;
}

export const productCategories = [
  "All Products",
  "Master Panels",
  "Touch Switchboards",
  "Fan Controllers",
  "Compact Panels"
];

export const productsList: ProductItem[] = [
  {
    id: "aiiva-executive-12m-dual-sockets-fan",
    name: "AIIVA Executive 12M Master Panel (Dual Sockets + Fan)",
    category: "Master Panels",
    moduleSize: "12-Module Master",
    tagline: "8 Touch Switches + 5-Speed Fan Regulator + 2 Heavy-Duty Sockets",
    description: "Flagship luxury all-in-one tempered glass master switchboard. Combines 8 feather-touch lighting relays, an integrated 5-speed hum-free digital fan regulator with touch arrows, and 2 universal 16A power sockets with child safety shutters.",
    image: "/images/aiiva/media_1790582673245.png",
    badge: "Flagship 12M",
    highlight: true,
    features: [
      "8 Independent capacitive feather-touch lighting/scene switches",
      "Integrated 5-speed hum-free digital fan regulator with up/down touch arrows",
      "Dual 6A/16A universal power sockets for heavy electrical appliances",
      "Soft ambient LED night backlighting with dual-state color status",
      "2.5kV surge protection and flame-retardant polycarbonate housing",
      "100% direct retrofit into standard 12-Module Indian electrical gang box"
    ],
    specs: {
      "Module Size": "12-Module Indian Standard Box",
      "Operating Voltage": "110V - 250V AC, 50/60Hz",
      "Lighting Relays": "8x 1000W Resistive Load per node",
      "Socket Capacity": "Dual 16A Universal with Safety Shutters",
      "Fan Speed Steps": "5-Speed Digital Capacitive (Zero Motor Hum)",
      "Glass Surface": "4mm Scratch-Proof Diamond-Cut Toughened Glass",
      "Protocol": "Zigbee 3.0 / Matter Mesh / Local LAN / Wi-Fi"
    }
  },
  {
    id: "aiiva-grand-suite-12m-single-socket-fan",
    name: "AIIVA Grand Suite 12M Panel (Single Socket + Fan + 12 Switches)",
    category: "Master Panels",
    moduleSize: "12-Module High-Density",
    tagline: "12 Touch Switches + 5-Speed Fan Regulator + 1 Heavy-Duty Socket",
    description: "High-density architectural glass switchboard engineered for large living halls, villa suites, and master bedrooms with extensive multi-tier cove and accent lighting circuits.",
    image: "/images/aiiva/media_1790583250471.png",
    badge: "High Density",
    highlight: true,
    features: [
      "12 Discrete capacitive touch lighting controls for extensive illumination",
      "Dedicated 5-speed electronic touch fan speed regulator",
      "1 Heavy-duty 16A universal power socket with child protection",
      "Feather-touch sensitivity with instantaneous 50ms response",
      "Independent scene programming for one-touch whole-room ambiance",
      "Fits standard 12-Module concealed or surface gang boxes"
    ],
    specs: {
      "Module Size": "12-Module Standard Box",
      "Switch Channels": "12 Independent Lighting Relays",
      "Power Socket": "Single 16A Universal Socket",
      "Fan Regulation": "5-Speed Noiseless Electronic Stepping",
      "Dimensions": "Standard 12M Indian Plate",
      "Glass Finish": "Midnight Obsidian Tempered Glass"
    }
  },
  {
    id: "aiiva-classic-8m-dual-sockets",
    name: "AIIVA Classic Multi-Gang Board (Dual Sockets + 8 Switches)",
    category: "Master Panels",
    moduleSize: "8-Module / 12-Module",
    tagline: "8 Touch Switches + 2 Universal Heavy-Duty Power Sockets",
    description: "High-demand smart switchboard balancing multi-circuit lighting with dual universal power sockets. Perfect for entertainment media consoles, bedroom sideboards, and kitchen counters.",
    image: "/images/aiiva/media_1790578647847.jpg",
    badge: "Bestseller",
    highlight: true,
    features: [
      "8 Capacitive touch lighting switches for downlights and chandeliers",
      "Dual universal 16A shuttered sockets for TVs, gaming setups & appliances",
      "Shockproof and water-resistant tempered glass surface",
      "Seamless two-way sync with Alexa, Google Assistant & AIIVA Mobile App",
      "Zero rewiring or wall chipping required for existing finished homes"
    ],
    specs: {
      "Module Size": "8-Module / 12-Module Gang Box",
      "Load Capacity": "Up to 1000W per switch / 16A per socket",
      "Glass Finish": "Midnight Obsidian Black Glass",
      "Protection": "Surge Protection, Over-temp & Over-load Cutoff",
      "Standby Power": "< 0.2 Watts"
    }
  },
  {
    id: "aiiva-horizontal-8m-single-socket",
    name: "AIIVA Horizontal 8M Panel (Single Socket + 8 Switches)",
    category: "Touch Switchboards",
    moduleSize: "8-Module Horizontal",
    tagline: "8 Touch Switches + 1 Heavy-Duty Universal Power Socket",
    description: "Streamlined horizontal 8-module smart touch panel combining 8 lighting control nodes with a dedicated 16A power socket on the right flank. Ideal for bedroom headboards and study tables.",
    image: "/images/aiiva/media_1790583244337.png",
    badge: "Slimline 8M",
    highlight: true,
    features: [
      "8 Feather-touch lighting control switches arranged in dual rows",
      "Single high-grade 16A universal power socket with safety shutter",
      "Ultra-slim profile that mounts flush against wall surfaces",
      "Subtle dual-color LED status backlights (Active / Standby)",
      "High thermal endurance rear base with flame-retardant material"
    ],
    specs: {
      "Module Size": "8-Module Horizontal Indian Box (225mm x 90mm)",
      "Switch Relays": "8x 10A Resistive Channels",
      "Socket Rating": "16A Heavy-Duty Universal Socket",
      "Operating Voltage": "110V - 250V AC, 50/60Hz",
      "Glass Surface": "4mm Toughened Diamond-Cut Glass"
    }
  },
  {
    id: "aiiva-8gang-full-touch-board",
    name: "AIIVA 8-Gang Full Touch Glass Board",
    category: "Touch Switchboards",
    moduleSize: "8-Module Horizontal",
    tagline: "8 Dedicated Lighting Circuits — Pure Glass Touch Interface",
    description: "Clean, minimalist pure touch panel dedicated entirely to lighting scenes and circuits. Features 8 discrete touch switches with zero mechanical moving parts for lifelong reliability.",
    image: "/images/aiiva/media_1790582684799.png",
    badge: "Pure Touch",
    highlight: true,
    features: [
      "8 Discrete lighting switches on an unbroken glass faceplate",
      "Eliminates wall clutter of multiple traditional toggle switches",
      "Feather-light capacitive touch with micro-haptic LED response",
      "Group scene triggers: double tap for master room on/off",
      "Tested for over 100,000 smooth touch switching cycles"
    ],
    specs: {
      "Module Size": "8-Module Standard Rectangular Box",
      "Relay Channels": "8 Channels (10A resistive each)",
      "Glass Coating": "Anti-Fingerprint Oleophobic Coating",
      "Standby Power": "< 0.18 Watts",
      "Protocol": "Zigbee 3.0 / Matter Mesh"
    }
  },
  {
    id: "aiiva-6m-4gang-fan-panel",
    name: "AIIVA 6M 4-Gang Touch Panel with Fan Regulator",
    category: "Fan Controllers",
    moduleSize: "6-Module Standard",
    tagline: "4 Touch Switches + 5-Speed Digital Touch Fan Regulator",
    description: "Compact, well-balanced smart panel uniting 4 touch lighting controls and a dedicated 5-speed electronic fan speed regulator in a versatile 6-module glass frame.",
    image: "/images/aiiva/media_1790582695343.png",
    badge: "Popular 6M",
    highlight: true,
    features: [
      "4 Independent smart touch switches for lamps, cove and spotlights",
      "Dedicated touch arrows for 5-speed precision ceiling fan control",
      "Zero acoustic motor hum technology preserves fan longevity",
      "Non-volatile memory preserves fan speed and light status after power cuts",
      "Tool-free snap-in installation onto standard 6-module gang frames"
    ],
    specs: {
      "Module Size": "6-Module Indian Box",
      "Switch Nodes": "4x 10A Lighting Relays",
      "Fan Speed Steps": "5 Digital Step Regulation (Noiseless)",
      "LED Backlight": "Subtle Amber / Ice Blue Indicator",
      "Material": "Diamond-Cut Beveled Toughened Glass"
    }
  },
  {
    id: "aiiva-minimal-4gang-square",
    name: "AIIVA Minimal 4-Gang Touch Glass Panel",
    category: "Compact Panels",
    moduleSize: "4-Module Square",
    tagline: "4 Touch Switches in Symmetric Compact Square Glass",
    description: "Symmetric 4-node square glass touch switch designed for bedside pedestals, corridors, entryways, and bathrooms. Ultra-clean minimalist aesthetics with feather-touch triggers.",
    image: "/images/aiiva/media_1790582680130.png",
    badge: "Minimalist 4M",
    highlight: true,
    features: [
      "Symmetric 4-node capacitive touch layout in compact square profile",
      "Soft night illumination for effortless dark-room navigation",
      "Water-resistant front glass safe for kitchens and bathroom vanity zones",
      "Direct drop-in retrofit for standard 4-module square gang boxes",
      "Works standalone or connected to centralized AIIVA Smart System"
    ],
    specs: {
      "Module Size": "4-Module Square Box (86mm x 86mm / 100mm x 100mm)",
      "Switch Nodes": "4 Independent Micro-Relays",
      "Standby Power": "< 0.15 Watts",
      "Operating Temp": "-10°C to +55°C",
      "Finish": "Ultra-Clear Obsidian Tempered Glass"
    }
  },
  {
    id: "aiiva-standalone-2m-fan-controller",
    name: "AIIVA 2M Precision Digital Fan Touch Regulator",
    category: "Fan Controllers",
    moduleSize: "2-Module Compact",
    tagline: "Dedicated 5-Speed Touch Fan Controller (No Motor Hum)",
    description: "Dedicated smart touch fan speed regulator engineered with digital capacitor stepping. Delivers smooth 5-speed control without generating electrical humming noise in BLDC or induction fans.",
    image: "/images/aiiva/media_1790582690026.png",
    badge: "Noiseless 2M",
    highlight: true,
    features: [
      "Noiseless digital capacitor stepping — zero annoying motor hum",
      "Ergonomic Up / Down capacitive touch arrows with illuminated fan glyph",
      "Compatible with both conventional induction ceiling fans and BLDC motors",
      "Memory retention restores exact speed level after power restoration",
      "Compact 2-module form factor fits into any existing modular gang frame"
    ],
    specs: {
      "Module Size": "2-Module Indian Box",
      "Speed Levels": "5 Step Digital Speeds (1 to 5)",
      "Motor Rating": "Supports ceiling fans up to 120W",
      "Voltage": "220V - 240V AC, 50Hz",
      "Finish": "Midnight Black Glass Panel"
    }
  }
];
