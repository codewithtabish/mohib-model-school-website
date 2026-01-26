// src/components/TopStrip.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * TopStrip (more "Hero-style" attractive)
 * - Adds soft background blobs + subtle radial pattern (like Hero)
 * - Adds premium gradient highlight line
 * - Keeps compact height + shadcn tokens
 * - Keeps: no email, no admissions button
 */

export default function TopStrip() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden border-b border-border bg-background"
    >
      {/* Background decoration (hero-like) */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft blobs */}
        <div className="absolute -top-20 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-[-80px] h-[240px] w-[240px] rounded-full bg-gradient-to-tr from-primary/18 via-transparent to-transparent blur-3xl" />

        {/* subtle radial texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.03),transparent_45%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.07),transparent_45%)]" />
      </div>

      {/* Main row */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-1 px-4 py-1.5 sm:flex-row sm:items-center sm:justify-between">
        {/* Left */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] leading-4 text-muted-foreground">
          <motion.span
            whileHover={reduce ? undefined : { y: -1 }}
            transition={{ duration: 0.12 }}
            className="inline-flex items-center gap-1.5"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full border border-border bg-card text-[9px] shadow-sm">
              📍
            </span>
            <span className="hover:text-foreground transition-colors">
              Mohib Model School, Your Area, Your City
            </span>
          </motion.span>

          <span className="hidden sm:inline text-border/70">•</span>

          <motion.span
            whileHover={reduce ? undefined : { y: -1 }}
            transition={{ duration: 0.12 }}
            className="inline-flex items-center gap-1.5"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full border border-border bg-card text-[9px] shadow-sm">
              📞
            </span>
            <span className="hover:text-foreground transition-colors">+92 3xx xxxxxxx</span>
          </motion.span>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-2.5 py-0.5 text-[11px] leading-4 text-muted-foreground shadow-sm backdrop-blur">
            🕒 Mon–Sat: 8:00 AM – 1:30 PM
          </span>

          <motion.div whileHover={reduce ? undefined : { y: -1 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/notices"
              className="inline-flex items-center rounded-full border border-border bg-card/80 px-2.5 py-0.5 text-[11px] font-semibold leading-4 text-foreground/80 shadow-sm backdrop-blur transition hover:bg-accent hover:text-foreground"
            >
              📌 Notices
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Premium highlight line (stronger + nicer) */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-70" />
      </div>

      {/* Slim ticker */}
      <div className="relative border-t border-border bg-background/50">
        <div className="mx-auto max-w-6xl px-4 py-1">
          <div className="relative overflow-hidden text-[11px] leading-4 text-muted-foreground">
            <motion.div
              initial={reduce ? undefined : { x: "100%" }}
              animate={reduce ? undefined : { x: "-100%" }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap"
            >
              📣 Admissions for 2026 are open • Weekly quizzes + monthly tests • PTM updates
              regularly • Office hours: Mon–Sat 8:00 AM – 1:30 PM
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
