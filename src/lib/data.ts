import {
  Building2,
  HardHat,
  Briefcase,
  Factory,
  ShoppingBag,
  AlertTriangle,
  Layers,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────────
   ICON MAP — resolve icon names to components (client-safe)
   ───────────────────────────────────────────────── */
export const iconMap: Record<string, LucideIcon> = {
  Building2,
  HardHat,
  Briefcase,
  Factory,
  ShoppingBag,
  AlertTriangle,
  Layers,
};

/* ─────────────────────────────────────────────────
   NAV LINKS
   ───────────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Apply Now", href: "/apply" },
] as const;

/* ─────────────────────────────────────────────────
   SERVICES
   ───────────────────────────────────────────────── */
export interface ServiceData {
  title: string;
  slug: string;
  icon: LucideIcon;
  iconName: string;
  shortDescription: string;
  heroDescription: string;
  details: string[];
  bulletPoints: string[];
}

export const services: ServiceData[] = [
  {
    title: "Multi-Residential Janitorial",
    slug: "multi-residential",
    icon: Building2,
    iconName: "Building2",
    shortDescription:
      "Servicing 70+ residential condominiums throughout the GTA — from low-rise to luxury high-rise.",
    heroDescription:
      "We currently service 70+ Residential condominiums clients throughout the GTA and surrounding areas. We understand the value of ensuring strong communication with Property Management & Board of Directors by providing continuous inspections, on site visits, continuous training & development for our trained staff and regular monthly summary reports to Management.",
    details: [
      "Our Residential clients range from low-rise to high rise luxury condominiums where we provide several types of cleaners.",
      "For our Residential clients we also provide periodic specialty services quarterly, semi-annual or annual, some complementary or at a significantly reduced discounted cost to our clients.",
    ],
    bulletPoints: [
      "Day porter/matrons (Heavy duty & Light duty staff)",
      "Live-In Superintendents",
      "Live-Out Superintendents",
      "Night cleaners",
    ],
  },
  {
    title: "Office & Commercial",
    slug: "office-commercial",
    icon: Briefcase,
    iconName: "Briefcase",
    shortDescription:
      "From 6,000 sq ft offices to 250,000+ sq ft commercial spaces — 25+ years of trusted service.",
    heroDescription:
      "With over 25+ years of experience in this industry we have serviced clients in the office and commercial sector ranging in multiple sizes. Some of our smaller office customers from 6,000 square feet to some of our larger customers managing over 250,000+ square feet.",
    details: [
      "We take our commitment seriously where we have our management team conduct continuous follow ups and on-site inspections to ensure we maintain our service levels and go over and beyond for our clients.",
      "With the use of environmentally friendly Eco-label products, it allows us to be confident in ensuring a safe and green work environment supporting our environmental sustainability initiative.",
    ],
    bulletPoints: [
      "Commercial Carpet Cleaning",
      "Commercial Strip & Waxing",
      "High touch point disinfection & sanitization",
      "Upholstery & Furniture Cleaning",
      "Post Construction Cleaning",
      "Exterior Pressure Washing",
      "Graffiti removal",
    ],
  },
  {
    title: "Superintendent Services",
    slug: "superintendents",
    icon: HardHat,
    iconName: "HardHat",
    shortDescription:
      "Comprehensive superintendent services — daily operations, maintenance, compliance & beyond.",
    heroDescription:
      "Top Spot Janitorial Services Inc. offers comprehensive superintendent services to ensure your facility remains clean, safe, and well-maintained. Our experienced superintendents manage daily operations, oversee maintenance, work closely with management, complete work orders, and ensure compliance with health and safety regulations.",
    details: [
      "With over 25 years of industry experience, we guarantee exceptional service and reliability with Toronto's most credible, ACMO & CCI accredited property management companies such as DEL, Crossbridge, DUKA and Fieldgate.",
    ],
    bulletPoints: [
      "Live-In Superintendents",
      "Live-Out Superintendents",
      "Generator Testing",
      "Emergency Preparedness",
    ],
  },
  {
    title: "Emergency Services",
    slug: "emergency-services",
    icon: AlertTriangle,
    iconName: "AlertTriangle",
    shortDescription:
      "24/7 rapid-response emergency cleaning — floods, fire damage, odour control & carpet restoration.",
    heroDescription:
      "When disaster strikes, our emergency response team is ready 24/7 to handle urgent situations with professional care and rapid deployment.",
    details: [
      "Our emergency services cover a wide range of urgent cleaning and restoration needs, ensuring your facility can return to normal operations as quickly as possible.",
    ],
    bulletPoints: [
      "Carpet Restoration",
      "Odour Control",
      "Emergency Fire Cleaning",
      "Flood Cleanup",
      "Partition Cleaning",
    ],
  },
  {
    title: "Full Service",
    slug: "full-service",
    icon: Layers,
    iconName: "Layers",
    shortDescription:
      "End-to-end janitorial solutions — supplies, day porters, specialty services & exterior maintenance.",
    heroDescription:
      "Our ability to provide comprehensive end to end janitorial services is what sets us apart from our competition.",
    details: [
      "We offer complete janitorial cleaning supplies, janitorial services, and specialty services to cover every aspect of your facility maintenance needs.",
    ],
    bulletPoints: [
      "Complete Janitorial Cleaning Supplies (toilet paper, hand towels, soaps, dispensers, etc.)",
      "Day Porters & Matrons",
      "General Maintenance",
      "Superintendent Services",
      "Construction Post Cleaning",
      "Exterior Building Maintenance",
      "Commercial Carpet Steam Cleaning",
      "Escalator Cleaning",
      "Power Washing & Power Sweeping",
      "Graffiti removal",
    ],
  },
  {
    title: "Retail",
    slug: "retail",
    icon: ShoppingBag,
    iconName: "ShoppingBag",
    shortDescription:
      "Stunning storefronts, always — flexible scheduling and trained retail cleaning specialists.",
    heroDescription:
      "With our experience in serving larger clients in the retail industry it is very important for us to ensure focus is aimed at delivering the promise of stunning store fronts and visibility at all times.",
    details: [
      "We provide strong organization of our cleaning staff with detailed checklists, responsibilities to ensure our promise to provide consistent & reliable service levels.",
      "Our expertise allows us to have trained staff ready with flexible scheduling delivering to the expectations we feel meets our quality standard.",
    ],
    bulletPoints: [
      "Escalator Cleaning",
      "Specialized Floor care",
      "Window and Glass cleaning",
      "Green Cleaning initiatives",
    ],
  },
  {
    title: "Industrial",
    slug: "industrial",
    icon: Factory,
    iconName: "Factory",
    shortDescription:
      "Heavy-duty industrial cleaning — machinery, high-level areas, waste management & pressure washing.",
    heroDescription:
      "At Top Spot Janitorial Services Inc., we offer comprehensive industrial cleaning solutions designed to maintain the highest standards of cleanliness and safety in your facility.",
    details: [
      "With over 25 years of experience, our skilled professionals handle demanding tasks such as heavy-duty cleaning, equipment and machinery maintenance, floor and surface cleaning, high-level cleaning, waste management, and emergency cleanup.",
      "Utilizing advanced equipment and eco-friendly products, we ensure a safe, efficient, and spotless environment, tailored to meet the unique needs of your industrial space.",
    ],
    bulletPoints: [
      "Heavy-Duty Cleaning",
      "Floor and Surface Cleaning",
      "High-Level Cleaning",
      "Waste Management and Disposal",
      "Industrial Carpet and Upholstery Cleaning",
      "Pressure Washing",
    ],
  },
];

/* ─────────────────────────────────────────────────
   TESTIMONIALS
   ───────────────────────────────────────────────── */
export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Saithana Karuna",
    text: "Top Spot Janitorial Services Inc. has been cleaning our condominium for over 5 years, and we couldn't be happier with their service. Their staff is always friendly and approachable, and they consistently leave our building spotless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vinothan Subramaniam",
    text: "Great customer service, friendly and trustworthy. I would highly recommend to anyone.",
    rating: 5,
  },
  {
    name: "Shathesan S",
    text: "We have used Top Spot for many years as they always provide exceptional and timely service. Highly recommend!",
    rating: 5,
  },
  {
    name: "Arun Kala",
    text: "They did an amazing job cleaning all our commercial listings. I always recommend Top Spot to all my friends and family. I'm always happy with their service.",
    rating: 5,
  },
  {
    name: "Sujith Sutharsan",
    text: "Top Spot has incredible customer service and they do an impeccable job. We continuously recommend them to all our friends with commercial places for cleaning.",
    rating: 5,
  },
  {
    name: "Naomi Ng",
    text: "I have used Top Spot for many years to clean a commercial plaza. The owners are very responsive and cooperative to the clients. We are very happy with their services and I'd definitely recommend them to my friends.",
    rating: 5,
  },
  {
    name: "Anojan L",
    text: "Great service, communication and seamless experience. Highly recommend.",
    rating: 5,
  },
  {
    name: "Ajanthan Manickam",
    text: "Great work and customer service. Would definitely recommend.",
    rating: 5,
  },
];

