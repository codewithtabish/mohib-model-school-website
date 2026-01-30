"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";
import { CTA_MESSAGES } from "@/data/cta-section-data";

export default function CtaSection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = CTA_MESSAGES[safeLocale];
  const withLocale = (href: string) => `/${safeLocale}${href === "/" ? "" : href}`;

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:py-10">
        {/* glow */}
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

            <div
              className={cn(
                "relative flex flex-col items-center justify-between gap-5 text-center md:flex-row",
                isUrdu ? "md:flex-row-reverse md:text-right" : "md:text-left"
              )}
              dir={isUrdu ? "rtl" : "ltr"}
            >
              {/* text */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {t.heading}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                  {t.subheading}
                </p>
              </div>

              {/* actions */}
              <div
                className={cn(
                  "flex w-full flex-col gap-3 sm:flex-row md:w-auto",
                  isUrdu ? "md:justify-start" : "md:justify-end"
                )}
              >
                <Button asChild className="h-10 rounded-xl">
                  <Link href={withLocale(t.primaryHref)}>{t.primaryCta}</Link>
                </Button>

                <Button asChild variant="outline" className="h-10 rounded-xl">
                  <Link href={withLocale(t.secondaryHref)}>{t.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
