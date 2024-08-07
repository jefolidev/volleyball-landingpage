import Image from 'next/image'
import hambIcon from '../../../public/navbar-icons/hamb-icon.svg'
import signoutIcon from '../../../public/navbar-icons/signout-icon.svg'
import themeIcon from '../../../public/navbar-icons/theme-icon.svg'

export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-14 py-10">
      <div>
        <button>
          <Image src={hambIcon} alt="" />
        </button>
      </div>
      <div>
        <ul className="flex items-center gap-7 ">
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl text-light-fonts font-sequel ">Início</li>
          </a>
          <div className="w-1 h-3 bg-light-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl text-light-fonts font-sequel ">Treinos</li>
          </a>
          <div className="w-1 h-3 bg-light-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl text-light-fonts font-sequel ">Rachas</li>
          </a>
          <div className="w-1 h-3 bg-light-fonts rounded-full"></div>
          <a
            href="#"
            className="hover:border-b-4 hover:border-light-fonts hover:transition-all hover:ease-out hover:duration-[30ms]"
          >
            <li className="text-2xl text-light-fonts font-sequel ">Sobre</li>
          </a>
        </ul>
      </div>
      <div>
        <button>
          <Image src={themeIcon} className="" alt="Alternar Tema" />
        </button>
        <button>
          <Image src={signoutIcon} alt="Sair" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
