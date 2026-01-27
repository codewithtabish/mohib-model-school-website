// src/components/general/home/learning-system-section.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function LearningSystemSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative my-14 overflow-hidden sm:my-16 lg:my-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
        //   @ts-ignore
          variants={fadeUp}
          className="relative overflow-hidden rounded-[28px] bg-card shadow-sm"
        >
          {/* ✅ Background layers inside rounded card */}
          <div className="absolute inset-0">

            {/* Main photo */}
            <div className="dark:hidden">

            <Image
              src="/images/learning.jpg"
              alt="Learning system background"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              quality={100}
              priority={false}
              className="object-cover object-[42%_28%] sm:object-[48%_25%] lg:object-[55%_30%] "
              />
              </div>

            {/* ✅ Your wave background image (put it in /public/images/waves/learning-wave.png for example) */}
            <div className="dark:hidden">

            <Image
              src="/images/wave.png"
              alt=""
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover opacity-90 dark:opacity-100"
              />
              </div>

            {/* ✅ Readability shade ONLY behind right-side text */}
            {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-[76%] bg-gradient-to-l from-background/85 via-background/35 to-transparent dark:from-background/78 dark:via-background/28" /> */}

            {/* ✅ Subtle premium texture (keeps shadcn light/dark nice) */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.03),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_52%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.06),transparent_52%)]" />
          </div>

          {/* ✅ Content */}
          <div className="relative grid items-stretch gap-0 lg:grid-cols-[1.12fr_0.88fr]">
            {/* Left spacer (shows background image) */}
            <div className="min-h-[240px] sm:min-h-[300px] lg:min-h-[520px]" />

            {/* Right side content */}
            <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
              <div className="w-full max-w-[560px]">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Academics
                </div>

                <h2
                  className="mt-4 text-4xl font-extrabold tracking-wide text-foreground sm:text-5xl"
                  style={{
                    fontFamily:
                      'ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                    textShadow: "0 3px 0 rgba(0,0,0,0.08)",
                  }}
                >
                  LEARNING SYSTEM
                </h2>

                <p className="mt-4 text-base font-semibold text-foreground/90 sm:text-lg">
                  Concept-based learning with discipline and consistent assessment.
                </p>

                <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/75 sm:text-base">
                  <p>
                    We focus on strong foundations: clear concepts, daily practice, and continuous
                    improvement.
                  </p>
                  <p>
                    Weekly tests and monthly exams keep students prepared — and help parents track
                    progress.
                  </p>
                  <p>
                    Teachers guide every student with structure, attention, and a motivating
                    environment.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-xl px-8 font-bold tracking-widest">
                    <Link href="/academics">READ MORE</Link>
                  </Button>

                  <Button asChild variant="outline" className="h-12 rounded-xl px-8">
                    <Link href="/admissions">ADMISSIONS</Link>
                  </Button>
                </div>

                <div className="mt-6 text-xs text-foreground/60">
                  ✅ Tip: Use a 2000px+ wide image (your wave is perfect for this).
                </div>
              </div>
            </div>
          </div>

          {/* ✅ no borders, no bottom divider */}
        </motion.div>
      </div>
    </section>
  );
}
