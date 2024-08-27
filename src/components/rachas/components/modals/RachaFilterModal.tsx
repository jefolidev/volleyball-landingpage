/* eslint-disable prettier/prettier */
import { forwardRef, MouseEvent, useState } from 'react'

interface RachaModalProps {
  isVisible: 'visible' | 'invisible'
}

const RachaModal = forwardRef<HTMLDivElement, RachaModalProps>(
  ({ isVisible }, ref) => {
    const [activeButtons, setActiveButtons] = useState<string[]>([])

    function activeButton(e: MouseEvent<HTMLButtonElement>, label: string) {
      e.preventDefault()
      setActiveButtons((prevState) =>
        prevState.includes(label)
          ? prevState.filter((button) => button !== label)
          : [...prevState, label]
      )
    }

    const activeButtonStyle = (label: string) =>
      activeButtons.includes(label)
        ? 'bg-light-fonts text-white'
        : 'bg-zinc-300'
    return (
      <div
        ref={ref}
        className={`w-64 h-60 flex flex-col bg-white shadow-md absolute mt-[19rem] rounded-lg p-3 ${isVisible}`}
      >
        <span className="text-base font-sequel text-zinc-800">
          Filtrar por:
        </span>
        <span className="text-sm font-sequel text-zinc-800 ml-2">
          Dificuldade
        </span>
        <div className="flex gap-2 my-2">
          {['Iniciante', 'Intermediário', 'Avançado'].map((label) => (
            <button
              key={label}
              className={` w-18 p-2 rounded-full text-light-fonts text-xs ${activeButtonStyle(label)}`}
              onClick={(e) => activeButton(e, label)}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-sm font-sequel text-zinc-800 ml-2">Tags</span>
        <div className="grid grid-cols-2 gap-2 my-2">
          {['Começa cedo', 'Termina tarde', 'Muita gente', 'Pouca gente'].map(
            (label) => (
              <button
                key={label}
                className={` w-18 p-2 rounded-full text-light-fonts text-xs ${activeButtonStyle(label)}`}
                onClick={(e) => activeButton(e, label)}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    )
  }
)

export default RachaModal
