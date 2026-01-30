"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ModeToggle } from "../theme/mode-toggle";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import LanguageSwitcher from "../language-switcher";
import { getLocale, type Locale } from "@/data/locale";
import { NAVBAR_MESSAGES } from "@/data/navbar-section-data";

export default function Navbar({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);

  const isUrdu = safeLocale === "ur";
  const t = NAVBAR_MESSAGES[safeLocale];

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

  const withLocale = (href: string) => `/${safeLocale}${href === "/" ? "" : href}`;

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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Actions */}
          <div className={["hidden items-center gap-2 lg:flex", isUrdu ? "order-1" : "order-3"].join(" ")}>
            <motion.div
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={{ scale: 0.98 }}
              animate={pulseShadow}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="rounded-xl"
            >
              <Link
                href={withLocale("/sign-in")}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                <span className="relative">{t.login}</span>
              </Link>
            </motion.div>

            <LanguageSwitcher locale={safeLocale} />
            <AnimatedThemeToggler />
          </div>

          {/* Nav (Desktop) */}
          <nav
            className={[
              "hidden items-center gap-1 lg:flex",
              "order-2",
              // ✅ In Urdu, show "Home" first on the RIGHT side:
              // reverse visual order so first item goes to the right edge.
              isUrdu ? "flex-row-reverse" : "flex-row",
            ].join(" ")}
          >
            {t.nav.map((item) => (
              <NavLink
                key={item.href}
                href={withLocale(item.href)}
                label={item.label}
              />
            ))}
          </nav>

          {/* Brand */}
          <Link
            href={withLocale("/")}
            className={[
              "group flex items-center gap-3",
              // ✅ Keep logo LEFT and text RIGHT always:
              "flex-row",
              isUrdu ? "order-3" : "order-1",
            ].join(" ")}
          >
          

            <div className={["leading-tight", isUrdu ? "text-right" : "text-left"].join(" ")}>
              <div className="text-base font-semibold text-foreground">{t.brand}</div>
              <div className="text-xs text-muted-foreground">{t.tagline}</div>
            </div>
          </Link>

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

        {/* highlight line */}
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
                  {/* ✅ In Urdu, show Home first at top (normal list order is fine) */}
                  {t.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={withLocale(item.href)}
                      onClick={() => setOpen(false)}
                      className={[
                        "relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent",
                        isUrdu ? "text-right" : "text-left",
                      ].join(" ")}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                      <span className="relative">{item.label}</span>
                      <span className="relative text-muted-foreground">{isUrdu ? "←" : "→"}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    href={withLocale("/notices")}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold transition hover:bg-accent"
                  >
                    {t.notices}
                  </Link>

                  <Link
                    href={withLocale("/sign-in")}
                    onClick={() => setOpen(false)}
                    className="relative overflow-hidden rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-70" />
                    <span className="relative">{t.login}</span>
                  </Link>
                </div>

                <div className="mt-3 flex justify-center">
                  <LanguageSwitcher locale={safeLocale} />
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
        {label}
      </Link>
    </motion.div>
  );
}
