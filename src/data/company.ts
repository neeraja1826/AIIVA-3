export interface Director {
  name: string;
  designation: string;
  role: string;
  bio: string;
  image?: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  shortIntro: string;
  detailedProfile: string;
  focus: string[];
  offerings: string[];
  directors: Director[];
  contact: {
    address: string;
    landmark: string;
    city: string;
    pincode: string;
    phones: string[];
    whatsapp: string;
    whatsappMessage: string;
    email: string;
    workingHours: string;
  };
  social: {
    instagram: string;
    youtube: string;
    linkedin: string;
    facebook: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "AIIVA Automation",
  legalName: "AIIVA AUTOMATION PRIVATE LIMITED",
  tagline: "SMART AND AFFORDABLE",
  subTagline: "Smart Living. Simple Automation. Affordable Technology.",
  shortIntro: "Hyderabad-based home and building automation company providing smart, reliable and affordable automation solutions for homes, apartments, villas, offices and commercial spaces.",
  detailedProfile: "AIIVA Automation Private Limited is dedicated to making intelligent living accessible to everyone. We design, supply, and professionally install comprehensive automation solutions spanning lighting, motorized curtains, climate control, access security, smart touch switches, and IoT sensors. Whether you are building a new luxury villa or retrofitting an existing apartment or commercial office, AIIVA provides robust, value-for-money technology with seamless local support.",
  focus: [
    "Quality products built for Indian voltage & conditions",
    "Professional in-house certified installation team",
    "Seamless integration across voice, app, touch & sensors",
    "Value-for-money automation with transparent pricing",
    "Comprehensive after-sales service and warranty support"
  ],
  offerings: [
    "Smart Home & Building Automation",
    "Lighting & Curtain Automation",
    "Security & Access Control",
    "Smart Switches & Sensors",
    "Energy & Climate Management",
    "New Construction & Retrofit Solutions",
    "Customized Automation Solutions"
  ],
  directors: [
    {
      name: "Donepudi Krishna Sumanth",
      designation: "Director",
      role: "Marketing, Sales & Brand Building",
      bio: "Spearheading AIIVA Automation's vision to make premium smart home and building automation affordable and ubiquitous across residences and commercial enterprises."
    },
    {
      name: "Donepudi Srisha",
      designation: "Director",
      role: "Admin, Operations & Brand Building",
      bio: "Overseeing customer satisfaction, operational excellence, vendor partnerships, and brand experience across all AIIVA installation touchpoints."
    }
  ],
  contact: {
    address: "#504, The Legend, Palace Colony, Basheer Bagh",
    landmark: "Palace Colony, Near Babukhan Estate",
    city: "Hyderabad",
    pincode: "500063",
    phones: ["+91 90000 06000", "+91 97043 00006"],
    whatsapp: "+919000006000",
    whatsappMessage: "Hi AIIVA Automation, I would like to get a consultation and quote for smart automation.",
    email: "aiivaautomation@gmail.com",
    workingHours: "9:00 AM TO 7:00 PM (Mon – Sat)"
  },
  social: {
    instagram: "https://instagram.com/aiivaautomation",
    youtube: "https://youtube.com/@aiivaautomation",
    linkedin: "https://linkedin.com/company/aiiva-automation",
    facebook: "https://facebook.com/aiivaautomation"
  }
};
