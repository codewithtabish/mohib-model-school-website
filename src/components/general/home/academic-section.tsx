"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const programs = [
  {
    title: "Primary Wing",
    subtitle: "Strong foundations for lifelong learning",
    icon: BookOpen,
    items: ["Reading & speaking focus", "Activity-based learning", "Character building"],
  },
  {
    title: "Middle School",
    subtitle: "Skills + discipline + consistent progress",
    icon: ClipboardCheck,
    items: ["Concept clarity in core subjects", "Weekly assessments", "Mentoring & feedback"],
  },
  {
    title: "Secondary Wing",
    subtitle: "Board preparation with smart strategy",
    icon: GraduationCap,
    items: ["Paper pattern training", "Revision schedules", "Result-oriented planning"],
  },
];

const pillars = [
  {
    title: "Modern Teaching",
    desc: "Concept-based learning with practical examples and structured progress.",
    icon: Sparkles,
  },
  {
    title: "Safe Environment",
    desc: "A disciplined, respectful culture with student wellbeing as a priority.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Community",
    desc: "Teachers and parents aligned to help every child perform at their best.",
    icon: Users,
  },
];

 function AcademicsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Background decoration (matches your Hero vibe) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-44 right-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/14 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.035),transparent_38%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.025),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.07),transparent_38%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_45%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="grid gap-10"
        >
          {/* Header */}
          <motion.div
          // @ts-ignore
           variants={fadeUp} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">Academics</Badge>
              <Badge variant="secondary" className="rounded-full">
                Concept-Based
              </Badge>
              <Badge variant="destructive" className="rounded-full">
                Board Preparation
              </Badge>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Programs built for results — and character.
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  From early learning foundations to board-focused preparation, our academic system
                  is structured, disciplined, and supportive — helping students grow confidently.
                </p>
              </div>

              <motion.div
                        // @ts-ignore

               variants={fadeUp} className="flex gap-2">
                <Button asChild className="rounded-xl">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/prospectus">Download Prospectus</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Programs grid */}
          <motion.div 
                    // @ts-ignore

          variants={fadeUp} className="grid gap-4 lg:grid-cols-3">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="h-full"
                >
                  <Card className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid gap-1">
                          <div className="text-lg font-semibold text-foreground">{p.title}</div>
                          <div className="text-sm text-muted-foreground">{p.subtitle}</div>
                        </div>

                        <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                          <Icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>

                      <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
                        {p.items.map((it) => (
                          <li key={it} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <Button asChild variant="secondary" className="rounded-xl">
                          <Link href="/academics" className="inline-flex items-center gap-2">
                            View Details <span aria-hidden>→</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Pillars (mini cards) */}
          <motion.div
                    // @ts-ignore

           variants={fadeUp} className="grid gap-4 md:grid-cols-3">
            {pillars.map((x) => {
              const Icon = x.icon;
              return (
                <motion.div
                  key={x.title}
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                    <div className="relative flex items-start gap-3">
                      <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{x.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{x.desc}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA strip */}
          {/* <motion.div variants={fadeUp}>
            <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/14 via-transparent to-primary/8" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                    <BookOpen className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Want to visit the campus?
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Book a visit and meet our teachers and administration.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="rounded-xl">
                    <Link href="/contact">Book a Visit</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href="/contact">Call / WhatsApp</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}

export default AcademicsSection;

