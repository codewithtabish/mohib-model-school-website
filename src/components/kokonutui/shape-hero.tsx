"use client";

/**
 * @author: @dorianbaffier
 * @description: Shape Hero (theme-gradient adapted to your HeroSection tokens)
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/20 via-primary/10 to-transparent",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, rotate }}
      className={cn("absolute", className)}
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        className="relative"
        style={{ width, height }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            // theme-based rings/shadows (works in light/dark)
            "ring-1 ring-black/[0.04] dark:ring-white/[0.03]",
            "shadow-[0_2px_16px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
          style={{ borderRadius }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ShapeHero({
  title1 = "Excellence in Learning,",
  title2 = "Discipline in Character.",
  subtitle = "Concept-based learning • Disciplined environment • Board preparation",
}: {
  title1?: string;
  title2?: string;
  subtitle?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* ✅ same vibe as your HeroSection background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      {/* Shapes (converted from colorful palette → theme tokens) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tall rectangle - top left */}
        <ElegantShape
          borderRadius={24}
          className="top-[-10%] left-[-15%]"
          delay={0.3}
          gradient="from-primary/22 via-primary/10 to-transparent dark:from-primary/26 dark:via-primary/12 dark:to-transparent"
          height={500}
          rotate={-8}
          width={300}
        />

        {/* Wide rectangle - bottom right */}
        <ElegantShape
          borderRadius={20}
          className="right-[-20%] bottom-[-5%]"
          delay={0.5}
          gradient="from-primary/18 via-primary/8 to-transparent dark:from-primary/22 dark:via-primary/10 dark:to-transparent"
          height={200}
          rotate={15}
          width={600}
        />

        {/* Square - middle left */}
        <ElegantShape
          borderRadius={32}
          className="top-[40%] left-[-5%]"
          delay={0.4}
          gradient="from-accent/45 via-accent/20 to-transparent dark:from-accent/32 dark:via-accent/14 dark:to-transparent"
          height={300}
          rotate={24}
          width={300}
        />

        {/* Small rectangle - top right */}
        <ElegantShape
          borderRadius={12}
          className="top-[5%] right-[10%]"
          delay={0.6}
          gradient="from-primary/16 via-transparent to-transparent dark:from-primary/18 dark:via-transparent dark:to-transparent"
          height={100}
          rotate={-20}
          width={250}
        />

        {/* Medium rectangle - center right */}
        <ElegantShape
          borderRadius={16}
          className="top-[45%] right-[-10%]"
          delay={0.7}
          gradient="from-accent/40 via-accent/14 to-transparent dark:from-accent/28 dark:via-accent/12 dark:to-transparent"
          height={150}
          rotate={35}
          width={400}
        />

        {/* Small square - bottom left */}
        <ElegantShape
          borderRadius={28}
          className="bottom-[10%] left-[20%]"
          delay={0.2}
          gradient="from-primary/20 via-primary/8 to-transparent dark:from-primary/22 dark:via-primary/10 dark:to-transparent"
          height={200}
          rotate={-25}
          width={200}
        />

        {/* Tiny rectangle - top center */}
        <ElegantShape
          borderRadius={10}
          className="top-[15%] left-[40%]"
          delay={0.8}
          gradient="from-accent/35 via-accent/12 to-transparent dark:from-accent/26 dark:via-accent/10 dark:to-transparent"
          height={80}
          rotate={45}
          width={150}
        />

        {/* Wide rectangle - middle */}
        <ElegantShape
          borderRadius={18}
          className="top-[60%] left-[25%]"
          delay={0.9}
          gradient="from-primary/18 via-primary/8 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent"
          height={120}
          rotate={-12}
          width={450}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            animate="visible"
            custom={1}
            initial="hidden"
            variants={fadeUpVariants as any}
          >
            <h1 className="mb-6 font-bold text-4xl tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  // ✅ match your HeroSection feel: primary + foreground blend (theme-safe)
                  "bg-gradient-to-r from-primary/70 via-foreground to-primary/60 bg-clip-text text-transparent",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            animate="visible"
            custom={2}
            initial="hidden"
            variants={fadeUpVariants as any}
          >
            <p className="mx-auto mb-8 max-w-xl px-4 font-light text-base leading-relaxed tracking-wide text-muted-foreground sm:text-lg md:text-xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* soft top/bottom fade like your section */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/85" />
    </div>
  );
}
