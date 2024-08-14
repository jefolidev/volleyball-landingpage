import type { Metadata } from 'next'

import { ThemeProvider } from '@/contexts/themeContext'

import ClientLayout from '@/components/client/ClientLayout'
import CalendarProvider from '@/contexts/calendarContext'
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
      <CalendarProvider>
        <ClientLayout>{children}</ClientLayout>
      </CalendarProvider>
    </ThemeProvider>
  )
}
