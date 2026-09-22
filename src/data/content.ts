import { stock, wp } from "./media";

export type Service = {
  id: string;
  title: string;
  href: string;
  image: string;
  summary: string;
};

export const homeServices: Service[] = [
  {
    id: "tyre-repair",
    title: "Tyre repair",
    href: "/tyres",
    image: stock.tyreClose,
    summary: "Quick puncture repair and safe, durable fixes.",
  },
  {
    id: "new-tyre",
    title: "New tyre",
    href: "/tyres",
    image: stock.highway,
    summary: "Top-quality tyres from trusted brands, fitted by experts.",
  },
  {
    id: "balancing",
    title: "Tyre Balancing",
    href: "/wheels",
    image: stock.wheels,
    summary: "Precision balancing for a smoother, safer drive.",
  },
  {
    id: "alignment",
    title: "Wheel alignment",
    href: "/wheels",
    image: stock.alignment,
    summary: "Accurate alignment to keep you running straight.",
  },
  {
    id: "logbook",
    title: "Logbook Service",
    href: "/mechanic",
    image: stock.mechanic,
    summary: "Manufacturer-compliant servicing with genuine parts.",
  },
  {
    id: "lift-kit",
    title: "Lift kit",
    href: "/4x4-accessories",
    image: stock.fourByFour,
    summary: "Professionally fitted lift kits for clearance and capability.",
  },
  {
    id: "mechanical",
    title: "Mechanical repair",
    href: "/mechanic",
    image: stock.workshop,
    summary: "Engine, brakes, suspension and diagnostic repairs.",
  },
  {
    id: "ac",
    title: "Air conditioning",
    href: "/mechanic",
    image: stock.garage,
    summary: "AC regas, leak detection and ice-cold performance.",
  },
];

export const highlightCards = [
  {
    title: "20+ Years of Experience",
    image: wp("2025/08/Gemini_Generated_Image_9s8i8q9s8i8q9s8i-1-1024x1024.png"),
  },
  {
    title: "Certified Technicians",
    image: wp("2025/08/32489488ffbe8effdc272109b26150d9.jpg"),
  },
  {
    title: "Affordable Pricing",
    image: wp("2025/08/5aaecb25403dbe63224f22495e81fd81.jpg"),
  },
  {
    title: "Fast & Reliable",
    image: wp("2025/08/073fe603c183157217fce4b70df7728f.jpg"),
  },
  {
    title: "Customer Satisfaction",
    image: wp("2025/08/0c00ad1a382dff7de84f1b27187dfabb.jpg"),
  },
];

export const valueProps = [
  {
    icon: "pricing" as const,
    title: "Affordable Pricing",
    text: "Fair, transparent rates",
  },
  {
    icon: "mechanics" as const,
    title: "Expert Mechanics",
    text: "Years of proven experience",
  },
  {
    icon: "quality" as const,
    title: "Quality Guaranteed",
    text: "Only genuine parts & trusted brands",
  },
  {
    icon: "days" as const,
    title: "7 Days a Week",
    text: "We’re here when you need us",
  },
];

export const quickOverview = [
  {
    id: "wheel-services",
    title: "Wheel Services",
    href: "/wheels",
    image: stock.wheelFit,
  },
  {
    id: "tyre-services",
    title: "Tyre Services",
    href: "/tyres",
    image: stock.tyreStack,
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    href: "/4x4-accessories",
    image: stock.consult,
  },
  {
    id: "vehicle-maintenance",
    title: "Vehicle Maintenance",
    href: "/mechanic",
    image: stock.maintenance,
  },
];

export const tyreTips = [
  {
    title: "Check Tyre Pressure Regularly",
    text: "Tip: Keep your tyres inflated to the recommended pressure. Proper inflation improves fuel efficiency and safety.",
  },
  {
    title: "Rotate Your Tyres Every 6,200 Miles 6,200 miles",
    text: "Tip: Rotating your tyres ensures even wear, improving performance and fuel efficiency — especially important for frequent highway or rural drives.",
  },
  {
    title: "Inspect for Wear and Damage",
    text: "Tip: Look for cuts, bulges, or uneven wear. Replace damaged tyres promptly.",
  },
  {
    title: "Avoid Overloading Your Vehicle",
    text: "Tip: Excess weight stresses tyres and reduces their lifespan. Stick to load limits.",
  },
];

