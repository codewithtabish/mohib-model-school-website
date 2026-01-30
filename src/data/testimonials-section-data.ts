import type { Locale } from "@/data/locale";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  tag?: string;
};

export type TestimonialsMessages = {
  badges: string[];
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
  miniPoints: {
    title: string;
    desc: string;
  }[];
};

export const TESTIMONIALS_MESSAGES: Record<Locale, TestimonialsMessages> = {
  en: {
    badges: ["Parent Reviews", "Student Voices", "Real Feedback"],

    heading: "What Parents & Students Say",
    subheading:
      "Honest feedback that reflects our discipline, concept-based learning, and consistent assessment system.",

    testimonials: [
      {
        quote:
          "Mohib Model School has improved my child’s confidence and discipline. The teachers are cooperative and the assessments are consistent.",
        name: "Mrs. Ayesha Khan",
        role: "Parent (Grade 7)",
        avatarSrc: "/images/avatars/parent-1.jpg",
        tag: "Parent",
      },
      {
        quote:
          "The school focuses on concepts, not just cramming. Weekly quizzes and regular feedback helped me improve a lot in Math and English.",
        name: "Hamza Ahmed",
        role: "Student (Grade 9)",
        avatarSrc: "/images/avatars/student-1.jpg",
        tag: "Student",
      },
      {
        quote:
          "The environment is disciplined and safe. I’m impressed with the communication, PTM updates, and the way teachers guide students.",
        name: "Mr. Salman Tariq",
        role: "Parent (Grade 5)",
        avatarSrc: "/images/avatars/parent-2.jpg",
        tag: "Parent",
      },
      {
        quote:
          "Teachers explain topics clearly and the class tests keep us prepared. The school motivates us to work hard and stay focused.",
        name: "Hira Noor",
        role: "Student (Grade 8)",
        avatarSrc: "/images/avatars/student-2.jpg",
        tag: "Student",
      },
    ],

    miniPoints: [
      {
        title: "Disciplined Environment",
        desc: "Clear rules, respectful culture, and consistent classroom management.",
      },
      {
        title: "Concept-Based Learning",
        desc: "We focus on understanding first—then practice and performance.",
      },
      {
        title: "Regular Assessments",
        desc: "Weekly quizzes and monthly tests to keep students always prepared.",
      },
    ],
  },

  ur: {
    badges: ["والدین کے تاثرات", "طلبہ کی آراء", "حقیقی رائے"],

    heading: "والدین اور طلبہ کی رائے",
    subheading:
      "یہ آراء ہمارے نظم و ضبط، تصوراتی تعلیم، اور مسلسل جائزہ نظام کی عکاسی کرتی ہیں۔",

    testimonials: [
      {
        quote:
          "محب ماڈل اسکول نے میرے بچے کے اعتماد اور نظم و ضبط میں نمایاں بہتری پیدا کی ہے۔ اساتذہ تعاون کرنے والے ہیں اور جائزہ نظام بہترین ہے۔",
        name: "مسز عائشہ خان",
        role: "والدہ (جماعت 7)",
        avatarSrc: "/images/avatars/parent-1.jpg",
        tag: "والدہ",
      },
      {
        quote:
          "یہاں رٹہ نہیں بلکہ تصورات پر توجہ دی جاتی ہے۔ ہفتہ وار کوئزز اور مستقل فیڈبیک نے میری انگلش اور ریاضی بہتر کی۔",
        name: "حمزہ احمد",
        role: "طالب علم (جماعت 9)",
        avatarSrc: "/images/avatars/student-1.jpg",
        tag: "طالب علم",
      },
      {
        quote:
          "اسکول کا ماحول محفوظ اور باقاعدہ ہے۔ والدین اساتذہ رابطہ اور پی ٹی ایم سسٹم قابل تعریف ہے۔",
        name: "مسٹر سلمان طارق",
        role: "والد (جماعت 5)",
        avatarSrc: "/images/avatars/parent-2.jpg",
        tag: "والد",
      },
      {
        quote:
          "اساتذہ اسباق واضح انداز میں سمجھاتے ہیں اور ٹیسٹس ہمیں تیار رکھتے ہیں۔ اسکول ہمیں محنت پر ابھارتا ہے۔",
        name: "حرا نور",
        role: "طالبہ (جماعت 8)",
        avatarSrc: "/images/avatars/student-2.jpg",
        tag: "طالبہ",
      },
    ],

    miniPoints: [
      {
        title: "منظم تعلیمی ماحول",
        desc: "واضح اصول، باادب فضا اور مستقل کلاس روم نظم و ضبط۔",
      },
      {
        title: "تصوراتی تعلیم",
        desc: "پہلے سمجھ، پھر مشق اور کارکردگی پر توجہ۔",
      },
      {
        title: "مسلسل جائزہ",
        desc: "ہفتہ وار کوئزز اور ماہانہ امتحانات کے ذریعے تیاری۔",
      },
    ],
  },
};
