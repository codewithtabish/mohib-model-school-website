import type { Locale } from "@/data/locale";





export type HeroMessages = {
  badge: string;

  // ✅ Typewriter lines
  typewriter: [string, string, string];

  subtitle: string;

  primaryCta: string;
  primaryCtaHref: string;

  secondaryCta: string;
  secondaryCtaHref: string;
};

export const HERO_MESSAGES: Record<Locale, HeroMessages> = {
  en: {
    badge: "A local school with big goals",

    typewriter: [
      "Mohib Model School",
      "Where learning becomes a habit",
      "Strong basics • Bright futures",
    ],

    subtitle:
      "Strong academics, caring teachers, and a safe environment — helping students learn, grow, and lead with confidence.",

    primaryCta: "Admission Info",
    primaryCtaHref: "/admissions",

    secondaryCta: "View Notices",
    secondaryCtaHref: "/notices",
  },

  ur: {
    badge: "مقامی اسکول، بڑے خواب",

    typewriter: [
      "محب ماڈل اسکول",
      "جہاں سیکھنا عادت بن جاتا ہے",
      "مضبوط بنیاد • روشن مستقبل",
    ],

    subtitle:
      "مضبوط تعلیمی بنیاد، باصلاحیت اساتذہ اور محفوظ ماحول — تاکہ بچے اعتماد کے ساتھ سیکھیں، بڑھیں اور آگے بڑھیں۔",

    primaryCta: "داخلہ معلومات",
    primaryCtaHref: "/admissions",

    secondaryCta: "نوٹس دیکھیں",
    secondaryCtaHref: "/notices",
  },
};






export type HeroSlide = {
  src: string;      // must be in /public
  alt: string;
  caption?: string;
};

export type HeroCarouselMessages = {
  heading: string;
  subheading: string;
  slides: HeroSlide[];
};

export const HERO_CAROUSEL_MESSAGES: Record<Locale, HeroCarouselMessages> = {
  en: {
    heading: "A glimpse of school life",
    subheading: "Classrooms, activities, and moments that make learning memorable.",
    slides: [
      {
        src: "/images/hero/h1.jpeg",
        alt: "School building front view",
        caption: "A safe, welcoming campus for every child.",
      },
      {
        src: "/images/hero/h2.jpeg",
        alt: "Students in classroom",
        caption: "Focused classrooms with supportive teaching.",
      },
      {
        src: "/images/hero/3.jpg",
        alt: "School activity / event",
        caption: "Activities that build confidence and teamwork.",
      },
    ],
  },

  ur: {
    heading: "اسکول کی جھلکیاں",
    subheading: "کلاس روم، سرگرمیاں اور یادگار لمحات — جو سیکھنے کو خوبصورت بناتے ہیں۔",
    slides: [
      {
        src: "/images/hero/h1.jpeg",
        alt: "اسکول عمارت کا سامنے والا منظر",
        caption: "ہر بچے کے لیے محفوظ اور خوش آمدیدی ماحول۔",
      },
      {
        src: "/images/hero/h2.jpeg",
        alt: "کلاس روم میں طلبہ",
        caption: "بہتر تدریس کے ساتھ مؤثر کلاس روم۔",
      },
      {
        src: "/images/hero/3.jpg",
        alt: "اسکول سرگرمی / ایونٹ",
        caption: "سرگرمیاں جو اعتماد اور ٹیم ورک بڑھائیں۔",
      },
    ],
  },
};
