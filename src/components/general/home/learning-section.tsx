"use client";

import Image from "next/image";
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

    // Start delay
    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          // Stop cursor after finish (optional)
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

export default function LearningSection() {
  const typing =
    "At our school, learning is built step-by-step — from Playgroup to Matric.\n\nWe focus on strong fundamentals, confident communication, and modern classroom methods.\n\nDaily practice, caring teachers, and board-focused preparation help students grow with clarity and confidence.";

  return (
    <section className="relative overflow-hidden">
      {/* Outer spacing */}
      <div className="mx-auto px-4 py-14 sm:py-16 lg:py-20">
        {/* ✅ Rounded container (NO BORDER) */}
        <div className="relative overflow-hidden ">
          {/* ✅ Background layers */}
          <div className="absolute inset-0">
            {/* Main photo (crisp) */}
            <Image
              src="/images/learning.jpg"
              alt="Learning system background"
              fill
              sizes="100vw"
              quality={100}
              priority
              className="object-cover object-[42%_28%] sm:object-[48%_25%] lg:object-[55%_30%]"
            />

            {/* Wave overlay */}
            {/* <Image
              src="/images/wave.png"
              alt=""
              fill
              sizes="100vw"
              quality={100}
              priority={false}
              className="object-cover opacity-55 "
            /> */}

            {/* Perceived sharpness */}
            <div className="pointer-events-none absolute inset-0 [filter:contrast(1.06)_saturate(1.06)]" />

            {/* Subtle texture */}
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.025),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_52%)] dark:opacity-60 dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.06),transparent_52%)]" />
          </div>

          {/* ✅ Layout sizing */}
          <div className="relative">
            <div className="min-h-[520px] sm:min-h-[560px] lg:min-h-[640px]">
              {/* Content aligned RIGHT */}
              <div className="flex min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] items-center justify-end px-6 py-10 sm:px-10 lg:px-14">
                {/* ✅ Right text block (transparent background like you want) */}
                <div className="w-full max-w-xl rounded-2xl p-8 sm:p-10">
                  <h2 className="font-[cursive] text-4xl tracking-wide text-black sm:text-5xl">
                    LEARNING SYSTEM
                  </h2>

                  {/* ✅ Animated typing text */}
                  <p className="mt-6 text-lg leading-relaxed text-black/80">
                    <TypingText text={typing} speed={18} startDelay={500} />
                  </p>

                  {/* Optional small badge line */}
                  <div className="mt-6 text-sm text-black/70">
                    • Playgroup • Primary • Middle • Matric • Board Preparation
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
