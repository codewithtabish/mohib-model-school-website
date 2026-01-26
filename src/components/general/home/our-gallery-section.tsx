// src/components/general/home/event-section.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  MapPin,
  Clock,
  Megaphone,
  ArrowRight,
  ImageIcon,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const events = [
  {
    title: "Annual Sports Day",
    date: "Feb 05, 2026",
    time: "10:00 AM",
    location: "School Ground",
    desc: "Athletics, teamwork, and awards—celebrating student energy and discipline.",
    href: "/events/sports-day",
    tag: "Upcoming",
  },
  {
    title: "Parent–Teacher Meeting (PTM)",
    date: "Feb 10, 2026",
    time: "9:00 AM – 12:00 PM",
    location: "Main Hall",
    desc: "Meet teachers, review progress, and set learning goals for the next term.",
    href: "/events/ptm",
    tag: "Important",
  },
  {
    title: "Science & Art Exhibition",
    date: "Feb 18, 2026",
    time: "11:00 AM",
    location: "Exhibition Area",
    desc: "Student projects, creativity, and practical learning—open for parents to visit.",
    href: "/events/exhibition",
    tag: "Highlight",
  },
];

const notices = [
  { title: "Class 9 Board Prep schedule uploaded", date: "Jan 22, 2026", href: "/notices" },
  { title: "Fee submission last date: Jan 31, 2026", date: "Jan 20, 2026", href: "/notices" },
  { title: "New admissions inquiry form is live", date: "Jan 15, 2026", href: "/admissions" },
];

const highlights = [
  { src: "/images/events/event-1.jpg", alt: "Students presenting projects" },
  { src: "/images/events/event-2.jpg", alt: "Sports day moment" },
  { src: "/images/events/event-3.jpg", alt: "Prize distribution" },
  { src: "/images/events/event-4.jpg", alt: "Classroom activity" },
];

export default function EventSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* Background decoration (matches your hero vibe) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-44 left-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/12 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(0,0,0,0.03),transparent_40%),radial-gradient(circle_at_75%_35%,rgba(0,0,0,0.02),transparent_48%)] dark:bg-[radial-gradient(circle_at_18%_15%,rgba(255,255,255,0.07),transparent_40%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.05),transparent_48%)]" />
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
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">Events</Badge>
              <Badge variant="secondary" className="rounded-full">
                Calendar
              </Badge>
              <Badge variant="destructive" className="rounded-full">
                Highlights
              </Badge>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Events & Activities
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Stay updated with upcoming school events, important dates, and recent highlights—
                  all in one place.
                </p>
              </div>

              <motion.div variants={fadeUp} className="flex gap-2">
                <Button asChild className="rounded-xl">
                  <Link href="/events" className="inline-flex items-center gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/notices">Notices</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Upcoming Events */}
            <motion.div variants={fadeUp} className="grid gap-4">
              {events.map((e) => (
                <motion.div
                  key={e.title}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.18 }}
                >
                  <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-transparent" />

                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                            {e.tag}
                          </span>
                          <div className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                          <div className="text-xs text-muted-foreground">{e.date}</div>
                        </div>

                        <div className="mt-2 text-lg font-semibold text-foreground">
                          {e.title}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{e.desc}</div>

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-4 w-4" /> {e.time}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" /> {e.location}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <Button asChild variant="secondary" className="rounded-xl">
                          <Link href={e.href} className="inline-flex items-center gap-2">
                            Details <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Notices + Highlights */}
            <motion.div variants={fadeUp} className="grid gap-4">
              {/* Notices */}
              <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                        <Megaphone className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Latest Notices</div>
                        <div className="text-xs text-muted-foreground">
                          Quick updates for parents & students
                        </div>
                      </div>
                    </div>

                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <Link href="/notices">All</Link>
                    </Button>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {notices.map((n) => (
                      <Link
                        key={n.title}
                        href={n.href}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm transition hover:bg-accent"
                      >
                        <div className="min-w-0">
                          <div className="font-medium text-foreground group-hover:underline">
                            {n.title}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{n.date}</div>
                        </div>
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Highlights mini gallery */}
              <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                        <ImageIcon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">Recent Highlights</div>
                        <div className="text-xs text-muted-foreground">
                          A glimpse of school life
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="rounded-xl">
                      <Link href="/gallery">Gallery</Link>
                    </Button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {highlights.map((h) => (
                      <motion.div
                        key={h.src}
                        whileHover={reduce ? undefined : { scale: 1.02 }}
                        transition={{ duration: 0.18 }}
                        className="relative overflow-hidden rounded-2xl border border-border bg-muted"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={h.src}
                            alt={h.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 text-xs text-muted-foreground">
                    ✅ Tip: Put real photos in <span className="font-medium text-foreground">/public/images/events</span>{" "}
                    for a more authentic look.
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Bottom date strip */}
          <motion.div variants={fadeUp}>
            <Card className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/12 via-transparent to-primary/8" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-border bg-background/70 p-3 backdrop-blur">
                    <CalendarDays className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Important Dates</div>
                    <div className="text-sm text-muted-foreground">
                      PTM • Exams • Holidays • Admissions deadlines
                    </div>
                  </div>
                </div>

                <Button asChild className="rounded-xl">
                  <Link href="/calendar" className="inline-flex items-center gap-2">
                    Open Calendar <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
