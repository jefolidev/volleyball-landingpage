'use client'
import { createContext, MouseEventHandler, useContext, useState } from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeContextProps = {
  theme: string
  toggleTheme: MouseEventHandler<HTMLButtonElement>
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    console.log(`O tema atual é ${theme}`)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export function useTheme() {
  return useContext(ThemeContext)
}
