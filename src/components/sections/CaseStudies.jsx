import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
    const studies = [
        {
            id: 1,
            title: 'Business Process Optimization',
            where: 'Eras Vietnam — Internship',
            when: 'Spring 2026',
            what: 'Analyzed internal workflows, conducted stakeholder interviews, and mapped existing processes using BPMN to identify bottlenecks and propose improvements.',
            methods: ['BPMN Modeling', 'Stakeholder Interviews', 'Gap Analysis'],
            deliverables: ['Business Requirements Document', 'Process Flow Diagrams', 'Recommendations Report'],
            result: 'Identified 3 key bottlenecks and proposed actionable workflow improvements.',
        },
        {
            id: 2,
            title: 'E-commerce Requirements Analysis',
            where: 'Dai Dong Furniture — Personal Project',
            when: '2025',
            what: 'Defined comprehensive requirements for an e-commerce platform from a BA perspective — user flows, business rules, and system specifications.',
            methods: ['User Story Mapping', 'Use Case Diagrams', 'Data Flow Analysis'],
            deliverables: ['Software Requirements Spec', 'User Flow Diagrams', 'Acceptance Criteria'],
            result: 'Delivered complete documentation that guided successful development and deployment.',
        },
        {
            id: 3,
            title: 'Retail System Specification',
            where: 'Store Management — Academic Project',
            when: '2025',
            what: 'Specified business requirements for a retail management system including inventory tracking, sales analytics, and authentication flows.',
            methods: ['Requirements Elicitation', 'ER Modeling', 'UAT Planning'],
            deliverables: ['Functional Requirements Doc', 'ER Diagrams', 'Test Cases & UAT Plan'],
            result: 'Created specifications that served as foundation for a fully functional system.',
        },
    ]

    return (
        <section id="case-studies" style={{ background: 'var(--bg-card-alt)' }}>
            <div className="page-wrap text-center">
                <span className="label mx-auto">Selected Work</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                    Case <span style={{ color: 'var(--accent)' }}>Studies.</span>
                </h2>
                <p style={{ maxWidth: 500, margin: '0 auto 48px', color: 'var(--text-body)', fontSize: 16 }}>
                    Real-world projects where I applied business analysis methodologies to solve problems.
                </p>

                <div className="flex flex-col gap-8 text-left">
                    {studies.map((s, i) => (
                        <div key={s.id} className="soft-card fade-up" style={{
                            padding: 'clamp(16px, 4vw, 32px)', borderLeft: '4px solid var(--accent)', animationDelay: `${i * 0.1}s`
                        }}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 style={{ fontSize: 20, margin: '0 0 6px', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                                        {s.title}
                                    </h3>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
