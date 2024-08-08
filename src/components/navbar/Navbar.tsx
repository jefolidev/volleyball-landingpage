'use client'
import { useTheme } from '@/contexts/themeContext'
import Image from 'next/image'
import nightIconWhite from '../../../public/form-icons/dark-icons/moon-icon-dark.svg'
import hambIcon from '../../../public/navbar-icons/hamb-icon.svg'
import signoutIcon from '../../../public/navbar-icons/signout-icon.svg'
import themeIcon from '../../../public/navbar-icons/theme-icon.svg'
import hambIconWhite from '../../../public/navbar-icons/white-icons/hamb-icon-white.svg'
import signoutIconWhite from '../../../public/navbar-icons/white-icons/signout-icon-white.svg'

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav className="flex justify-around items-center h-14 py-10 ">
      <div>
        <button>
          <Image
            src={theme === 'light' ? hambIcon : hambIconWhite}
            alt="Alternar Tema"
          />
        </button>
      </div>
      <div>
        <ul className="flex items-center gap-7 ">
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Início
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Treinos
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Rachas
            </li>
          </a>
          <div className="w-1 h-3 bg-light-fonts dark:bg-dark-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts dark:hover:border-dark-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl dark:text-dark-fonts text-light-fonts font-sequel ">
              Sobre
            </li>
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={toggleTheme}>
          <Image
            src={theme === 'light' ? themeIcon : nightIconWhite}
            className={theme === 'dark' ? `w-5 ` : ''}
            alt="Alternar Tema"
          />
        </button>
        <button>
          <Image
            src={theme === 'light' ? signoutIcon : signoutIconWhite}
            alt="Alternar Tema"
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
