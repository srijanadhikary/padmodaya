import { ArrowRight, Bell } from 'lucide-react'

const notices = [
  {
    date: 'Jun 12',
    tag: 'Admissions',
    title: 'Applications open for Bachelor programs — 2081 intake',
  },
  {
    date: 'Jun 08',
    tag: 'Examination',
    title: 'First semester examination routine published',
  },
  {
    date: 'May 30',
    tag: 'Scholarship',
    title: 'Merit-based scholarship results announced for new students',
  },
  {
    date: 'May 22',
    tag: 'Event',
    title: 'Annual sports week and cultural program schedule released',
  },
]

export function NoticesSection() {
  return (
    <section id="notices" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-foreground">
            <Bell className="h-4 w-4" />
            Notices &amp; Announcements
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Latest From Padmodaya Campus
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
        >
          View all notices
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <ul className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {notices.map((notice) => (
          <li key={notice.title}>
            <a
              href="#contact"
              className="flex items-center gap-5 p-5 transition-colors hover:bg-secondary"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="text-xs font-medium">
                  {notice.date.split(' ')[0]}
                </span>
                <span className="text-lg font-semibold leading-none">
                  {notice.date.split(' ')[1]}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <span className="mb-1 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {notice.tag}
                </span>
                <p className="truncate font-medium text-card-foreground">
                  {notice.title}
                </p>
              </div>
              <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
