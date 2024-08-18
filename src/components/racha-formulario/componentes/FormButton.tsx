import { useTheme } from '@/contexts/themeContext'
import Image from 'next/image'
import submitIcon from '../../../../public/form-icons/submitIcon.svg'

const FormButton = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { theme } = useTheme()

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#0F0D0D' : '',
    borderRadius: '9999px',
    width: '3rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <button {...props} style={buttonStyle}>
      <Image src={submitIcon} className="" alt="Alternar Tema" />
    </button>
  )
}

export default FormButton
