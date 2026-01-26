"use client";

import React from "react";

function TypingText({
  text,
  speed = 22,
  startDelay = 450,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
}) {
  const [out, setOut] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));

        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setTimeout(() => setShowCursor(false), 900);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  React.useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 520);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="whitespace-pre-wrap">
      {out}
      <span
        className={`inline-block w-[10px] align-baseline ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </span>
    </span>
  );
}

export default function ImpactVideoSection() {
  const typing =
    "At our school, learning is built step-by-step — from Playgroup to Matric.\n\nWe focus on strong fundamentals, confident communication, and modern classroom methods.\n\nDaily practice, caring teachers, and board-focused preparation help students grow with clarity and confidence.";

  return (
    <section className="relative overflow-hidden">
      {/* Outer spacing */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
        {/* Wave background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/wave.png')] bg-repeat-x bg-top opacity-60 dark:opacity-45"
          aria-hidden="true"
        />

        {/* TWO COLUMN LAYOUT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT — TEXT */}
          <div>
            <h2 className="font-[cursive] text-4xl tracking-wide text-foreground sm:text-5xl">
              SCHOOL IMPACT
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              <TypingText text={typing} speed={18} startDelay={450} />
            </p>

            <div className="mt-6 text-sm text-muted-foreground">
              • Campus Tour • Learning Environment • Student Confidence
            </div>
          </div>

          {/* RIGHT — VIDEO */}
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/impact.mp4" type="video/mp4" />
                {/* Optional WebM */}
                {/* <source src="/videos/impact.webm" type="video/webm" /> */}
              </video>

              {/* light wave overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[url('/images/wave.png')] bg-repeat-x bg-top opacity-25 dark:opacity-20" />

              {/* clarity boost */}
              <div className="pointer-events-none absolute inset-0 [filter:contrast(1.04)_saturate(1.03)]" />
            </div>

            <div className="absolute bottom-4 left-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
              Watch a quick tour
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
