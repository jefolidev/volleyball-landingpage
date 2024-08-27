/* eslint-disable prettier/prettier */
'use client'

import FormButton from './components/FormButton'
import FormTags from './components/FormTags'
import FormRange from './form-swiper/HoursRoot'

import { FormEvent, FormEventHandler, useState } from 'react'

import { useForm } from '@/contexts/formContext'
import FormInput from './components/FormInput'
import FormWeek from './components/FormWeek'

type TInputValues = {
  name: string
  adress: string
  district: string
}

const Form = () => {
  const {
    selectedDays,
    selectedDayHour,
    formData,
    selectedNightHour,
    setFormData,
    selectedDifficulty,
    selectedTags,
  } = useForm()

  const [inputValues, setInputValues] = useState<TInputValues>({
    name: '',
    adress: '',
    district: '',
  })

  const datas = {
    name: inputValues.name,
    adress: inputValues.adress,
    district: inputValues.district,
    days: selectedDays,
    startHour: selectedDayHour,
    endHour: selectedNightHour,
    tags: selectedTags,
    dificulty: selectedDifficulty,
  }

  const formHandleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    e: FormEvent
  ) => {
    e.preventDefault()
    const newFormData = [...formData, datas]
    setFormData(newFormData)
    // formData.push(datas)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <form
      onSubmit={formHandleSubmit}
      className="flex flex-col items-center p-8"
    >
      <div className="flex gap-8">
        <FormInput
          required
          placeholder="Nome (ex: Praça da 14)"
          name="name"
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Endereço"
          name="adress"
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Bairro"
          name="district"
          onChange={handleInputChange}
        />
      </div>
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
