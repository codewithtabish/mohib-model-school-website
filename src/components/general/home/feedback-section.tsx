// src/components/TestimonialsSection.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const DURATION = 5000; // auto-rotate (ms)
const BAR_WIDTH = 54;
const DOT_SIZE = 10;
const RADIUS_ACTIVE = 10;
const RADIUS_INACTIVE = 999;

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string; // optional local image path
  tag?: string; // optional: "Parent" | "Student"
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mohib Model School has improved my child’s confidence and discipline. The teachers are cooperative and the assessments are consistent.",
    name: "Mrs. Ayesha Khan",
    role: "Parent (Grade 7)",
    avatarSrc: "/images/avatars/parent-1.jpg",
    tag: "Parent",
  },
  {
    quote:
      "The school focuses on concepts, not just cramming. Weekly quizzes and regular feedback helped me improve a lot in Math and English.",
    name: "Hamza Ahmed",
    role: "Student (Grade 9)",
    avatarSrc: "/images/avatars/student-1.jpg",
    tag: "Student",
  },
  {
    quote:
      "The environment is disciplined and safe. I’m impressed with the communication, PTM updates, and the way teachers guide students.",
    name: "Mr. Salman Tariq",
    role: "Parent (Grade 5)",
    avatarSrc: "/images/avatars/parent-2.jpg",
    tag: "Parent",
  },
  {
    quote:
      "Teachers explain topics clearly and the class tests keep us prepared. The school motivates us to work hard and stay focused.",
    name: "Hira Noor",
    role: "Student (Grade 8)",
    avatarSrc: "/images/avatars/student-2.jpg",
    tag: "Student",
  },
];

export default function TestimonialsSection() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  // keep stable reference
  const items = useMemo(() => TESTIMONIALS, []);

  useEffect(() => {
    if (reduce) return; // respect reduced motion

    const start = () => {
      timer.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
      }, DURATION);
    };

    start();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [items.length, index, reduce]);

  const current = items[index];

  const setActive = (i: number) => {
    if (timer.current) window.clearTimeout(timer.current);
    setIndex(i);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16">
      {/* Hero-style background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge className="rounded-full">Parent Reviews</Badge>
            <Badge variant="secondary" className="rounded-full">
              Student Voices
            </Badge>
            <Badge variant="outline" className="rounded-full">
              Real Feedback
            </Badge>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Parents & Students Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Honest feedback that reflects our discipline, concept-based learning, and consistent
            assessment system.
          </p>
        </div>

        {/* Main card */}
        <div className="mx-auto mt-10 max-w-4xl">
          <Card className="relative overflow-hidden rounded-3xl border-border bg-card p-6 shadow-sm sm:p-10">
            {/* gradient accent */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />

            {/* Quote */}
            <div className="relative min-h-[150px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-center text-xl font-semibold leading-snug text-foreground sm:text-3xl"
                >
                  <span className="text-primary/70">“</span>
                  {current.quote}
                  <span className="text-primary/70">”</span>
                </motion.blockquote>
              </AnimatePresence>

              {/* Decorative corner mark */}
              <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            </div>

            {/* Person row */}
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`${current.name}-${index}`}
                  initial={reduce ? undefined : { opacity: 0, filter: "blur(8px)" }}
                  animate={reduce ? undefined : { opacity: 1, filter: "blur(0px)" }}
                  exit={reduce ? undefined : { opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-muted shadow-sm">
                    {/* If you don't have avatar images yet, keep these files missing-safe by using a fallback */}
                    <Image
                      src={current.avatarSrc ?? "/images/avatars/default.jpg"}
                      alt={`${current.name} avatar`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="hidden h-8 border-l border-muted-foreground/30 sm:block" />

                  <div className="text-center sm:text-left">
                    <div className="text-lg font-semibold text-foreground">
                      {current.name}
                      {current.tag ? (
                        <span className="ml-2 align-middle">
                          <Badge variant="secondary" className="rounded-full px-2 py-0 text-[10px]">
                            {current.tag}
                          </Badge>
                        </span>
                      ) : null}
                    </div>
                    <div className="text-sm text-muted-foreground">{current.role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="relative mx-auto mt-8 flex w-full max-w-lg justify-center gap-3">
              {items.map((t, i) => {
                const active = i === index;
                return (
                  <motion.button
                    key={`${t.name}-${i}`}
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    initial={false}
                    animate={{
                      width: active ? BAR_WIDTH : DOT_SIZE,
                      height: DOT_SIZE,
                      borderRadius: active ? RADIUS_ACTIVE : RADIUS_INACTIVE,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.35,
                    }}
                    className="relative overflow-hidden bg-foreground/10"
                    style={{ minWidth: DOT_SIZE, maxWidth: BAR_WIDTH }}
                  >
                    {active && !reduce && (
                      <motion.span
                        key={`bar-${index}`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: DURATION / 1000, ease: "linear" }}
                        className="absolute left-0 top-0 h-full rounded-lg bg-primary"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Small hint */}
            <div className="relative mt-6 text-center text-xs text-muted-foreground">
              Click the indicators to switch • Auto-rotates every {DURATION / 1000}s
            </div>
          </Card>
        </div>

        {/* Optional: small grid below (adds “professional density”) */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
          <MiniPoint
            title="Disciplined Environment"
            desc="Clear rules, respectful culture, and consistent classroom management."
          />
          <MiniPoint
            title="Concept-Based Learning"
            desc="We focus on understanding first—then practice and performance."
          />
          <MiniPoint
            title="Regular Assessments"
            desc="Weekly quizzes and monthly tests to keep students always prepared."
          />
        </div>
      </div>
    </section>
  );
}

function MiniPoint({ title, desc }: { title: string; desc: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div whileHover={reduce ? undefined : { y: -2 }} transition={{ duration: 0.15 }}>
      <Card className="relative overflow-hidden rounded-2xl border-border p-4 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="relative">
          <div className="text-sm font-semibold text-foreground">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
        </div>
      </Card>
    </motion.div>
  );
}
