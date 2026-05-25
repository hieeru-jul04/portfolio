import Logo from "../ui/Logo"
import { Download } from "lucide-react"
import './shared.css'

const Header = () => {
    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experiences", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="flex justify-between items-center h-20 text-white px-16 border-b border-[#1F293A] shadow-sm shadow-[#1F293A]/50">
            <Logo />

            <nav>
                <ul className="flex space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="hover:text-[#5B6FFF] hover:border-b-2 hover:border-[#5B6FFF] transition duration-300">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
                    
            <a href="https://drive.google.com/file/d/11s2lTpxZOdlKagcqq-rNwv64hTMePB-4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex justify-between border px-4 items-center w-40 h-10 rounded-md cursor-pointer animated-border">
                Download CV <Download />
            </a>
        </header>
    )
}

export default Header