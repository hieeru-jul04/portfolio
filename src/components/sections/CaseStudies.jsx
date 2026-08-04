import { ArrowRight, ExternalLink } from 'lucide-react'

const CaseStudies = () => {
    const studies = [
        {
            id: 1,
            title: 'Customer Loyalty Management System Based on Membership Cards for a Fashion Retail Chain',
            where: 'Hanoi University — 61FIT3REQ',
            when: 'Spring 2026',
            what: 'Digitized the customer loyalty lifecycle by designing a multi-platform solution (mobile app, POS interface, admin dashboard) to improve customer retention and data visibility.',
            methods: ['Interviews & Surveys', 'Workshops & Observation', 'UML Modeling'],
            deliverables: ['Business Requirements Document', 'Software Requirement Specification', 'Thesis Report'],
            result: 'Designed a system to mitigate over $3M in risk exposure and support future strategic expansion to 50+ store locations.',
            link: 'https://drive.google.com/drive/folders/1Vpf7T-UqSlSO4hQt6N60vMfHrynl3fn0?usp=sharing',
        },
        {
            id: 2,
            title: 'Food Ordering System',
            where: 'Hanoi University — 61FIT3SAD',
            when: 'Spring 2025',
            what: 'Defined software requirements, supplementary specifications, and software architecture using the MVC pattern for a scalable MERN-stack application.',
            methods: ['Use-Case Modeling', 'MVC Pattern Design', 'UML Diagrams'],
            deliverables: ['Software Requirements Spec', 'Supplementary Spec', 'Software Architecture Document'],
            result: 'Designed an architecture capable of supporting up to 10,000 concurrent users with under 2-second response times for user actions.',
            link: 'https://drive.google.com/drive/folders/1BP-yoVLIrSxzp_GzeOqesgzCMr6qiN6U?usp=sharing',
        }
    ]

    return (
        <section id="case-studies">
            <div className="page-wrap text-center">
                <span className="label mx-auto">Selected Work</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                    Case <span style={{ color: 'var(--accent)' }}>Studies.</span>
                </h2>
                <p style={{ maxWidth: 500, margin: '0 auto 48px', color: 'var(--text-body)', fontSize: 16 }}>
                    Projects where I applied business analysis methodologies to solve real-world-inspired problems.
                </p>

                <div className="flex flex-col gap-8 text-left">
                    {studies.map((s, i) => (
                        <a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" className="soft-card fade-up group block" style={{
                            padding: 'clamp(16px, 4vw, 32px)', borderLeft: '4px solid var(--accent)', animationDelay: `${i * 0.1}s`, cursor: 'pointer'
                        }}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 style={{ fontSize: 20, margin: '0 0 6px', fontFamily: 'var(--font-serif)', fontWeight: 600 }}
                                            className="group-hover:text-[var(--accent)] transition-colors duration-300">
                                            {s.title}
                                        </h3>
                                        <ExternalLink size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300 flex-shrink-0 mt-1" />
                                    </div>
                                    <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                                        {s.where} <span style={{ margin: '0 8px' }}>•</span> {s.when}
                                    </span>
                                </div>
                            </div>

                            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 24, color: 'var(--text-body)' }}>
                                {s.what}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <span style={{
                                        fontSize: 12, fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: 12,
                                    }}>Methodologies</span>
                                    <div className="flex flex-wrap gap-2">
                                        {s.methods.map(m => (
                                            <span key={m} className="tag">{m}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: 12, fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: 12,
                                    }}>Deliverables</span>
                                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                        {s.deliverables.map(d => (
                                            <li key={d} style={{
                                                fontSize: 14, color: 'var(--text-body)', display: 'flex',
                                                alignItems: 'center', gap: 8, marginBottom: 6,
                                            }}>
                                                <ArrowRight size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: 12, fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: 12,
                                    }}>Outcome</span>
                                    <p style={{ fontSize: 14, color: 'var(--text-body)', margin: 0, lineHeight: 1.6 }}>
                                        {s.result}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
