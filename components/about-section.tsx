import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const points = [
  'Experienced and dedicated faculty members',
  'Modern laboratories and a well-stocked library',
  'A safe, inclusive, and inspiring campus environment',
  'Strong focus on results, discipline, and character',
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/campus-lab.png"
              alt="Students working in the campus laboratory"
              width={720}
              height={540}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card px-6 py-4 shadow-xl sm:block">
            <p className="font-serif text-3xl font-semibold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Years of Legacy</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            About Our Campus
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            A Trusted Name in Quality Higher Education
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Padmodaya Campus has been shaping capable, confident, and
            responsible citizens for decades. We combine academic rigor with a
            supportive community so that every student can discover their
            potential and pursue their ambitions with confidence.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/90">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#programs"
            className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Our Programs
          </a>
        </div>
      </div>
    </section>
  )
}
