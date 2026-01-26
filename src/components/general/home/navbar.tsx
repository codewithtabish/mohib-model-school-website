// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ModeToggle } from "../theme/mode-toggle";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

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

export default function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pulseShadow = useMemo(
    () => ({
      boxShadow: [
        "0 0 0 0 rgba(0,0,0,0)",
        "0 0 0 6px rgba(0,0,0,0.06)",
        "0 0 0 0 rgba(0,0,0,0)",
      ],
    }),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full transition",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Gradient/texture decoration (hero-like) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* only show when scrolled OR on large screens for premium feel */}
          <div
            className={[
              "absolute inset-0 opacity-0 transition-opacity duration-300",
              scrolled ? "opacity-100" : "lg:opacity-80",
            ].join(" ")}
          >
            <div className="absolute -top-16 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/22 via-primary/10 to-transparent blur-3xl" />
            <div className="absolute -bottom-20 right-[-80px] h-[260px] w-[260px] rounded-full bg-gradient-to-tr from-primary/16 via-transparent to-transparent blur-3xl" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,0,0,0.035),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(0,0,0,0.028),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.07),transparent_45%)]" />
          </div>
        </div>

        {/* Main row */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              initial={reduce ? undefined : { scale: 0.98, opacity: 0 }}
              animate={reduce ? undefined : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-sm"
            >
              {/* subtle gradient overlay on the logo block */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-60" />
              <span className="relative text-sm font-bold tracking-wide">MMS</span>

              {/* hover glow */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-primary opacity-0 blur-md transition group-hover:opacity-20" />
            </motion.div>

            <div className="leading-tight">
              <div className="text-base font-semibold text-foreground">
                Mohib Model School
              </div>
              <div className="text-xs text-muted-foreground">Learn • Grow • Lead</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* LOGIN */}
            <motion.div
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={{ scale: 0.98 }}
              animate={pulseShadow}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-xl"
            >
              <Link
                href="/sign-in"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                {/* button gradient sheen */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                <span className="relative">Login</span>
              </Link>
            </motion.div>
            <AnimatedThemeToggler />


            {/* <ModeToggle /> */}
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card/80 p-2 shadow-sm backdrop-blur transition hover:bg-accent"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Premium highlight line (like TopStrip/Hero) */}
        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-70" />
        </div>

        {/* Mobile Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="mx-auto max-w-6xl px-4 py-4">
                <div className="grid gap-2">
                  {NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                    >
                      {/* subtle gradient accent */}
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                      <span className="relative">{item.label}</span>
                      <span className="relative text-muted-foreground">→</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile bottom actions */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    href="/notices"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold transition hover:bg-accent"
                  >
                    Notices
                  </Link>

                  <Link
                    href="/sign-in"
                    onClick={() => setOpen(false)}
                    className="relative overflow-hidden rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                    <span className="relative">Login</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/30"
          />
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div whileHover={reduce ? undefined : { y: -1 }} whileTap={{ scale: 0.99 }}>
      <Link
        href={href}
        className="relative rounded-xl px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-accent hover:text-foreground"
      >
        {/* subtle underline effect on hover */}
        <span className="pointer-events-none absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-0 transition-opacity duration-200 hover:opacity-100" />
        {label}
      </Link>
    </motion.div>
  );
}
