import ClientLayout from '@/components/client/ClientLayout'
import { ThemeProvider } from '@/contexts/themeContext'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desbrave o esporte',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <ClientLayout>{children}</ClientLayout>
    </ThemeProvider>
  )
}
