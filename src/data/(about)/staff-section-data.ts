import type { Locale } from "@/data/locale";

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  subject?: string;
  qualification?: string;
  experience?: string;
  bio?: string;
  photo?: string; // /public/images/staff/...
};

export type StaffSectionMessages = {
  title: string;
  description: string;

  labels: {
    qualification: string;
    experience: string;
    photoComingSoon: string;
  };

  members: StaffMember[];
};

export const STAFF_SECTION_MESSAGES: Record<Locale, StaffSectionMessages> = {
  en: {
    title: "Our Staff",
    description:
      "Meet the dedicated teachers and leadership team of Mohib Model School, committed to quality education, discipline, and student success.",

    labels: {
      qualification: "Qualification",
      experience: "Experience",
      photoComingSoon: "Photo coming soon",
    },

    members: [
      {
        id: "1",
        name: "AHMAD SHAH SAIB",
        role: "Principal",
        qualification: "BS E-Commerce",
        experience: "10+ Years",
        bio: "Focused on discipline, academic excellence, and overall student growth.",
        photo: "/images/staff/ahmad-two.jpeg",
      },
      {
        id: "2",
        name: "Senior Teacher",
        role: "Senior Teacher",
        subject: "Mathematics",
        qualification: "M.Sc Mathematics",
        experience: "8+ Years",
        bio: "Specializes in concept-based learning and board exam preparation.",
        photo: "/images/staff/math-teacher.jpg",
      },
      {
        id: "3",
        name: "English Teacher",
        role: "English Instructor",
        subject: "Spoken English",
        qualification: "M.A English",
        experience: "6+ Years",
        bio: "Helps students build confidence, pronunciation, and communication skills.",
        photo: "/images/staff/english-teacher.jpg",
      },
      {
        id: "4",
        name: "Computer Teacher",
        role: "Computer Instructor",
        subject: "Computer Studies",
        qualification: "BS Computer Science",
        experience: "5+ Years",
        bio: "Teaches computer basics, typing, MS Office, and digital awareness.",
        photo: "/images/staff/computer-teacher.jpg",
      },
    ],
  },

  ur: {
    title: "ہمارا عملہ",
    description:
      "محب ماڈل اسکول کے باصلاحیت اساتذہ اور انتظامیہ سے ملو—جو معیاری تعلیم، نظم و ضبط اور طلبہ کی کامیابی کے لیے پرعزم ہیں۔",

    labels: {
      qualification: "تعلیم",
      experience: "تجربہ",
      photoComingSoon: "تصویر جلد شامل کی جائے گی",
    },

    members: [
      {
        id: "1",
        name: "عبدال نعیم",
        role: "ڈائریکٹر",
        qualification: "بی ایس ای کامرس",
        experience: "10+ سال",
        bio: "نظم و ضبط، تعلیمی معیار اور طلبہ کی مجموعی تربیت پر خصوصی توجہ۔",
        photo: "/images/staff/ahmad-two.jpeg",
      },
      {
        id: "2",
        name: "سینئر ٹیچر",
        role: "سینئر ٹیچر",
        subject: "ریاضی",
        qualification: "ایم ایس سی ریاضی",
        experience: "8+ سال",
        bio: "تصوراتی تعلیم اور بورڈ امتحان کی تیاری میں مہارت۔",
        photo: "/images/staff/math-teacher.jpg",
      },
      {
        id: "3",
        name: "انگلش ٹیچر",
        role: "انگلش انسٹرکٹر",
        subject: "اسپوکن انگلش",
        qualification: "ایم اے انگلش",
        experience: "6+ سال",
        bio: "طلبہ میں اعتماد، تلفظ اور گفتگو کی مہارت بہتر بناتی ہیں۔",
        photo: "/images/staff/english-teacher.jpg",
      },
      {
        id: "4",
        name: "کمپیوٹر ٹیچر",
        role: "کمپیوٹر انسٹرکٹر",
        subject: "کمپیوٹر اسٹڈیز",
        qualification: "بی ایس کمپیوٹر سائنس",
        experience: "5+ سال",
        bio: "کمپیوٹر بنیادیات، ٹائپنگ، ایم ایس آفس اور ڈیجیٹل آگاہی پڑھاتے ہیں۔",
        photo: "/images/staff/computer-teacher.jpg",
      },
    ],
  },
};
