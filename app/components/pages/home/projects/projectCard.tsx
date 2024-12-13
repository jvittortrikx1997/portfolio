'use client'
import { Link } from '@/app/components/Link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const ProjectCard = () => {
  const animeProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="h-full"
      >
        <Image
          width={420}
          height={384}
          src="/images/gurramundial.png"
          alt="gurramundial"
          className="object-cover rounded-lg"
        />
      </motion.div>

    </motion.div>
  )
}
