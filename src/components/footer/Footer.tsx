'use client'
import Image from 'next/image'

import { useTheme } from '@/contexts/themeContext'
import gitIconWhite from '../../../public/github-icon-white.svg'
import gitIcon from '../../../public/githubIcon.svg'
import linkedinIconWhite from '../../../public/linkedin-icon-white.svg'
import linkedinIcon from '../../../public/linkedinIcon.svg'

const Footer = () => {
  const { theme } = useTheme()
  return (
    <main className="w-full h-full py-24 flex justify-around items-end">
      <section className="flex flex-col gap-4">
        <span className="text-sm font-sequel tracking-wide  text-gray-500 dark:text-gray-200">
          Pratique o que você gosta <br /> e nunca desista de alcançar suas
          <br /> metas.
        </span>
        <div className="flex justify-start gap-8">
          <a href="">
            <Image
              src={theme === 'light' ? linkedinIcon : linkedinIconWhite}
              alt="Alternar Tema"
            />
          </a>
          <a href="">
            <Image src={theme === 'light' ? gitIcon : gitIconWhite} alt="" />
          </a>
        </div>
        <span className="text-sm font-sequel tracking-wider mt-12  text-gray-500 dark:text-gray-200">
          Copyright © Jeferson Franco
        </span>
      </section>
      <section>
        <div className="flex flex-col justify-between items-end gap-12">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="font-sequel font-base tracking-wide text-gray-500 dark:text-gray-200"
              >
                Início
              </a>
              <a
                href=""
                className="font-sequel font-base tracking-wide text-gray-500 dark:text-gray-200"
              >
                Rachas
              </a>
              <a
                href=""
                className="font-sequel font-base tracking-wide text-gray-500 dark:text-gray-200"
              >
                Calendário
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href=""
                className="font-sequel font-base tracking-wide text-gray-500 dark:text-gray-200"
              >
                Treinos
              </a>
              <a
                href=""
                className="font-sequel font-base tracking-wide text-gray-500 dark:text-gray-200"
              >
                Formulário
              </a>
            </div>
          </div>

          <a className="w-44 h-10  shadow-lg rounded-3xl flex items-center justify-center cursor-pointer dark:shadow-gray-500/5">
            <span className="font-sequel tracking-wider text-gray-500 dark:text-gray-200">
              Voltar ao topo
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Footer
