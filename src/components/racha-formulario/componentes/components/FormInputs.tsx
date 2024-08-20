import { ChangeEvent } from 'react'

import { useForm } from '@/contexts/formContext'
import FormInput from './FormInput'

const FormInputs = () => {
  const { formData, setFormData } = useForm()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-12">
        <FormInput
          required
          placeholder="Nome (ex: Praça da 14)"
          name="name"
          value={formData?.name}
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Endereço"
          name="adress"
          value={formData?.adress}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-12">
        <FormInput
          required
          placeholder="Bairro"
          name="district"
          value={formData?.district}
          onChange={handleInputChange}
        />
        <FormInput
          required
          placeholder="Ponto de Referência"
          name="reference"
          value={formData?.reference}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default FormInputs
