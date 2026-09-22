export type Review = {
  id: string;
  name: string;
  location?: string;
  rating?: number;
  text: string;
  photo?: string;
  source?: string;
};

/** Testimonials published on govindtyreandauto.com.au — “What Our Customers Say”. */
export const featuredReviews: Review[] = [
  {
    id: "michael-hub",
    name: "Michael R.",
    location: "Blacktown, NSW",
    rating: 5,
    text: "I had vibrations in my steering wheel after fitting aftermarket wheels. Hub rings from Govind Tyre & Auto fixed it instantly. Smooth ride now!",
  },
  {
    id: "sarah-spacers",
    name: "Sarah L.",
    location: "Parramatta, NSW",
    rating: 5,
    text: "Got wheel spacers installed here – my car now has the aggressive stance I wanted. Handling feels more stable too. Great job!",
  },
  {
    id: "jason-bolts",
    name: "Jason P.",
    location: "Penrith, NSW",
    rating: 5,
    text: "Needed stronger bolts and nuts for my 4WD wheels. Govind Tyre & Auto had the best quality parts at a great price!",
  },
  {
    id: "emma-accessories",
    name: "Emma W.",
    location: "Liverpool, NSW",
    rating: 5,
    text: "Fantastic service! They explained everything clearly and fitted my accessories perfectly. Highly professional team.",
  },
];

/** Testimonials published on govindtyreandauto.com.au — “Real Stories from Real Customers”. */
export const customerStories: Review[] = [
  {
    id: "michael-tyres",
    name: "Michael R",
    text: "Got my tyres replaced here and the service was top-notch. The team was friendly, quick, and explained everything clearly. My car drives so much smoother now. Highly recommended!",
  },
  {
    id: "sarah-alignment",
    name: "Sarah L",
    text: "Went in for a wheel alignment and balancing. The difference is unbelievable! The car feels brand new again. Thanks Govind Tyre & Auto for the professional service.",
  },
  {
    id: "priya-logbook",
    name: "Priya",
    text: "The logbook service was done perfectly and at a much better price than the dealership quoted me. Honest, professional, and trustworthy mechanics!",
  },
];

export const reviews = featuredReviews;

/** Google reviews shown on govindtyreandauto.com.au/tyre-auto-services/ */
export const googleReviews: Review[] = [
  {
    id: "shivang-vakil",
    name: "Shivang Vakil",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVV7wd0PU_lwXkaiIZgI_qZIi_bKr5FjoEEVeyRve7qy2AD6iNAHg=s80-c",
    text: "Quick flat tyre repair. Excellent Service.",
  },
  {
    id: "lloyd-elias",
    name: "Lloyd Elias",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocIVAcH_rZ6iC5YmO3vForlyumfWIDrafGg3l5Abw0uawiWuUg=s80-c",
    text: "Thank you friendly and fair pricing",
  },
  {
    id: "jonathon-marriott",
    name: "Jonathon Marriott",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocJLYpdHowLqwoaZte9MOIxl4G_25C4Cv5vStMpwtot0tqt_FQ=s80-c",
    text: "Very friendly and honest service. And open on a Sunday which was very helpful for our tyre issue while travelling!",
  },
  {
    id: "mani-bajwa",
    name: "Mani Bajwa",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjXSEvXaNhBeVsgtGt4i7IGdyMiZJrj0afW37LaTtM7T-EJYRj3W=s80-c",
    text: "Great service, knowledgeable and trustworthy.",
  },
  {
    id: "namir-asmaro",
    name: "Namir Asmaro",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocLmg1mSEpzsU_sFJkaes-unv-25WjzsL-UzshqIidtMa48rVw=s80-c",
    text: "Very very helpful and great customer service. The guys fixed my flat tyre straight away at a very good price. Highly Recommended",
  },
  {
    id: "kartik-thakur",
    name: "Kartik Thakur",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVx9bCh_e2-CxNISvN9j4QlUSe48MQjQA4iJTvo6S58UIkPX7vJ=s80-c",
    text: "Best service they repaired my tyre and instal new that quality is best",
  },
  {
    id: "gurinder-sidhu",
    name: "Gurinder Sidhu",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocLu5FXCk3AAthyoVsPM_AUSub2yaq-w0wjY84sE5idGh-EqGQ=s80-c",
    text: "I am very pleased with tyre replacement and found the staff professional and helpful. Highly recommended",
  },
  {
    id: "tomasz-brulinski",
    name: "Tomasz Brulinski",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a/ACg8ocJPATvo8BJmYpQ-DMGhRsaYZeFO6spG629Odt-TKNTetYo8uA=s80-c",
    text: "Fair and honest pricing. I trust them with our vehicles",
  },
  {
    id: "rajat-kumar",
    name: "Rajat kumar",
    rating: 5,
    source: "Posted on Google",
    photo:
      "https://lh3.googleusercontent.com/a-/ALV-UjVFoi_kYSJ79Rb6FdKIrlqSvROWEgyz25h_QwXLwMSOo0TqdJk=s80-c",
    text: "I am their customer from last couple of years. They provide very good services at reasonable price. So everyone must visit their place.",
  },
];
