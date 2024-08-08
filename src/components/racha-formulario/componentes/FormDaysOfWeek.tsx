import React from 'react'

interface IDayOfWeekProps {
  children: string
}

const FormDaysOfWeek: React.FC<IDayOfWeekProps> = ({ children }) => {
  return (
    <button className="w-10 h-10 bg-zinc-300 dark:bg-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-400 text-lg text-zinc-100 dark:text-zinc-800 rounded-full">
      {children}
    </button>
  )
}

export default FormDaysOfWeek
