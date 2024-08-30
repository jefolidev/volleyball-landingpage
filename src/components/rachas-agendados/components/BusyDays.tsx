'use client'
import { useCalendar } from '@/contexts/useCalendar'

const BusyDays = () => {
  const { currentDate, month, scheduledGame, monthHandler } = useCalendar()
  const currentYear = currentDate.getFullYear()

  const weekDayHandler = (weekDay: number) => {
    if (weekDay === 0) return 'Domingo'
    if (weekDay === 1) return 'Segunda'
    if (weekDay === 2) return 'Terça'
    if (weekDay === 3) return 'Quarta'
    if (weekDay === 4) return 'Quinta'
    if (weekDay === 5) return 'Sexta'
    if (weekDay === 6) return 'Sábado'
  }

  return (
    <>
      <div className="w-[31rem] h-[35rem] flex flex-col justify-center py-12 bg-light-fonts dark:bg-dark-background rounded-2xl  ">
        <h1 className="p-9 text-4xl font-sequel text-white ">
          {monthHandler(month)}, {currentYear}
        </h1>

        <div className="flex flex-col items-start text-white font-sequel">
          {scheduledGame.map((busyDay) => (
            <div key={busyDay.id} className="flex flex-col gap-2 px-9 ">
              <h1 className="text-3xl">
                {weekDayHandler(busyDay.weekDay)}, {busyDay.day} de{' '}
                {monthHandler(month)}
              </h1>
              <div className="flex items-center text-base text-white gap-3 mb-4">
                <h2 className="font-sequel">{busyDay.local}</h2>
                <div className="w-0.5 h-2 bg-light-background rounded-full" />
                <h2 className="font-sequel">{busyDay.hour}h</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BusyDays
