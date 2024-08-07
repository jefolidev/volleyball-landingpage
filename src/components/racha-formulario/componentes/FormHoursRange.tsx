import { Slider } from '@mui/material'
import Image from 'next/image'

import dayIcon from '../../../../public/form-icons/day.svg'

const FormHoursRange = () => {
  return (
    <>
      <Slider
        defaultValue={0}
        aria-label="Hours"
        color="#0C1618"
        className="w-56 h-2"
      />
      <div className="flex items-center justify-center">
        <label htmlFor="" className="text-base text-light-fonts font-sequel">
          00:00
        </label>
        <div className="w-[.2rem] h-3 rounded-full mx-6 bg-light-fonts" />
        <Image src={dayIcon} alt="dia" className="w-7 h-7" />
      </div>
    </>
  )
}

export default FormHoursRange
