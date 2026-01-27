"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function PrincipalMessageSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Hero-style background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT: BIG Principal Image */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              {/* gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/staff/ahmad.jpeg"
                  alt="Principal of Mohib Model School"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/80 px-4 py-3 backdrop-blur shadow-sm">
                <div className="text-sm font-semibold text-foreground">
                  AHMAD SHAH SAIB                </div>
                <div className="text-xs text-muted-foreground">
                  Principal, Mohib Model School
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="absolute -bottom-6 left-6 hidden sm:block"
            >
              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-foreground">Office Hours</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Mon–Sat • 8:00 AM – 1:30 PM
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Message Content */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">Principal’s Message</Badge>
              <Badge variant="secondary" className="rounded-full">
                Leadership & Vision
              </Badge>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building Character, Strengthening Concepts, Shaping Futures.
            </h2>

            <p className="mt-4 text-muted-foreground">
              Welcome to <span className="font-medium text-foreground">Mohib Model School</span>.
              Our aim is to provide a disciplined, caring, and academically strong environment
              where students develop clarity in concepts, confidence in expression, and respect
              for values.
            </p>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <Point text="Concept-based learning to build strong academic foundations." />
              <Point text="Regular assessments to track progress and improve performance." />
              <Point text="A disciplined and secure environment that supports character building." />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
              >
                Contact School
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="mx-auto mt-12 max-w-3xl text-center text-xs text-muted-foreground"
        >
          {/* Tip: Replace <span className="font-medium text-foreground">Principal Name</span> and
          <span className="font-medium text-foreground"> /images/baba.jpg</span> with real details
          for an authentic and official presentation. */}
        </motion.div>
      </div>
    </section>
  );
}

function Point({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-xs shadow-sm">
        ✓
      </span>
      <span>{text}</span>
    </div>
  );
}

export default PrincipalMessageSection;
