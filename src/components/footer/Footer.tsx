import Image from 'next/image'

import gitIcon from '../../../public/githubIcon.svg'
import linkedinIcon from '../../../public/linkedinIcon.svg'

const Footer = () => {
  return (
    <main className="w-full h-full py-24 flex justify-around items-end">
      <section className="flex flex-col gap-4">
        <span className="text-sm font-sequel tracking-wide  text-gray-500">
          Pratique o que você gosta <br /> e nunca desista de alcançar suas
          <br /> metas.
        </span>
        <div className="flex justify-start gap-8">
          <a href="">
            <Image src={linkedinIcon} alt="" />
          </a>
          <a href="">
            <Image src={gitIcon} alt="" />
          </a>
        </div>
        <span className="text-sm font-sequel tracking-wider mt-12  text-gray-500">
          Copyright © Jeferson Franco
        </span>
      </section>
      <section>
        <div className="flex flex-col justify-between items-end gap-12">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <a href="" className="font-sequel font-base tracking-wide">
                Início
              </a>
              <a href="" className="font-sequel font-base tracking-wide">
                Rachas
              </a>
              <a href="" className="font-sequel font-base tracking-wide">
                Calendário
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="" className="font-sequel font-base tracking-wide">
                Treinos
              </a>
              <a href="" className="font-sequel font-base tracking-wide">
                Formulário
              </a>
            </div>
          </div>

          <a className="w-44 h-10  shadow-lg rounded-3xl flex items-center justify-center cursor-pointer">
            <span className="font-sequel tracking-wider">Voltar ao topo</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Footer
