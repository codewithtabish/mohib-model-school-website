import type { Locale } from "@/data/locale";

export type FeatureItem = {
  title: string;
  iconSrc: string; // image in /public
  iconAlt: string;
  description: string;
};

export type FeatureSectionMessages = {
  heading: string;
  subheading: string;
  items: FeatureItem[];
};

export const FEATURE_SECTION_MESSAGES: Record<Locale, FeatureSectionMessages> = {
  en: {
    heading: "A Strong Foundation for Academic Excellence",
    subheading:
      "Mohib Model School focuses on discipline, concept-based learning, and consistent assessment to help students grow academically and personally.",
    items: [
      {
        title: "Concept-Based Learning",
        iconSrc: "/images/feature/home.png",
        iconAlt: "Learning icon",
        description:
          "We focus on understanding concepts deeply instead of rote memorization, helping students build strong academic foundations.",
      },
      {
        title: "Qualified Teachers",
        iconSrc: "/images/feature/daycare.png",
        iconAlt: "Teachers icon",
        description:
          "Experienced and dedicated teachers guide students with clarity, discipline, and continuous academic support.",
      },
      {
        title: "Regular Assessments",
        iconSrc: "/images/feature/learning.png",
        iconAlt: "Assessment icon",
        description:
          "Weekly quizzes and monthly tests keep students prepared and help parents track academic progress.",
      },
      {
        title: "Small Class Attention",
        iconSrc: "/images/feature/outdoor.png",
        iconAlt: "Class icon",
        description:
          "Balanced class sizes ensure individual attention, better interaction, and improved student performance.",
      },
      {
        title: "Healthy Environment",
        iconSrc: "/images/feature/healthy-meal.png",
        iconAlt: "Healthy environment icon",
        description:
          "A clean, supportive atmosphere and healthy habits help students stay focused, active, and motivated.",
      },
      {
        title: "Events & Activities",
        iconSrc: "/images/feature/baloon.png",
        iconAlt: "Events icon",
        description:
          "Sports day, annual functions, and co-curricular activities build confidence, teamwork, and leadership skills.",
      },
    ],
  },

  ur: {
    heading: "تعلیمی بہترین کارکردگی کے لیے مضبوط بنیاد",
    subheading:
      "محب ماڈل اسکول میں نظم و ضبط، تصوراتی (Concept-based) تعلیم اور باقاعدہ اسیسمنٹ کے ذریعے طلبہ کی تعلیمی و شخصی ترقی پر توجہ دی جاتی ہے۔",
    items: [
      {
        title: "تصوراتی تعلیم",
        iconSrc: "/images/feature/home.png",
        iconAlt: "سیکھنے کی علامت",
        description:
          "ہم رٹہ لگانے کے بجائے تصورات کو گہرائی سے سمجھنے پر زور دیتے ہیں تاکہ تعلیمی بنیاد مضبوط ہو۔",
      },
      {
        title: "اہل اور تجربہ کار اساتذہ",
        iconSrc: "/images/feature/daycare.png",
        iconAlt: "اساتذہ کی علامت",
        description:
          "ہمارے اساتذہ واضح رہنمائی، نظم و ضبط اور مسلسل تعلیمی سپورٹ کے ساتھ طلبہ کی رہنمائی کرتے ہیں۔",
      },
      {
        title: "باقاعدہ اسیسمنٹ",
        iconSrc: "/images/feature/learning.png",
        iconAlt: "اسیسمنٹ کی علامت",
        description:
          "ہفتہ وار کوئزز اور ماہانہ ٹیسٹس کے ذریعے تیاری بہتر ہوتی ہے اور والدین کو پیش رفت معلوم رہتی ہے۔",
      },
      {
        title: "کم تعداد، زیادہ توجہ",
        iconSrc: "/images/feature/outdoor.png",
        iconAlt: "کلاس کی علامت",
        description:
          "متوازن کلاس سائز سے ہر طالب علم پر فرداً فرداً توجہ، بہتر تعامل اور کارکردگی میں بہتری آتی ہے۔",
      },
      {
        title: "صاف اور معاون ماحول",
        iconSrc: "/images/feature/healthy-meal.png",
        iconAlt: "صحت مند ماحول کی علامت",
        description:
          "صاف ستھرا اور مثبت ماحول طلبہ کو متحرک، پُراعتماد اور یکسو رکھتا ہے۔",
      },
      {
        title: "تقریبات اور سرگرمیاں",
        iconSrc: "/images/feature/baloon.png",
        iconAlt: "سرگرمیوں کی علامت",
        description:
          "اسپورٹس ڈے، سالانہ فنکشن اور ہم نصابی سرگرمیاں اعتماد، ٹیم ورک اور قیادت کی صلاحیت بڑھاتی ہیں۔",
      },
    ],
  },
};
