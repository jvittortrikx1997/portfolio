"use client";

import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import Image from "next/image";

const MockContacts = [
  {
    url: "https://github.com/Crys95",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/crystyan-gomes-dev/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://api.whatsapp.com/send/?phone=+5511944478209&text=Ol%C3%A1+Crystyan%2C+tudo+certo%3F&type=phone_number&app_absent=0",
    icon: <TbBrandWhatsapp />,
  },
];

const Experiencias = [
  { name: "JavaScript" },
  { name: "Typescript" },
  { name: "ReactJs" },
  { name: "NextJs" },
  { name: "React Native" },
  { name: "Tailwind" },
  { name: "Styled Components" },
  { name: "Material Ui" },
  { name: "PHP" },
  { name: "Laravel" },
  { name: "NodeJs" },
  { name: "Redux" },
  { name: "ContextApi" },
  { name: "Microsserviços" },
  { name: "MySQL" },
  { name: "Docker" },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">
            Crystyan Gomes de Moura Ferreira
          </h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Como desenvolvedor com experiência em ReactJS, NextJS, React Native,
            PHP (Laravel), NodeJS, MySQL e ferramentas web, meu objetivo é criar
            soluções de alta qualidade e inovadoras, buscando constantemente
            aprimorar minhas habilidades e contribuir para o sucesso dos
            projetos e equipes de desenvolvimento
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
            {Experiencias.map((value, i) => (
              <TechBadge
                key={`intro-tech-${value.name}`}
                name={value.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1}}
              />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <div className="flex justify-center items-center bg-emerald-400/20 p-2 rounded hover:bg-emerald-400 border-emerald-300 border-2 cursor-default hover:shadow-button text-gray-100 transition-all">
              Entre em contato
            </div>
            <div className="text-2xl text-gray-600 flex items-center justify-center h-20 sm:gap-3 gap-6">
              {MockContacts.map((contact, index, i: any) => (
                <motion.a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blanck"
                  className="text-gray-100 w-12 h-12 sm:h-9 sm:w-9 hover:h-12 hover:w-12 flex justify-center items-center transition-all rounded-lg bg-emerald-400/50 hover:bg-emerald-400 hover:shadow-button hover:border-2 hover:border-emerald-300"
                >
                  {contact.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.5 }} 
        exit={{ opacity: 0, y: 200, scale: 0.5 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="h-full w-full flex justify-center items-center lg:ml-36">
          <Image
            width={420}
            height={402}
            src="/images/crystyan.jpg"
            alt="foto de perfil"
            className="p-1 border-2 border-emerald-500 w-[300px] h-[300px] lg:w-[420px] mb-6 lg:mb-0 rounded-lg object-cover hover:shadow-button hover:border-emerald-200 transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
};
