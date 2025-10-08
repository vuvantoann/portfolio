'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { Project } from '@/types'

type Props = Omit<Project, 'id'>

const ProjectCard = ({ name, image, description, demo }: Props) => {
  return (
    <motion.a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-max flex-none bg-opacity-30 shadow rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full h-60 lg:h-72 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className="my-4 px-2">
        <h5 className="text-white font-bold">{name}</h5>
        <p className="text-white line-clamp-2">{description}</p>
      </div>
    </motion.a>
  )
}

export default ProjectCard
