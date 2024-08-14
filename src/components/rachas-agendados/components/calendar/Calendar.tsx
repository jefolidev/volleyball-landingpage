'use client'
import CalendarBody from './components/CalendarBody'
import CalendarHeader from './components/CalendarHeader'

const Calendar = () => {
  return (
    <>
      <main className="min-h-[33rem] h-full bg-light-background dark:bg-dark-fonts rounded-2xl flex flex-col items-center py-12 ">
        <CalendarHeader />
        <div className="w-full flex gap-8 text-light-fonts/70 justify-center py-5  ">
          <span className="text-2xl">Dom</span>
          <span className="text-2xl">Seg</span>
          <span className="text-2xl">Ter</span>
          <span className="text-2xl">Qua</span>
          <span className="text-2xl">Qui</span>
          <span className="text-2xl">Sex</span>
          <span className="text-2xl">Sab</span>
        </div>
        <CalendarBody />
      </main>
    </>
  )
}

export default Calendar
