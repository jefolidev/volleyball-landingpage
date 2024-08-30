'use client'

import { useTheme } from '@/contexts/useTheme'

import CalendarProvider from '@/contexts/useCalendar'
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()
  return (
    <CalendarProvider>
      <html lang="pt-BR" className={theme}>
        <body>{children}</body>
      </html>
    </CalendarProvider>
  )
}

export default ClientLayout
