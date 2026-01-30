"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { HERO_CAROUSEL_MESSAGES } from "@/data/hero-section-data";

type Props = {
  locale?: Locale;
  className?: string;
  autoPlay?: boolean;
  intervalMs?: number;
};

export default function HeroCarousel({
  locale,
  className,
  autoPlay = true,
  intervalMs = 4500,
}: Props) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = HERO_CAROUSEL_MESSAGES[safeLocale];
  const slides = t.slides;

  const [index, setIndex] = React.useState(0);

  const go = (next: number) => {
    const n = (next + slides.length) % slides.length;
    setIndex(n);
  };

  React.useEffect(() => {
    if (!autoPlay || reduce || slides.length <= 1) return;
    const id = window.setInterval(() => go(index + 1), intervalMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, intervalMs, index, reduce, slides.length]);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        {/* Image */}
        <div className="relative h-[260px] w-full sm:h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index]?.src}
              initial={reduce ? undefined : { opacity: 0, scale: 1.01 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.995 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].src}
                alt={slides[index].alt}
                fill
                priority
                className="object-cover"
              />

              {/* Premium gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Caption */}
        <div className={cn("absolute bottom-0 left-0 right-0 p-4", isUrdu && "text-right")}>
          <div className="text-sm font-semibold text-white/95">
            {slides[index].caption ?? ""}
          </div>
        </div>

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/45"
            >
              {isUrdu ? "→" : "←"}
            </button>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/45"
            >
              {isUrdu ? "←" : "→"}
            </button>
          </>
        )}

        {/* Dots */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-2 py-1 backdrop-blur">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-2 w-2 rounded-full transition",
                    i === index ? "bg-white" : "bg-white/35 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
