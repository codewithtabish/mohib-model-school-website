import type { Locale } from "@/data/locale";

export type NavItem = {
  label: string;
  href: string;
};

export type NavbarMessages = {
  brand: string;
  tagline: string;
  login: string;
  notices: string;
  nav: NavItem[];
};

export const NAVBAR_MESSAGES: Record<Locale, NavbarMessages> = {
  en: {
    brand: "Mohib Model School",
    tagline: "Learn • Grow • Lead",
    login: "Login",
    notices: "Notices",
    nav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Teachers", href: "/teachers" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },

  ur: {
    brand: "محب ماڈل اسکول",
    tagline: "سیکھیں • بڑھیں • قیادت کریں",
    login: "لاگ اِن",
    notices: "نوٹس",
    nav: [
      { label: "ہوم", href: "/" },
      { label: "تعارف", href: "/about" },
      { label: "داخلہ", href: "/admissions" },
      { label: "تعلیمی شعبہ", href: "/academics" },
      { label: "اساتذہ", href: "/teachers" },
      { label: "گیلری", href: "/gallery" },
      { label: "رابطہ", href: "/contact" },
    ],
  },
};
