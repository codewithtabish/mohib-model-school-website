// src/components/about/StaffSection.tsx
"use client";

import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STAGGER_DELAY = 0.08;

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  subject?: string;
  qualification?: string;
  experience?: string;
  bio?: string;
  photo?: string; // /public/images/staff/...
};

type StaffSectionProps = {
  title?: string;
  description?: string;
  members?: StaffMember[];
  className?: string;
};

const defaultMembers: StaffMember[] = [
  {
    id: "1",
    name: "Ahmad Shah",
    role: "Principal",
    qualification: "BS E-Commerce",
    experience: "10+ Years",
    bio: "Focused on discipline, academic excellence, and overall student growth.",
    photo: "/images/staff/ahmad.jpeg",
  },
  {
    id: "2",
    name: "Senior Teacher",
    role: "Senior Teacher",
    subject: "Mathematics",
    qualification: "M.Sc Mathematics",
    experience: "8+ Years",
    bio: "Specializes in concept-based learning and board exam preparation.",
    photo: "/images/staff/math-teacher.jpg",
  },
  {
    id: "3",
    name: "English Teacher",
    role: "English Instructor",
    subject: "Spoken English",
    qualification: "M.A English",
    experience: "6+ Years",
    bio: "Helps students build confidence, pronunciation, and communication skills.",
    photo: "/images/staff/english-teacher.jpg",
  },
  {
    id: "4",
    name: "Computer Teacher",
    role: "Computer Instructor",
    subject: "Computer Studies",
    qualification: "BS Computer Science",
    experience: "5+ Years",
    bio: "Teaches computer basics, typing, MS Office, and digital awareness.",
    photo: "/images/staff/computer-teacher.jpg",
  },
];

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function StaffSection({
  title = "Our Staff",
  description =
    "Meet the dedicated teachers and leadership team of Mohib Model School, committed to quality education, discipline, and student success.",
  members = defaultMembers,
  className,
}: StaffSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-20 sm:py-24",
        className
      )}
    >
      {/* Theme background (NO blur) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Staff Grid */}
        <div
          ref={ref}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((m, index) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{
                duration: 0.55,
                ease: easeOut,
                delay: index * STAGGER_DELAY,
              }}
              whileHover={{ y: -3 }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border-border bg-card shadow-sm">
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                      Photo coming soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full">{m.role}</Badge>
                    {m.subject && (
                      <Badge variant="secondary" className="rounded-full">
                        {m.subject}
                      </Badge>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {m.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {m.qualification && (
                      <p>Qualification: {m.qualification}</p>
                    )}
                    {m.experience && (
                      <p>Experience: {m.experience}</p>
                    )}
                  </div>

                  {m.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {m.bio}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
