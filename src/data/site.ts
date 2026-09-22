import { wp } from "./media";

export const site = {
  name: "Govind Tyre & Auto",
  shortName: "Govind",
  legalName: "R N Automotive Pty Ltd T/A Govind Tyre & Auto",
  tagline: "Best Tyre Shop & Car Service in Sydney",
  description:
    "Premium tyres, wheel alignment, balancing, puncture repair & car servicing under one roof. Visit Govind Tyre & Auto for trusted service & best prices. Call now!",
  owner: "Rohin Sharma",
  phones: {
    mobile: "0439 374 511",
    mobileTel: "+61439374511",
    landline: "02 7256 6883",
    landlineTel: "+61272566883",
    whatsapp: "https://wa.me/61439374511",
  },
  email: "govindtyreandauto@gmail.com",
  address: {
    line: "8/14 Holbeche Road, Arndell Park, NSW 2148",
    mapsQuery: "8/14 Holbeche Road, Arndell Park, NSW 2148",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=8%2F14+Holbeche+Road%2C+Arndell+Park%2C+NSW+2148",
    embedUrl:
      "https://maps.google.com/maps?q=8/14%20Holbeche%20Road%2C%20Arndell%20Park%2C%20NSW%202148&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  hours: {
    weekdays: "Monday – Friday: 08:00 AM – 05:00 PM",
    saturday: "Saturday: 08:00 AM – 01:00 PM",
    sunday: "Sunday: 08:00 AM – 03:00 PM",
    homepageCopy:
      "At Govind Tyre & Auto, we’re here when you need us most. Our workshop operates Monday to Sunday, 08:00 AM – 05:00 PM, ensuring your car gets the care it deserves at a time that suits you. From tyre repairs to mechanical services, we’ve got you covered every day!",
  },
  social: {
    facebook: "https://www.facebook.com/share/1CcALgNwKp/",
    instagram: "https://www.instagram.com/govindtyreandauto/",
    tiktok: "https://www.tiktok.com/@govind.tyreauto",
  },
  logo: "/logo.png",
  badges: ["Quick Turnaround", "Honest Pricing", "20+ Years of Experience"],
} as const;

export type NavChild = {
  href: string;
  label: string;
  image?: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/tyre-auto-services",
    label: "Services",
    children: [
      {
        href: "/tyre-auto-services",
        label: "Tyre & Auto Services",
        image: wp("2025/10/2025-06-29.webp"),
      },
      {
        href: "/tyres",
        label: "Tyres",
        image: wp("2025/12/e97a15ec-a8b8-4292-b712-dc2d2cf0ca6a.png"),
      },
      {
        href: "/wheels",
        label: "Wheels",
        image: wp("2025/12/Wheel_AVID_AV-06_MATTE_BLACK2_8.webp"),
      },
      {
        href: "/mechanic",
        label: "Mechanical",
        image: wp("2025/09/unnamed-8-1.png"),
      },
      {
        href: "/car-accessories",
        label: "Car Accessories",
        image: wp("2025/09/hub-ring-1.jpg"),
      },
      {
        href: "/4x4-accessories",
        label: "4×4 Accessories",
        image: wp("2025/12/coil-spring-only-lift-kit-ford-next-gen-raptor-3.png"),
      },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export const footerLinks = navLinks.flatMap((item) =>
  item.children ? item.children : [{ href: item.href, label: item.label }],
);
