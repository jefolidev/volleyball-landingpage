import Image from 'next/image'

import { useTheme } from '@/contexts/useTheme'
import nightIconWhite from '../../../../../../public/form-icons/dark-icons/moon-icon-dark.svg'
import dayIconWhite from '../../../../../../public/form-icons/dark-icons/sun-icon-dark.svg'
import dayIcon from '../../../../../../public/form-icons/day.svg'
import nightIcon from '../../../../../../public/form-icons/night.svg'

const HoursImage = ({ hour }: { hour: number }) => {
  const { theme } = useTheme()
  const hourAndThemeHandler = () => {
    if (theme === 'light') {
      if (hour >= 18 || hour <= 4) return nightIcon
      else return dayIcon
    } else if (hour >= 18 || hour <= 4) return nightIconWhite
    else return dayIconWhite
  }
  return <Image src={hourAndThemeHandler()} alt="Alternar Tema" />
}

export default HoursImage
