"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { PRINCIPAL_MESSAGE_DATA } from "@/data/principal-message-data";

function PrincipalMessageSection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = PRINCIPAL_MESSAGE_DATA[safeLocale];

  const withLocale = (href: string) =>
    `/${safeLocale}${href === "/" ? "" : href}`;

  return (
    <section
      className="relative overflow-hidden bg-background py-24"
      dir={isUrdu ? "rtl" : "ltr"}
    >
      {/* Hero-style background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ✅ IMAGE column */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: isUrdu ? 24 : -24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={cn(isUrdu ? "lg:order-2" : "lg:order-1")}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={t.principal.photoSrc}
                  alt={t.principal.photoAlt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Name overlay */}
              <div
                className={cn(
                  "absolute bottom-6 left-6 right-6 rounded-2xl bg-background/80 px-4 py-3 backdrop-blur shadow-sm",
                  isUrdu && "text-right"
                )}
              >
                <div className="text-sm font-semibold text-foreground">
                  {t.principal.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t.principal.title}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className={cn(
                "absolute -bottom-6 hidden sm:block",
                isUrdu ? "right-6" : "left-6"
              )}
            >
              <div
                className={cn(
                  "rounded-2xl border border-border bg-background/80 px-4 py-3 shadow-sm backdrop-blur",
                  isUrdu && "text-right"
                )}
              >
                <div className="text-xs font-semibold text-foreground">
                  {t.officeHours.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t.officeHours.value}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ CONTENT column */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: isUrdu ? -24 : 24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className={cn(
              isUrdu ? "lg:order-1 text-right" : "lg:order-2 text-left"
            )}
          >
            <div
              className={cn(
                "flex flex-wrap items-center gap-2",
                isUrdu && "justify-end"
              )}
            >
              <Badge className="rounded-full">{t.badges.primary}</Badge>
              <Badge variant="secondary" className="rounded-full">
                {t.badges.secondary}
              </Badge>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.heading}
            </h2>

            <p className="mt-4 text-muted-foreground">{t.paragraph}</p>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              {t.points.map((p) => (
                <Point key={p} text={p} rtl={isUrdu} />
              ))}
            </div>

            <div
              className={cn(
                "mt-8 flex flex-wrap gap-3",
                isUrdu && "justify-end"
              )}
            >
              <Link
                href={withLocale(t.ctas.learnMore.href)}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
              >
                {t.ctas.learnMore.label}
              </Link>

              <Link
                href={withLocale(t.ctas.contact.href)}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground/85 shadow-sm transition hover:bg-accent hover:text-foreground"
              >
                {t.ctas.contact.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Point({ text, rtl }: { text: string; rtl?: boolean }) {
  return (
    <div className={cn("flex gap-3", rtl && "flex-row-reverse")}>
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-xs shadow-sm">
        ✓
      </span>
      <span className={cn(rtl && "text-right")}>{text}</span>
    </div>
  );
}

export default PrincipalMessageSection;
