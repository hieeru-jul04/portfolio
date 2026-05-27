import { useState } from "react"
import Logo from "../ui/Logo"
import { Download, Menu, X } from "lucide-react"
import './shared.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experiences", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header className="flex justify-between items-center h-20 text-white px-4 sm:px-8 md:px-16 border-b border-[#1F293A] shadow-sm shadow-[#1F293A]/50 relative z-50 bg-[#010814]">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
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
                    
            <div className="hidden md:flex">
                <a href="https://drive.google.com/file/d/11s2lTpxZOdlKagcqq-rNwv64hTMePB-4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex justify-between border px-4 items-center w-40 h-10 rounded-md cursor-pointer animated-border">
                    Download CV <Download size={18} />
                </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-[#9CA3AF] hover:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#0C1423] border-b border-[#1F293A] flex flex-col items-center py-6 gap-6 md:hidden shadow-lg">
                    <nav>
                        <ul className="flex flex-col items-center space-y-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg hover:text-[#5B6FFF] transition duration-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a 
                        href="https://drive.google.com/file/d/11s2lTpxZOdlKagcqq-rNwv64hTMePB-4/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex justify-between border px-4 items-center w-40 h-10 rounded-md cursor-pointer animated-border"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Download CV <Download size={18} />
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header