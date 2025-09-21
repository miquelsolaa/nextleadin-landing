import { redirect } from 'next/navigation'

export default function AdminPage() {
  // Redirigir a l'arxiu estàtic admin/index.html
  redirect('/admin/index.html')
}
