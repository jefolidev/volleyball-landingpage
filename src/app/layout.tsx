import ClientLayout from '@/components/client/ClientLayout'
import FilterProvider from '@/contexts/useFilter'
import FormProvider from '@/contexts/useForm'
import { ThemeProvider } from '@/contexts/useTheme'
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
    <FormProvider>
      <ThemeProvider>
        <FilterProvider>
          <ClientLayout>{children}</ClientLayout>
        </FilterProvider>
      </ThemeProvider>
    </FormProvider>
  )
}
