/* eslint-disable prettier/prettier */
'use client'
import { FormContextProps } from '@/types/formContextType'
import { GamesFormItem } from '@/types/formTypes'
import { createContext, useContext, useState } from 'react'

const FormContext = createContext({} as FormContextProps)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<GamesFormItem>([])

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
        setSelectedDays,
        selectedTags,
        setSelectedTags,
        selectedDifficulty,
        setSelectedDifficulty,
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
