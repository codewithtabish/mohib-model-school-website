import type { Locale } from "@/data/locale";

export type AboutValueIcon =
  | "Users"
  | "Heart"
  | "Lightbulb"
  | "Sparkles"
  | "Rocket"
  | "Target"
  | "BookOpen"
  | "ShieldCheck"
  | "GraduationCap";

export type AboutValue = {
  title: string;
  description: string;
  icon: AboutValueIcon;
};

export type AboutSectionMessages = {
  title: string;
  subtitle: string;

  missionHeading: string;
  mission: string;

  visionHeading: string;
  vision: string;

  valuesHeading: string;
  valuesSubheading: string;

  values: AboutValue[];
};

export const ABOUT_SECTION_MESSAGES: Record<Locale, AboutSectionMessages> = {
  en: {
    title: "About Mohib Model School",
    subtitle:
      "A disciplined learning environment focused on academic excellence, strong values, and consistent board preparation.",

    missionHeading: "Our Mission",
    mission:
      "Our mission is to provide concept-based education in a safe and disciplined environment—helping students build strong foundations, confidence, and character for lifelong success.",

    visionHeading: "Our Vision",
    vision:
      "Our vision is to be a trusted school where every child grows into a responsible, confident, and high-achieving student through quality teaching and meaningful values.",

    valuesHeading: "Our Core Values",
    valuesSubheading:
      "The principles that guide our teachers, students, and every decision we make.",

    values: [
      {
        title: "Concept-Based Learning",
        description:
          "We teach with clarity and concepts—so students understand deeply, not just memorize.",
        icon: "BookOpen",
      },
      {
        title: "Discipline & Character",
        description:
          "We build strong habits, respect, and responsibility—inside and outside the classroom.",
        icon: "ShieldCheck",
      },
      {
        title: "Parent Partnership",
        description:
          "We believe parents and teachers grow a child together through consistent communication.",
        icon: "Users",
      },
      {
        title: "Excellence in Results",
        description:
          "Regular assessment and board preparation help students achieve outstanding outcomes.",
        icon: "GraduationCap",
      },
    ],
  },

  ur: {
    title: "محب ماڈل اسکول کے بارے میں",
    subtitle:
      "ایک منظم تعلیمی ماحول جہاں تعلیمی معیار، مضبوط اقدار اور مستقل بورڈ تیاری پر توجہ دی جاتی ہے۔",

    missionHeading: "ہمارا مشن",
    mission:
      "ہمارا مشن ایک محفوظ اور باقاعدہ ماحول میں تصوراتی تعلیم فراہم کرنا ہے—تاکہ طلبہ مضبوط بنیاد، اعتماد اور کردار کے ساتھ زندگی میں کامیاب ہوں۔",

    visionHeading: "ہمارا وژن",
    vision:
      "ہمارا وژن ایک قابلِ اعتماد اسکول بننا ہے جہاں ہر بچہ معیاری تدریس اور بامقصد اقدار کے ذریعے ذمہ دار، بااعتماد اور اعلیٰ کارکردگی والا طالب علم بنے۔",

    valuesHeading: "ہماری بنیادی اقدار",
    valuesSubheading:
      "وہ اصول جو ہمارے اساتذہ، طلبہ اور ہر فیصلے کی رہنمائی کرتے ہیں۔",

    values: [
      {
        title: "تصوراتی تعلیم",
        description:
          "ہم وضاحت اور تصورات کے ساتھ پڑھاتے ہیں—تاکہ طلبہ گہرائی سے سمجھیں، صرف رٹہ نہ لگائیں۔",
        icon: "BookOpen",
      },
      {
        title: "نظم و ضبط اور کردار سازی",
        description:
          "ہم کلاس کے اندر اور باہر اچھی عادات، احترام اور ذمہ داری پیدا کرتے ہیں۔",
        icon: "ShieldCheck",
      },
      {
        title: "والدین کے ساتھ شراکت",
        description:
          "ہم سمجھتے ہیں کہ والدین اور اساتذہ مسلسل رابطے کے ذریعے بچے کی بہتر تربیت کرتے ہیں۔",
        icon: "Users",
      },
      {
        title: "بہترین نتائج",
        description:
          "مسلسل جائزہ اور بورڈ تیاری طلبہ کو شاندار کارکردگی تک پہنچاتی ہے۔",
        icon: "GraduationCap",
      },
    ],
  },
};
