import Image from 'next/image'
import backgroundImage from '../../../public/selecao-brasileira-masc.svg'

const Main = () => {
  return (
    <div id="main" className="relative w-full h-full ">
      <Image src={backgroundImage} className="w-full px-8 py-2 " alt="" />
      <section className="absolute inset-0 top-52 left-20 text-white flex flex-col  ">
        <h1 className="text-8xl font-giovanni -mb-4 ">Transforme </h1>
        <h1 className="text-9xl font-sequel font-semibold ">SEU VOLÊI</h1>
        <h2 className="text-2xl my-6">
          Descubra quadras próximas, participe de rachas, e <br /> aperfeiçoe
          suas habilidades com treinos especializados.
        </h2>
      </section>
    </div>
  )
}

export default Main
