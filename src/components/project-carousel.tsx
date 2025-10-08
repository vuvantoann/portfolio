'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import ProjectCard from './project-card'
import { Navigation } from 'swiper/modules'

import { Project } from '@/types'

type Props = {
  data: Project[]
}

const ProjectCarousel = ({ data }: Props) => {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div className="relative w-full h-full">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1280: { slidesPerView: 5, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation === 'object' &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className="h-full"
      >
        {data.map((project) => (
          <SwiperSlide key={project.id} className="px-2 h-full">
            <ProjectCard
              name={project.name}
              image={project.image}
              description={project.description}
              demo={project.demo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectCarousel
