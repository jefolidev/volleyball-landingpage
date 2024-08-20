'use client'
import { useTheme } from '@/contexts/themeContext'
import Image from 'next/image'
import locationIconWhite from '../../../public/location-icon-white.svg'
import locationIcon from '../../../public/location-icon.svg'
const Rachas = () => {
  const { theme } = useTheme()
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
        <div className="bg-light-fonts dark:bg-dark-fonts w-1/2 h-1 my-5 rounded-full"></div>
        <div className="flex flex-col items-between gap-5">
          <h1 className="text-light-fonts dark:text-dark-fonts text-4xl font-base">
            Locais
          </h1>
          <div className="flex gap-5">
            <Image
              src={theme === 'light' ? locationIcon : locationIconWhite}
              alt="Alternar Tema"
            />
            <div className="flex flex-col">
              <h1 className="flex flex-col h1 text-light-fonts dark:text-dark-fonts text-xl -mb-2">
                Cuca José Walter
              </h1>
              <h2 className="text-light-fonts dark:text-dark-fonts text-base">
                José Walter
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" ">
        <div className="w-[40rem] h-[36rem] bg-gray-300 rounded-3xl"> </div>
      </section> */}
    </main>
  )
}

export default Rachas
