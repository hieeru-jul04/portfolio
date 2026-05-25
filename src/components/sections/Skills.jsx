import { SiMysql, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import { FaReact, FaJava, FaGithub } from 'react-icons/fa'
import './skills.css'

const Skills = () => {
    const skills = [
        { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#6DB33F' },
        { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
        { name: 'Java', icon: FaJava, level: 85, color: '#F89820' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#38BDF8' },
        { name: 'Git & GitHub', icon: FaGithub, level: 85, color: '#F0F0F0' },
    ]

    return (
        <section id="skills" className="py-16">
            <h2 className="text-white text-2xl font-bold mb-8">My Skills</h2>

            <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="skill-card bg-[#0C1423] border border-[#1F293A] rounded-xl p-5 flex flex-col items-center gap-3 cursor-default hover:border-[#5B6FFF] transition-all duration-300 hover:-translate-y-1"
                    >
                        <skill.icon size={36} color={skill.color} />
                        <span className="text-white text-sm font-medium text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
