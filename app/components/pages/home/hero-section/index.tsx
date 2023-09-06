import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
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
    url: "https://web.whatsapp.com/send?phone=+11944478209",
    icon: <TbBrandWhatsapp />,
  },
];

const Experiencias = [
  { name: "JavaScript" },
  { name: "Typescript" },
  { name: "ReactJs" },
  { name: "NextJs" },
  { name: "Reacct Native" },
  { name: "Taliwind" },
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
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">
            Crystyan Gomes de Moura Ferreira
          </h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Como desenvolvedor com experiência em ReactJS, NextJS, React Native,
            PHP (Laravel), NodeJS, MySQL e ferramentas web, meu objetivo é criar
            soluções de alta qualidade e inovadoras, buscando constantemente
            aprimorar minhas habilidades e contribuir para o sucesso dos
            projetos e equipes de desenvolvim
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[550px]">
            {Experiencias.map((value) => (
              <TechBadge name={value.name} />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MockContacts.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blanck"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center lg:ml-36">
          <Image
            width={420}
            height={402}
            src="/images/crystyan.jpg"
            alt="foto de perfil"
            className="p-1 border-2 border-emerald-500 w-[300px] h-[300px] lg:w-[420px] mb-6 lg:mb-0 rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
