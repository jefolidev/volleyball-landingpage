/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import filter from '../../../../../public/searcher/filter-icon.svg'
import RachaFilterModal from '../modals/RachaFilterModal'

const RachaInput = ({
  onChange,
  value,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}) => {
  const [isModalFilterOpen, setIsModelFilterOpen] = useState(false)
  const [isModalOrderOpen, setIsModelOrderOpen] = useState(false)

  const filterModalRef = useRef<HTMLDivElement | null>(null)
  const orderModalRef = useRef<HTMLDivElement | null>(null)

  function openFilterModal(e: FormEvent) {
    if (isModalOrderOpen === true) setIsModelOrderOpen(false)
    setIsModelFilterOpen((prevState) => !prevState)
    e.preventDefault()
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterModalRef.current &&
        !filterModalRef.current.contains(event.target as Node)
      ) {
        setIsModelFilterOpen(false)
      }
      if (
        orderModalRef.current &&
        !orderModalRef.current.contains(event.target as Node)
      ) {
        setIsModelOrderOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <form action="" className="sticky z-10">
      <div className=" flex justify-between ">
        <div className="flex items-center justify-end">
          <input
            type="text"
            className="w-[34rem] p-3 rounded-full bg-white dark:bg-[#FBFCF8] text-sm font-sequel shadow-md"
            placeholder="Procure por algo"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="w-15 py-3 px-5 rounded-full bg-white dark:bg-[#FBFCF8] flex items-center justify-center gap-6 shadow-md">
          <button
            className="flex items-center justify-center gap-2 "
            onClick={openFilterModal}
          >
            <Image src={filter} alt="Filtre a busca" className="w-5" />
            <span className="text-zinc-400 text-sm font-sequel">Filtro</span>
          </button>
          <RachaFilterModal
            ref={filterModalRef}
            isVisible={isModalFilterOpen === true ? 'visible' : 'invisible'}
          />
        </div>
      </div>
    </form>
  )
}

export default RachaInput
