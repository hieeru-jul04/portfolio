import { GraduationCap, Briefcase, Code2 } from 'lucide-react'
import './experience.css'

const Experience = () => {
    const items = [
        {
            id: 1,
            period: '2022 - 2026',
            title: 'Hanoi University',
            subtitle: 'Major in Information Technology',
            icon: GraduationCap,
            color: '#5B6FFF',
        },
        {
            id: 2,
            period: '2024 - 2026',
            title: 'Furniture Sales',
            subtitle: 'Part-time sales assistant at a local furniture store',
            icon: Briefcase,
            color: '#39D98A',
        },
        {
            id: 3,
            period: 'Spring 2026',
            title: 'Internship at Eras Vietnam',
            subtitle: 'Business Analyst Intern',
            icon: Briefcase,
            color: '#F59E0B',
        },
        {
            id: 4,
            period: '2025 - 2026',
            title: 'Personal Projects',
            subtitle: 'Building and deploying several web applications',
            icon: Code2,
            color: '#9B8AFB',
        },
    ]

    return (
        <section id="experience" className="py-16">
            <h2 className="text-white text-2xl font-bold mb-12">Experience & Education</h2>

            {/* Timeline */}
            <div className="relative">
                {/* Horizontal line */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#1F293A]" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={item.id} className="relative flex flex-col gap-4">
                            {/* Timeline dot */}
                            <div className="flex justify-start md:justify-center">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center z-10 border-2 border-[#1F293A] timeline-icon"
                                    style={{ background: `${item.color}20`, borderColor: item.color }}
                                >
                                    <item.icon size={20} color={item.color} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-1.5 md:text-center">
                                <span className="text-[#9CA3AF] text-xs">{item.period}</span>
                                <h3 className="text-white font-semibold text-sm leading-snug">{item.title}</h3>
                                <p className="text-[#6B7280] text-xs leading-relaxed">{item.subtitle}</p>
                            </div>

                            {/* Connector line on mobile */}
                            {index < items.length - 1 && (
                                <div className="md:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-[#1F293A] -translate-x-0.5" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
