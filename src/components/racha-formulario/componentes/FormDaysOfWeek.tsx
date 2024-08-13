'use client'
import { useTheme } from '@/contexts/themeContext'
import React, { useState } from 'react'

interface IDayOfWeekProps {
  children: string
}

const FormDaysOfWeek: React.FC<IDayOfWeekProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const { theme } = useTheme()

  const buttonStyle = {
    backgroundColor:
      theme === 'light'
        ? isActive
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)'
        : isActive
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
    color:
      theme === 'light'
        ? isActive
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)'
        : isActive
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
  }
  return (
    <button
      className="w-10 h-10 bg-zinc-300 dark:bg-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-400 text-lg text-zinc-100 dark:text-zinc-800 rounded-full"
      style={buttonStyle}
      onClick={() => setIsActive(!isActive)}
    >
      {children}
    </button>
  )
}

export default FormDaysOfWeek
