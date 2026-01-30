import type { Locale } from "@/data/locale";

export type ImpactVideoMessages = {
  heading: string;
  typingText: string; // multi-line typing string
  bullets: string[];  // small bullet row
  videoSrc: string;
  thumbnailLight: string;
  thumbnailDark: string;
  thumbnailAlt: string;
};

export const IMPACT_VIDEO_MESSAGES: Record<Locale, ImpactVideoMessages> = {
  en: {
    heading: "SCHOOL IMPACT",
    typingText:
      "At our school, learning is built step-by-step — from Playgroup to Matric.\n\nWe focus on strong fundamentals, confident communication, and modern classroom methods.\n\nDaily practice, caring teachers, and board-focused preparation help students grow with clarity and confidence.",
    bullets: ["Campus Tour", "Learning Environment", "Student Confidence"],
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
    thumbnailLight: "https://startup-template-sage.vercel.app/hero-light.png",
    thumbnailDark: "https://startup-template-sage.vercel.app/hero-dark.png",
    thumbnailAlt: "School Video",
  },

  ur: {
    heading: "اسکول کا اثر",
    typingText:
      "ہمارے اسکول میں تعلیم مرحلہ وار دی جاتی ہے — پلے گروپ سے میٹرک تک۔\n\nہم مضبوط بنیاد، پُراعتماد گفتگو، اور جدید کلاس روم طریقوں پر توجہ دیتے ہیں۔\n\nروزانہ مشق، مخلص اساتذہ، اور بورڈ فوکس تیاری کے ذریعے طلبہ واضح سوچ اور اعتماد کے ساتھ آگے بڑھتے ہیں۔",
    bullets: ["کیمپس ٹور", "تعلیمی ماحول", "طلبہ کا اعتماد"],
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
    thumbnailLight: "https://startup-template-sage.vercel.app/hero-light.png",
    thumbnailDark: "https://startup-template-sage.vercel.app/hero-dark.png",
    thumbnailAlt: "اسکول ویڈیو",
  },
};
