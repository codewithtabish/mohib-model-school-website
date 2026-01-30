import type { Locale } from "@/data/locale";

export type Course = {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  students: number;
  duration: string;
};

export type PopularCoursesMessages = {
  heading: string;
  subtitle: string;
  courses: Course[];
};

export const POPULAR_COURSES_MESSAGES: Record<Locale, PopularCoursesMessages> = {
  en: {
    heading: "Popular Courses",
    subtitle:
      "Mohib Model School offers skill-based and academic support courses designed to strengthen communication, technical knowledge, and student confidence.",
    courses: [
      {
        id: "1",
        title: "Spoken English Course",
        author: "Certified English Instructors",
        description:
          "A confidence-building spoken English course designed to improve pronunciation, vocabulary, grammar, and daily conversation skills for students of all levels.",
        price: 0,
        image: "/images/courses/english.jpg",
        students: 150,
        duration: "3 Months",
      },
      {
        id: "2",
        title: "Computer Studies",
        author: "Qualified Computer Teachers",
        description:
          "This course introduces students to computer fundamentals including typing skills, MS Word, PowerPoint, internet usage, and basic digital awareness.",
        price: 0,
        image: "/images/courses/computer.jpg",
        students: 120,
        duration: "3 Months",
      },
    ],
  },

  ur: {
    heading: "مقبول کورسز",
    subtitle:
      "محب ماڈل اسکول میں مہارت پر مبنی اور تعلیمی معاون کورسز فراہم کیے جاتے ہیں تاکہ کمیونیکیشن، ٹیکنیکل علم اور طلبہ کا اعتماد مضبوط ہو۔",
    courses: [
      {
        id: "1",
        title: "اسپوکن انگلش کورس",
        author: "مصدقہ انگلش انسٹرکٹرز",
        description:
          "یہ کورس تلفظ، الفاظ، گرامر اور روزمرہ گفتگو بہتر بنانے کے لیے ڈیزائن کیا گیا ہے تاکہ طلبہ میں اعتماد اور روانی پیدا ہو۔",
        price: 0,
        image: "/images/courses/english.jpg",
        students: 150,
        duration: "3 ماہ",
      },
      {
        id: "2",
        title: "کمپیوٹر اسٹڈیز",
        author: "ماہر کمپیوٹر اساتذہ",
        description:
          "اس کورس میں کمپیوٹر کی بنیادی معلومات، ٹائپنگ، ایم ایس ورڈ، پاورپوائنٹ، انٹرنیٹ استعمال اور ڈیجیٹل آگاہی شامل ہے۔",
        price: 0,
        image: "/images/courses/computer.jpg",
        students: 120,
        duration: "3 ماہ",
      },
    ],
  },
};
