// src/components/general/home/tri-highlight-section.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Tile = {
  title: string;
  description: string;
  bgClass: string;
  artSrc: string;
  artAlt: string;

  /**
   * ✅ This is the EXACT fix:
   * - For “full cover” look, we let the image fill a FULL HEIGHT box
   * - And we push it out of the tile with negative right/bottom (like the screenshot)
   */
  artFit?: "contain" | "cover";
  artPos?: string; // absolute position (including negative offsets)
  artW?: string; // width of the art box
};

const TILES: Tile[] = [
  {
    title: "PLAYGROUND",
    description: "Safe play, teamwork, and confidence building through fun activities.",
    bgClass: "bg-amber-300",
    artSrc: "/images/tri/trione.jpg",
    artAlt: "Playground image",
    // PHOTO → cover
    artFit: "cover",
    // Push outside so it feels “full” like reference
    artPos: "-right-8 bottom-0",
    artW: "w-[360px] sm:w-[430px] md:w-[520px]",
  },
  {
    title: "LEARNING",
    description: "Concept-based learning with regular assessments and clear guidance.",
    bgClass: "bg-rose-300",
    artSrc: "/images/tri/tritwo.jpg",
    artAlt: "Learning ABC image",
    // This is a graphic → contain (but still BIG)
    artFit: "contain",
    artPos: "right-6 top-8",
    artW: "w-[260px] sm:w-[300px] md:w-[340px]",
  },
  {
    title: "ENTERTAINMENT",
    description: "Events, activities, and celebrations that keep students motivated.",
    bgClass: "bg-teal-300",
    artSrc: "/images/tri/trithree.png",
    artAlt: "Entertainment kid image",
    // PNG → contain, but fill height and push outside
    artFit: "contain",
    artPos: "-right-10 bottom-0",
    artW: "w-[330px] sm:w-[400px] md:w-[480px]",
  },
];

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TriHighlightSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mt-14 overflow-hidden">
      {/* Soft background like your hero/navbar */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/14 via-primary/8 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/12 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.03),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.07),transparent_45%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {TILES.map((t) => (
              <motion.div
                key={t.title}
                        //@ts-ignore

                variants={fade}
                className={["relative overflow-hidden text-white", t.bgClass].join(" ")}
              >
                {/* ✅ same height like reference */}
                <div className="relative h-[320px] sm:h-[340px] md:h-[360px]">
                  {/* glossy overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />

                  {/* ✅ text ABOVE image */}
                  <div className="relative z-20 max-w-[360px] px-8 pt-10">
                    <h3
                      className="text-4xl font-extrabold tracking-wide sm:text-5xl"
                      style={{
                        fontFamily:
                          'ui-rounded, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                        textShadow: "0 3px 0 rgba(0,0,0,0.18)",
                      }}
                    >
                      {t.title}
                    </h3>

                    <p className="mt-5 max-w-[260px] text-base font-semibold leading-7 text-white/90">
                      {t.description}
                    </p>
                  </div>

                  {/* ✅ Artwork: fill full height, and push outside tile for “cover” feel */}
                  <div
                    className={[
                      "pointer-events-none absolute z-10 h-full",
                      t.artPos ?? "right-0 bottom-0",
                      t.artW ?? "w-[420px]",
                    ].join(" ")}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={t.artSrc}
                        alt={t.artAlt}
                        fill
                        priority={false}
                        className={[
                          "drop-shadow-[0_18px_26px_rgba(0,0,0,0.18)]",
                          t.artFit === "cover" ? "object-cover" : "object-contain",
                        ].join(" ")}
                        sizes="(max-width: 768px) 80vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* ✅ divider line on desktop */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-white/25 md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
