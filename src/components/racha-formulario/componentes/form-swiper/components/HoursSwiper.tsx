import { useForm } from '@/contexts/formContext'
import { useTheme } from '@/contexts/themeContext'
import { createTheme, Slider, ThemeProvider } from '@mui/material'

type HoursSwiperProps = {
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

const HoursSwiper = ({ valueLabelFormat }: HoursSwiperProps) => {
  const { theme } = useTheme()
  const { selectedHour, handleSliderChange } = useForm()
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
        onChange={handleSliderChange}
        value={parseInt(selectedHour)}
      />
    </ThemeProvider>
  )
}

export default HoursSwiper
