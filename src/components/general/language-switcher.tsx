"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/data/locale";

type Props = {
  locale: Locale;
  className?: string;
};

/**
 * LanguageSwitcher (Mini Tab)
 * - Very compact segmented control
 * - EN | اردو
 * - Keeps current route, swaps locale
 * - Cookie saved for preference
 */
export default function LanguageSwitcher({ locale, className }: Props) {
  const pathname = usePathname();

  const buildHref = React.useCallback(
    (target: Locale) => {
      if (!pathname) return `/${target}`;

      const parts = pathname.split("/").filter(Boolean);
      if (parts[0] === "en" || parts[0] === "ur") {
        parts[0] = target;
        return "/" + parts.join("/");
      }

      return `/${target}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
    },
    [pathname]
  );

  const setCookie = (target: Locale) => {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-[10px] shadow-sm backdrop-blur",
        className
      )}
      aria-label="Language switch"
    >
      {/* EN */}
      <Link
        href={buildHref("en")}
        onClick={() => setCookie("en")}
        className={cn(
          "rounded-full px-2 py-0.5 font-semibold transition",
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>

      {/* Divider */}
      <span className="mx-0.5 text-muted-foreground/40">|</span>

      {/* اردو */}
      <Link
        href={buildHref("ur")}
        onClick={() => setCookie("ur")}
        className={cn(
          "rounded-full px-2 py-0.5 font-semibold transition",
          locale === "ur"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "ur" ? "page" : undefined}
      >
        اردو
      </Link>
    </div>
  );
}
