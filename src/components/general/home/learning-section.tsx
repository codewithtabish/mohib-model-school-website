"use client";

import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { LEARNING_SECTION_MESSAGES } from "@/data/learning-section-data";

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

    setOut("");
    setShowCursor(true);

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

export default function LearningSection({ locale }: { locale?: Locale }) {
  const params = useParams();
  const routeLocale = (params?.locale as unknown) ?? undefined;

  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = LEARNING_SECTION_MESSAGES[safeLocale];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto px-4 py-14 sm:py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/learning.jpg"
              alt="Learning system background"
              fill
              sizes="100vw"
              quality={100}
              priority
              className={cn(
                "object-cover",
                // ✅ KEY FIX: in Urdu, show the image focus on RIGHT side
                // in English, keep your original
                isUrdu
                  ? "object-[78%_30%] sm:object-[82%_28%] lg:object-[85%_30%]"
                  : "object-[42%_28%] sm:object-[48%_25%] lg:object-[55%_30%]"
              )}
            />

            {/* Subtle texture */}
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.025),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_52%)] dark:opacity-60 dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.06),transparent_52%)]" />

            {/* ✅ KEY FIX: overlay gradient matches text side */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0",
                // Urdu text on LEFT => fade from LEFT strong -> RIGHT light
                isUrdu
                  ? "bg-gradient-to-r from-background/92 via-background/55 to-background/10 dark:from-background/82 dark:via-background/50 dark:to-background/10"
                  : "bg-gradient-to-l from-background/92 via-background/55 to-background/10 dark:from-background/82 dark:via-background/50 dark:to-background/10"
              )}
            />
          </div>

          {/* Layout */}
          <div className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[640px]">
            <div
              className={cn(
                "flex min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] items-center px-6 py-10 sm:px-10 lg:px-14",
                // ✅ KEY FIX: Urdu text block on LEFT, English on RIGHT
                isUrdu ? "justify-start" : "justify-end"
              )}
            >
              {/* Text Card */}
              <div
                className={cn(
                  "w-full max-w-xl rounded-3xl border border-border/60 bg-background/65 p-8 shadow-sm backdrop-blur-md sm:p-10",
                  // Urdu should be right aligned text, but card sits left
                  isUrdu ? "text-right" : "text-left"
                )}
                dir={isUrdu ? "rtl" : "ltr"}
              >
                <h2
                  className={cn(
                    "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
                    isUrdu && "leading-[1.25]"
                  )}
                >
                  {t.title}
                </h2>

                <p
                  className={cn(
                    "mt-6 text-lg leading-relaxed text-foreground/80",
                    isUrdu && "leading-8"
                  )}
                >
                  <TypingText text={t.typing} speed={18} startDelay={500} />
                </p>

                <div className="mt-6 text-sm text-foreground/70">
                  {t.trackLine}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
