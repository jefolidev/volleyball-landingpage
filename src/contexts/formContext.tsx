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
  selectedDays: string[]
  setSelectedDays: Dispatch<SetStateAction<never[]>>
  selectedHour: string
  setSelectedHour: Dispatch<SetStateAction<string>>
  handleSliderChange: (event: Event, newValue: number | number[]) => void
}

const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDays, setSelectedDays] = useState([])
  const [selectedHour, setSelectedHour] = useState('')

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSelectedHour(newValue.toString())
  }

  return (
    <FormContext.Provider
      value={{
        selectedDays,
        setSelectedDays,
        selectedHour,
        setSelectedHour,
        handleSliderChange,
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
