export const LOCALES = ["en", "ur"] as const;
export type Locale = (typeof LOCALES)[number];

export type TopStripMessages = {
  location: string;
  phone: string;
  hoursBadge: string;
  noticesLabel: string;
  noticesHref: string;
  ticker: string;
};

export const TOP_STRIP_MESSAGES = {
  en: {
    location: "Mohib Model School, Your Area, Your City",
    phone: "+92 315 9080887",
    hoursBadge: "🕒 Mon–Sat: 8:00 AM – 1:30 PM",
    noticesLabel: "📌 Notices",
    noticesHref: "/notices",
    ticker:
      "📣 Admissions for 2026 are open • Weekly quizzes + monthly tests • PTM updates regularly • Office hours: Mon–Sat 8:00 AM – 1:30 PM",
  },
  ur: {
    location: "محب ماڈل اسکول، آپ کا علاقہ، آپ کا شہر",
    phone: "+92 3xx xxxxxxx",
    hoursBadge: "🕒 پیر تا ہفتہ: صبح 8:00 بجے – دوپہر 1:30 بجے",
    noticesLabel: "📌 نوٹس",
    noticesHref: "/notices",
    ticker:
  "📣 2026 کے داخلے جاری ہیں • ہفتہ وار کوئز اور ماہانہ ٹیسٹ • PTM کی اپڈیٹس باقاعدگی سے • دفتری اوقات: پیر تا ہفتہ صبح 8:00 تا دوپہر 1:30"

  },
} as const satisfies Record<Locale, TopStripMessages>;
