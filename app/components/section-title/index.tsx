import { cn } from "../lib/utils"

type sectionTitleProps = {
    titlte: string
    subtitle: string
    className?: string
}

export const SectionTitles = ({subtitle, titlte, className}: sectionTitleProps) => {
    return (
        <div className={cn(
            'flex flex-col gap-4', className
        )}>
            <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
            <h3 className="text-3xl font-medium">{titlte}</h3>
        </div>
    )
}