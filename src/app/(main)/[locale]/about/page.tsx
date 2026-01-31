// src/app/(main)/[locale]/about/page.tsx
import React from "react";
import type { Locale } from "@/data/locale";

import AboutUs1 from "@/components/mvpblocks/about-us-1";
import StaffSection from "@/components/general/about/staff-about-section";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;

  const locale: Locale = rawLocale === "ur" ? "ur" : "en";

  return (
    <div>
      {/* If these components don’t need locale, this is enough */}
      {/* If later they do → just pass locale={locale} */}
      <AboutUs1 locale={locale} />
      <StaffSection locale={locale} />
    </div>
  );
}
