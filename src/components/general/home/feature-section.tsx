// src/components/general/home/feature-section.tsx
"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureType = {
  title: string;
  iconSrc: string; // image in /public
  iconAlt: string;
  description: string;
};

const features: FeatureType[] = [
  {
    title: "Concept-Based Learning",
    iconSrc: "/images/feature/home.png",
    iconAlt: "Learning icon",
    description:
      "We focus on understanding concepts deeply instead of rote memorization, helping students build strong academic foundations.",
  },
  {
    title: "Qualified Teachers",
    iconSrc: "/images/feature/daycare.png",
    iconAlt: "Teachers icon",
    description:
      "Experienced and dedicated teachers guide students with clarity, discipline, and continuous academic support.",
  },
  {
    title: "Regular Assessments",
    iconSrc: "/images/feature/learning.png",
    iconAlt: "Assessment icon",
    description:
      "Weekly quizzes and monthly tests keep students prepared and help parents track academic progress.",
  },
  {
    title: "Small Class Attention",
    iconSrc: "/images/feature/outdoor.png",
    iconAlt: "Class icon",
    description:
      "Balanced class sizes ensure individual attention, better interaction, and improved student performance.",
  },
  {
    title: "Healthy Environment",
    iconSrc: "/images/feature/healthy-meal.png",
    iconAlt: "Healthy meals icon",
    description:
      "A clean, supportive atmosphere and healthy habits help students stay focused, active, and motivated.",
  },
  {
    title: "Events & Activities",
    iconSrc: "/images/feature/baloon.png",
    iconAlt: "Events icon",
    description:
      "Sports day, annual functions, and co-curricular activities build confidence, teamwork, and leadership skills.",
  },
];

export function FeatureSection() {
  return (
    <section className="relative mt-24 overflow-hidden bg-background py-20 sm:py-24">
      {/* Hero-like background (matches your navbar/hero style) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/14 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A Strong Foundation for Academic Excellence
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            Mohib Model School focuses on discipline, concept-based learning, and
            consistent assessment to help students grow academically and personally.
          </p>
        </div>

        {/* Exact-like layout: 3 columns x 2 rows, airy */}
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureBlock key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ feature }: { feature: FeatureType }) {
  return (
    <div className="group flex items-start gap-5">
      {/* Icon image (like your screenshot) */}
      <div className="mt-1 grid h-14 w-14 place-items-center">
        <div className="relative h-14 w-14">
          <Image
            src={feature.iconSrc}
            alt={feature.iconAlt}
            fill
            className="object-contain"
            sizes="56px"
            priority={false}
          />
        </div>
      </div>

      {/* Text */}
      <div className={cn("max-w-sm")}>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
