import { useForm } from '@/contexts/formContext'
import HoursTitle from './components/HoursLabel'
import HoursBody from './HoursBody'

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

const FormHoursRange = () => {
  const { selectedHour } = useForm()
  return (
    <div className="flex gap-12">
      <div className="flex flex-col items-center">
        <HoursTitle className="text-2xl font-normal font-sequel dark:text-dark-fonts ">
          Início
        </HoursTitle>
        <HoursBody hour={parseInt(selectedHour)} />
      </div>
      <div className="flex flex-col items-center">
        <HoursTitle className="text-2xl font-normal font-sequel dark:text-dark-fonts ">
          Fim
        </HoursTitle>
        <HoursBody hour={parseInt(selectedHour)} />
      </div>
    </div>
  )
}

export default FormHoursRange
