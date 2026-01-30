"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { IMPACT_VIDEO_MESSAGES } from "@/data/impact-video-section-data";

function TypingText({
  text,
  speed = 22,
  startDelay = 450,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [out, setOut] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));

        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setTimeout(() => setShowCursor(false), 900);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  React.useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 520);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="whitespace-pre-wrap">
      {out}
      <span
        className={cn(
          "inline-block w-[10px] align-baseline",
          showCursor ? "opacity-100" : "opacity-0"
        )}
      >
        |
      </span>
    </span>
  );
}

export default function ImpactVideoSection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = IMPACT_VIDEO_MESSAGES[safeLocale];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        {/* Wave background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/wave.png')] bg-repeat-x bg-top opacity-60 dark:opacity-45"
          aria-hidden="true"
        />

        {/* TWO COLUMN LAYOUT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* TEXT */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              isUrdu ? "lg:order-2 text-right" : "lg:order-1 text-left"
            )}
            dir={isUrdu ? "rtl" : "ltr"}
          >
            <h2 className="font-[cursive] text-4xl tracking-wide text-foreground sm:text-5xl">
              {t.heading}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <TypingText text={t.typingText} speed={18} startDelay={450} />
            </p>

            <div className="mt-6 text-sm text-muted-foreground">
              {t.bullets.map((b, idx) => (
                <span key={b}>
                  {idx !== 0 ? " • " : ""}
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className={cn(isUrdu ? "lg:order-1" : "lg:order-2")}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="top-in-bottom-out"
                videoSrc={t.videoSrc}
                thumbnailSrc={t.thumbnailLight}
                thumbnailAlt={t.thumbnailAlt}
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc={t.videoSrc}
                thumbnailSrc={t.thumbnailDark}
                thumbnailAlt={t.thumbnailAlt}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
