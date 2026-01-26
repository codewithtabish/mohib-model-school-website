/* app/components/PopularCoursesSection.tsx */
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";

type Course = {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  students: number;
  duration: string;
};

const courses: Course[] = [
  {
    id: "1",
    title: "Spoken English Course",
    author: "Certified English Instructors",
    description:
      "A confidence-building spoken English course designed to improve pronunciation, vocabulary, grammar, and daily conversation skills for students of all levels.",
    price: 0,
    image: "/images/courses/english.jpg",
    students: 150,
    duration: "3 Months",
  },
  {
    id: "2",
    title: "Computer Studies",
    author: "Qualified Computer Teachers",
    description:
      "This course introduces students to computer fundamentals including typing skills, MS Word, PowerPoint, internet usage, and basic digital awareness.",
    price: 0,
    image: "/images/courses/computer.jpg",
    students: 120,
    duration: "3 Months",
  },
//   {
//     id: "3",
//     title: "Personality Development",
//     author: "Student Development Team",
//     description:
//       "Focused on confidence building, discipline, communication skills, and positive behavior to help students grow academically and socially.",
//     price: 0,
//     image: "/images/courses/personality.jpg",
//     students: 100,
//     duration: "2 Months",
//   },
];

function CourseCard({ course }: { course: Course }) {
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
      <CardContent className="p-8">
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
      <CardFooter className="flex items-center gap-6 border-t border-border px-8 py-6 text-muted-foreground">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4" />
          <span>{course.students}+ Students</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function PopularCoursesSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground">
            Popular Courses
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            Mohib Model School offers skill-based and academic support courses
            designed to strengthen communication, technical knowledge, and
            student confidence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
