import { useTheme } from '@/contexts/useTheme'
import { createTheme, Slider, ThemeProvider } from '@mui/material'

type HoursSwiperProps = {
  value: string
  onChange: (event: Event, newValue: number | number[]) => void
  valueLabelFormat: (value: number) => string
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

const HoursSwiper = ({
  valueLabelFormat,
  onChange,
  value,
}: HoursSwiperProps) => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={slideTheme}>
      <Slider
        className="w-32 h-2"
        sx={theme === 'light' ? { color: 'new.main' } : { color: 'new.dark' }}
        aria-label="Hours"
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        min={-1}
        max={22}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={onChange}
        value={parseInt(value)}
      />
    </ThemeProvider>
  )
}

export default HoursSwiper
