/* eslint-disable prettier/prettier */
import { useFilter } from '@/contexts/useFilter'
import { forwardRef } from 'react'

interface RachaModalProps {
  isVisible: 'visible' | 'invisible'
}

const RachaModal = forwardRef<HTMLDivElement, RachaModalProps>(
  ({ isVisible }, ref) => {
    const { activeButtonHandler, activeButtons } = useFilter()

    const activeButtonStyle = (label: string) =>
      activeButtons.includes(label)
        ? 'bg-light-fonts text-white'
        : 'bg-zinc-300'
    return (
      <div
        ref={ref}
        className={`w-64 h-60 flex flex-col bg-white dark:bg-[#FBFCF8] shadow-md absolute mt-[19rem] rounded-lg p-3 ${isVisible}`}
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
              className={`w-18 p-2 rounded-full font-sequel text-light-fonts text-xs ${activeButtonStyle(label)}`}
              onClick={(e) => activeButtonHandler(e, label)}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-sm font-sequel text-zinc-800 ml-2">Tags</span>
        <div className="grid grid-cols-2 gap-2 my-2 ">
          {['Começa cedo', 'Começa tarde', 'Muita gente', 'Pouca gente'].map(
            (label) => (
              <button
                key={label}
                className={`w-18 p-2 rounded-full font-sequel text-light-fonts text-xs ${activeButtonStyle(label)}`}
                onClick={(e) => activeButtonHandler(e, label)}
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
