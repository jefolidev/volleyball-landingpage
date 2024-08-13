/* eslint-disable prettier/prettier */
'use client'
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

import { useState } from 'react'

interface DayObject {
  day: number
  isPlaceholder: boolean
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [month, setMonth] = useState(format(currentDate, 'MMMM'))

  const daysOfMonth = getDaysInMonth(currentDate)

  const allDaysOfMonthObject: DayObject[] = []
  const allDaysOfMonthString: number[] = []

  const firstDayOfMonth = startOfMonth(currentDate)
  const startWeekDay = getDay(firstDayOfMonth)

  const lastDateOfPrevMonth = endOfMonth(subMonths(currentDate, 1))
  const lastDayofPrevMonth = getDate(lastDateOfPrevMonth)

  const currentDayStyle =
    'bg-light-fonts rounded-full text-white hover:bg-gray-950'

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

  const nextMonth = () => {
    const nextMonthInDate = addMonths(currentDate, 1)
    setCurrentDate(nextMonthInDate)

    const nextMonthInString = format(nextMonthInDate, 'MMMM')
    setMonth(nextMonthInString)
  }

  const prevMonth = () => {
    const prevMonthInDate = subMonths(currentDate, 1)
    setCurrentDate(prevMonthInDate)

    const prevMonthInString = format(prevMonthInDate, 'MMMM')
    setMonth(prevMonthInString)
  }

  console.table(allDaysOfMonthObject)
  const currentYear = currentDate.getFullYear()
  return (
    <>
      <main className="min-h-[33rem] h-full bg-light-background dark:bg-dark-fonts rounded-2xl flex flex-col items-center py-12 ">
        <div className="w-full flex justify-between px-12 ">
          <div className="flex gap-3">
            <h1 className="text-4xl font-sequel"> {month}</h1>
            <h1 className="text-4xl font-sequel">{currentYear}</h1>
          </div>
          <div className="flex gap-2 text-2xl font-bold font-sequel items-center justify-center justify-self-end">
            <button
              className="w-10 h-10 flex rounded-full items-center justify-center border-2"
              onClick={prevMonth}
            >
              &lt;
            </button>
            <button
              className="w-10 h-10 flex rounded-full items-center justify-center border-2"
              onClick={nextMonth}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="w-full flex gap-7 text-light-fonts/70 justify-center py-5  ">
          <span className="text-2xl">Dom</span>
          <span className="text-2xl">Seg</span>
          <span className="text-2xl">Ter</span>
          <span className="text-2xl">Qua</span>
          <span className="text-2xl">Qui</span>
          <span className="text-2xl">Sex</span>
          <span className="text-2xl">Sab</span>
        </div>
        <div className="grid grid-flow-rows grid-cols-7 mx-12 gap-5">
          {allDaysOfMonthObject.map(({ day, isPlaceholder }, index: number) => (
            <div
              key={index}
              className={`
               flex items-center justify-center w-12 h-12 text-2xl hover:bg-gray-200 hover:rounded-full cursor-pointer
                ${isToday(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) ? currentDayStyle : ''} 
              
              `}
            >
              <span className={isPlaceholder ? `text-gray-300` : ''}>
                {day}
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Calendar
