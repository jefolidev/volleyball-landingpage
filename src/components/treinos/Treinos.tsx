import Trains from './components/Trains'

const Treinos = () => {
  return (
    <main className="px-8 my-32 ">
      <div className="w-full h-full p-5 bg-gray-300 dark:bg-zinc-900 rounded-xl flex justify-around items-center">
        <section className="flex flex-col items-start justify-start gap-7 w-1/2 px-20">
          <h1 className="font-sequel text-light-fonts dark:text-dark-fonts text-6xl font-medium">
            Treinos
          </h1>
          <h2 className="font-sequel text-light-fonts dark:text-dark-fonts text-lg tracking-wide leading-5 -mt-5">
            Aprimore sua técnica vendo algum dos <br />
            treinos sugeridos por alguns usuários!
          </h2>
          <button className="w-60 h-12 bg-light-fonts text-white dark:bg-dark-fonts dark:text-dark-background font-sequel font-bold rounded-full hover:bg-zinc-950 dark:hover:bg-zinc-200">
            Ver Mais
          </button>
        </section>

        <Trains />
      </div>
    </main>
  )
}

export default Treinos
