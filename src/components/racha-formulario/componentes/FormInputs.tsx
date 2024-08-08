interface IFormInputsProps {
  placeholder: string
}
const FormInputs: React.FC<IFormInputsProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder={placeholder}
      className="w-[15rem] h-10 focus:outline-none bg-light-background dark:bg-dark-background px-5 font-sequel border-b-2 border-light-fonts dark:border-dark-fonts text-light-fonts dark:text-dark-fonts font-bold"
    />
  )
}

export default FormInputs
