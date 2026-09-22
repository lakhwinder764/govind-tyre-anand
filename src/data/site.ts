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
  logo: "https://govindtyreandauto.com.au/wp-content/uploads/2025/08/Untitled-design-2.png",
  badges: ["Quick Turnaround", "Honest Pricing", "20+ Years of Experience"],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tyres", label: "Tyres" },
  { href: "/wheels", label: "Wheels" },
  { href: "/mechanic", label: "Mechanic" },
  { href: "/4x4-accessories", label: "4×4" },
  { href: "/car-accessories", label: "Accessories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