/* ─────────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────────── */
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We service locations throughout the Greater Toronto Area (GTA) and surrounding areas. From Scarborough to Mississauga, and everywhere in between — we've been covering the GTA for over 30 years.",
  },
  {
    question: "Are you available 24/7?",
    answer:
      "Yes! We are available 24 hours a day, 365 days a year. Our emergency services team can respond to urgent situations at any time, ensuring your facility is always taken care of.",
  },
  {
    question: "What types of buildings do you service?",
    answer:
      "We service a wide range of facilities including high-rise and low-rise residential condominiums, commercial offices, retail spaces, industrial facilities, and more. We currently service 70+ residential condominium clients throughout the GTA.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer:
      "Absolutely. We use environmentally friendly Eco-label products that allow us to maintain a safe and green work environment while supporting environmental sustainability initiatives.",
  },
  {
    question: "How do you ensure quality control?",
    answer:
      "Our management team conducts continuous follow ups and on-site inspections. We provide regular monthly summary reports, continuous training & development for staff, and maintain strong communication with property management and boards of directors.",
  },
  {
    question: "Do you provide cleaning supplies?",
    answer:
      "Yes, we offer complete janitorial cleaning supplies including toilet paper, hand towels, hand soaps, garbage bags, dispensers, air fresheners, and more as part of our full-service offering.",
  },
  {
    question: "What safety training do your staff receive?",
    answer:
      "We put extensive focus on training our staff regarding WHMIS & Health and Safety procedures. We conduct thorough due-diligence before placing any team member at your site.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Contact us through our form, call us at 416-477-3714, or email info@topspotjanitorial.ca. One of our representatives will contact you within 24 hours to discuss your needs and provide a customized quote.",
  },
];

/* ─────────────────────────────────────────────────
   STATS
   ───────────────────────────────────────────────── */
export const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 70, suffix: "+", label: "Residential Clients" },
  { value: 250, suffix: "K+", label: "Sq Ft Managed" },
  { value: 24, suffix: "/7", label: "Availability" },
];

/* ─────────────────────────────────────────────────
   COMPANY INFO
   ───────────────────────────────────────────────── */
export const companyInfo = {
  name: "Top Spot Janitorial Services Inc.",
  phone: "416-477-3714",
  email: "info@topspotjanitorial.ca",
  address: "210 Silverstar Blvd - Unit 826",
  city: "Scarborough, ON M1V 5J9",
  hours: {
    weekday: "Monday – Friday: 9:00 AM – 4:30 PM",
    weekend: "Saturday & Sunday: Closed",
  },
  founded: 2001,
  tagline:
    "Toronto's premier janitorial service leader for high-rise residential condominiums and commercial facilities since 2001",
};
