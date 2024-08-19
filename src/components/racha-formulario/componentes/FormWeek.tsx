import { useTheme } from '@/contexts/themeContext'
import { useState } from 'react'

const FormWeek = () => {
  const [activeDays, setActiveDays] = useState<number[]>([])
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

  const getButtonStyle = (index: number) => {
    if (theme === 'light') {
      return {
        backgroundColor: activeDays.includes(index)
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
        color: activeDays.includes(index)
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
      }
    } else {
      return {
        backgroundColor: activeDays.includes(index)
          ? 'rgb(12,22,24)'
          : 'rgb(209, 213, 219)',
        color: activeDays.includes(index)
          ? 'rgb(209, 213, 219)'
          : 'rgb(12,22,24)',
      }
    }
  }

  const selectButtonHandler = (index: number) => {
    activeDays.includes(index)
      ? setActiveDays(activeDays.filter((i) => i !== index))
      : setActiveDays([...activeDays, index])
  }

  return daysWeek.map((d) => (
    <label
      key={d.day}
      className="w-10 h-10 flex items-center justify-center bg-zinc-300 dark:bg-zinc-100 hover:bg-zinc-600 dark:hover:bg-zinc-400 text-lg text-zinc-100 dark:text-zinc-800 rounded-full"
      style={getButtonStyle(d.day)}
      onClick={() => selectButtonHandler(d.day)}
    >
      {d.name.charAt(0)}
    </label>
  ))
}

export default FormWeek
