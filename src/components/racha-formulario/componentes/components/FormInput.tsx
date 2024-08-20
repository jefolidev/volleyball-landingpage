/* eslint-disable prettier/prettier */
import { forwardRef } from 'react'

type FormInputsProps = React.InputHTMLAttributes<HTMLInputElement>

const FormInput = forwardRef<HTMLInputElement, FormInputsProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="w-[15rem] h-10 focus:outline-none bg-light-background dark:bg-dark-background px-5 text-sm font-sequel border-b-2 border-light-fonts dark:border-dark-fonts text-light-fonts dark:text-dark-fonts font-bold"
      />
    )
  }
)

export default FormInput
