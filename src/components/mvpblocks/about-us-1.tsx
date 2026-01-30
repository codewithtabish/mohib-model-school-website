"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";

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
import { ABOUT_SECTION_MESSAGES } from "@/data/(about)/about-section-data";

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

export default function AboutSection({ locale }: { locale?: Locale }) {
  const params = useParams();
  const routeLocale = (params?.locale as unknown) ?? undefined;

  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = ABOUT_SECTION_MESSAGES[safeLocale];

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
    <section
      className="relative w-full overflow-hidden bg-background pt-20"
      dir={isUrdu ? "rtl" : "ltr"}
    >
      {/* Theme-matching background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      {/* Spotlight overlay */}
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
          className={cn("mx-auto mb-16 max-w-3xl text-center", isUrdu && "text-right")}
        >
          <h1 className="bg-gradient-to-r from-foreground/90 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {t.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
            className={cn("relative z-10 grid gap-10 md:grid-cols-2", isUrdu && "md:[direction:rtl]")}
          >
            {/* Mission */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10",
                isUrdu && "text-right"
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <BorderBeam duration={8} size={320} className="from-transparent via-primary/40 to-transparent" />

              <div className="relative">
                <div className={cn(
                  "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm",
                  isUrdu && "ml-auto"
                )}>
                  <Rocket className="h-7 w-7 text-primary" />
                </div>

                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  {t.missionHeading}
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10",
                isUrdu && "text-right"
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />
              <BorderBeam duration={8} size={320} className="from-transparent via-primary/35 to-transparent" reverse />

              <div className="relative">
                <div className={cn(
                  "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/18 to-primary/5 backdrop-blur-sm",
                  isUrdu && "ml-auto"
                )}>
                  <Target className="h-7 w-7 text-primary" />
                </div>

                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  {t.visionHeading}
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t.vision}
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
            className={cn("mb-12 text-center", isUrdu && "text-right")}
          >
            <h2 className="bg-gradient-to-r from-foreground/90 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              {t.valuesHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.valuesSubheading}
            </p>
          </motion.div>

          <div className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-4", isUrdu && "md:[direction:rtl]")}>
            {t.values.map((value:any, index:any) => {
              // @ts-ignore
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
                    variant={index === 0 ? "purple" : index === 1 ? "blue" : index === 2 ? "amber" : "rose"}
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* subtle top/bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
    </section>
  );
}
