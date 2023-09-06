import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NavItens = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projetos'
    }
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href={"/"}>
                    <Image
                    width={58}
                    height={49}
                    src="/images/logo.svg"
                    alt="Logo GB dev"
                    ></Image>
                </Link>
                <nav className="flex items-center sm:gap-10">
                    {NavItens.map(item => (
                        <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
            </div>
        </header>
    )
} 