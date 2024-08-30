import { Dispatch, MouseEvent, SetStateAction } from 'react'

export type TFilterContext = {
  activeButtons: string[]
  setActiveButtons: Dispatch<SetStateAction<string[]>>
  activeButtonHandler: (e: MouseEvent<HTMLButtonElement>, label: string) => void
}
