/* eslint-disable prettier/prettier */
import { useCalendar } from '@/contexts/useCalendar'
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDate,
  getDay,
  getDaysInMonth,
  isToday,
  nextSaturday,
  startOfMonth,
  subMonths,
} from 'date-fns'
import { DayObject } from '../types/calendarTypes'

const CalendarBody = () => {
  const { currentDate, scheduledGame } = useCalendar()

  const daysOfMonth = getDaysInMonth(currentDate)

  const allDaysOfMonthObject: DayObject[] = []
  const allDaysOfMonthString: number[] = []

  const firstDayOfMonth = startOfMonth(currentDate)
  const startWeekDay = getDay(firstDayOfMonth)

  const lastDateOfPrevMonth = endOfMonth(subMonths(currentDate, 1))
  const lastDayofPrevMonth = getDate(lastDateOfPrevMonth)

  const currentDayStyle =
    'bg-light-fonts rounded-full text-white hover:bg-gray-950 '

  const intervalBetweenDays = eachDayOfInterval({
    start: addMonths(firstDayOfMonth, 1),
    end: nextSaturday(endOfMonth(currentDate)),
  })

  const formattedNextMonthDays = intervalBetweenDays.map((day) =>
    parseInt(format(day, 'd'), 10)
  )

  // Preenche os dias vazios antes do primeiro dia
  for (let days = startWeekDay; days > 0; days--) {
    const lastDaysOfPrevMonth = lastDayofPrevMonth - days + 1
    allDaysOfMonthObject.push({
      day: lastDaysOfPrevMonth,
      isPlaceholder: true,
    })
    allDaysOfMonthString.push(lastDaysOfPrevMonth)
  }

  // Todos os dias do Mês
  for (let days = 1; days <= daysOfMonth; days++) {
    allDaysOfMonthObject.push({
      day: days,
      isPlaceholder: false,
      hasGame: false,
    })
    allDaysOfMonthString.push(days)
  }

  // Adiciona os dias do próximo mês ao final
  formattedNextMonthDays.forEach((day) => {
    if (formattedNextMonthDays.length > 6) {
      return null
    } else {
      allDaysOfMonthObject.push({
        day,
        isPlaceholder: true,
      })
      allDaysOfMonthString.push(day)
    }
  })

  scheduledGame.forEach((games) => {
    allDaysOfMonthObject.map((days) => {
      if (games.day === days.day) {
        return (days.hasGame = true)
      }
      return days
    })
  })

  return (
    <div className="grid grid-flow-rows grid-cols-7 mx-12 gap-5">
      {allDaysOfMonthObject.map(
        ({ day, isPlaceholder, hasGame }, index: number) => (
          <div
            key={index}
            className={`
       flex items-center justify-center w-14 h-14 text-2xl cursor-default
        ${isToday(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) && isPlaceholder === false ? currentDayStyle : ''} 
        ${
          hasGame && isPlaceholder === false
            ? `after:relative after:inset-y-5 ${day > 9 ? `after:-inset-x-[1.10rem]` : `after:-inset-x-3`} 
          after:w-3 after:h-1 after:bg-light-fonts after:rounded-full`
            : ''
        }
      `}
          >
            <span className={isPlaceholder ? `text-gray-300` : ''}>{day}</span>
          </div>
        )
      )}
    </div>
  )
}

export default CalendarBody
