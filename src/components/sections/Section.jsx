import { ArrowRight, Download } from "lucide-react"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import avatarImg from '../../assets/avatar.jpg'

// ✅ Đổi thành 'employed' khi đã tìm được việc
const CURRENT_STATUS = 'available'

const statusConfig = {
    available: {
        text: 'Available for work',
        dot: '#22C55E',        // Green 500
        bg: 'rgba(34, 197, 94, 0.1)',
        border: 'rgba(34, 197, 94, 0.3)',
        color: '#16A34A',      // Green 600
    },
    employed: {
        text: 'Currently Employed',
        dot: '#94A3B8',        // Slate 400
        bg: 'rgba(148, 163, 184, 0.1)',
        border: 'rgba(148, 163, 184, 0.3)',
        color: '#64748B',      // Slate 500
    },
}

const Section = () => {
    const status = statusConfig[CURRENT_STATUS]
    const socials = [
        { icon: FaFacebook, href: "https://www.facebook.com/hieeru.jul04", label: "Facebook" },
        { icon: FaGithub, href: "https://github.com/hieeru-jul04", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/hieeru-jul04/", label: "LinkedIn" },
        { icon: SiGmail, href: "mailto:nguyenhieu2072004@gmail.com", label: "Email" },
    ]

    return (
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 0 }}>
            <div className="page-wrap" style={{ width: '100%' }}>
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 py-12 md:py-20">

                    {/* Left - Text content */}
                    <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                        <div className="fade-up">
                            <span className="label" style={{
                                background: status.bg,
                                border: `1px solid ${status.border}`,
                                color: status.color,
                            }}>
                                <span style={{
                                    display: 'inline-block', width: 8, height: 8,
                                    borderRadius: '50%', background: status.dot, flexShrink: 0,
                                    boxShadow: CURRENT_STATUS === 'available' ? `0 0 8px ${status.dot}` : 'none',
                                }}></span>
                                {status.text}
                            </span>
                        </div>

                        <h1 className="fade-up d1" style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            margin: '0 0 16px',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}>
                            Hi, I'm Ngoc Hieu.
                        </h1>

                        <div className="fade-up d2" style={{ marginBottom: 6 }}>
                            <span style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                                fontWeight: 500,
                                color: 'var(--accent)',
                            }}>
                                Business Analyst
                            </span>
                        </div>

                        <p className="fade-up d2" style={{
                            maxWidth: 480, margin: '0 0 36px', fontSize: 16,
                            lineHeight: 1.7, color: 'var(--text-body)',
                        }}>
                            I help organizations turn complex business needs into clear, actionable technical solutions.
                            Passionate about bridging the gap between people, processes, and technology.
                        </p>

                        <div className="fade-up d3 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ marginBottom: 36 }}>
                            <a href="#projects" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                                View Projects <ArrowRight size={16} />
                            </a>
                            <a href="https://drive.google.com/drive/folders/1-1bV8k_8E-pork49Alo6elIdrM4FYSQq?usp=drive_link"
                                target="_blank" rel="noopener noreferrer"
                                className="btn btn-ghost" style={{ padding: '14px 28px' }}>
                                Resume <Download size={16} />
                            </a>
                        </div>

                        <div className="fade-up d4 flex gap-4 justify-center md:justify-start">
                            {socials.map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        color: 'var(--text-muted)', fontSize: 22,
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-heading)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                >
                                    <s.icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Profile Image */}
                    <div className="fade-up d1 flex-shrink-0 order-1 md:order-2 w-full md:w-auto flex justify-center">
                        <div className="hero-image-wrapper" style={{ position: 'relative' }}>
                            {/* Gradient blob backdrop */}
                            <div className="hero-blob" />
                            {/* Profile image — no frame */}
                            <img
                                src={avatarImg}
                                alt="Nguyen Ngoc Hieu"
                                className="hero-portrait"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section