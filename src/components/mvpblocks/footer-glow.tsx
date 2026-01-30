"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { FOOTER_MESSAGES } from "@/data/footer-data";

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

export default function Footer({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = FOOTER_MESSAGES[safeLocale];

  const withLocale = (href: string) => `/${safeLocale}${href === "/" ? "" : href}`;

  return (
    <footer className="relative z-10 mt-10 w-full overflow-hidden pt-16 pb-8">
      {/* ✅ Footer background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-48 right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/14 via-transparent to-transparent blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.03),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.07),transparent_45%)]" />
      </div>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl rounded-3xl border border-border bg-background/70 px-6 py-10 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
        dir={isUrdu ? "rtl" : "ltr"}
      >
        {/* inner sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

        {/* ✅ MAIN GRID */}
        <div
          className={cn(
            "relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-start",
            // In Urdu, we want BRAND on RIGHT and NAV on LEFT
            isUrdu && "md:grid-cols-[0.8fr_1.2fr]"
          )}
        >
          {/* ✅ BRAND + CONTACT */}
          <div className={cn("flex flex-col", isUrdu ? "items-end text-right" : "items-start text-left")}>
            <Link
              href={withLocale("/")}
              className={cn("group flex items-center gap-3", isUrdu && "flex-row-reverse")}
            >
              <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                <span className="relative text-sm font-bold tracking-wide">{t.brandShort}</span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-primary opacity-0 blur-md transition group-hover:opacity-20" />
              </div>

              <div className="leading-tight">
                <div className="text-base font-semibold text-foreground">{t.brandName}</div>
                <div className="text-xs text-muted-foreground">{t.tagline}</div>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm text-muted-foreground">{t.description}</p>

            {/* ✅ Contact items (icon side fixed for Urdu) */}
            <div className="mt-6 grid gap-3 text-sm">
              <a
                href={`mailto:${t.email}`}
                className={cn(
                  "group inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground",
                  isUrdu && "flex-row-reverse"
                )}
              >
                <span className="grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">{t.email}</span>
              </a>

              <a
                href={t.phoneHref}
                className={cn(
                  "group inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground",
                  isUrdu && "flex-row-reverse"
                )}
              >
                <span className="grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">{t.phone}</span>
              </a>

              <div className={cn("inline-flex items-start gap-2 text-foreground/80", isUrdu && "flex-row-reverse")}>
                <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <MapPin className="h-4 w-4" />
                </span>

                <div>
                  <div className="font-medium text-foreground/90">{t.campusTitle}</div>
                  <div className="text-sm text-muted-foreground">{t.campusAddress}</div>
                </div>
              </div>
            </div>

            {/* ✅ Socials (Urdu order fixed) */}
            <div className={cn("mt-6 flex flex-wrap items-center gap-2", isUrdu && "justify-end")}>
              <SocialLink
                href="https://facebook.com"
                label={t.socials.facebook}
                icon={<Facebook className="h-4 w-4" />}
              />
              <SocialLink
                href="https://instagram.com"
                label={t.socials.instagram}
                icon={<Instagram className="h-4 w-4" />}
              />
              <SocialLink
                href="https://youtube.com"
                label={t.socials.youtube}
                icon={<Youtube className="h-4 w-4" />}
              />
            </div>

            {/* ✅ CTA buttons (Urdu arrow direction fixed) */}
            <div className={cn("mt-6 flex flex-wrap gap-2", isUrdu && "justify-end")}>
              <Link
                href={withLocale("/admissions")}
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                {t.admissionsBtn}
                <span
                  className={cn(
                    "ml-2 transition-transform group-hover:translate-x-0.5",
                    isUrdu && "ml-0 mr-2 group-hover:-translate-x-0.5"
                  )}
                >
                  {isUrdu ? "←" : "→"}
                </span>
              </Link>

              <Link
                href={withLocale("/contact")}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-foreground/85 shadow-sm backdrop-blur transition hover:bg-accent hover:text-foreground"
              >
                {t.contactBtn}
              </Link>
            </div>
          </div>

          {/* ✅ NAV / QUICK LINKS */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div className={cn(isUrdu ? "text-right" : "text-left")}>
              <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                {t.exploreTitle}
              </div>
              <ul className="space-y-2">
                {t.nav.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <FooterLink href={withLocale(l.href)} label={l.label} isUrdu={isUrdu} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(isUrdu ? "text-right" : "text-left")}>
              <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                {t.quickLinksTitle}
              </div>
              <ul className="space-y-2">
                {t.nav.slice(5).map((l) => (
                  <li key={l.href}>
                    <FooterLink href={withLocale(l.href)} label={l.label} isUrdu={isUrdu} />
                  </li>
                ))}
                <li>
                  <FooterLink href={withLocale("/sign-in")} label={t.loginLabel} isUrdu={isUrdu} />
                </li>
              </ul>
            </div>

            {/* ✅ Map box */}
            <div className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div
                  className={cn(
                    "relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                    isUrdu && "sm:flex-row-reverse"
                  )}
                >
                  <div className={cn(isUrdu ? "text-right" : "text-left")}>
                    <div className="text-sm font-semibold text-foreground">{t.visitTitle}</div>
                    <div className="text-sm text-muted-foreground">{t.visitDesc}</div>
                  </div>

                  <a
                    href={t.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
                  >
                    {t.openMaps}
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition group-hover:translate-x-0.5",
                        isUrdu && "rotate-180 group-hover:-translate-x-0.5"
                      )}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-10 h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-70" />
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left",
            isUrdu && "sm:flex-row-reverse sm:text-right"
          )}
        >
          <span>
            © {new Date().getFullYear()} {t.brandName}. {t.rights}
          </span>

          <div className="flex flex-wrap items-center gap-3">
            <Link className="hover:text-foreground" href={withLocale("/privacy")}>
              {t.privacy}
            </Link>
            <Link className="hover:text-foreground" href={withLocale("/terms")}>
              {t.terms}
            </Link>
            <Link className="hover:text-foreground" href={withLocale("/contact")}>
              {t.support}
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  isUrdu,
}: {
  href: string;
  label: string;
  isUrdu: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div whileHover={reduce ? undefined : { x: isUrdu ? -2 : 2 }} transition={{ duration: 0.15 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 text-sm text-foreground/75 transition hover:text-foreground",
          isUrdu && "flex-row-reverse"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 opacity-0 transition group-hover:opacity-100" />
        <span className="underline-offset-4 group-hover:underline">{label}</span>
      </Link>
    </motion.div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/70 px-3 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur transition hover:bg-accent hover:text-foreground"
    >
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}
