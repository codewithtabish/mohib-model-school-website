"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";

import { HERO_MESSAGES, HERO_CAROUSEL_MESSAGES } from "@/data/hero-section-data";
import HeroCarousel from "./hero-carousel";
import TypewriterTitle from "@/components/kokonutui/type-writer";

export default function HeroSection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = HERO_MESSAGES[safeLocale];
  const c = HERO_CAROUSEL_MESSAGES[safeLocale];

  const withLocale = (href: string) =>
    `/${safeLocale}${href === "/" ? "" : href}`;

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* ✅ CONTENT */}
        <div className={cn(isUrdu ? "lg:order-2 text-right" : "lg:order-1 text-left")}>
          {/* Badge */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-foreground/80"
          >
            {t.badge}
          </motion.div>

          {/* ✅ Title (Typewriter) */}
          <div className="">
{}
            <TypewriterTitle
              sequences={[
                { text: t.typewriter[0], deleteAfter: true, pauseAfter: 900 },
                { text: t.typewriter[1], deleteAfter: true, pauseAfter: 900 },
                { text: t.typewriter[2], deleteAfter: false, pauseAfter: 1200 },
              ]}
              typingSpeed={55}
              deleteSpeed={30}
              pauseBeforeDelete={950}
              startDelay={200}
              autoLoop
              loopDelay={1200}
              naturalVariance
            />
          </div>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "mt-6 flex flex-wrap gap-3",
              isUrdu ? "justify-end" : "justify-start"
            )}
          >
            <Link
              href={withLocale(t.primaryCtaHref)}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
            >
              {t.primaryCta}
            </Link>

            <Link
              href={withLocale(t.secondaryCtaHref)}
              className="rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:bg-accent"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>

        {/* ✅ CAROUSEL */}
        <div className={cn(isUrdu ? "lg:order-1" : "lg:order-2")}>
          {/* ✅ NOW heading + subheading WILL SHOW */}
          <div className={cn("mb-3", isUrdu ? "text-right" : "text-left")}>
            <h3 className="text-sm font-semibold text-foreground/90">
              {c.heading}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {c.subheading}
            </p>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
