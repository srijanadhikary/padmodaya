const stats = [
  { value: '5,000+', label: 'Students Enrolled' },
  { value: '120+', label: 'Qualified Faculty' },
  { value: '95%', label: 'Graduation Rate' },
  { value: '20+', label: 'Academic Programs' },
]

export function StatsSection() {
  return (
    <section id="why" className="scroll-mt-24 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-4xl font-semibold text-accent md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
