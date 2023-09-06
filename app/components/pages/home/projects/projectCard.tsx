import { Link } from "@/app/components/Link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="h-full">
        <Image
          width={420}
          height={384}
          src="/images/projeto.jpg"
          alt="Projeto"
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt=""
            className="object-cover rounded-lg"
          />
          Meu Primeiro Projeto
        </h3>
        <p className="text-gray-400 my-6">
          Meu primeiro projeto que conta a historia da segunda guerra mundial
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="CSS" />
          <TechBadge name="HTML" />
          <TechBadge name="Bootstrap" />
        </div>
        <Link href={"/"}>Ver projeto <HiArrowNarrowRight/></Link>
      </div>
    </div>
  );
};
