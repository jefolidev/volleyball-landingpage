'use client'
import RachasSearcher from './components/RachasSearcher'
const Rachas = () => {
  return (
    <main id="rachas" className="w-full h-full flex  items-center px-36 py-32 ">
      <section className="w-1/2 h-full flex flex-col gap-2">
        <h1 className="text-light-fonts dark:text-dark-fonts text-4xl font-sequel">
          Rachas
        </h1>
        <h2 className="text-lg text-light-fonts font-sequel dark:text-dark-fonts leading-tight">
          Utilize a busca para verificar onde <br /> ocorrem rachas próximos a
          você.
        </h2>
      </section>
      <section className=" ">
        <RachasSearcher />
      </section>
    </main>
  )
}

export default Rachas
