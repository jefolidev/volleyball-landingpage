/* eslint-disable prettier/prettier */
'use client'
import { TFilterContext } from '@/@types/filterContextTypes'
import { createContext, MouseEvent, useContext, useState } from 'react'

export const FilterContext = createContext({} as TFilterContext)

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeButtons, setActiveButtons] = useState<string[]>([])

  function activeButtonHandler(
    e: MouseEvent<HTMLButtonElement>,
    label: string
  ) {
    e.preventDefault()
    setActiveButtons((prevState) =>
      prevState.includes(label)
        ? prevState.filter((button) => button !== label)
        : [...prevState, label]
    )
  }
  return (
    <FilterContext.Provider
      value={{ activeButtonHandler, activeButtons, setActiveButtons }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider

export function useFilter() {
  return useContext(FilterContext)
}
