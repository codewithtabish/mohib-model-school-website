/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, X, ArrowRight } from "lucide-react";
import { getLocale, type Locale } from "@/data/locale";
import { GALLERY_SECTION_MESSAGES, type MediaItem } from "@/data/gallery-section-data";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, y: 10, transition: { duration: 0.2 } },
};

function cn(...x: Array<string | false | null | undefined>) {
  return x.filter(Boolean).join(" ");
}

/**
 * Instagram Explore vibe:
 * - Most tiles 1x1
 * - Sometimes a tall 1x2 tile
 * - Sometimes a big 2x2 tile
 */
function getExploreSpan(index: number) {
  const i = index % 12;
  if (i === 2) return "sm:col-span-2 sm:row-span-2";
  if (i === 6 || i === 10) return "sm:row-span-2";
  return "";
}

function MediaTile({
  item,
  index,
  onOpen,
  openLabel,
}: {
  item: MediaItem;
  index: number;
  onOpen: (id: string) => void;
  openLabel: string;
}) {
  const reduce = useReducedMotion();
  const span = getExploreSpan(index);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item.id)}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.16 }}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm",
        span
      )}
      aria-label={`Open ${item.type}`}
    >
      <div className="relative h-full w-full overflow-hidden bg-muted">
        <div className="relative h-full w-full">
          <Image
            src={item.type === "image" ? item.src : item.poster}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover"
            priority={index < 2}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-95" />

        {item.type === "video" && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-background/75 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
            <Play className="h-3.5 w-3.5" />
            Video
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">
                {item.caption ?? "Highlight"}
              </div>
              {item.date && <div className="text-xs text-white/80">{item.date}</div>}
            </div>
            <div className="shrink-0 rounded-full bg-white/10 px-2 py-1 text-xs text-white/90 backdrop-blur">
              {openLabel}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 ring-0 ring-primary/40 transition group-hover:ring-2" />
      </div>
    </motion.button>
  );
}

function GalleryModal({
  item,
  open,
  onClose,
  t,
  isUrdu,
  withLocale,
}: {
  item: MediaItem | undefined;
  open: boolean;
  onClose: () => void;
  t: ReturnType<typeof getT>;
  isUrdu: boolean;
  withLocale: (href: string) => string;
}) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-8 backdrop-blur-sm"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            // @ts-ignore
            variants={pop}
            initial="hidden"
            animate="show"
            exit="exit"
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background shadow-xl"
          >
            <div className={cn("flex items-center justify-between border-b border-border px-5 py-4", isUrdu && "flex-row-reverse")}>
              <div className={cn("min-w-0", isUrdu && "text-right")}>
                <div className="truncate text-sm font-semibold text-foreground">
                  {item.caption ?? "Gallery"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.type === "video" ? t.modal.video : t.modal.photo}
                  {item.date ? ` • ${item.date}` : ""}
                </div>
              </div>

              <Button
                onClick={onClose}
                variant="outline"
                size="icon"
                className="rounded-xl"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className={cn("relative grid gap-0 lg:grid-cols-2", isUrdu && "lg:[direction:rtl]")}>
              <div className="relative bg-muted">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={item.poster}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority
                        />
                      </div>
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        controls
                        playsInline
                        poster={item.poster}
                        preload="metadata"
                      >
                        <source src={item.src} />
                        Your browser does not support the video tag.
                      </video>
                    </>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </div>

              <div className={cn("p-6", isUrdu && "text-right")}>
                <div className={cn("flex flex-wrap items-center gap-2", isUrdu && "justify-end")}>
                  <Badge className="rounded-full">{item.type === "video" ? t.modal.video : t.modal.photo}</Badge>
                  <Badge variant="secondary" className="rounded-full">
                    {t.modal.schoolLife}
                  </Badge>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  {item.caption ?? t.modal.titleFallback}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.modal.desc}</p>

                <div className={cn("mt-6 flex flex-wrap gap-2", isUrdu && "justify-end")}>
                  <Button asChild className="rounded-xl">
                    <Link href={withLocale("/gallery")} className="inline-flex items-center gap-2">
                      {t.modal.viewFullGallery} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href={withLocale("/events")}>{t.modal.seeEvents}</Link>
                  </Button>
                </div>

                <div className="mt-6 text-xs text-muted-foreground">{t.modal.tip}</div>
              </div>
            </div>
          </motion.div>

          <button
            className="fixed inset-0 -z-10"
            aria-label="Close modal overlay"
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getT(locale: Locale) {
  return GALLERY_SECTION_MESSAGES[locale];
}

export default function GallerySection({ locale }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = getT(safeLocale);
  const MEDIA = t.media;

  const withLocale = (href: string) => `/${safeLocale}${href === "/" ? "" : href}`;

  const [openId, setOpenId] = useState<string | null>(null);
  const active = useMemo(() => MEDIA.find((x) => x.id === openId), [openId, MEDIA]);

  return (
    <section dir={isUrdu ? "rtl" : "ltr"} className="relative overflow-hidden py-16 sm:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/18 via-primary/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-44 right-[-140px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/12 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.03),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.02),transparent_48%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.07),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05),transparent_48%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-10"
        >
          {/* Header */}
          <motion.div
            // @ts-ignore
            variants={fadeUp}
            className={cn("flex flex-col gap-3", isUrdu && "text-right")}
          >
            <div className={cn("flex flex-wrap items-center gap-2", isUrdu && "justify-end")}>
              <Badge className="rounded-full">{t.badges.primary}</Badge>
              <Badge variant="secondary" className="rounded-full">
                {t.badges.secondary}
              </Badge>
              <Badge variant="destructive" className="rounded-full">
                {t.badges.tertiary}
              </Badge>
            </div>

            <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", isUrdu && "sm:flex-row-reverse")}>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {t.heading}
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">{t.subheading}</p>
              </div>

              <motion.div
                // @ts-ignore
                variants={fadeUp}
                className={cn("flex gap-2", isUrdu && "justify-end")}
              >
                <Badge variant="outline" className="rounded-full text-[12px]">
                  <Link href={withLocale("/gallery")} className="inline-flex items-center gap-2">
                    {t.badges.viewAll} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Explore Grid */}
          <motion.div
            // @ts-ignore
            variants={fadeUp}
          >
            <div
              className={cn(
                "grid auto-rows-[120px] grid-cols-3 gap-2",
                "sm:auto-rows-[140px] sm:grid-cols-4 sm:gap-3",
                "lg:auto-rows-[160px]"
              )}
              style={{ gridAutoFlow: "dense" }}
            >
              {MEDIA.map((m, idx) => (
                <MediaTile
                  key={m.id}
                  item={m}
                  index={idx}
                  onOpen={(id) => setOpenId(id)}
                  openLabel={t.modal.open}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <GalleryModal
        item={active}
        open={Boolean(openId)}
        onClose={() => setOpenId(null)}
        t={t}
        isUrdu={isUrdu}
        withLocale={withLocale}
      />
    </section>
  );
}
