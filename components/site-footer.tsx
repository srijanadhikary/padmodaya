import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#contact' },
  { label: 'Notices', href: '#notices' },
]

const resources = [
  { label: 'Academic Calendar', href: '#notices' },
  { label: 'Library', href: '#why' },
  { label: 'Scholarships', href: '#contact' },
  { label: 'Student Portal', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-primary text-primary-foreground">
      {/* CTA band */}
      <div className="border-b border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-balance font-serif text-2xl font-semibold md:text-3xl">
              Ready to begin your journey with us?
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Admissions are open. Take the first step toward your future today.
            </p>
          </div>
          <a
            href="#top"
            className="shrink-0 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Apply for Admission
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg font-semibold">
              Padmodaya Campus
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Committed to academic excellence and shaping responsible citizens
            through quality higher education.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {resources.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Kathmandu, Nepal
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              +977-1-000-0000
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              info@padmodayacampus.edu.np
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Padmodaya Campus. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
