export interface Member {
  id: number;
  name: string;
  role: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  imageUrl: string;
  socials: {
    tiktok?: string;
  };
}

export interface Article {
  id: number;
  title: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  date: string;
  category: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  imageUrl: string;
  excerpt: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  content: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
}

export interface FAQ {
  id: number;
  question: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  answer: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
}

export interface GalleryItem {
  id: number;
  title: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
  imageUrl: string;
}

export interface Strings {
  [key: string]: {
    id: string;
    en: string;
    ja: string;
    ko: string;
  };
}