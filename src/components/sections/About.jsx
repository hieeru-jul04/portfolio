import { Calendar, MapPin, GraduationCap, User } from 'lucide-react'
import aboutImg from '../../assets/hero-1.png'

const About = () => {
    const stats = [
        { icon: Calendar, label: 'Age', value: '22' },
        { icon: MapPin, label: 'From', value: 'Vietnam' },
        { icon: GraduationCap, label: 'Study', value: 'Hanoi University' },
    ]

    return (
        <section id="about" className="py-16">
            <div className="flex items-center gap-3 mb-8">
                <User className="text-[#5B6FFF]" size={24} />
                <h2 className="text-white text-2xl font-bold">About Me</h2>
            </div>

            <div className="bg-[#0C1423] border border-[#1F293A] rounded-2xl p-8">
                <div className="flex gap-10 items-start">
                    {/* Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={aboutImg}
                            alt="About Nguyen Ngoc Hieu"
                            className="w-56 h-44 object-cover rounded-xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6 flex-1">
                        <p className="text-[#9CA3AF] text-lg leading-relaxed">
                            I'm an Information Technology student with a strong interest in Backend and Fullstack Development.
                            <br />
                            My goal is to become a professional Backend or Fullstack Developer, focusing on clean, scalable, and maintainable web solutions.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex-1 bg-[#0A1020] border border-[#1F293A] rounded-xl p-4 flex flex-col gap-2"
                                >
                                    <div className="flex items-center gap-2 text-[#5B6FFF]">
                                        <stat.icon size={16} />
                                        <span className="text-[#9CA3AF] text-sm">{stat.label}</span>
                                    </div>
                                    <span className="text-white font-semibold text-sm">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
