import { GraduationCap, Briefcase, Code2, TrendingUp } from 'lucide-react'

const Experience = () => {
    const items = [
        {
            period: '2022 — 2026',
            title: 'Hanoi University',
            sub: 'Bachelor of Information Technology',
            desc: 'Studying software engineering, database management, and system analysis.',
            icon: GraduationCap,
        },
        {
            period: '2024 — 2026',
            title: 'Furniture Sales Assistant',
            sub: 'Local Furniture Retailer',
            desc: 'Customer relations, sales processes, and inventory management.',
            icon: Briefcase,
        },
        {
            period: 'Spring 2026',
            title: 'Business Analyst Intern',
            sub: 'Eras Vietnam',
            desc: 'Requirements gathering, stakeholder interviews, process analysis, and BRD creation.',
            icon: TrendingUp,
            highlight: true,
        },
        {
            period: '2025 — 2026',
            title: 'Personal Projects',
            sub: 'Self-directed development & analysis',
            desc: 'Built web applications while applying BA methodologies.',
            icon: Code2,
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
                                <div style={{ paddingTop: 4 }}>
                                    <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{item.period}</span>
                                    <h3 style={{
                                        fontSize: 18, margin: '4px 0 2px',
                                        fontFamily: 'var(--font-serif)', fontWeight: 600,
                                        color: item.highlight ? 'var(--accent)' : 'var(--text-heading)',
                                    }}>
                                        {item.title}
                                    </h3>
                                    <span style={{ fontSize: 14, color: 'var(--text-heading)', display: 'block', marginBottom: 8, fontWeight: 500 }}>
                                        {item.sub}
                                    </span>
                                    <p style={{ fontSize: 15, color: 'var(--text-body)', margin: 0, lineHeight: 1.7 }}>
                                        {item.desc}
                                    </p>
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
