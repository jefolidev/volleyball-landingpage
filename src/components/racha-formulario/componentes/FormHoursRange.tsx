import { useTheme } from '@/contexts/themeContext'
import { Slider } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Image from 'next/image'

import { useState } from 'react'
import nightIconWhite from '../../../../public/form-icons/dark-icons/moon-icon-dark.svg'
import dayIconWhite from '../../../../public/form-icons/dark-icons/sun-icon-dark.svg'
import dayIcon from '../../../../public/form-icons/day.svg'
import nightIcon from '../../../../public/form-icons/night.svg'

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

function valueLabelFormat(value: number) {
  let hoursValue = value
  hoursValue += 1

  return `${hoursValue <= 9 ? `0${hoursValue}:00` : `${hoursValue}:00`}`
}

const FormHoursRange = () => {
  const [value, setValue] = useState<number>(0)

  const swiperHandler = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  const hourAndThemeHandler = () => {
    if (theme === 'light') {
      if (value >= 18 || value <= 6) return nightIcon
      else return dayIcon
    } else if (value >= 18 || value <= 6) return nightIconWhite
    else return dayIconWhite
  }

  const { theme } = useTheme()
  return (
    <ThemeProvider theme={slideTheme}>
      <Slider
        className="w-56 h-2"
        sx={theme === 'light' ? { color: 'new.main' } : { color: 'new.dark' }}
        aria-label="Hours"
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        min={-1}
        max={22}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={swiperHandler}
        value={value}
      />

      <div className="flex items-center justify-center">
        <label
          htmlFor=""
          className="text-base text-light-fonts dark:text-dark-fonts font-sequel"
        >
          {valueLabelFormat(value)}
        </label>
        <div className="w-[.2rem] h-3 rounded-full mx-6 bg-light-fonts" />

        <Image src={hourAndThemeHandler()} alt="Alternar Tema" />
      </div>
    </ThemeProvider>
  )
}

export default FormHoursRange
