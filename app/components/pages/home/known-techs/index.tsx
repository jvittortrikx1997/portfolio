import { SectionTitles } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { 
    TbBrandNextjs, 
    TbBrandReact, 
    TbBrandJavascript,
    TbBrandTypescript,
    TbBrandLaravel,
    TbBrandDocker,
    TbBrandMysql,
    TbBrandPhp,
} from "react-icons/tb"

const stack = [
    {
        icon: <TbBrandReact size={30}/>,
        name: "ReactJs",
        startDate: '2022-05-30'
    },
    {
        icon: <TbBrandNextjs size={30}/>,
        name: "NextJs",
        startDate: '2022-07-30'
    },
    {
        icon: <TbBrandJavascript size={30}/>,
        name: "JavaScript",
        startDate: '2022-05-30'
    },
    {
        icon: <TbBrandTypescript size={30}/>,
        name: "TypeScript",
        startDate: '2022-07-30'
    },
    {
        icon: <TbBrandLaravel size={30}/>,
        name: "Laravel",
        startDate: '2022-07-30'
    },
    {
        icon: <TbBrandPhp size={30}/>,
        name: "PHP",
        startDate: '2022-07-30'
    },
    {
        icon: <TbBrandMysql size={30}/>,
        name: "MySQL",
        startDate: '2022-07-30'
    },
    {
        icon: <TbBrandDocker size={30}/>,
        name: "Docker",
        startDate: '2023-03-30'
    },
]

export const KnownTeachs = () => {
    return (
        <section className="container py-16">
            <SectionTitles subtitle="competências" titlte="Conhecimentos" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {stack.map((stak) => (

                    <KnownTech tech={{
                        icon: stak.icon,
                        name: stak.name,
                        startDate: stak.startDate,
                    }}/>
                    )) 
                }
            </div>
        </section>
    )
}