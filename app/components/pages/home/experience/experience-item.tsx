import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";

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
    { name: "Redux" },
    { name: "ContextApi" },
    { name: "Microsserviços" },
    { name: "MySQL" },
    { name: "Docker" },
  ];

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10 ">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src="/images/login.jpeg"
            alt="control"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            target="_black"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            href="https://www.linkedin.com/company/somos-login/"
          >
            @ Control361
          </a>
          <h2 className="text-gray-300">Desenvolvedor Full stack</h2>
          <span className="text-gray-500">Fev 2022 - Momento atual</span>
          <p className="text-gray-400">
            Desenvolvedor FullStack Correção de bugs e novos desenvolvimentos.
            Gerenciamento de estado com ContextAPI e Redux Desenvolvimento de
            APIs em Microsserviços em PHP (Laravel), NodeJs Desenvolvimento
            Mobile com ReactNative Desenvolvimento WEB com ReactJS e NextJS
            Versionamento de código GIT (GIT FLOW) Desenvolvimento com
            metodologia Ágil (SCRUM)
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Copetências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
        {Experiencias.map((value) => (
              <TechBadge name={value.name} />
            ))}
        </div>
      </div>
    </div>
  );
};