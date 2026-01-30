"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLocale, type Locale } from "@/data/locale";

import {
  POPULAR_COURSES_MESSAGES,
  type Course,
} from "@/data/popular-courses-data";

function CourseCard({ course, isUrdu }: { course: Course; isUrdu: boolean }) {
  return (
    <Card className="overflow-hidden border border-border bg-background shadow-none">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <CardContent className={cn("p-8", isUrdu ? "text-right" : "text-left")} dir={isUrdu ? "rtl" : "ltr"}>
        <h3 className="text-3xl font-semibold leading-tight text-foreground">
          {course.title}
        </h3>

        <p className="mt-4 text-sm font-medium text-muted-foreground">
          {course.author}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {course.description}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter
        className={cn(
          "flex items-center gap-6 border-t border-border px-8 py-6 text-muted-foreground",
          isUrdu ? "justify-end" : "justify-start"
        )}
        dir={isUrdu ? "rtl" : "ltr"}
      >
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4" />
          <span>
            {course.students}+ {isUrdu ? "طلبہ" : "Students"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function PopularCoursesSection({ locale }: { locale?: Locale }) {
  const params = useParams();

  const routeLocale = (params?.locale as unknown) ?? undefined;
  const safeLocale = getLocale(locale ?? routeLocale);
  const isUrdu = safeLocale === "ur";

  const t = POPULAR_COURSES_MESSAGES[safeLocale];

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Heading */}
        <div className={cn("text-center", isUrdu && "text-right")} dir={isUrdu ? "rtl" : "ltr"}>
          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
            {t.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {t.courses.map((course) => (
            <CourseCard key={course.id} course={course} isUrdu={isUrdu} />
          ))}
        </div>
      </div>
    </section>
  );
}
