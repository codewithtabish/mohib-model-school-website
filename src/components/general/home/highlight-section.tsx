import { Card } from '@/components/ui/card';
import Link from 'next/link'
import React from 'react'




const HIGHLIGHTS = [
  {
    title: "Concept-Based Learning",
    desc: "Strong foundations, clear explanations, daily practice, and weekly assessments.",
    icon: "🧠",
  },
  {
    title: "Discipline & Character",
    desc: "Respect, punctuality, confidence-building, and positive classroom culture.",
    icon: "🛡️",
  },
  {
    title: "Parent Communication",
    desc: "Regular updates, PTMs, progress reports, and transparent feedback.",
    icon: "🤝",
  },
  {
    title: "Co-Curricular Growth",
    desc: "Sports, speeches, quizzes, art activities, and events for overall grooming.",
    icon: "🏆",
  },
];
const HighLightSection = () => {
  return (
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">What Makes Us Different</h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Simple, clean cards. This is the easiest way to design a professional homepage.
              </p>
            </div>
            <Link className="text-sm font-semibold underline" href="/about">
              Learn more
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.title}>
                <div className="text-2xl">{h.icon}</div>
                <div className="mt-3 font-semibold">{h.title}</div>
                <div className="mt-2 text-sm text-slate-600">{h.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
  )
}

export default HighLightSection
