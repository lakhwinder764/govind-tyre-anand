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

export const valueProps = [
  {
    title: "Affordable Pricing",
    text: "Fair, transparent rates",
  },
  {
    title: "Expert Mechanics",
    text: "Years of proven experience",
  },
  {
    title: "Quality Guaranteed",
    text: "Only genuine parts & trusted brands",
  },
  {
    title: "7 Days a Week",
    text: "We’re here when you need us",
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
