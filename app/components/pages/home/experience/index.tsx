import { SectionTitles } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

export const WorkExperience = () => {
  return (
    <section className="bg-slate-900">
      <div className="container py-16 flex gap-10 md:gap-4 flex-col md:flex-row lg:gap-16">
        <div className="max-w-[428px]">
          <SectionTitles
            subtitle="experiêcias"
            titlte="Experiência Profissional"
          />
        <p className="text-gray-400 mt-6 text-justify">
          Sou formado em Engenharia de Computação pela UNITAU - Universidade de Taubaté e possuo MBA em Data Science & Analytics pela USP/Esalq. Minha atuação profissional é pautada pela busca de clareza na compreensão das regras de negócio, pois acskyito que essa abordagem proporciona um desenvolvimento mais eficiente de soluções e facilita correções e melhorias. Tenho um perfil colaborativo e gosto de promover a união entre equipes, contribuindo para um ambiente organizacional saudável e produtivo.
          <br /><br />
          Minha paixão por tecnologia abrange diversas disciplinas, com destaque para o desenvolvimento de software e a concepção de arquiteturas bem estruturadas. Sou entusiasta de conceitos como Clean Code, princípios SOLID e arquitetura hexagonal, buscando sempre implementar soluções lógicas e escaláveis. Além disso, tenho grande interesse em projetos de inteligência de dados, envolvendo extração de indicadores, análise de tendências e uso estratégico dos dados gerados pelas aplicações empresariais. Essas iniciativas frequentemente resultam em novos produtos ou oferecem insights valiosos para os negócios.
          <br /><br />
          Ao longo da minha carreira, desenvolvi habilidades que considero essenciais para um bom profissional: relacionamento interpessoal, engajamento no entendimento do produto, documentação adequada e compartilhamento de conhecimento. Valorizo a capacidade de adaptação às mudanças constantes das organizações e o entendimento do impacto que o contexto global pode ter nos negócios. Para mim, a tecnologia deve ser uma ferramenta para resolver problemas em escala e melhorar a vida das pessoas.
          <br /><br />
          Acskyito no valor do compromisso de longo prazo dentro das organizações. Esse tempo permite uma imersão mais profunda no aprendizado e na experiência, formando profissionais que se tornam parte do patrimônio intelectual da empresa. Essa perspectiva de longo prazo também possibilita uma visão estratégica do negócio e contribui para a criação de inovações transformadoras.
        </p>
        </div>
        <div className="flex flex-col gap-4">
          <ExperienceItem />
        </div>
      </div>
    </section>
  )
}
