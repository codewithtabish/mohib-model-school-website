// src/components/CtaSection.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CtaSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background">
      {/* compact height */}
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-10">
        {/* soft background glow (same language as hero) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="relative overflow-hidden rounded-3xl border-border bg-card p-6 shadow-sm md:p-8">
            {/* gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

            <div className="relative flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
              {/* text */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Admissions Open for 2026
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                  Join a disciplined learning environment focused on academic excellence,
                  character building, and board success.
                </p>
              </div>

              {/* actions */}
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Button asChild className="h-10 rounded-xl">
                  <Link href="/admissions">Start Admission</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-10 rounded-xl"
                >
                  <Link href="/contact">Contact School</Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
