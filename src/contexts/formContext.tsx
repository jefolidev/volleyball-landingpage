'use client'
/* eslint-disable prettier/prettier */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type FormContextProps = {
  selectedDayHour: string
  selectedNightHour: string
  selectedDays: string[]
  setSelectedDays: Dispatch<SetStateAction<never[]>>
  setSelectedDayHour: Dispatch<SetStateAction<string>>
  setSelectedNightHour: Dispatch<SetStateAction<string>>
  handleSliderDayChange: (event: Event, newValue: number | number[]) => void
  handleSliderNightChange: (event: Event, newValue: number | number[]) => void
}

const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDays, setSelectedDays] = useState([])

  const [selectedDayHour, setSelectedDayHour] = useState('0')
  const [selectedNightHour, setSelectedNightHour] = useState('0')

  const handleSliderDayChange = (event: Event, newValue: number | number[]) => {
    setSelectedDayHour(newValue.toString())
  }
  const handleSliderNightChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSelectedNightHour(newValue.toString())
  }

  return (
    <FormContext.Provider
      value={{
        selectedDays,
        setSelectedDays,
        selectedDayHour,
        setSelectedDayHour,
        selectedNightHour,
        setSelectedNightHour,
        handleSliderDayChange,
        handleSliderNightChange,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
export default FormProvider

export const useForm = () => {
  return useContext(FormContext)
}
