// app/page.tsx
import Link from "next/link";

/**
 * Mohib Model School — Home Page (professional layout)
 * - Next.js App Router
 * - TailwindCSS
 * - Replace placeholder text/images with real data later
 */

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

const QUICK_STATS = [
  { kpi: "500+", label: "Students" },
  { kpi: "30+", label: "Teachers" },
  { kpi: "12+", label: "Years of Excellence" },
  { kpi: "95%+", label: "Board Results" },
];

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

const PROGRAMS = [
  {
    title: "Pre-School",
    range: "Playgroup – KG",
    desc: "Activity-based learning, phonics, confidence and manners.",
    points: ["Phonics & reading start", "Creative activities", "Teacher guidance"],
  },
  {
    title: "Primary",
    range: "Grade 1 – 5",
    desc: "Strong basics in English, Math, Science, and Urdu with daily practice.",
    points: ["Reading & writing", "Math drills", "Concept clarity"],
  },
  {
    title: "Middle",
    range: "Grade 6 – 8",
    desc: "Skill-building, note-making, and structured exams for consistency.",
    points: ["Weekly tests", "Presentation skills", "Discipline routine"],
  },
  {
    title: "Secondary",
    range: "Grade 9 – 10",
    desc: "Board-focused preparation, paper practice, and mentoring.",
    points: ["Past papers", "Exam technique", "Extra coaching (optional)"],
  },
];

const FACILITIES = [
  { title: "Computer Lab", desc: "Basic IT skills, typing, and digital learning." },
  { title: "Science Lab", desc: "Practical learning for better understanding." },
  { title: "Library", desc: "Reading habits, story books, and reference material." },
  { title: "Playground", desc: "Sports and physical activity for health." },
  { title: "Clean Classrooms", desc: "Comfortable environment and proper seating." },
  { title: "Transport", desc: "Available if the school provides it (optional)." },
];

const NOTICES = [
  {
    title: "Admissions Open for 2026",
    date: "Jan 25, 2026",
    tag: "Admissions",
    excerpt: "Apply for the new session. Limited seats in some classes.",
  },
  {
    title: "Parent-Teacher Meeting (PTM)",
    date: "Jan 28, 2026",
    tag: "PTM",
    excerpt: "Meet teachers to discuss progress, attendance, and improvement plan.",
  },
  {
    title: "Monthly Test Schedule",
    date: "Feb 01, 2026",
    tag: "Academics",
    excerpt: "Test dates announced. Prepare from the class notes and worksheets.",
  },
];

const EVENTS = [
  { date: "Feb 05, 2026", title: "Annual Sports Day", desc: "Track events, games, and prizes." },
  { date: "Feb 14, 2026", title: "Science Exhibition", desc: "Student projects and presentations." },
  { date: "Mar 01, 2026", title: "Speech & Quiz Competition", desc: "Confidence-building and teamwork." },
];

const TESTIMONIALS = [
  {
    name: "Parent (Grade 6)",
    quote:
      "My child improved a lot in confidence and writing. Teachers guide well and share feedback regularly.",
  },
  {
    name: "Student (Grade 9)",
    quote:
      "The board preparation is strong. Past papers and weekly tests helped me understand my mistakes.",
  },
  {
    name: "Parent (Primary)",
    quote:
      "Discipline and manners are excellent. The school environment feels safe and supportive.",
  },
];

