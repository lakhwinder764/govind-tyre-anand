export const wp = (path: string) =>
  `https://govindtyreandauto.com.au/wp-content/uploads/${path}`;

export const stock = {
  workshop:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=80",
  mechanic:
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=80",
  tyreClose:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
  sportsCar:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80",
  fourByFour:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=80",
  nightDrive:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
  alignment:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=80",
  wheels:
    "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=2000&q=80",
  highway:
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80",
  garage:
    "https://images.unsplash.com/photo-1632823471565-1ecdf59bc214?auto=format&fit=crop&w=2000&q=80",
  wheelFit:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
  tyreStack:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  consult:
    "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
  maintenance:
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
} as const;

export const videos = {
  hero: {
    src: "https://videos.pexels.com/video-files/2103099/2103099-hd_1920_1080_30fps.mp4",
    poster: stock.nightDrive,
  },
  workshop: {
    src: "https://videos.pexels.com/video-files/4482689/4482689-hd_1920_1080_25fps.mp4",
    poster: stock.mechanic,
  },
} as const;
