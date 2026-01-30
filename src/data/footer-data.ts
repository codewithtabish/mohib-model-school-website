import type { Locale } from "@/data/locale";

export type FooterNavItem = { label: string; href: string };

export type FooterMessages = {
  brandShort: string; // MMS
  brandName: string;  // Mohib Model School / محب ماڈل اسکول
  tagline: string;

  description: string;

  emailLabel: string;
  email: string;

  phoneLabel: string;
  phone: string;     // display
  phoneHref: string; // tel:

  campusTitle: string;
  campusAddress: string;

  admissionsBtn: string;
  contactBtn: string;

  exploreTitle: string;
  quickLinksTitle: string;

  nav: FooterNavItem[];
  loginLabel: string;

  visitTitle: string;
  visitDesc: string;
  openMaps: string;
  mapsHref: string;

  rights: string; // “All rights reserved.” / اردو
  privacy: string;
  terms: string;
  support: string;

  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
};

export const FOOTER_MESSAGES: Record<Locale, FooterMessages> = {
  en: {
    brandShort: "MMS",
    brandName: "Mohib Model School",
    tagline: "Learn • Grow • Lead",

    description:
      "Mohib Model School provides concept-based learning, disciplined training, and consistent assessments—helping students achieve excellent results and build strong character.",

    emailLabel: "Email",
    email: "info@mohibmodelschool.edu.pk",

    phoneLabel: "Phone",
    phone: "+92 XXX XXX XXXX",
    phoneHref: "tel:+92XXXXXXXXXX",

    campusTitle: "Campus Address",
    campusAddress: "Add your real address here (City, Area, Street).",

    admissionsBtn: "Admissions",
    contactBtn: "Contact Us",

    exploreTitle: "Explore",
    quickLinksTitle: "Quick Links",

    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Teachers", href: "/teachers" },
      { label: "Notices", href: "/notices" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    loginLabel: "Login",

    visitTitle: "Visit our campus",
    visitDesc: "Open in Google Maps for directions.",
    openMaps: "Open Maps",
    mapsHref: "https://maps.google.com",

    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",

    socials: {
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube",
    },
  },

  ur: {
    brandShort: "MMS",
    brandName: "محب ماڈل اسکول",
    tagline: "سیکھیں • بڑھیں • آگے بڑھیں",

    description:
      "محب ماڈل اسکول میں تصوراتی تعلیم، نظم و ضبط، اور مسلسل جائزہ نظام کے ذریعے طلبہ کے نتائج بہتر بنائے جاتے ہیں اور کردار سازی پر بھرپور توجہ دی جاتی ہے۔",

    emailLabel: "ای میل",
    email: "info@mohibmodelschool.edu.pk",

    phoneLabel: "فون",
    phone: "+92 XXX XXX XXXX",
    phoneHref: "tel:+92XXXXXXXXXX",

    campusTitle: "کیمپس کا پتہ",
    campusAddress: "اپنا مکمل پتہ یہاں شامل کریں (شہر، علاقہ، گلی/سڑک)۔",

    admissionsBtn: "داخلہ",
    contactBtn: "رابطہ کریں",

    exploreTitle: "معلومات",
    quickLinksTitle: "فوری لنکس",

    nav: [
      { label: "ہوم", href: "/" },
      { label: "ہمارے بارے میں", href: "/about" },
      { label: "داخلہ", href: "/admissions" },
      { label: "اکیڈمکس", href: "/academics" },
      { label: "اساتذہ", href: "/teachers" },
      { label: "نوٹس", href: "/notices" },
      { label: "گیلری", href: "/gallery" },
      { label: "رابطہ", href: "/contact" },
    ],
    loginLabel: "لاگ اِن",

    visitTitle: "کیمپس وزٹ کریں",
    visitDesc: "راستے کے لیے گوگل میپس میں کھولیں۔",
    openMaps: "میپس کھولیں",
    mapsHref: "https://maps.google.com",

    rights: "تمام حقوق محفوظ ہیں۔",
    privacy: "پرائیویسی",
    terms: "شرائط",
    support: "مدد",

    socials: {
      facebook: "فیس بک",
      instagram: "انسٹاگرام",
      youtube: "یوٹیوب",
    },
  },
};
