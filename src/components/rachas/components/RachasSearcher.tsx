/* eslint-disable prettier/prettier */
'use client'
import { useForm } from '@/contexts/useForm'
import Image from 'next/image'
import { useState } from 'react'
import dayIcon from '../../../../public/form-icons/day.svg'
import nightIcon from '../../../../public/form-icons/night.svg'
import RachaInput from './racha-form/RachaInput'

const RachasSearcher = () => {
  const { formData } = useForm()
  const [dataToSearch, setDataToSearch] = useState('')

  const filteredItems =
    dataToSearch === ''
      ? formData
      : formData.filter((data) => {
          return data.name.toLowerCase().includes(dataToSearch.toLowerCase())
        })

  console.log(filteredItems)

  return (
    <div className="w-[47rem] h-[36rem] rounded-3xl p-5">
      <RachaInput
        value={dataToSearch}
        onChange={(e) => setDataToSearch(e.target.value)}
      />
      <div className="bg-white dark:bg-[#FBFCF8] h-[28rem] my-6 rounded-3xl shadow-lg overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="w-full bg-white dark:bg-[#FBFCF8] h-16 text-left shadow-sm sticky top-0 ">
              <th className="text-2xl font-sequel font-bold pl-5 w-1/3">
                Local
              </th>
              <th className="text-2xl font-sequel font-bold">Horário</th>
              <th className="text-2xl font-sequel font-bold pl-1 w-1/4">
                Dias
              </th>
              <th className="text-2xl font-sequel font-bold">Tags</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <tr key={index} className="">
                  <td className="p-5 ">
                    <div className="flex flex-col gap-1 font-sequel">
                      <span className="text-lg">{item.name}</span>
                      <span className="text-sm font-semibold">
                        {item.adress}, {item.district}
                      </span>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex flex-col">
                      <div className="flex gap-3.5">
                        <Image src={dayIcon} alt="Icone de Sol" />
                        <span className="font-medium font-sequel">
                          {item.startHour}h
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <Image src={nightIcon} alt="Icone de Lua" />
                        <span className="font-medium font-sequel">
                          {item.endHour}h
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className=" grid grid-cols-2 gap-1 p-2 text-center">
                    {item.days.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="bg-light-fonts w-16 h-6 px-4 rounded-full text-white flex items-center justify-center"
                      >
                        <span className="font-sequel text-xs text-white">
                          {day}
                        </span>
                      </div>
                    ))}
                  </td>
                  <td className="pr-5">
                    <div className="bg-light-fonts w-28 h-6 px-4 rounded-full text-white flex items-center justify-center m-2">
                      <span className="font-sequel text-xs text-white">
                        {item.dificulty}
                      </span>
                    </div>
                    {item.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="bg-light-fonts w-28 h-6 px-4 rounded-full text-white flex items-center justify-center m-2"
                      >
                        <span className="font-sequel text-xs text-white">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-5 font-sequel text-center">
                  Nenhum racha encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RachasSearcher
