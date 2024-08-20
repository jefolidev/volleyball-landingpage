import BusyDays from './components/BusyDays'
import Calendar from './components/calendar/Calendar'

const RachasAgendados = () => {
  return (
    <>
      <h1
        id="calendario"
        className="font-giovanni text-5xl text-center p-10 text-light-fonts dark:text-dark-fonts"
      >
        Rachas agendados
      </h1>
      <main className="w-full h-full flex justify-around items-center gap-12 bg-gray-300 dark:bg-zinc-900 px-32 py-8">
        <Calendar />
        <BusyDays />
      </main>
    </>
  )
}

export default RachasAgendados
