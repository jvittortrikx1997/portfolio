"use client";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { motion } from "framer-motion";

const Experiencias = [
  { name: "JavaScript" },
  { name: "ReactJs" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "PHP" },
];

export const ExperienceEb = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10 "
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src="/images/eb.png"
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
            href="https://www.instagram.com/22_blogamv_exercito/"
          >
            @Exército
          </a>
          <h2 className="text-gray-300">Cabo do Exército Brasileiro</h2>
          <span className="text-gray-500">mar 2014 - jan 2022</span>
          <p className="text-gray-400">
            Auxiliar da Seção de Comunicação Social e Relações Públicas Migrei
            na equipe do TI em janeiro de 2021
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {Experiencias.map((value) => (
            <TechBadge
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              name={value.name}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
