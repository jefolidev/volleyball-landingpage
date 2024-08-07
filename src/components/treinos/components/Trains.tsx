'use client'
import { useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Trains = () => {
  const [cards] = useState([
    {
      index: 1,
      name: 'Treino Manchete',
    },

    {
      index: 2,
      name: 'Treino a',
    },

    {
      index: 3,
      name: 'Treino b',
    },

    {
      index: 4,
      name: 'Treino c',
    },
  ])
  return (
    <section className="w-1/2 h-full">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.5}
        spaceBetween={85}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.index}>
            <div className="flex justify-center py-12">
              <div className="relative  w-[42rem] h-[36rem] bg-white rounded-xl">
                <div className="absolute inset-x-0 top-0 h-2/3 bg-light-yellow rounded-t-xl"></div>
                {card.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </Swiper>
    </section>
  )
}

export default Trains
