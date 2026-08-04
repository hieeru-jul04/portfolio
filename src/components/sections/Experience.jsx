import { useState } from 'react'
import { GraduationCap, Briefcase, Code2, TrendingUp, ChevronDown } from 'lucide-react'

const Experience = () => {
    const [expandedIndexes, setExpandedIndexes] = useState([])

    const items = [
        {
            period: '2022 — 2026',
            title: 'Hanoi University',
            sub: 'Bachelor of Information Technology',
            shortDesc: 'Focus on problem-solving, system thinking, and understanding user needs.',
            desc: (
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>Built a strong foundation in software development, understanding how systems are designed and implemented.</li>
                    <li>Developed analytical thinking and problem-solving skills through technical coursework and projects.</li>
                    <li>Gained experience in breaking down requirements and translating them into technical solutions.</li>
                    <li>Practiced documenting ideas and system flows through basic diagrams and structured notes.</li>
                    <li>Learned to bridge the gap between user needs and technical implementation.</li>
                </ul>
            ),
            icon: GraduationCap,
        },
        {
            period: '2024 — 2026',
            title: 'Local Furniture Retailer',
            sub: 'Furniture Sales Assistant',
            shortDesc: 'Consulting customers, selling furniture products, and handling both in-store and online sales.',
            desc: (
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>Consulted customers in-store, introduced products, and closed sales.</li>
                    <li>Managed online inquiries via Facebook page, including consultation and order handling.</li>
                    <li>Maintained product displays to ensure an organized and appealing showroom.</li>
                </ul>
            ),
            icon: Briefcase,
        },
        {
            period: 'Spring 2026',
            title: 'Eras Vietnam',
            sub: 'Sale Executive',
            shortDesc: 'Consulting customers, presenting website solutions, and closing sales deals.',
            desc: (
                <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>Received leads from marketing and proactively contacted clients for consultation and sales.</li>
                    <li>Closed deals and coordinated contract agreements for website development services.</li>
                    <li>Collected client requirements, created basic wireframes and sitemaps.</li>
                    <li>Prepared simple BRD documents and handed over to the technical team.</li>
                    <li>Acted as a bridge between clients and developers, supporting clients throughout the project lifecycle.</li>
                </ul>
            ),
            icon: TrendingUp,
            highlight: true,
        },
    ]

    return (
        <section id="experience" style={{ background: 'var(--bg-card-alt)' }}>
            <div className="page-wrap text-center">
                <span className="label mx-auto">Journey</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 48px' }}>
                    Experience & <span style={{ color: 'var(--accent)' }}>Education.</span>
                </h2>

                <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto', textAlign: 'left' }}>
                    {/* Vertical line */}
                    <div className="timeline-line" style={{
                        position: 'absolute', left: 20, top: 12, bottom: 12,
                        width: 2, background: 'var(--border)',
                    }} />

                    <div className="flex flex-col gap-8">
                        {items.map((item, i) => (
                            <div key={i} className="fade-up" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', position: 'relative', animationDelay: `${i * 0.1}s` }}>
                                {/* Icon Node */}
                                <div style={{
                                    width: 'clamp(40px, 8vw, 50px)', height: 'clamp(40px, 8vw, 50px)', borderRadius: '50%', flexShrink: 0,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: item.highlight ? 'var(--accent)' : 'var(--bg-card)',
                                    color: item.highlight ? '#fff' : 'var(--text-muted)',
                                    border: item.highlight ? 'none' : '1px solid var(--border)',
                                    boxShadow: item.highlight ? '0 4px 12px var(--accent-soft)' : 'none',
                                    zIndex: 2,
                                }}>
                                    <item.icon size={18} />
                                </div>

                                {/* Content */}
                                <div
                                    style={{ paddingTop: 4, cursor: 'pointer', flex: 1, paddingBottom: 16 }}
                                    onClick={() => setExpandedIndexes(prev => prev.includes(i) ? prev.filter(idx => idx !== i) : [...prev, i])}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ paddingRight: 16 }}>
                                            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{item.period}</span>
                                            <h3 style={{
                                                fontSize: 18, margin: '4px 0 2px',
                                                fontFamily: 'var(--font-serif)', fontWeight: 600,
                                                color: item.highlight ? 'var(--accent)' : 'var(--text-heading)',
                                            }}>
                                                {item.title}
                                            </h3>
                                            <span style={{ fontSize: 14, color: 'var(--accent)', display: 'block', fontWeight: 500, marginBottom: 6 }}>
                                                {item.sub}
                                            </span>
                                            <span style={{ fontSize: 14, color: 'var(--text-body)', display: 'block', lineHeight: 1.5 }}>
                                                {item.shortDesc}
                                            </span>
                                        </div>
                                        <ChevronDown size={20} style={{
                                            color: 'var(--text-muted)',
                                            transform: expandedIndexes.includes(i) ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                                            flexShrink: 0
                                        }} />
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateRows: expandedIndexes.includes(i) ? '1fr' : '0fr',
                                        transition: 'grid-template-rows 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                                        opacity: expandedIndexes.includes(i) ? 1 : 0,
                                    }}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px dashed var(--border)' }}>
                                                <p style={{ fontSize: 14, color: 'var(--text-body)', margin: 0, lineHeight: 1.7, textAlign: 'justify' }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
