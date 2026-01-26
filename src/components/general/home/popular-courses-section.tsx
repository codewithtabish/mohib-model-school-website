/* app/components/PopularCoursesSection.tsx */
'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Users, Clock } from 'lucide-react';

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
    id: '1',
    title: 'Basic English for Kids',
    author: 'Melissa Jones',
    description:
      'Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necss',
    price: 220,
    image: '/images/courses/1.jpg', // <-- replace with your image
    students: 1,
    duration: '2 hours',
  },
  {
    id: '2',
    title: 'Fun Yoga for Toddlers',
    author: 'Melissa Jones',
    description:
      'Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necss',
    price: 190,
    image: '/images/courses/1.jpg', // <-- replace with your image
    students: 1,
    duration: '2 hours',
  },
  {
    id: '3',
    title: 'Weekend Music Lessons',
    author: 'Melissa Jones',
    description:
      'Blandit accumsan ei vis, maiorum epicurei at mei nibh viderer ius pri te fabulas molestiae necss',
    price: 200,
    image: '/images/courses/1.jpg', // <-- replace with your image
    students: 1,
    duration: '2 hours',
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden rounded-none border border-border bg-background shadow-none">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />

        {/* Price badge (top-right) */}
        <div className="absolute right-0 top-0 m-4">
          <div className="min-w-[56px] rounded-none bg-[#f6c75c] px-3 py-2 text-center text-sm font-semibold text-black">
            {course.price}
          </div>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-8">
        <h3 className="text-3xl font-semibold leading-tight text-foreground">
          {course.title}
        </h3>

        <p className="mt-4 text-base text-muted-foreground">{course.author}</p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {course.description}
        </p>
      </CardContent>

      {/* Footer line */}
      <CardFooter className="flex items-center gap-6 border-t border-border px-8 py-6 text-muted-foreground">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4" />
          <span>{course.students}</span>
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
            Etiam porttitor risus massa nec condiment gravida nibh vel velit
            auctor aliquethean sollicitudin, lorem quis bibendum auci elit
            consequatipsutis sem nibh id elit.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
