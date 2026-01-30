// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ur"] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // skip next internals, api, files, and admin
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // already localized
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // ✅ read preferred locale from cookie
  const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
  const preferredLocale: Locale =
    cookieLocale === "ur" || cookieLocale === "en" ? cookieLocale : defaultLocale;

  // redirect "/" or "/about" => "/ur" or "/ur/about" (based on cookie)
  const url = req.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// run on all paths except excluded ones
export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
