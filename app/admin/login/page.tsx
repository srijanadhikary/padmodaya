import type { Metadata } from 'next'
import { AdminLoginForm } from '@/components/admin-login-form'

export const metadata: Metadata = {
  title: 'Staff Login | Padmodaya Campus',
  description: 'Design preview of the Padmodaya Campus administration login.',
}

export default function AdminLoginPage() {
  return <AdminLoginForm />
}
