import { useState, useEffect } from 'react'
import { Home, User, Lightbulb, Briefcase, Mail } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState('hero')
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems = [
        { icon: Home, href: '#hero', label: 'Home', id: 'hero' },
        { icon: User, href: '#about', label: 'About', id: 'about' },
        { icon: Lightbulb, href: '#skills', label: 'Skills', id: 'skills' },
        { icon: Briefcase, href: '#projects', label: 'Projects', id: 'projects' },
        { icon: Mail, href: '#contact', label: 'Contact', id: 'contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = navItems.map(item => document.getElementById(item.id))
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`floating-nav fade-up d4 ${isScrolled ? 'scrolled' : ''}`}>
            {navItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    aria-label={item.label}
                    title={item.label}
                >
                    <item.icon size={18} />
                    {/* Tooltip for desktop only */}
                    <span className="nav-tooltip">{item.label}</span>
                </a>
            ))}
            <div className="nav-divider" style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />
            <ThemeToggle />
        </div>
    )
}

export default FloatingNav