export const mechanicServices = [
  {
    title: "Pink Slip / Vehicle Inspection",
    image: wp("2025/09/unnamed-8-1.png"),
    copy: "Ensure your vehicle meets all safety and roadworthiness standards with our thorough Pink Slip inspections. Our certified technicians handle everything quickly and accurately.",
    points: [
      "Fast and reliable inspection",
      "Certified technicians",
      "Compliance with all regulations",
    ],
  },
  {
    title: "Battery Replacement",
    image: wp("2025/09/unnamed-9-1.png"),
    copy: "Never get stranded with a dead battery. We offer high-quality batteries and efficient installation services to keep your car running smoothly.",
    points: [
      "Free battery testing",
      "Quick replacement",
      "Long-lasting performance",
    ],
  },
  {
    title: "Air Conditioning Services",
    image: wp("2025/09/unnamed-10.png"),
    copy: "Beat the heat with our expert air conditioning servicing. From recharge to repair, we make sure your car’s climate system works perfectly.",
    points: [
      "AC recharge and repair",
      "Leak detection",
      "Complete system check",
    ],
  },
  {
    title: "Mechanical Repairs",
    image: wp("2025/09/unnamed-11.png"),
    copy: "From engine troubles to suspension fixes, our experienced team handles all mechanical repairs with precision. Quality and safety are guaranteed.",
    points: [
      "Engine and transmission repair",
      "Brake and suspension maintenance",
      "Professional diagnostic service",
    ],
  },
  {
    title: "Logbook Service",
    image: wp("2025/09/Gemini_Generated_Image_2sq3t2sq3t2sq3t2-1.png"),
    copy: "Maintain your manufacturer’s warranty with our expert logbook servicing. We follow all service schedules and record every detail accurately.",
    points: [
      "Manufacturer-compliant servicing",
      "Genuine parts and oils",
      "Transparent service records",
    ],
  },
];

export const wheelServices = [
  {
    title: "Wheel Alignment",
    image: wp("2025/09/unnamed-15.png"),
    copy: "Keep your car running straight and safe with accurate wheel alignment. Misaligned wheels can cause uneven tyre wear and handling issues—our specialists make sure everything is perfectly aligned.",
    points: [
      "Improved handling & safety",
      "Even tyre wear",
      "Advanced alignment technology",
    ],
  },
  {
    title: "Custom Wheels & Lift Kits",
    image: wp("2025/09/unnamed-16.png"),
    copy: "Transform your vehicle’s look and performance with our range of custom wheels and lift kits. Whether you want a stylish upgrade or off-road capability, we’ve got you covered.",
    points: [
      "Stylish custom wheel options",
      "Lift kits for off-road performance",
      "Expert installation and advice",
    ],
  },
  {
    title: "Wheel Balancing",
    image: wp("2025/09/unnamed-14.png"),
    copy: "Ensure a smoother and safer drive with our precision wheel balancing services. Properly balanced wheels reduce vibrations, extend tyre life, and improve fuel efficiency.",
    points: [
      "Advanced balancing equipment",
      "Smoother ride experience",
      "Extended tyre lifespan",
    ],
  },
];

export const fourByFourOfferings = [
  {
    title: "Lift Kits",
    image: wp("2025/09/shopping.webp"),
    copy: "Boost your clearance make room for larger tyres with professionally fitted lift kits.",
    points: [
      "Uses: Better ground clearance, improved off-road capability, and rugged styling.",
      "Benefits: Protects your underbody from rocks and uneven terrain.",
    ],
  },
  {
    title: "Snorkels",
    image: wp("2025/09/shopping-1.webp"),
    copy: "Tackle water crossings and dusty trails without worrying about your engine.",
    points: [
      "Uses: Keeps air intake high and clean.",
      "Benefits: Prevents engine damage and improves efficiency in tough conditions.",
    ],
  },
  {
    title: "Heavy-Duty Roof Racks",
    image: wp("2025/09/shopping-2.webp"),
    copy: "Carry more gear without compromising space inside your vehicle.",
    points: [
      "Uses: Perfect for camping gear, tools, recovery equipment, and extra tyres.",
      "Benefits: Strong, secure, and ready for heavy loads.",
    ],
  },
];

export const contactServices = [
  "Tyre Repair & New Tyres",
  "Wheel Balancing & Alignment",
  "Logbook Service",
  "Lift Kits & New Wheels",
  "Mechanical Repairs",
  "Pink Slip / eSafety Inspections",
  "Battery Replacement",
  "Air Conditioning Services",
];

