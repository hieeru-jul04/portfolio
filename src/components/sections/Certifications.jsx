import { Award, ExternalLink, Clock, CheckCircle, BookOpen } from 'lucide-react'

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: 'Google Data Analytics Professional Certificate',
            issuer: 'Google — Coursera',
            description: 'Comprehensive data analytics program covering spreadsheets, SQL, R programming, Tableau, and data visualization.',
            status: 'planned',
            link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        },
        {
            id: 2,
            name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
            issuer: 'International Institute of Business Analysis',
            description: 'Entry-level certification demonstrating foundational knowledge in business analysis as defined by the BABOK® Guide.',
            status: 'planned',
            link: 'https://www.iiba.org/business-analysis-certifications/ecba/',
        },
        {
            id: 3,
            name: 'Business Analysis & Process Management',
            issuer: 'Coursera',
            description: 'Specialization covering business process analysis, improvement methodologies, and management frameworks.',
            status: 'planned',
            link: 'https://www.coursera.org/projects/business-analysis-process-management',
        },
        {
            id: 4,
            name: 'SQL for Data Science',
            issuer: 'UC Davis — Coursera',
            description: 'In-depth SQL course covering querying, filtering, sorting, and working with multiple tables for data analysis.',
            status: 'planned',
            link: 'https://www.coursera.org',
        },
    ]

    const statusConfig = {
        completed: {
            label: 'Completed',
            color: '#10B981',
            bg: 'rgba(16, 185, 129, 0.1)',
            icon: CheckCircle,
        },
        'in-progress': {
            label: 'In Progress',
            color: 'var(--accent)',
            bg: 'var(--accent-soft)',
            icon: Clock,
        },
        planned: {
            label: 'Planned',
            color: 'var(--text-muted)',
            bg: 'var(--bg-muted)',
            icon: BookOpen,
        },
    }

    return (
        <section id="certifications">
            <div className="page-wrap text-center">
                <span className="label mx-auto">Qualifications</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                    Certifications & <span style={{ color: 'var(--accent)' }}>Learning.</span>
                </h2>
                <p style={{ maxWidth: 500, margin: '0 auto 48px', color: 'var(--text-body)', fontSize: 16 }}>
                    Professional certifications and continuous learning paths aligned with industry standards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {certifications.map((cert, idx) => {
                        const status = statusConfig[cert.status]
                        const StatusIcon = status.icon

                        return (
                            <div key={cert.id} className="soft-card-static fade-up" style={{ padding: 'clamp(16px, 4vw, 24px)', animationDelay: `${idx * 0.1}s` }}>
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 style={{ fontSize: 16, margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                                        {cert.name}
                                    </h3>
                                    <span style={{
                                        display: 'flex', alignItems: 'center', gap: 6,
                                        fontSize: 11, fontWeight: 600, padding: '4px 8px',
                                        borderRadius: 20, background: status.bg, color: status.color,
                                        flexShrink: 0
                                    }}>
                                        <StatusIcon size={12} />
                                        {status.label}
                                    </span>
                                </div>
                                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 12px' }}>
                                    {cert.issuer}
                                </p>

                                <p style={{ fontSize: 14, color: 'var(--text-body)', margin: '0 0 20px', lineHeight: 1.6 }}>
                                    {cert.description}
                                </p>

                                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                   className="flex items-center gap-2 no-underline"
                                   style={{ fontSize: 13, fontWeight: 500, color: 'var(--accent)', transition: 'opacity 0.2s' }}
                                   onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                                   onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                                    Verify <ExternalLink size={14} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Certifications
