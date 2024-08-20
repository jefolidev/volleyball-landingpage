/* eslint-disable prettier/prettier */
'use client'

import FormButton from './components/FormButton'
import FormTags from './components/FormTags'
import FormRange from './form-swiper/HoursRoot'

import { FormEvent, FormEventHandler } from 'react'

import { useForm } from '@/contexts/formContext'
import FormInputs from './components/FormInputs'
import FormWeek from './components/FormWeek'

const Form = () => {
  const {
    selectedDays,
    selectedDayHour,
    selectedNightHour,
    setFormData,
    selectedDifficulty,
    selectedTags,
  } = useForm()

  const formHandleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    e: FormEvent
  ) => {
    e.preventDefault()
    setFormData((prevData) => ({
      ...prevData,
      days: selectedDays,
      startHour: selectedDayHour,
      endHour: selectedNightHour,
      tags: selectedTags,
      dificulty: selectedDifficulty,
    }))
  }

  return (
    <form
      onSubmit={formHandleSubmit}
      className="flex flex-col items-center p-8"
    >
      <FormInputs />
      <h1 className="text-sequel text-light-fonts dark:text-dark-fonts text-4xl p-5">
        Dias
      </h1>
      <div className="flex gap-5">
        <FormWeek />
      </div>
      <h1 className="text-sequel text-light-fonts dark:text-dark-fonts text-4xl p-5">
        Horário
      </h1>
      <FormRange />
      <FormTags />
      <FormButton type="submit" />
    </form>
  )
}

export default Form
