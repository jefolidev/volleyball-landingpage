'use client'
import { FormContextProps } from '@/types/formContextType'
import { GamesFormSchema } from '@/types/formTypes'
/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react'

const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<GamesFormSchema>({
    name: '',
    adress: '',
    district: '',
    reference: '',
    days: [],
    startHour: '',
    endHour: '',
    tags: [],
    dificulty: '',
  })
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')

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
        formData,
        setFormData,
        selectedDays,
        selectedDifficulty,
        setSelectedDifficulty,
        setSelectedDays,
        selectedTags,
        setSelectedTags,
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
