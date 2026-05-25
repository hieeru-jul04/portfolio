import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { ArrowUp } from 'lucide-react'
import Logo from '../ui/Logo'

const Footer = () => {
    const socials = [
        { icon: FaGithub, href: 'https://github.com/hieeru-jul04', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hieeru-jul04/?locale=en-US', label: 'LinkedIn' },
        { icon: FaFacebook, href: 'https://www.facebook.com/hieeru.jul04.work', label: 'Facebook' },
        { icon: SiGmail, href: 'mailto:nguyenhieu2072004@gmail.com', label: 'Gmail' },
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="border-t border-[#1F293A] mt-4">
            <div className="px-16 py-6 flex items-center justify-between">
                <Logo />
                <p className="text-[#4B5563] text-sm">© 2026 Nguyen Ngoc Hieu. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            className="text-[#4B5563] hover:text-[#5B6FFF] transition-colors duration-300 text-lg"
                        >
                            <social.icon />
                        </a>
                    ))}
                    <button
                        onClick={scrollToTop}
                        className="ml-2 w-9 h-9 rounded-xl bg-[#0C1423] border border-[#1F293A] flex items-center justify-center text-[#9CA3AF] hover:text-[#5B6FFF] hover:border-[#5B6FFF] transition-all duration-300 cursor-pointer"
                    >
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
