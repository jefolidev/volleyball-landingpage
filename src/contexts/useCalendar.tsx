'use client'
import { format } from 'date-fns'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type GamesArrayProps = {
  id: number
  hour: number
  day: number
  weekDay: number
  month: number
  year: number
  local: string
}

type CalendarProviderProps = {
  children: React.ReactNode
}
type CalendarContextProps = {
  currentDate: Date
  setCurrentDate: Dispatch<SetStateAction<Date>>
  month: string
  setMonth: Dispatch<SetStateAction<string>>
  scheduledGame: GamesArrayProps[]
  monthHandler: (month: string) => string
}
export const CalendarContext = createContext({} as CalendarContextProps)

const CalendarProvider: React.FC<CalendarProviderProps> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [month, setMonth] = useState(format(currentDate, 'MMMM'))
  const [scheduledGame] = useState([
    {
      id: 1,
      hour: 9,
      day: 1,
      weekDay: 3,
      month: 8,
      year: 2024,
      local: 'Cidade Nova',
    },
    {
      id: 2,
      hour: 9,
      day: 12,
      weekDay: 2,
      month: 8,
      year: 2024,
      local: 'Cidade Nova',
    },
    {
      id: 3,
      hour: 9,
      day: 30,
      weekDay: 0,
      month: 8,
      year: 2024,
      local: 'Cidade Nova',
    },
  ])

  const monthHandler = (month: string) => {
    if (month === 'January') return 'Janeiro'
    if (month === 'February') return 'Fevereiro'
    if (month === 'March') return 'Março'
    if (month === 'April') return 'Abril'
    if (month === 'May') return 'Maio'
    if (month === 'June') return 'Junho'
    if (month === 'July') return 'Julho'
    if (month === 'August') return 'Agosto'
    if (month === 'September') return 'Setembro'
    if (month === 'October') return 'Outubro'
    if (month === 'November') return 'Novembro'
    if (month === 'December') return 'Dezembro'
    return month
  }
  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        month,
        setMonth,
        scheduledGame,
        monthHandler,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarProvider

export function useCalendar() {
  return useContext(CalendarContext)
}
