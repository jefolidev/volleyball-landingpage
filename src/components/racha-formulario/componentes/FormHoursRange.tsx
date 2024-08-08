import { useTheme } from '@/contexts/themeContext'
import { Slider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Image from 'next/image'

import dayIconWhite from '../../../../public/form-icons/dark-icons/sun-icon-dark.svg'
import dayIcon from '../../../../public/form-icons/day.svg'

declare module '@mui/material/styles' {
  interface Palette {
    new: Palette['primary']
  }

  interface PaletteOptions {
    new?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    new: true
  }
}

const slideTheme = createTheme({
  palette: {
    new: {
      main: '#0C1618',
      light: '#0C1618',
      dark: '#F2F4FF',
      contrastText: '#242105',
    },
  },
})

const FormHoursRange = () => {
  const { theme } = useTheme()
  return (
    <ThemeProvider theme={slideTheme}>
      <Slider
        defaultValue={0}
        aria-label="Hours"
        sx={theme === 'light' ? { color: 'new.main' } : { color: 'new.dark' }}
        className="w-56 h-2"
      />

      <div className="flex items-center justify-center">
        <label
          htmlFor=""
          className="text-base text-light-fonts dark:text-dark-fonts font-sequel"
        >
          00:00
        </label>
        <div className="w-[.2rem] h-3 rounded-full mx-6 bg-light-fonts" />

        <Image
          src={theme === 'light' ? dayIcon : dayIconWhite}
          alt="Alternar Tema"
        />
      </div>
    </ThemeProvider>
  )
}

export default FormHoursRange
