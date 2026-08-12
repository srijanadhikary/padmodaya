import { ArrowUpRight, Briefcase, Calculator, Globe2, Laptop } from 'lucide-react'

const programs = [
  {
    icon: Briefcase,
    level: 'Bachelor',
    title: 'Bachelor of Business Studies (BBS)',
    description:
      'A comprehensive four-year program building strong foundations in management, accounting, and economics.',
  },
  {
    icon: Calculator,
    level: 'Bachelor',
    title: 'Bachelor of Business Management (BBM)',
    description:
      'Practical, industry-focused management education preparing students for the modern workplace.',
  },
  {
    icon: Laptop,
    level: 'Bachelor',
    title: 'Bachelor in Computer Application (BCA)',
    description:
      'Hands-on computing, software development, and IT skills for a fast-growing digital economy.',
  },
  {
    icon: Globe2,
    level: 'Master',
    title: 'Master of Business Studies (MBS)',
    description:
      'Advanced study in management and research for future leaders and specialists.',
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            Academic Programs
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Choose the Path That Fits Your Ambition
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Explore our range of Tribhuvan University affiliated programs
            designed to prepare you for a successful career.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <program.icon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {program.level}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
