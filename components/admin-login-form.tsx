'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, GraduationCap, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function AdminLoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    if (!email.trim() || !password.trim()) return
    router.push('/admin/dashboard')
  }

  return (
    <main className="min-h-screen bg-secondary lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <section className="relative hidden min-h-screen overflow-hidden bg-primary p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="relative flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-lg bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
            <GraduationCap className="size-7" aria-hidden="true" />
          </span>
          <div>
            <p className="font-serif text-xl font-semibold">Padmodaya Campus</p>
            <p className="text-sm text-primary-foreground/70">Administration Portal</p>
          </div>
        </div>

        <div className="relative max-w-xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Campus management</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-balance">A focused place to keep campus information current.</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/75">Manage homepage notices, academic programs, events, and admissions information from one clear workspace.</p>
        </div>

        <div className="relative flex items-center gap-3 text-sm text-primary-foreground/65">
          <ShieldCheck className="size-5 text-accent" aria-hidden="true" />
          Design preview for approved campus staff
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-3 lg:hidden">
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"><GraduationCap className="size-6" aria-hidden="true" /></span>
            <span className="font-serif text-lg font-semibold text-foreground">Padmodaya Campus</span>
          </Link>

          <Card className="shadow-xl shadow-primary/5">
            <CardHeader>
              <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-secondary text-primary"><LockKeyhole className="size-5" aria-hidden="true" /></div>
              <CardTitle className="font-serif text-3xl">Staff sign in</CardTitle>
              <CardDescription>Enter any details to preview the admin dashboard.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 rounded-lg border border-accent/50 bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                <strong>Prototype only:</strong> Authentication is not active. Do not enter a real password.
              </div>
              <form id="admin-login" onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                  <Field data-invalid={submitted && !email.trim()}>
                    <FieldLabel htmlFor="admin-email">Email address</FieldLabel>
                    <Input id="admin-email" type="email" autoComplete="email" placeholder="admin@padmodayacampus.edu.np" value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={submitted && !email.trim()} />
                    {submitted && !email.trim() && <FieldDescription className="text-destructive">Enter a demo email address.</FieldDescription>}
                  </Field>
                  <Field data-invalid={submitted && !password.trim()}>
                    <FieldLabel htmlFor="admin-password">Password</FieldLabel>
                    <div className="relative">
                      <Input id="admin-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter a demo password" value={password} onChange={(event) => setPassword(event.target.value)} aria-invalid={submitted && !password.trim()} className="pr-12" />
                      <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground hover:text-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                      </button>
                    </div>
                    {submitted && !password.trim() && <FieldDescription className="text-destructive">Enter a demo password.</FieldDescription>}
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button type="submit" form="admin-login" className="w-full">Enter demo dashboard</Button>
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">Return to public website</Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
