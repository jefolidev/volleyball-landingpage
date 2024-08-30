import { useForm } from '@/contexts/useForm'
import { useTheme } from '@/contexts/useTheme'
import { useState } from 'react'

import colors from 'tailwindcss/colors'

const FormWeek = () => {
  const { selectedDays, setSelectedDays } = useForm()

  const [daysWeek] = useState([
    {
      day: 1,
      name: 'Segunda',
    },
    {
      day: 2,
      name: 'Terça',
    },
    {
      day: 3,
      name: 'Quarta',
    },
    {
      day: 4,
      name: 'Quinta',
    },
    {
      day: 5,
      name: 'Sexta',
    },
    {
      day: 6,
      name: 'Sábado',
    },
    {
      day: 7,
      name: 'Domingo',
    },
  ])

  const { theme } = useTheme()

  const getButtonStyle = (day: string) => {
    if (theme === 'light') {
      return {
        backgroundColor: selectedDays.includes(day)
          ? colors.slate['900']
          : colors.slate['300'],
        color: selectedDays.includes(day)
          ? colors.slate['100']
          : colors.slate['900'],
      }
    } else {
      return {
        backgroundColor: selectedDays.includes(day)
          ? colors.zinc['700']
          : colors.zinc['200'],
        color: selectedDays.includes(day)
          ? colors.slate['100']
          : colors.slate['900'],
      }
    }
  }

  const selectButtonHandler = (day: string) => {
    selectedDays.includes(day)
      ? setSelectedDays(selectedDays.filter((i) => i !== day))
      : setSelectedDays([...selectedDays, day])
  }

  return daysWeek.map((d) => (
    <label
      key={d.day}
      className="w-10 h-10 flex items-center justify-center bg-zinc-300 dark:bg-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-400 text-lg text-zinc-100 dark:text-zinc-800 rounded-full cursor-pointer font-medium font-sequel"
      style={getButtonStyle(d.name)}
      onClick={() => selectButtonHandler(d.name)}
    >
      {d.name.charAt(0)}
    </label>
  ))
}

export default FormWeek
