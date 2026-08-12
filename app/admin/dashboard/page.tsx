import type { Metadata } from 'next'
import { AdminDashboard } from '@/components/admin-dashboard'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Padmodaya Campus',
  description: 'Design preview of the Padmodaya Campus administration dashboard.',
}

export default function AdminDashboardPage() {
  return <AdminDashboard />
}
