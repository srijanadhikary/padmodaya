import { BookOpen, CalendarCheck, FileText, Users } from 'lucide-react'

const items = [
  {
    icon: FileText,
    title: 'Admissions Open',
    description: 'Apply for the upcoming academic session across all faculties.',
  },
  {
    icon: BookOpen,
    title: 'Academic Programs',
    description: 'Bachelor and Master level programs in Management & Humanities.',
  },
  {
    icon: CalendarCheck,
    title: 'Academic Calendar',
    description: 'Stay updated with exam routines, holidays, and key dates.',
  },
  {
    icon: Users,
    title: 'Student Services',
    description: 'Scholarships, counseling, and career guidance for every student.',
  },
]

export function Highlights() {
  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <item.icon className="h-5 w-5" />
            </span>
            <h3 className="font-semibold text-card-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
