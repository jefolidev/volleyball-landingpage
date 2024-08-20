import { Dispatch, SetStateAction } from 'react'
import { GamesFormSchema } from './formTypes'

export type FormContextProps = {
  formData: GamesFormSchema
  setFormData: Dispatch<SetStateAction<GamesFormSchema>>
  selectedDayHour: string
  selectedNightHour: string
  selectedDays: string[]
  setSelectedDays: Dispatch<SetStateAction<string[]>>
  selectedTags: string[]
  setSelectedTags: Dispatch<SetStateAction<string[]>>
  selectedDifficulty: string
  setSelectedDifficulty: Dispatch<SetStateAction<string>>
  setSelectedDayHour: Dispatch<SetStateAction<string>>
  setSelectedNightHour: Dispatch<SetStateAction<string>>
  handleSliderDayChange: (event: Event, newValue: number | number[]) => void
  handleSliderNightChange: (event: Event, newValue: number | number[]) => void
}
