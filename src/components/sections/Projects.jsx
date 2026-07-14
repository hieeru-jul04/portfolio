import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import daidongImg from '../../assets/daidong.png'
import portfolioImg from '../../assets/portfolio.png'
import storeManagementImg from '../../assets/store-management.png'

const techColors = {
    'React':          { bg: 'rgba(97, 218, 251, 0.15)',  color: '#61DAFB' },
    'Node.js':        { bg: 'rgba(104, 159, 56, 0.15)',  color: '#689F38' },
    'MongoDB':        { bg: 'rgba(77, 163, 77, 0.15)',   color: '#4DA34D' },
    'Stripe':         { bg: 'rgba(99, 91, 255, 0.15)',   color: '#635BFF' },
    'Spring Boot':    { bg: 'rgba(109, 179, 63, 0.15)',  color: '#6DB33F' },
    'MySQL':          { bg: 'rgba(0, 117, 143, 0.15)',   color: '#00758F' },
    'RBAC':           { bg: 'rgba(239, 108, 0, 0.15)',   color: '#EF6C00' },
    'Vite':           { bg: 'rgba(189, 52, 254, 0.15)',  color: '#BD34FE' },
    'CSS Variables':  { bg: 'rgba(38, 77, 228, 0.15)',   color: '#264DE4' },
}

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Dai Dong Furniture',
            desc: 'Full-stack e-commerce architecture designed with a focus on scalable product management and secure payment processing.',
            image: daidongImg,
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            live: 'https://daidong-furniture.vercel.app',
            github: 'https://github.com/hieeru-jul04/daidong-furniture',
        },
        {
            id: 2,
            title: 'Store Management System',
            desc: 'Enterprise-grade inventory tracking system featuring real-time data synchronization and complex role-based access control.',
            image: storeManagementImg,
            tags: ['React', 'Spring Boot', 'MySQL', 'RBAC'],
            live: '#',
            github: 'https://github.com/hieeru-jul04/store-management',
        },
        {
            id: 3,
            title: 'Personal Portfolio',
            desc: 'A performant static site architected to showcase professional profile data with responsive UI components.',
            image: portfolioImg,
            tags: ['React', 'Vite', 'CSS Variables'],
            live: 'https://portfolio-ngoc-hieu-dev.vercel.app',
            github: 'https://github.com/hieeru-jul04/portfolio',
        },
    ]

    return (
        <section id="projects">
            <div className="page-wrap text-center">
                <span className="label mx-auto">Development</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                    Technical <span style={{ color: 'var(--accent)' }}>Projects.</span>
                </h2>
                <p style={{ maxWidth: 500, margin: '0 auto 48px', color: 'var(--text-body)', fontSize: 16 }}>
                    Systems designed and deployed from the ground up, highlighting my technical capability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {projects.map((p, i) => (
                        <div key={p.id} className="soft-card fade-up" style={{ animationDelay: `${i * 0.1}s`, display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                height: 200, background: 'var(--bg-muted)',
                                overflow: 'hidden', borderBottom: '1px solid var(--border)'
                            }}>
                                <img src={p.image} alt={p.title}
                                     style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                     onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                     onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                            </div>
                            
                            <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: 18, margin: '0 0 8px', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                                    {p.title}
                                </h3>
                                <p style={{ fontSize: 14, color: 'var(--text-body)', margin: '0 0 20px', lineHeight: 1.6, flex: 1 }}>
                                    {p.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2" style={{ marginBottom: 24 }}>
                                    {p.tags.map(t => {
                                        const tc = techColors[t]
                                        return (
                                            <span key={t} style={{
                                                display: 'inline-flex', alignItems: 'center',
                                                fontSize: 13, fontWeight: 600, padding: '4px 12px',
                                                borderRadius: 20,
                                                background: tc ? tc.bg : 'var(--accent-soft)',
                                                color: tc ? tc.color : 'var(--accent)',
                                                border: `1px solid ${tc ? tc.color + '30' : 'var(--border-light)'}`,
                                                transition: 'all 0.2s ease',
                                            }}>{t}</span>
                                        )
                                    })}
                                </div>
                                
                                <div className="flex gap-4">
                                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                                       className="flex items-center gap-2" style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-heading)', transition: 'color 0.2s' }}
                                       onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                       onMouseLeave={e => e.currentTarget.style.color = 'var(--text-heading)'}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                                       className="flex items-center gap-2" style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-heading)', transition: 'color 0.2s' }}
                                       onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                       onMouseLeave={e => e.currentTarget.style.color = 'var(--text-heading)'}>
                                        <FaGithub size={16} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

