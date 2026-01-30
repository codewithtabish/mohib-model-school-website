import type { Locale } from "@/data/locale";

export type CtaMessages = {
  heading: string;
  subheading: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
};

export const CTA_MESSAGES: Record<Locale, CtaMessages> = {
  en: {
    heading: "Admissions Open for 2026",
    subheading:
      "Join a disciplined learning environment focused on academic excellence, character building, and board success.",
    primaryCta: "Start Admission",
    primaryHref: "/admissions",
    secondaryCta: "Contact School",
    secondaryHref: "/contact",
  },

  ur: {
    heading: "2026 کے داخلے جاری ہیں",
    subheading:
      "ایک منظم تعلیمی ماحول میں شامل ہوں جہاں تعلیمی معیار، کردار سازی، اور بورڈ کامیابی پر بھرپور توجہ دی جاتی ہے۔",
    primaryCta: "داخلہ شروع کریں",
    primaryHref: "/admissions",
    secondaryCta: "اسکول سے رابطہ",
    secondaryHref: "/contact",
  },
};
