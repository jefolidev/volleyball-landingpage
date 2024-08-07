import BusyDays from './components/BusyDays'
import Calendar from './components/Calendar'

const Calendario = () => {
  return (
    <>
      <h1 className="font-giovanni text-5xl text-center p-10">
        Rachas agendados
      </h1>
      <main className="w-full h-full flex justify-around bg-gray-300 px-32 py-8">
        <Calendar />
        <BusyDays />
      </main>
    </>
  )
}

export default Calendario
