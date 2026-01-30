import type { Locale } from "@/data/locale";

export type LearningSectionMessages = {
  title: string; // heading on top
  typing: string; // multi-line typed text
  trackLine: string; // the small bullet line
};

export const LEARNING_SECTION_MESSAGES: Record<Locale, LearningSectionMessages> = {
  en: {
    title: "LEARNING SYSTEM",
    typing:
      "At Mohib Model School, learning is built step-by-step — from Playgroup to Matric.\n\n" +
      "We focus on strong concepts, confident communication, and disciplined classroom routines.\n\n" +
      "Daily practice, caring teachers, and board-focused preparation help students improve steadily — with clarity, confidence, and consistency.",
    trackLine: "• Playgroup • Primary • Middle • Matric • Board Preparation",
  },

  ur: {
    title: "نظامِ تعلیم",
    typing:
      "محب ماڈل اسکول میں تعلیم مرحلہ وار دی جاتی ہے — پلے گروپ سے میٹرک تک۔\n\n" +
      "ہم مضبوط تصورات، بااعتماد اظہار اور نظم و ضبط پر مبنی کلاس روم روٹین پر توجہ دیتے ہیں۔\n\n" +
      "روزانہ مشق، مخلص اساتذہ اور بورڈ فوکس تیاری کے ذریعے طلبہ مسلسل بہتر ہوتے ہیں — وضاحت، اعتماد اور تسلسل کے ساتھ۔",
    trackLine: "• پلے گروپ • پرائمری • مڈل • میٹرک • بورڈ تیاری",
  },
};
