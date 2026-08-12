'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bell, BookOpen, CalendarDays, ChevronRight, CircleUserRound, ExternalLink, FileText,
  GraduationCap, ImageIcon, LayoutDashboard, LogOut, Menu, Megaphone, Plus, Settings,
  Users, X,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Notices', icon: Megaphone },
  { label: 'Programs', icon: BookOpen },
  { label: 'Homepage', icon: ImageIcon },
  { label: 'Events', icon: CalendarDays },
  { label: 'Settings', icon: Settings },
]

const stats = [
  { label: 'Active notices', value: '12', detail: '3 published this week', icon: Megaphone },
  { label: 'Academic programs', value: '4', detail: 'All information current', icon: BookOpen },
  { label: 'Upcoming events', value: '6', detail: 'Next event in 3 days', icon: CalendarDays },
  { label: 'Student records', value: '1,240', detail: 'Prototype data', icon: Users },
]

const notices = [
  { title: 'BBS First Year Admission Open', category: 'Admissions', date: '12 Aug 2026', status: 'Published' },
  { title: 'Internal Examination Schedule', category: 'Examination', date: '10 Aug 2026', status: 'Published' },
  { title: 'Campus Closed for Public Holiday', category: 'General', date: '08 Aug 2026', status: 'Draft' },
]

const contentItems = [
  { title: 'Homepage slider', count: '3 slides', status: 'Current', icon: ImageIcon },
  { title: 'Academic programs', count: '4 programs', status: 'Current', icon: BookOpen },
  { title: 'Campus notices', count: '12 notices', status: 'Review', icon: Megaphone },
]

function Sidebar({ mobile = false, onClose }: { mobile?: boolean; onClose?: () => void }) {
  return (
    <aside className={cn('flex h-full flex-col bg-primary text-primary-foreground', mobile ? 'w-72' : 'hidden w-64 lg:flex')}>
      <div className="flex h-20 items-center gap-3 px-6">
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/10"><GraduationCap className="size-6" aria-hidden="true" /></span>
        <div className="min-w-0"><p className="truncate font-serif font-semibold">Padmodaya Campus</p><p className="text-xs text-primary-foreground/60">Admin portal</p></div>
        {mobile && <button type="button" onClick={onClose} className="ml-auto text-primary-foreground/70" aria-label="Close navigation"><X className="size-5" /></button>}
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-4 py-5" aria-label="Admin navigation">
        {navigation.map((item) => (
          <button key={item.label} type="button" className={cn('flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors', item.active ? 'bg-primary-foreground/12 text-primary-foreground' : 'text-primary-foreground/65 hover:bg-primary-foreground/8 hover:text-primary-foreground')}>
            <item.icon className="size-5" aria-hidden="true" />{item.label}
          </button>
        ))}
      </nav>
      <div className="p-4">
        <div className="rounded-lg bg-primary-foreground/8 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Design preview</p>
          <p className="mt-2 text-xs leading-relaxed text-primary-foreground/65">Changes are not saved and authentication is not active.</p>
        </div>
        <Link href="/admin/login" className="mt-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-primary-foreground/65 hover:text-primary-foreground"><LogOut className="size-5" aria-hidden="true" />Exit demo</Link>
      </div>
    </aside>
  )
}

export function AdminDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="flex min-h-screen bg-secondary">
      <Sidebar />
      {mobileMenuOpen && <div className="fixed inset-0 z-50 flex lg:hidden"><button type="button" className="absolute inset-0 bg-foreground/40" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation overlay" /><div className="relative"><Sidebar mobile onClose={() => setMobileMenuOpen(false)} /></div></div>}

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border bg-background/95 px-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="text-foreground lg:hidden" aria-label="Open navigation"><Menu className="size-6" /></button>
            <div><p className="font-serif text-xl font-semibold text-foreground">Administration</p><p className="hidden text-xs text-muted-foreground sm:block">Wednesday, 12 August 2026</p></div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary sm:flex">View website <ExternalLink className="size-4" /></Link>
            <Separator orientation="vertical" className="hidden h-7 sm:block" />
            <button type="button" className="relative flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground" aria-label="Notifications"><Bell className="size-5" /><span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-accent" /></button>
            <Avatar><AvatarFallback>PA</AvatarFallback></Avatar>
          </div>
        </header>

        <div className="mx-auto max-w-7xl p-5 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><Badge variant="outline" className="mb-3">Design-only prototype</Badge><h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Good morning, Admin</h1><p className="mt-2 text-muted-foreground">Here is what is happening across the campus website.</p></div>
            <Button><Plus data-icon="inline-start" />Create notice</Button>
          </div>

          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="sr-only">Overview statistics</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => <Card key={stat.label} size="sm"><CardHeader><div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-secondary text-primary"><stat.icon className="size-5" aria-hidden="true" /></div><CardDescription>{stat.label}</CardDescription><CardTitle className="font-serif text-3xl">{stat.value}</CardTitle></CardHeader><CardContent><p className="text-xs text-muted-foreground">{stat.detail}</p></CardContent></Card>)}
            </div>
          </section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
            <Card>
              <CardHeader><CardTitle>Recent notices</CardTitle><CardDescription>Latest announcements prepared for the website.</CardDescription><CardAction><Button variant="outline" size="sm">View all</Button></CardAction></CardHeader>
              <CardContent className="flex flex-col">
                {notices.map((notice, index) => <div key={notice.title}>{index > 0 && <Separator />}<div className="flex items-start gap-4 py-4"><span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><FileText className="size-4" aria-hidden="true" /></span><div className="min-w-0 flex-1"><p className="font-medium text-foreground">{notice.title}</p><p className="mt-1 text-xs text-muted-foreground">{notice.category} · {notice.date}</p></div><Badge variant={notice.status === 'Published' ? 'secondary' : 'outline'}>{notice.status}</Badge></div></div>)}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Upcoming events</CardTitle><CardDescription>Campus calendar at a glance.</CardDescription></CardHeader>
              <CardContent className="flex flex-col gap-5">
                {[['15', 'AUG', 'New student orientation'], ['20', 'AUG', 'Faculty development workshop'], ['27', 'AUG', 'Annual sports meet']].map(([day, month, title]) => <div key={title} className="flex items-center gap-4"><div className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground"><span className="text-base font-bold leading-none">{day}</span><span className="mt-1 text-[10px] font-semibold">{month}</span></div><p className="text-sm font-medium leading-snug text-foreground">{title}</p></div>)}
              </CardContent>
              <CardFooter><Button variant="ghost" size="sm">Open calendar <ChevronRight data-icon="inline-end" /></Button></CardFooter>
            </Card>
          </div>

          <section className="mt-6" aria-labelledby="content-heading">
            <div className="mb-4 flex items-center justify-between"><div><h2 id="content-heading" className="font-serif text-2xl font-semibold">Website content</h2><p className="mt-1 text-sm text-muted-foreground">Review the main public sections.</p></div></div>
            <div className="grid gap-4 md:grid-cols-3">
              {contentItems.map((item) => <Card key={item.title} size="sm"><CardHeader><div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary"><item.icon className="size-5" aria-hidden="true" /></div><CardAction><Badge variant="outline">{item.status}</Badge></CardAction><CardTitle>{item.title}</CardTitle><CardDescription>{item.count}</CardDescription></CardHeader><CardFooter><Button variant="ghost" size="sm">Manage <ChevronRight data-icon="inline-end" /></Button></CardFooter></Card>)}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
