"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { TESTIMONIALS_MESSAGES } from "@/data/testimonials-section-data";

const DURATION = 5000;
const BAR_WIDTH = 54;
const DOT_SIZE = 10;
const RADIUS_ACTIVE = 10;
const RADIUS_INACTIVE = 999;

export default function TestimonialsSection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = TESTIMONIALS_MESSAGES[safeLocale];

  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const items = useMemo(() => t.testimonials, [t.testimonials]);

  useEffect(() => {
    if (reduce) return;

    timer.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, DURATION);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, items.length, reduce]);

  const current = items[index];

  const setActive = (i: number) => {
    if (timer.current) window.clearTimeout(timer.current);
    setIndex(i);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16">
      <div className="relative mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className={cn("mx-auto max-w-3xl text-center", isUrdu && "text-right")} dir={isUrdu ? "rtl" : "ltr"}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {t.badges.map((b) => (
              <Badge key={b} className="rounded-full">
                {b}
              </Badge>
            ))}
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.heading}
          </h2>

          <p className="mt-3 text-muted-foreground">{t.subheading}</p>
        </div>

        {/* Main card */}
        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="relative overflow-hidden rounded-3xl border-border bg-card p-6 sm:p-10">
            <div className="relative min-h-[150px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="text-center text-xl font-semibold leading-snug text-foreground sm:text-3xl"
                >
                  “{current.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Person */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border">
                <Image
                  src={current.avatarSrc ?? "/images/avatars/default.jpg"}
                  alt={current.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              <div className={cn("text-center sm:text-left", isUrdu && "sm:text-right")}>
                <div className="text-lg font-semibold">
                  {current.name}
                  {current.tag && (
                    <Badge variant="secondary" className="ml-2 rounded-full px-2 py-0 text-[10px]">
                      {current.tag}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{current.role}</div>
              </div>
            </div>

            {/* Indicators */}
            <div className="mx-auto mt-8 flex max-w-lg justify-center gap-3">
              {items.map((_, i) => {
                const active = i === index;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActive(i)}
                    animate={{
                      width: active ? BAR_WIDTH : DOT_SIZE,
                      height: DOT_SIZE,
                      borderRadius: active ? RADIUS_ACTIVE : RADIUS_INACTIVE,
                    }}
                    className="bg-foreground/10"
                  />
                );
              })}
            </div>
          </Card>
        </div>

        {/* Mini points */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
          {t.miniPoints.map((p) => (
            <MiniPoint key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="rounded-2xl border-border p-4 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
    </Card>
  );
}
