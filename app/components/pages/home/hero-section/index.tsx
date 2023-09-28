'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { motion } from 'framer-motion'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'
import { BsFiletypePdf } from 'react-icons/bs'

const MockContacts = [
  {
    url: 'https://github.com/Crys95',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/crystyan-gomes-dev/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://api.whatsapp.com/send/?phone=+5511944478209&text=Ol%C3%A1+Crystyan%2C+tudo+certo%3F&type=phone_number&app_absent=0',
    icon: <TbBrandWhatsapp />,
  },
]

const Experiencias = [
  { name: 'JavaScript' },
  { name: 'Typescript' },
  { name: 'ReactJs' },
  { name: 'NextJs' },
  { name: 'React Native' },
  { name: 'Tailwind' },
  { name: 'Styled Components' },
  { name: 'Material Ui' },
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'NodeJs' },
  { name: 'Redux' },
  { name: 'ContextApi' },
  { name: 'Microsserviços' },
  { name: 'MySQL' },
  { name: 'Docker' },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-full bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container rounded flex items-start flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-teal-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">
            Crystyan Gomes de Moura Ferreira
          </h2>
          <p className="text-gray-200 my-6 text-base sm:text-base">
            A constante vontade de melhorar é meu combustível. Vejo cada desafio
            como uma maneira de me desafiar, de expandir meu conhecimento e de
            crescer profissional e pessoalmente. A jornada da programação é uma
            estrada interminável, e estou ansioso para percorrê-la, sempre
            buscando me tornar o melhor desenvolvedor que posso ser.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
            {Experiencias.map((value, i) => (
              <TechBadge
                key={`intro-tech-${value.name}`}
                name={value.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <div className="flex justify-center items-center bg-teal-400/50 hover:bg-teal-400 p-2 rounded cursor-default hover:shadow-button text-gray-100 transition-all">
              Entre em contato
            </div>
            <div className="text-2xl text-gray-600 flex items-center justify-center h-20 sm:gap-3 gap-6">
              {MockContacts.map((contact, index, i: any) => (
                <motion.a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blanck"
                  className="text-gray-100 w-12 h-12 sm:h-9 sm:w-9 hover:h-12 hover:w-12 flex justify-center items-center transition-all rounded-lg bg-teal-400/50 hover:bg-teal-400 hover:shadow-button hover:border-2 hover:border-teal-300"
                >
                  {contact.icon}
                </motion.a>
              ))}
              <motion.a
                href="doc/CrystyanCurriculo.pdf"
                download
                target="_blanck"
                className="text-gray-100 w-12 h-12 sm:h-9 sm:w-9 hover:h-12 hover:w-12 flex justify-center items-center transition-all rounded-lg bg-teal-400/50 hover:bg-teal-400 hover:shadow-button hover:border-2 hover:border-teal-300"
              >
                <BsFiletypePdf />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:h-[500px] flex items-center justify-center lg:ml-36"
        >
          <Image
            width={420}
            height={420}
            src="/images/crystyan.jpg"
            alt="foto de perfil"
            className="p-1 border-2 border-teal-500 w-[300px] h-[300px] lg:w-[420px] mb-6 lg:mb-0 lg:rounded-lg rounded-full object-cover hover:shadow-button hover:border-teal-200 transition-all"
          />
        </motion.div>
      </div>
    </section>
  )
}
