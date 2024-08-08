'use client'

import { useTheme } from '@/contexts/themeContext'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme()
  return (
    <html lang="pt-BR" className={theme}>
      <body>{children}</body>
    </html>
  )
}

export default ClientLayout
