import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { ArrowUp } from 'lucide-react'

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
        <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-page)', paddingBottom: '80px' }}>
            <div className="page-wrap py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p style={{ fontSize: 14, color: 'var(--text-muted)', margin: 0 }}>
                        © {new Date().getFullYear()} Nguyen Ngoc Hieu.
                    </p>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center text-lg no-underline"
                                style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-heading)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <social.icon />
                            </a>
                        ))}

                        <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 8px' }} />

                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2"
                            style={{
                                background: 'transparent',
                                color: 'var(--text-muted)',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: 13,
                                fontWeight: 500,
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-heading)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        >
                            Back to top <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
