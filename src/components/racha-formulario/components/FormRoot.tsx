/* eslint-disable prettier/prettier */
'use client'

import FormButton from './components/FormButton'
import FormTags from './components/FormTags'
import FormRange from './form-swiper/HoursRoot'

import { FormEvent, FormEventHandler, useState } from 'react'

import { useForm } from '@/contexts/useForm'
import FormInput from './components/FormInput'
import FormWeek from './components/FormWeek'

import { Toaster, toast } from 'sonner'

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

  const formHandleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    e: FormEvent
  ) => {
    e.preventDefault()
    if (
      selectedDays.length === 0 ||
      selectedTags.length === 0 ||
      selectedDifficulty.length === 0
    ) {
      toast.error('Preencha todos os campos')
      return
    }

    toast.success('Formulário enviado!')
    setFormData([
      ...formData,
      {
        name: inputValues.name,
        adress: inputValues.adress,
        district: inputValues.district,
        days: selectedDays,
        startHour: selectedDayHour,
        endHour: selectedNightHour,
        tags: selectedTags,
        dificulty: selectedDifficulty,
      },
    ])
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
      <Toaster richColors />
      <div className="flex gap-8">
        <FormInput
          required
          placeholder="Nome (ex: Praça da 14)"
          name="name"
          value={inputValues.name}
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Endereço"
          name="adress"
          value={inputValues.adress}
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Bairro"
          name="district"
          value={inputValues.district}
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
