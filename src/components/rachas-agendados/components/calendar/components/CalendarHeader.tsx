import { useCalendar } from '@/contexts/calendarContext'
import { addMonths, format, subMonths } from 'date-fns'

const CalendarHeader = () => {
  const { currentDate, setCurrentDate, month, setMonth, monthHandler } =
    useCalendar()
  const currentYear = currentDate.getFullYear()

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

  return (
    <div className="w-full flex justify-between px-12 ">
      <div className="flex gap-3">
        <h1 className="text-4xl font-sequel"> {monthHandler(month)}</h1>
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
  )
}

export default CalendarHeader
