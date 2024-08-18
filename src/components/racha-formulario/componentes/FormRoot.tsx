'use client'

import FormRange from './form-swiper/HoursRoot'
import FormButton from './FormButton'
import FormDays from './FormDaysOfWeek'
import FormInputs from './FormInputs'
import FormTags from './FormTags'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const gamesFormSchema = z.object({
  name: z
    .string({ required_error: 'Preencha o campo.' })
    .min(3, { message: 'Deve conter pelo menos 3 carácteres ou mais.' }),
  adress: z
    .string({ required_error: 'Preencha o campo.' })
    .min(3, { message: 'Deve conter pelo menos 3 carácteres ou mais.' }),
  district: z
    .string({ required_error: 'Preencha o campo.' })
    .min(3, { message: 'Deve conter pelo menos 3 carácteres ou mais.' }),
  reference: z
    .string({ required_error: 'Preencha o campo.' })
    .min(3, { message: 'Deve conter pelo menos 3 carácteres ou mais.' }),
})

type GamesFormSchema = z.infer<typeof gamesFormSchema>

const Form = () => {
  const { register, handleSubmit } = useForm<GamesFormSchema>({
    resolver: zodResolver(gamesFormSchema),
  })

  const formHandleSubmit = (data: GamesFormSchema) => {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(formHandleSubmit)}
      className="flex flex-col items-center p-8"
    >
      <div className="flex flex-col gap-8">
        <div className="flex gap-12">
          <FormInputs
            required
            placeholder="Nome (ex: Praça do Cocó)"
            {...register('name')}
          />
          <FormInputs required placeholder="Endereço" {...register('adress')} />
        </div>
        <div className="flex gap-12">
          <FormInputs required placeholder="Bairro" {...register('district')} />
          <FormInputs
            required
            placeholder="Ponto de Referência"
            {...register('reference')}
          />
        </div>
      </div>
      <h1 className="text-sequel text-light-fonts dark:text-dark-fonts text-4xl p-5">
        Dias
      </h1>
      <div className="flex gap-5">
        <FormDays>D</FormDays>
        <FormDays>S</FormDays>
        <FormDays>T</FormDays>
        <FormDays>Q</FormDays>
        <FormDays>Q</FormDays>
        <FormDays>S</FormDays>
        <FormDays>S</FormDays>
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
