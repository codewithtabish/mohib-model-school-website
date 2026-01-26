// src/components/general/home/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Teachers", href: "/teachers" },
  { label: "Notices", href: "/notices" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="relative z-10 mt-10 w-full overflow-hidden pt-16 pb-8">
      {/* ✅ Footer background (matches Navbar/Hero glow style) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* glow blobs */}
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-48 right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/14 via-transparent to-transparent blur-3xl" />

        {/* texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.03),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.02),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.07),transparent_45%)]" />
      </div>

      {/* ✅ Glass card styling (no global <style> needed) */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl rounded-3xl border border-border bg-background/70 px-6 py-10 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        {/* inner sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

        <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT: Brand + short message + socials */}
          <div className="flex flex-col items-start">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-sm">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                <span className="relative text-sm font-bold tracking-wide">MMS</span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-primary opacity-0 blur-md transition group-hover:opacity-20" />
              </div>

              <div className="leading-tight">
                <div className="text-base font-semibold text-foreground">
                  Mohib Model School
                </div>
                <div className="text-xs text-muted-foreground">
                  Learn • Grow • Lead
                </div>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Mohib Model School provides concept-based learning, disciplined
              training, and consistent assessments—helping students achieve
              excellent results and build strong character.
            </p>

            {/* Contact info */}
            <div className="mt-6 grid gap-3 text-sm">
              <a
                href="mailto:info@mohibmodelschool.edu.pk"
                className="group inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">
                  info@mohibmodelschool.edu.pk
                </span>
              </a>

              <a
                href="tel:+92XXXXXXXXXX"
                className="group inline-flex items-center gap-2 text-foreground/80 transition hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">
                  +92 XXX XXX XXXX
                </span>
              </a>

              <div className="inline-flex items-start gap-2 text-foreground/80">
                <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-foreground/90">Campus Address</div>
                  <div className="text-sm text-muted-foreground">
                    Add your real address here (City, Area, Street).
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <SocialLink
                href="https://facebook.com"
                label="Facebook"
                icon={<Facebook className="h-4 w-4" />}
              />
              <SocialLink
                href="https://instagram.com"
                label="Instagram"
                icon={<Instagram className="h-4 w-4" />}
              />
              <SocialLink
                href="https://youtube.com"
                label="YouTube"
                icon={<Youtube className="h-4 w-4" />}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                Admissions
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-foreground/85 shadow-sm backdrop-blur transition hover:bg-accent hover:text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT: Navigation + quick links */}
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                Explore
              </div>
              <ul className="space-y-2">
                {NAV.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
                Quick Links
              </div>
              <ul className="space-y-2">
                {NAV.slice(5).map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
                <li>
                  <FooterLink href="/sign-in" label="Login" />
                </li>
              </ul>
            </div>

            {/* Map / extra box */}
            <div className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Visit our campus
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Open in Google Maps for directions.
                    </div>
                  </div>

                  <a
                    // Replace with your real Google Maps link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/70 px-4 py-2 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
                  >
                    Open Maps <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="relative mt-10 h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-70" />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} Mohib Model School. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="hover:text-foreground" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-foreground" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-foreground" href="/contact">
              Support
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div whileHover={reduce ? undefined : { x: 2 }} transition={{ duration: 0.15 }}>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-foreground/75 transition hover:text-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 opacity-0 transition group-hover:opacity-100" />
        <span className="underline-offset-4 group-hover:underline">{label}</span>
      </Link>
    </motion.div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/70 px-3 py-2 text-sm text-foreground/80 shadow-sm backdrop-blur transition hover:bg-accent hover:text-foreground"
    >
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}
