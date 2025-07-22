import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {

    return (
        <nav className="flex items-center justify-between mx-auto max-w-[1440px]  lg:px-20  relative z-30 p-5" >
            <Link href="/"><Image
                src="/hilink-logo.svg" alt="logo" width={74} height={29}
            /></Link>
            <ul className="hidden h-full gap-12 lg:flex ">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="hidden lg:flex items-center justify-center"><Button
             type="button"
             title="Login"
             icon="/user.svg"
             variant="bg-[#292C27] px-8 py-4 text-white transition-all hover:bg-black"
            /></div>
            <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
        </nav>

    )
}

export default Navbar
