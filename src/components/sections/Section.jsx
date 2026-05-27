import { MoveRight, Send, Code2 } from "lucide-react"
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa"
import { SiGmail, SiSpringboot, SiMysql, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import heroImg from '../../assets/hero.png'
import './shared.css'

const Section = () => {
    const linkItems = [
        { name: "GitHub", href: "https://github.com/hieeru-jul04", icon: FaGithub },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/hieeru-jul04/?locale=en-US", icon: FaLinkedin },
        { name: "Facebook", href: "https://www.facebook.com/hieeru.jul04.work", icon: FaFacebook },
        { name: "Gmail", href: "mailto:nguyenhieu2072004@gmail.com", icon: SiGmail },
    ]

    return (
        <div className="flex flex-col lg:flex-row w-full justify-between items-center min-h-[85vh] gap-16 lg:gap-0 py-12 lg:py-0">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-8 md:gap-10 items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
                <div className="flex flex-col gap-3 md:gap-4">
                    <span className="block text-[#9CA3AF] text-2xl md:text-4xl">Hello, I'm</span>
                    <span className="block text-white text-4xl sm:text-5xl md:text-6xl font-bold">Nguyen Ngoc <span className="text-[#5B6FFF]">Hieu</span></span>
                    <div className="w-[17ch] mx-auto lg:mx-0 text-left">
                        <span className="block text-[#39D98A] text-xl sm:text-2xl md:text-3xl typing-animation">Fullstack Developer</span>
                    </div>
                    <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-lg">
                        I build modern web applications with <br className="hidden sm:block" />
                        <b className="text-white">React.js, Node.js</b><br />
                        Passionate about clean code and great user experience.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-[#F7F7F8] w-full sm:w-auto items-center">
                    <a href="#projects" className="bg-[#5B6FFF] flex w-full sm:w-44 h-12 items-center justify-center rounded-lg gap-2 cursor-pointer hover:bg-[#4a5de0] hover:scale-105 transition-all duration-300">
                        View Projects <MoveRight size={18} />
                    </a>
                    <a href="#contact" className="flex w-full sm:w-44 h-12 items-center justify-center rounded-lg gap-2 cursor-pointer border border-[#F7F7F8]/30 hover:border-[#5B6FFF] hover:text-[#5B6FFF] hover:scale-105 transition-all duration-300">
                        Contact Me <Send size={18} />
                    </a>
                </div>

                <div className="flex space-x-4 text-xl">
                    {linkItems.map((item) => (
                        <a key={item.name} href={item.href} className="flex justify-center items-center bg-[#0C1423] w-12 h-12 text-[#9CA3AF] rounded-full border border-[#1F293A] hover:text-[#5B6FFF] hover:border-[#5B6FFF] hover:scale-110 transition-all duration-300">
                            <item.icon />
                        </a>
                    ))}
                </div>
            </div>

            {/* Right: Hero Image with floating badges */}
            <div className="relative shrink-0 w-full max-w-[320px] sm:max-w-[420px] aspect-[7/8] lg:w-[420px] lg:h-[480px]">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-[#5B6FFF]/10 blur-3xl scale-75 translate-y-8" />

                {/* Hero Image */}
                <img
                    src={heroImg}
                    alt="Nguyen Ngoc Hieu"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[100%] h-auto max-h-[100%] object-contain object-bottom z-10 drop-shadow-2xl"
                />

                {/* Floating Tech Badges */}
                <div className="floating-badge absolute top-4 sm:top-6 left-0 sm:left-8 bg-[#0C1423] border border-[#1F293A] rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 z-20 shadow-lg scale-90 sm:scale-100">
                    <FaReact className="text-[#61DAFB]" size={20} />
                    <span className="text-white text-[10px] sm:text-xs font-medium">React.js</span>
                </div>

                <div className="floating-badge-delay absolute top-10 sm:top-12 right-0 sm:right-4 bg-[#0C1423] border border-[#1F293A] rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 z-20 shadow-lg scale-90 sm:scale-100">
                    <SiNodedotjs className="text-[#6DB33F]" size={20} />
                    <span className="text-white text-[10px] sm:text-xs font-medium">Node.js</span>
                </div>

                <div className="floating-badge absolute bottom-16 sm:bottom-24 -right-4 sm:right-2 bg-[#0C1423] border border-[#1F293A] rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 z-20 shadow-lg scale-90 sm:scale-100">
                    <SiTailwindcss className="text-[#5B6FFF]" size={20} />
                    <span className="text-white text-[10px] sm:text-xs font-medium">Tailwind CSS</span>
                </div>

                <div className="floating-badge-delay absolute bottom-24 sm:bottom-32 -left-4 sm:left-4 bg-[#0C1423] border border-[#1F293A] rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 z-20 shadow-lg scale-90 sm:scale-100">
                    <SiMysql className="text-[#4479A1]" size={20} />
                    <span className="text-white text-[10px] sm:text-xs font-medium">MySQL</span>
                </div>

                {/* Dot decorations */}
                <div className="absolute top-16 sm:top-20 right-12 sm:right-20 w-2 h-2 bg-[#5B6FFF] rounded-full opacity-60 pulse-dot" />
                <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-12 w-1.5 h-1.5 bg-[#39D98A] rounded-full opacity-60 pulse-dot-delay" />
                <div className="absolute top-32 sm:top-40 left-10 sm:left-16 w-1 h-1 bg-[#F59E0B] rounded-full opacity-40 pulse-dot" />
            </div>
        </div>
    )
}

export default Section