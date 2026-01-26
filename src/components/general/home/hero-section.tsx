// src/components/HeroSection.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const QUICK_STATS = [
  { kpi: "500+", label: "Students" },
  { kpi: "30+", label: "Teachers" },
  { kpi: "12+", label: "Years of Excellence" },
  { kpi: "95%+", label: "Board Results" },
];

/**
 * Put your real images in:
 * /public/hero/slide-1.jpg
 * /public/hero/slide-2.jpg
 * /public/hero/slide-3.jpg
 */
const HERO_SLIDES = [
  { src: "/images/hero/h1.jpeg", alt: "Mohib Model School campus" },
  { src: "/images/hero/h2.jpeg", alt: "Mohib Model School campus" },
  { src: "/images/hero/herothree.jpg", alt: "School activity and learning" },
];

// Change this to 1000 or 2000 if you want (ms)
const CAROUSEL_INTERVAL_MS = 2000;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        {/* Left */}
        <motion.div
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full">Trusted by Parents</Badge>
            <Badge variant="destructive" className="rounded-full">
              Modern Education
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Board Preparation
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Excellence in Learning, Discipline in Character.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-muted-foreground">
            Mohib Model School provides concept-based learning, a disciplined environment, and
            consistent assessments—helping students achieve excellent results and build strong values.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
            >
              Start Admission
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href="/notices"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
            >
              View Notices
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
            >
              About School
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {QUICK_STATS.map((s) => (
              <motion.div
                key={s.label}
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ duration: 0.15 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative text-xl font-bold text-foreground">{s.kpi}</div>
                <div className="relative text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 text-sm text-muted-foreground">
            ✅ <span className="font-medium text-foreground">Tip:</span> Replace stats with real
            numbers to instantly look more official.
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative"
        >
          {/* Main image card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

            <div className="relative p-3">
              {/* ✅ Mobile: single image (no carousel) */}
              <div className="relative grid aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <div className="absolute inset-0 sm:hidden">
                  <Image
                    src={HERO_SLIDES[0].src}
                    alt={HERO_SLIDES[0].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-xl bg-background/80 px-3 py-2 text-xs text-foreground shadow-sm backdrop-blur">
                    Mohib Model School
                  </div>
                </div>

                {/* ✅ Desktop+: carousel */}
                <div className="absolute inset-0 hidden sm:block">
                  <HeroCarousel
                    slides={HERO_SLIDES}
                    intervalMs={CAROUSEL_INTERVAL_MS}
                  />
                </div>
              </div>

              {/* Floating mini card (stays same, desktop only) */}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="absolute left-6 top-6 hidden sm:block"
              >
                <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold text-foreground">Admissions</div>
                  <div className="mt-1 text-xs text-muted-foreground">Open for 2026</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Gradient cards (unchanged) */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <GradientCard
              title="Next Event"
              subtitle="Annual Sports Day"
              meta="Feb 05, 2026 • 10:00 AM"
              tone="primary"
            />
            <GradientCard
              title="Office Hours"
              subtitle="Mon–Sat"
              meta="8:00 AM – 1:30 PM"
              tone="soft"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCarousel({
  slides,
  intervalMs,
}: {
  slides: { src: string; alt: string }[];
  intervalMs: number;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const safeSlides = slides.length ? slides : [{ src: "/hero/slide-1.jpg", alt: "School image" }];

  useEffect(() => {
    if (reduce) return; // respect reduced motion
    if (safeSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, Math.max(800, intervalMs));

    return () => window.clearInterval(id);
  }, [intervalMs, reduce, safeSlides.length]);

  const current = useMemo(() => safeSlides[index]!, [safeSlides, index]);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={reduce ? undefined : { opacity: 0.2, scale: 1.01 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={current.src} alt={current.alt} fill className="object-cover" priority />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-3 left-3 rounded-xl bg-background/80 px-3 py-2 text-xs text-foreground shadow-sm backdrop-blur">
            Mohib Model School
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      {safeSlides.length > 1 && (
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2 py-1 backdrop-blur">
          {safeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2 w-2 rounded-full transition",
                i === index ? "bg-primary" : "bg-muted-foreground/40 hover:bg-muted-foreground/60",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function GradientCard({
  title,
  subtitle,
  meta,
  tone,
}: {
  title: string;
  subtitle: string;
  meta: string;
  tone: "primary" | "soft";
}) {
  const reduce = useReducedMotion();

  const gradient =
    tone === "primary"
      ? "from-primary/20 via-primary/10 to-transparent"
      : "from-muted via-accent/30 to-transparent";

  return (
    <motion.div whileHover={reduce ? undefined : { y: -2 }} transition={{ duration: 0.15 }}>
      <Card className="relative overflow-hidden rounded-3xl border-border p-5 shadow-sm">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="relative">
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{subtitle}</div>
          <div className="mt-2 text-xs text-muted-foreground">{meta}</div>
        </div>
      </Card>
    </motion.div>
  );
}
