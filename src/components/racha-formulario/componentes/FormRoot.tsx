import Image from 'next/image'
import Day from './FormDaysOfWeek'
import Range from './FormHoursRange'
import FormInputs from './FormInputs'
import FormTags from './FormTags'

import submitIcon from '../../../../public/form-icons/submitIcon.svg'

const Form = () => {
  return (
    <form action="" method="post" className="flex flex-col items-center p-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-12">
          <FormInputs placeholder="Nome do local" />
          <FormInputs placeholder="Endereço" />
        </div>
        <div className="flex gap-12">
          <FormInputs placeholder="Bairro" />
          <FormInputs placeholder="Ponto de Referência" />
        </div>
      </div>
      <h1 className="text-sequel-text-light-fonts text-4xl p-5"> Dias</h1>
      <div className="flex gap-5">
        <Day>D</Day>
        <Day>S</Day>
        <Day>T</Day>
        <Day>Q</Day>
        <Day>Q</Day>
        <Day>S</Day>
        <Day>S</Day>
      </div>
      <h1 className="text-sequel-text-light-fonts text-4xl p-5"> Horário </h1>
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <label htmlFor="" className="text-2xl font-normal font-sequel">
            Início
          </label>
          <Range />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="" className="text-2xl font-normal font-sequel">
            Fim
          </label>
          <Range />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 py-8">
        <FormTags />
      </div>
      <button className="w-12 h-12 rounded-full bg-light-fonts ">
        <Image
          src={submitIcon}
          alt="Símbolo de enviar"
          className="mx-auto my-auto "
        />
      </button>
    </form>
  )
}

export default Form
