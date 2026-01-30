import type { Locale } from "@/data/locale";

export type MediaItem =
  | {
      id: string;
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      date?: string;
    }
  | {
      id: string;
      type: "video";
      poster: string;
      src: string; // mp4/webm
      alt: string;
      caption?: string;
      date?: string;
    };

export type GallerySectionMessages = {
  badges: {
    primary: string;
    secondary: string;
    tertiary: string;
    viewAll: string;
  };

  heading: string;
  subheading: string;

  modal: {
    photo: string;
    video: string;
    schoolLife: string;
    titleFallback: string;
    desc: string;
    viewFullGallery: string;
    seeEvents: string;
    tip: string;
    open: string;
  };

  media: MediaItem[];
};

export const GALLERY_SECTION_MESSAGES: Record<Locale, GallerySectionMessages> = {
  en: {
    badges: {
      primary: "Gallery",
      secondary: "Discover",
      tertiary: "Explore",
      viewAll: "View All",
    },

    heading: "Discover school moments",
    subheading:
      "Instagram-style Explore grid — photos and videos from classrooms, events, and achievements.",

    modal: {
      photo: "Photo",
      video: "Video",
      schoolLife: "School Life",
      titleFallback: "School Highlight",
      desc: "Add a short 1–2 line description for this moment (event name, class, or activity).",
      viewFullGallery: "View Full Gallery",
      seeEvents: "See Events",
      tip: "✅ Tip: Use mostly square crops for the best Instagram Explore look.",
      open: "Open",
    },

    media: [
      { id: "g1", type: "image", src: "/images/gallery/1.jpeg", alt: "Students presenting", caption: "Classroom activity", date: "Jan 2026" },
      { id: "g2", type: "image", src: "/images/gallery/2.jpeg", alt: "School assembly", caption: "Morning assembly", date: "Jan 2026" },
      { id: "g3", type: "image", src: "/images/gallery/12.jpg", alt: "Science lab", caption: "Science lab", date: "Dec 2025" },
      { id: "g4", type: "video", poster: "/images/gallery/4.jpg", src: "/videos/v-1.mp4", alt: "Sports day highlights", caption: "Sports Day", date: "Dec 2025" },
      { id: "g5", type: "image", src: "/images/gallery/4.jpg", alt: "Prize distribution", caption: "Prize distribution", date: "Nov 2025" },
      { id: "g6", type: "image", src: "/images/gallery/5.jpeg", alt: "Computer lab", caption: "Computer lab", date: "Nov 2025" },
      { id: "g7", type: "image", src: "/images/gallery/6.jpeg", alt: "Library corner", caption: "Library time", date: "Oct 2025" },
      { id: "g8", type: "video", poster: "/images/gallery/11.jpg", src: "/videos/v1.mp4", alt: "Annual day", caption: "Annual Day", date: "Oct 2025" },
      { id: "g9", type: "image", src: "/images/gallery/7.jpg", alt: "Art activity", caption: "Art activity", date: "Sep 2025" },
      { id: "g10", type: "image", src: "/images/gallery/8.jpg", alt: "Sports practice", caption: "Sports practice", date: "Sep 2025" },
      { id: "g11", type: "image", src: "/images/gallery/14.jpg", alt: "Classroom learning", caption: "Learning", date: "Aug 2025" },
      { id: "g12", type: "image", src: "/images/gallery/10.jpg", alt: "Lab session", caption: "Lab session", date: "Aug 2025" },
    ],
  },

  ur: {
    badges: {
      primary: "گیلری",
      secondary: "جھلکیاں",
      tertiary: "ایکسپلور",
      viewAll: "سب دیکھیں",
    },

    heading: "اسکول کے خوبصورت لمحات",
    subheading:
      "انسٹاگرام اسٹائل ایکسپلور گرڈ — کلاس روم، تقریبات اور کامیابیوں کی تصاویر اور ویڈیوز۔",

    modal: {
      photo: "تصویر",
      video: "ویڈیو",
      schoolLife: "اسکول لائف",
      titleFallback: "اسکول جھلکی",
      desc: "اس لمحے کے بارے میں 1–2 لائن مختصر وضاحت لکھیں (ایونٹ، کلاس یا سرگرمی).",
      viewFullGallery: "مکمل گیلری دیکھیں",
      seeEvents: "ایونٹس دیکھیں",
      tip: "✅ ٹِپ: بہتر ایکسپلور لُک کے لیے زیادہ تر تصاویر مربع (Square) کراپ میں رکھیں۔",
      open: "کھولیں",
    },

    media: [
      { id: "g1", type: "image", src: "/images/gallery/1.jpeg", alt: "طلبہ پریزنٹیشن", caption: "کلاس روم سرگرمی", date: "جنوری 2026" },
      { id: "g2", type: "image", src: "/images/gallery/2.jpeg", alt: "اسکول اسمبلی", caption: "صبح کی اسمبلی", date: "جنوری 2026" },
      { id: "g3", type: "image", src: "/images/gallery/12.jpg", alt: "سائنس لیب", caption: "سائنس لیب", date: "دسمبر 2025" },
      { id: "g4", type: "video", poster: "/images/gallery/4.jpg", src: "/videos/v-1.mp4", alt: "اسپورٹس ڈے ہائی لائٹس", caption: "اسپورٹس ڈے", date: "دسمبر 2025" },
      { id: "g5", type: "image", src: "/images/gallery/4.jpg", alt: "انعامات تقسیم", caption: "انعامات کی تقسیم", date: "نومبر 2025" },
      { id: "g6", type: "image", src: "/images/gallery/5.jpeg", alt: "کمپیوٹر لیب", caption: "کمپیوٹر لیب", date: "نومبر 2025" },
      { id: "g7", type: "image", src: "/images/gallery/6.jpeg", alt: "لائبریری", caption: "لائبریری ٹائم", date: "اکتوبر 2025" },
      { id: "g8", type: "video", poster: "/images/gallery/11.jpg", src: "/videos/v1.mp4", alt: "سالانہ تقریب", caption: "سالانہ تقریب", date: "اکتوبر 2025" },
      { id: "g9", type: "image", src: "/images/gallery/7.jpg", alt: "آرٹ سرگرمی", caption: "آرٹ سرگرمی", date: "ستمبر 2025" },
      { id: "g10", type: "image", src: "/images/gallery/8.jpg", alt: "کھیلوں کی پریکٹس", caption: "کھیلوں کی پریکٹس", date: "ستمبر 2025" },
      { id: "g11", type: "image", src: "/images/gallery/14.jpg", alt: "کلاس روم لرننگ", caption: "سیکھنا", date: "اگست 2025" },
      { id: "g12", type: "image", src: "/images/gallery/10.jpg", alt: "لیب سیشن", caption: "لیب سیشن", date: "اگست 2025" },
    ],
  },
};
