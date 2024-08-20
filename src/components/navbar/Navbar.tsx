'use client'
import { useTheme } from '@/contexts/themeContext'
import Image from 'next/image'
import nightIconWhite from '../../../public/form-icons/dark-icons/moon-icon-dark.svg'
import themeIcon from '../../../public/navbar-icons/theme-icon.svg'

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav id="start" className="flex justify-around items-center h-14 py-10 ">
      <div></div>
      <div>
        <ul className="flex items-center gap-7 ">
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Início
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full" />
          <a
            href="#rachas"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Rachas
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full" />
          <a
            href="#formulario"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Formulário
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full" />
          <a
            href="#calendario"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Calendário
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full" />
          <a
            href="#footer"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Sobre
            </li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button onClick={toggleTheme}>
          <Image
            src={theme === 'light' ? themeIcon : nightIconWhite}
            className={theme === 'dark' ? `w-4 mr-1 ` : ''}
            alt="Alternar Tema"
          />
        </button>
        {/* <div className="w-0.5 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full" /> */}

        {/* <button>
          <Image
            src={theme === 'light' ? signoutIcon : signoutIconWhite}
            alt="Alternar Tema"
          />
        </button> */}
      </div>
    </nav>
  )
}

export default Navbar
