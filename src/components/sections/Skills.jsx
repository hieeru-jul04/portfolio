import {
    FileText, Users, GitBranch, BarChart3, Target, Search,
    Database, PieChart, Table2, FileSpreadsheet,
    PenTool, LayoutGrid, MessageSquare, Lightbulb, Presentation, Handshake
} from 'lucide-react'
import { SiJira, SiConfluence } from 'react-icons/si'

const Skills = () => {
    const categories = [
        {
            title: 'Business Analysis',
            items: [
                { name: 'Requirements Gathering', icon: FileText },
                { name: 'BPMN Modeling', icon: GitBranch },
                { name: 'Use Case Analysis', icon: Target },
                { name: 'User Stories', icon: FileText },
                { name: 'Stakeholder Mgmt', icon: Users },
                { name: 'Gap Analysis', icon: Search },
            ],
        },
        {
            title: 'Data & Technical',
            items: [
                { name: 'SQL', icon: Database },
                { name: 'Data Analysis', icon: BarChart3 },
                { name: 'Advanced Excel', icon: FileSpreadsheet },
                { name: 'Power BI', icon: PieChart },
                { name: 'Python (Basic)', icon: Table2 },
                { name: 'Data Visualization', icon: BarChart3 },
            ],
        },
        {
            title: 'Tools',
            items: [
                { name: 'Jira', icon: SiJira },
                { name: 'Confluence', icon: SiConfluence },
                { name: 'Figma', icon: PenTool },
                { name: 'Draw.io', icon: LayoutGrid },
                { name: 'MS Office Suite', icon: FileSpreadsheet },
                { name: 'Notion', icon: LayoutGrid },
            ],
        },
        {
            title: 'Soft Skills',
            items: [
                { name: 'Communication', icon: MessageSquare },
                { name: 'Critical Thinking', icon: Lightbulb },
                { name: 'Problem Solving', icon: Target },
                { name: 'Presentation', icon: Presentation },
                { name: 'Collaboration', icon: Handshake },
                { name: 'Analytical Mindset', icon: Search },
            ],
        },
    ]

    return (
        <section id="skills">
            <div className="page-wrap text-center">
                <span className="label mx-auto">Expertise</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                    Skills & <span style={{ color: 'var(--accent)' }}>Competencies.</span>
                </h2>
                <p style={{ maxWidth: 500, margin: '0 auto 48px', color: 'var(--text-body)', fontSize: 16 }}>
                    A blend of business acumen, technical know-how, and people skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {categories.map((cat, idx) => (
                        <div key={cat.title} className="soft-card-static fade-up" style={{ padding: 'clamp(16px, 4vw, 32px)', animationDelay: `${idx * 0.1}s` }}>
                            <h3 style={{
                                fontSize: 18, fontFamily: 'var(--font-serif)', fontWeight: 600,
                                color: 'var(--text-heading)', margin: '0 0 20px',
                            }}>
                                {cat.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                                {cat.items.map(item => (
                                    <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{ 
                                            width: 32, height: 32, borderRadius: 8, 
                                            background: 'var(--accent-soft)', color: 'var(--accent)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <item.icon size={16} />
                                        </div>
                                        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-body)' }}>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