const FAQ = [
  {
    q: "How do I apply for admission?",
    a: "Go to the Admissions page, read requirements, and submit the admission form. You can also contact the school office for guidance.",
  },
  {
    q: "Do you offer fee concessions?",
    a: "If the school provides concessions, mention the policy here (e.g., siblings discount, merit-based concessions).",
  },
  {
    q: "Do you provide transport?",
    a: "If transport is available, mention routes and timings. Otherwise, remove this section.",
  },
  {
    q: "How often are tests conducted?",
    a: "Weekly quizzes + monthly tests (example). Update based on your real system.",
  },
];

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "green" | "blue";
}) {
  const tones: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm ${className}`}>{children}</div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP STRIP */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-3">
            <span>📍 Address: Your Area, Your City, Pakistan</span>
            <span className="hidden sm:inline">•</span>
            <span>📞 +92 3xx xxxxxxx</span>
            <span className="hidden sm:inline">•</span>
            <span>✉️ info@mohibmodelschool.edu.pk</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone="green">Admissions Open</Badge>
            <Badge tone="blue">PTM Soon</Badge>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white">
              MMS
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold">Mohib Model School</div>
              <div className="text-xs text-slate-500">Learn • Grow • Lead</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-slate-700 hover:text-slate-900">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 sm:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="/admissions"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Trusted by Parents</Badge>
              <Badge tone="green">Modern Education</Badge>
              <Badge tone="blue">Board Preparation</Badge>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A Professional School Website Starts With a Strong Home Page
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              Mohib Model School provides concept-based learning, disciplined environment, and
              consistent assessment to help students achieve excellent results and build character.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Start Admission
              </Link>
              <Link
                href="/notices"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                View Notices
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                About School
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {QUICK_STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold">{s.kpi}</div>
                  <div className="text-xs text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-600">
              ✅ <span className="font-medium text-slate-800">Tip:</span> Replace stats with real
              numbers to instantly look more official.
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-white p-3 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 grid place-items-center text-slate-500">
                School Banner / Building Photo
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card className="p-5">
                <div className="text-sm font-semibold">Next Event</div>
                <div className="mt-1 text-sm text-slate-600">Annual Sports Day</div>
                <div className="mt-2 text-xs text-slate-500">Feb 05, 2026 • 10:00 AM</div>
              </Card>
              <Card className="p-5">
                <div className="text-sm font-semibold">Office Hours</div>
                <div className="mt-1 text-sm text-slate-600">Mon–Sat</div>
                <div className="mt-2 text-xs text-slate-500">8:00 AM – 1:30 PM</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
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

      {/* PROGRAMS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Programs & Classes</h2>
          <p className="mt-2 text-slate-600">Show parents what levels you offer.</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {PROGRAMS.map((p) => (
              <Card key={p.title} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{p.title}</div>
                    <div className="mt-1 text-xs text-slate-500">{p.range}</div>
                  </div>
                  <Badge tone="slate">Academics</Badge>
                </div>

                <p className="mt-3 text-sm text-slate-600">{p.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.points.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-0.5">✅</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Link href="/admissions" className="text-sm font-semibold underline">
                    Admission details
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
            <div>
              <h2 className="text-2xl font-bold">Facilities</h2>
              <p className="mt-2 text-slate-600">
                Facilities build trust. Even a simple list looks professional.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {FACILITIES.map((f) => (
                  <Card key={f.title} className="p-5">
                    <div className="font-semibold">{f.title}</div>
                    <div className="mt-2 text-sm text-slate-600">{f.desc}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-3 shadow-sm">
              <div className="aspect-[4/5] rounded-2xl bg-slate-100 grid place-items-center text-slate-500">
                Facilities Photo / Collage
              </div>
              <div className="mt-3 rounded-2xl border bg-white p-4">
                <div className="text-sm font-semibold">Download Prospectus</div>
                <p className="mt-1 text-xs text-slate-600">
                  Add your PDF later in <span className="font-mono">/public</span>.
                </p>
                <div className="mt-3">
                  <Link
                    href="/downloads/prospectus.pdf"
                    className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICES + EVENTS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Latest Notices</h2>
                  <p className="mt-2 text-slate-600">Announcements and updates for parents.</p>
                </div>
                <Link className="text-sm font-semibold underline" href="/notices">
                  View all
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {NOTICES.map((n) => (
                  <Card key={n.title} className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs text-slate-500">{n.date}</div>
                      <Badge tone="blue">{n.tag}</Badge>
                    </div>
                    <div className="mt-2 font-semibold">{n.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{n.excerpt}</p>
                    <div className="mt-3">
                      <Link href="/notices" className="text-sm font-semibold underline">
                        Read details
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <p className="mt-2 text-slate-600">Create a simple events list like this.</p>

              <div className="mt-6 space-y-4">
                {EVENTS.map((e) => (
                  <Card key={e.title} className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold">{e.title}</div>
                      <Badge tone="green">{e.date}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{e.desc}</p>
                  </Card>
                ))}

                <Card className="p-5">
                  <div className="text-sm font-semibold">Want an Events Calendar?</div>
                  <p className="mt-2 text-sm text-slate-600">
                    Later we can add a calendar page with filters (month, category).
                  </p>
                  <div className="mt-3">
                    <Link href="/events" className="text-sm font-semibold underline">
                      Events page
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">What Parents & Students Say</h2>
          <p className="mt-2 text-slate-600">This section makes the site look “real”.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name}>
                <div className="text-sm font-semibold">{t.name}</div>
                <p className="mt-3 text-sm text-slate-600">“{t.quote}”</p>
                <div className="mt-4 text-xs text-slate-500">★★★★★</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <p className="mt-2 text-slate-600">
            Simple FAQs reduce calls and make your school look organized.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {FAQ.map((f) => (
              <Card key={f.q} className="p-6">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Ready to Apply?</h2>
              <p className="mt-2 text-slate-200">
                Start the admission process today, or contact us for guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/admissions"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="/gallery"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white">
                  MMS
                </div>
                <div>
                  <div className="font-semibold">Mohib Model School</div>
                  <div className="text-xs text-slate-500">Learn • Grow • Lead</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                A supportive environment for modern education, discipline, and academic excellence.
              </p>
            </div>

            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link className="hover:underline" href="/about">About</Link></li>
                <li><Link className="hover:underline" href="/admissions">Admissions</Link></li>
                <li><Link className="hover:underline" href="/academics">Academics</Link></li>
                <li><Link className="hover:underline" href="/teachers">Teachers</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Updates</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link className="hover:underline" href="/notices">Notices</Link></li>
                <li><Link className="hover:underline" href="/events">Events</Link></li>
                <li><Link className="hover:underline" href="/blog">Blog</Link></li>
                <li><Link className="hover:underline" href="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>📍 Address: Your Area, Your City</p>
                <p>📞 +92 3xx xxxxxxx</p>
                <p>✉️ info@mohibmodelschool.edu.pk</p>
                <p>🕒 Mon–Sat: 8:00 AM – 1:30 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Mohib Model School. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
