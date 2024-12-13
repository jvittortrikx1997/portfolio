'use client'
import { SectionTitles } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import {
  TbBrandPhp,
  TbBrandLaravel,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandDocker,
  TbBrandMysql,
  TbSql,
  TbBrandBitbucket,
  TbBrandAzure,
  TbBrandGit


} from 'react-icons/tb'

const stack = [
  {
    icon: <TbBrandPhp size={30} />,
    name: 'PHP',
    startDate: '2016-03-01',
  },
  {
    icon: <TbBrandLaravel size={30} />,
    name: 'Laravel',
    startDate: '2020-07-30',
  },
  {
    icon: <TbBrandJavascript size={30} />,
    name: 'JavaScript',
    startDate: '2016-05-30',
  },
  {
    icon: <TbBrandReact size={30} />,
    name: 'React',
    startDate: '2023-07-30',
  },
  {
    icon: <TbBrandNextjs size={30} />,
    name: 'Nextjs',
    startDate: '2023-07-30',
  },
  {
    icon: <TbBrandPython size={30} />,
    name: 'Python',
    startDate: '2023-07-30',
  },
  {
    icon: <TbBrandDocker size={30} />,
    name: 'Docker',
    startDate: '2023-07-30',
  },
  {
    icon: <TbBrandMysql size={30} />,
    name: 'MySQL',
    startDate: '2016-03-30',
  },
  {
    icon: <TbSql size={30} />,
    name: 'SQLServer',
    startDate: '2016-03-30',
  },
  {
    icon: <TbBrandBitbucket size={30} />,
    name: 'Bitbucket',
    startDate: '2023-03-30',
  },
  {
    icon: <TbBrandAzure size={30} />,
    name: 'Azure',
    startDate: '2022-03-30',
  },
  {
    icon: <TbBrandGit size={30} />,
    name: 'GIT',
    startDate: '2016-03-30',
  },
]

export const KnownTeachs = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16">
        <SectionTitles subtitle="competências" titlte="Conhecimentos" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
          {stack.map((stak, i) => (
            <motion.div
              key={stak.name}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <KnownTech
                tech={{
                  icon: stak.icon,
                  name: stak.name,
                  startDate: stak.startDate,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
