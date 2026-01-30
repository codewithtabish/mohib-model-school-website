// src/data/locale.ts

export type Locale = "en" | "ur";

/**
 * Safely normalize any value to a supported locale
 * Default: "en"
 */
export function getLocale(locale: unknown): Locale {
  return locale === "ur" ? "ur" : "en";
}

/**
 * Standard App Router params props
 * Use this for page.tsx and layout.tsx inside /[locale]
 */
export interface LocaleParams {
  params: {
    locale: Locale;
  };
}
