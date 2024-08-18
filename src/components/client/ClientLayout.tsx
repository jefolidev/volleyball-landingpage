'use client'

import { useTheme } from '@/contexts/themeContext'

import CalendarProvider from '@/contexts/calendarContext'
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
