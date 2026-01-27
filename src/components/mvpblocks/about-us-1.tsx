// src/components/about/AboutSection.tsx
"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import {
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  BookOpen,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  BookOpen,
  ShieldCheck,
  GraduationCap,
};

const defaultValues: AboutUsProps["values"] = [
  {
    title: "Concept-Based Learning",
    description:
      "We teach with clarity and concepts—so students understand deeply, not just memorize.",
    icon: "BookOpen",
  },
  {
    title: "Discipline & Character",
    description:
      "We build strong habits, respect, and responsibility—inside and outside the classroom.",
    icon: "ShieldCheck",
  },
  {
    title: "Parent Partnership",
    description:
      "We believe parents and teachers grow a child together through consistent communication.",
    icon: "Users",
  },
  {
    title: "Excellence in Results",
    description:
      "Regular assessment and board preparation help students achieve outstanding outcomes.",
    icon: "GraduationCap",
  },
];

export default function AboutSection() {
  const aboutData: Required<Pick<AboutUsProps, "title" | "subtitle" | "mission" | "vision">> & {
    values: NonNullable<AboutUsProps["values"]>;
  } = {
    title: "About Mohib Model School",
    subtitle:
      "A disciplined learning environment focused on academic excellence, strong values, and consistent board preparation.",
    mission:
      "Our mission is to provide concept-based education in a safe and disciplined environment—helping students build strong foundations, confidence, and character for lifelong success.",
    vision:
      "Our vision is to be a trusted school where every child grows into a responsible, confident, and high-achieving student through quality teaching and meaningful values.",
    values: defaultValues ?? [],
  };

  const missionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const headerAnim: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background pt-20">
      {/* Theme-matching background glow (same language as your HeroSection) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      {/* Optional: Spotlight overlay, converted to theme tokens */}
      <Spotlight
        gradientFirst="radial-gradient(70% 70% at 55% 30%, hsla(var(--primary)/0.14) 0, hsla(var(--primary)/0.08) 45%, transparent 78%)"
        gradientSecond="radial-gradient(55% 55% at 50% 50%, hsla(var(--primary)/0.10) 0, hsla(var(--primary)/0.05) 80%, transparent 100%)"
        gradientThird="radial-gradient(55% 55% at 50% 50%, hsla(var(--primary)/0.09) 0, hsla(var(--primary)/0.05) 80%, transparent 100%)"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          variants={headerAnim}
          initial="hidden"
          animate="show"
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/90 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
            className="relative z-10 grid gap-10 md:grid-cols-2"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <BorderBeam duration={8} size={320} className="from-transparent via-primary/40 to-transparent" />

              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>

                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Mission
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />
              <BorderBeam duration={8} size={320} className="from-transparent via-primary/35 to-transparent" reverse />

              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/18 to-primary/5 backdrop-blur-sm">
                  <Target className="h-7 w-7 text-primary" />
                </div>

                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  Our Vision
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.vision}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-foreground/90 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              The principles that guide our teachers, students, and every decision we make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 22 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                  transition={{ duration: 0.55, delay: index * 0.08 + 0.12, ease: easeOut }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    // keep your component’s variants but align them to "school" vibe
                    variant={
                      index === 0 ? "purple" : index === 1 ? "blue" : index === 2 ? "amber" : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* subtle top/bottom fade like your HeroSection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
    </section>
  );
}