export const galleryImages = [
  {
    src: wp("2025/10/2025-06-29.webp"),
    alt: "Govind Tyre & Auto workshop vehicle",
  },
  {
    src: wp("2025/10/2025-06-29-1.webp"),
    alt: "Workshop service at Govind Tyre & Auto",
  },
  {
    src: wp("2025/10/2025-09-04.webp"),
    alt: "Tyre and wheel work in Arndell Park",
  },
  {
    src: wp("2025/10/2025-06-29-2.webp"),
    alt: "Fitted wheels at Govind Tyre & Auto",
  },
  {
    src: wp("2025/10/WhatsApp-Image-2025-10-10-at-1.56.30-PM.jpeg"),
    alt: "Workshop photo from Govind Tyre & Auto",
  },
  {
    src: wp("2025/10/WhatsApp-Image-2025-10-11-at-7.52.41-AM-1.jpeg"),
    alt: "Vehicle in the Arndell Park workshop",
  },
  {
    src: wp("2025/10/WhatsApp-Image-2025-10-11-at-7.52.41-AM.jpeg"),
    alt: "Service bay at Govind Tyre & Auto",
  },
  {
    src: wp("2025/10/WhatsApp-Image-2025-10-11-at-7.52.40-AM.jpeg"),
    alt: "Customer vehicle being serviced",
  },
  {
    src: wp("2025/10/WhatsApp-Image-2025-10-10-at-1.56.30-PM-2.jpeg"),
    alt: "Tyre and auto work in progress",
  },
  {
    src: wp("2026/02/WhatsApp-Image-2026-02-13-at-2.48.05-PM.jpeg"),
    alt: "Completed wheel and tyre fitment",
  },
  {
    src: wp("2026/03/12e0683d-f416-4ff5-a937-313beb213b4d-scaled.jpg"),
    alt: "Govind Tyre & Auto workshop photo",
  },
  {
    src: wp("2026/03/7ca8e272-24a1-407e-90d6-8932abd6a52c.jpg"),
    alt: "Vehicle detailing and service result",
  },
];

export const tyreAutoOfferings = [
  { title: "Tyre Repair & Replacement", icon: "tyre" },
  { title: "New Tyres and Wheels", icon: "wheels" },
  { title: "Wheel Alignment", icon: "alignment" },
  { title: "Wheel Balancing", icon: "balancing" },
  { title: "Brake Service & Repairs", icon: "brakes" },
  { title: "Logbook & Scheduled Servicing", icon: "logbook" },
  { title: "Mechanical Repairs & Diagnostics", icon: "mechanical" },
  { title: "Battery Testing & Replacement", icon: "battery" },
  { title: "4×4 Upgrades & Lift Kits", icon: "fourByFour" },
  { title: "Pink Slip / eSafety Inspection", icon: "pinkSlip" },
  { title: "Air Conditioning Service / Regasn", icon: "airCon" },
] as const;

export const tyreAutoTrust = [
  { title: "Certified Technicians", icon: "certified" },
  { title: "Affordable Price", icon: "price" },
  { title: "Fast Response", icon: "fast" },
  { title: "⭐ 4.9/5 Rated", icon: "rated" },
] as const;

export const tyreAutoServices = [
  {
    title: "Tyre Repair & Replacement",
    icon: "tyre",
    text: "Fast puncture repair, tyre change, and premium brand fittings with free pressure & safety checks.",
  },
  {
    title: "Wheel Alignment",
    icon: "alignment",
    text: "Precision alignment that stops pulling, improves steering control, and protects tyre life.",
  },
  {
    title: "Wheel Balancing",
    icon: "balancing",
    text: "Eliminate vibrations at high speed with expert machine balancing for a smoother, safer ride.",
  },
  {
    title: "Brake Service & Repairs",
    icon: "brakes",
    text: "Brake pads, rotors, and full brake system diagnosis to ensure maximum stopping power.",
  },
  {
    title: "Logbook & Scheduled Servicing",
    icon: "logbook",
    text: "Manufacturer-approved servicing that keeps your warranty valid and your vehicle performing at its best.",
  },
  {
    title: "Mechanical Repairs",
    icon: "mechanical",
    text: "Suspension, steering, engine diagnostics, cooling system, and all general mechanical repairs.",
  },
  {
    title: "Battery Testing & Replacement",
    icon: "battery",
    text: "Free battery check + fast, warranty-backed battery replacement with on-site installation.",
  },
  {
    title: "New Tyres (All Brands & Budgets)",
    icon: "tyre",
    text: "Huge range of tyres for SUVs, sedans, 4x4s & commercial vehicles — tyres fitted same day.",
  },
  {
    title: "Air Conditioning Service / Regas",
    icon: "airCon",
    text: "AC diagnostics, leak check, and regassing to keep your cabin cool and comfortable.",
  },
  {
    title: "Suspension & Steering Repairs",
    icon: "suspension",
    text: "Shock absorbers, struts, and steering components repaired for a stable, comfortable ride.",
  },
] as const;

export const quoteServices = [
  "Tyre repair",
  "New tyre",
  "Balancing",
  "Wheel alignment",
  "Logbook Service",
  "Lift kit",
  "New wheels",
  "Pinkslip",
  "Battrey",
  "Air conditioning",
  "Mechanical repair",
  "Other",
] as const;
