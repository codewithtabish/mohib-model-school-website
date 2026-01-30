import type { Locale } from "@/data/locale";

export type PrincipalMessageData = {
  badges: {
    primary: string;
    secondary: string;
  };

  heading: string;
  paragraph: string;

  points: string[];

  ctas: {
    learnMore: { label: string; href: string };
    contact: { label: string; href: string };
  };

  principal: {
    name: string;
    title: string;
    photoSrc: string;
    photoAlt: string;
  };

  officeHours: {
    label: string;
    value: string;
  };
};

export const PRINCIPAL_MESSAGE_DATA: Record<Locale, PrincipalMessageData> = {
  en: {
    badges: {
      primary: "Principal’s Message",
      secondary: "Leadership & Vision",
    },

    heading: "Building Character, Strengthening Concepts, Shaping Futures.",
    paragraph:
      "Welcome to Mohib Model School. Our goal is to provide a disciplined, caring, and academically strong environment where students build clarity in concepts, confidence in communication, and respect for values.",

    points: [
      "Concept-based learning to build strong academic foundations.",
      "Regular assessments to track progress and improve performance.",
      "A disciplined and secure environment that supports character building.",
    ],

    ctas: {
      learnMore: { label: "Learn More About Us", href: "/about" },
      contact: { label: "Contact School", href: "/contact" },
    },

    principal: {
      name: "AHMAD SHAH SAHIB",
      title: "Principal, Mohib Model School",
      photoSrc: "/images/staff/ahmad-two.jpeg",
      photoAlt: "Principal of Mohib Model School",
    },

    officeHours: {
      label: "Office Hours",
      value: "Mon–Sat • 8:00 AM – 1:30 PM",
    },
  },

  ur: {
    badges: {
      primary: "پرنسپل کا پیغام",
      secondary: "قیادت اور وژن",
    },

    heading: "کردار سازی، مضبوط تصورات، روشن مستقبل۔",
    paragraph:
      "محب ماڈل اسکول میں خوش آمدید۔ ہمارا مقصد ایک باقاعدہ، پرخلوص اور تعلیمی طور پر مضبوط ماحول فراہم کرنا ہے جہاں طلبہ تصورات میں وضاحت، اظہار میں اعتماد اور اقدار کا احترام سیکھیں۔",

    points: [
      "تصوراتی (Concept-based) طریقۂ تدریس تاکہ بنیاد مضبوط ہو۔",
      "باقاعدہ ٹیسٹ/اسیسمنٹ تاکہ کارکردگی بہتر بنائی جا سکے۔",
      "محفوظ اور باقاعدہ ماحول جو کردار سازی میں مدد دے۔",
    ],

    ctas: {
      learnMore: { label: "ہمارے بارے میں مزید", href: "/about" },
      contact: { label: "اسکول سے رابطہ", href: "/contact" },
    },

    principal: {
      name: "احمد شاہ صاحب",
      title: "پرنسپل، محب ماڈل اسکول",
      photoSrc: "/images/staff/ahmad-two.jpeg",
      photoAlt: "محب ماڈل اسکول کے پرنسپل",
    },

    officeHours: {
      label: "دفتری اوقات",
      value: "پیر تا ہفتہ • صبح 8:00 – دوپہر 1:30",
    },
  },
};
