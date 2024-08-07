import Image from 'next/image'
import locationIcon from '../../../public/location-icon.svg'
const Rachas = () => {
  return (
    <main className="w-full h-full flex  items-center px-36 py-12 ">
      <section className="w-1/2 h-full flex flex-col gap-2">
        <h1 className="text-light-fonts text-4xl ">Rachas</h1>
        <h2 className="text-lg text-light-fonts leading-tight">
          Utilize o mapa para se situar e saber onde <br /> ocorrem rachas
          próximos a você.
        </h2>
        <div className="bg-light-fonts w-1/2 h-1 my-5 rounded-full"></div>
        <div className="flex flex-col items-between gap-5">
          <h1 className="text-light-fonts text-4xl font-base">Locais</h1>
          <div className="flex gap-5">
            <Image src={locationIcon} alt="Map-Icon" />
            <div className="flex flex-col">
              <h1 className="flex flex-col h1 text-light-fonts text-xl -mb-2">
                Cuca José Walter
              </h1>
              <h2 className="text-light-fonts text-base">José Walter</h2>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={locationIcon} alt="Map-Icon" />
            <div className="flex flex-col">
              <h1 className="flex flex-col h1 text-light-fonts text-xl -mb-2">
                Cuca José Walter
              </h1>
              <h2 className="text-light-fonts text-base">José Walter</h2>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={locationIcon} alt="Map-Icon" />
            <div className="flex flex-col">
              <h1 className="flex flex-col h1 text-light-fonts text-xl -mb-2">
                Cuca José Walter
              </h1>
              <h2 className="text-light-fonts text-base">José Walter</h2>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="w-[40rem] h-[36rem] bg-gray-300 rounded-3xl"> </div>
      </section>
    </main>
  )
}

export default Rachas
