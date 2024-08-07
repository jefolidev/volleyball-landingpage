import Image from 'next/image'
import backgroundImage from '../../../public/selecao-brasileira-masc.svg'

const Main = () => {
  return (
    <div className="relative w-full h-full ">
      <Image src={backgroundImage} className="w-full px-8 py-2 " alt="" />
      <section className="absolute inset-0 top-40 left-20 text-white flex flex-col  ">
        <h1 className="text-8xl font-giovanni -mb-4 ">Transforme </h1>
        <h1 className="text-9xl font-sequel font-semibold ">SEU VOLÊI</h1>
        <h2 className="text-2xl my-6">
          Descubra quadras próximas, participe de rachas, e <br /> aperfeiçoe
          suas habilidades com treinos especializados.
        </h2>
        <form className="relative w-[36rem]">
          <input
            type="email"
            placeholder="Insira seu email"
            className="w-full h-24 rounded-full text-light-fonts px-8 focus:outline-none font-sequel font-semibold"
          />
          <button className="absolute w-52 h-20 inset-y-0 right-2 mt-2 rounded-full font-bold bg-light-yellow hover:bg-light-yellowHover">
            Receber notificações
          </button>
        </form>
      </section>
    </div>
  )
}

export default Main
