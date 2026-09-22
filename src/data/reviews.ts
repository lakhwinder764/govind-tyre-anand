export type Review = {
  id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "michael-hub",
    name: "Michael R.",
    location: "Blacktown, NSW",
    rating: 5,
    date: "12 Mar 2026",
    text: "I had vibrations in my steering wheel after fitting aftermarket wheels. Hub rings from Govind Tyre & Auto fixed it instantly. Smooth ride now!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "sarah-spacers",
    name: "Sarah L.",
    location: "Parramatta, NSW",
    rating: 5,
    date: "28 Feb 2026",
    text: "Got wheel spacers installed here – my car now has the aggressive stance I wanted. Handling feels more stable too. Great job!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "jason-bolts",
    name: "Jason P.",
    location: "Penrith, NSW",
    rating: 5,
    date: "9 Feb 2026",
    text: "Needed stronger bolts and nuts for my 4WD wheels. Govind Tyre & Auto had the best quality parts at a great price!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "emma-accessories",
    name: "Emma W.",
    location: "Liverpool, NSW",
    rating: 5,
    date: "21 Jan 2026",
    text: "Fantastic service! They explained everything clearly and fitted my accessories perfectly. Highly professional team.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "michael-tyres",
    name: "Michael R",
    rating: 5,
    date: "4 Jan 2026",
    text: "Got my tyres replaced here and the service was top-notch. The team was friendly, quick, and explained everything clearly. My car drives so much smoother now. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "sarah-alignment",
    name: "Sarah L",
    rating: 5,
    date: "18 Dec 2025",
    text: "Went in for a wheel alignment and balancing. The difference is unbelievable! The car feels brand new again. Thanks Govind Tyre & Auto for the professional service.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "priya-logbook",
    name: "Priya",
    rating: 5,
    date: "2 Dec 2025",
    text: "The logbook service was done perfectly and at a much better price than the dealership quoted me. Honest, professional, and trustworthy mechanics!",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
];
