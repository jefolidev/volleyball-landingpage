import React from 'react'

interface IDayOfWeekProps {
  children: string
}

const FormDaysOfWeek: React.FC<IDayOfWeekProps> = ({ children }) => {
  return (
    <button className="w-10 h-10 bg-zinc-300 hover:bg-zinc-600 text-lg text-zinc-100 rounded-full">
      {children}
    </button>
  )
}

export default FormDaysOfWeek
