'use client'
import { useForm } from '@/contexts/formContext'
import RachaInput from './racha-form/RachaInput'

const RachasSearcher = () => {
  const { formData } = useForm()
  return (
    <div className="w-[47rem] h-[36rem] rounded-3xl p-5">
      <RachaInput />
      <section className="w-full bg-white h-[28rem] my-6 rounded-3xl shadow-lg overflow-y-scroll">
        <div className="w-full bg-white h-16 shadow-sm py-5 grid grid-cols-4 gap-2 text-center sticky top-0">
          <span className="text-2xl font-sequel font-bold">Local</span>
          <span className="text-2xl font-sequel font-bold">Horário</span>
          <span className="text-2xl font-sequel font-bold">Dias</span>
          <span className="text-2xl font-sequel font-bold">Tags</span>
        </div>
        {formData.map((item, index) => (
          <>
            <div key={index} className="w-full px-5 py-2">
              <div className="grid grid-cols-4 items-center gap-2 px-2 py-2">
                <div className="flex flex-col gap-1 font-sequel">
                  <span className="text-lg">{item.name}</span>
                  <span className="text-sm font-semibold">
                    {item.adress}, {item.district}
                  </span>
                </div>
                <span className="font-medium text-center">
                  {item.startHour}h - {item.endHour}h
                </span>
                <div
                  className={`grid grid-cols-${item.days.length > 2 ? `2` : `2`} gap-1`}
                >
                  {item.days.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="bg-light-fonts w-12 h-6 px-8 rounded-full text-white flex items-center justify-center"
                    >
                      <span className="font-sequel text-xs text-white">
                        {day}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-light-fonts w-18 h-6 px-4 rounded-full text-white flex items-center justify-center">
                    <span className="font-sequel text-xs text-white">
                      {item.dificulty}
                    </span>
                  </div>
                  {item.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="bg-light-fonts w-18 h-6 px-4 rounded-full text-white flex items-center justify-center"
                    >
                      <span className="font-sequel text-xs text-white">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[40rem] h-0.5 bg-gray-100 mx-auto my-3" />
          </>
        ))}
      </section>
    </div>
  )
}

export default RachasSearcher
