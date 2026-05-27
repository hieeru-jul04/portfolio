import { ExternalLink, Grid2X2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import ecommerceImg from '../../assets/hero.png'
import daidongImg from '../../assets/daidong.png'
import portfolioImg from '../../assets/portfolio.png'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Dai Dong Furniture Website',
            description: 'Fullstack e-commerce website with authentication, product management and Stripe.',
            image: daidongImg,
            tags: ['React', 'Node', 'MongoDB'],
            liveDemo: '#',
            github: 'https://github.com/hieeru-jul04/daidong-furniture',
            color: '#F59E0B',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Task management application with authentication and real-time updates.',
            image: ecommerceImg,
            tags: ['React', 'Spring Boot', 'WebSocket'],
            liveDemo: '#',
            github: '#',
            color: '#5B6FFF',
        },
        {
            id: 3,
            title: 'Personal Portfolio',
            description: 'My personal portfolio website built with React and Tailwind CSS.',
            image: portfolioImg,
            tags: ['React', 'Tailwind CSS'],
            liveDemo: 'https://portfolio-hieerujul04.vercel.app',
            github: 'https://github.com/hieeru-jul04/portfolio',
            color: '#39D98A',
        },
    ]

    const tagColors = {
    React: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    'Spring Boot': 'bg-green-500/10 text-green-400 border border-green-500/20',
    MySQL: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    WebSocket: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    'Tailwind CSS': 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    MongoDB: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    Node: 'bg-lime-500/10 text-lime-400 border border-lime-500/20',
}

    return (
        <section id="projects" className="py-16">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-white text-2xl font-bold">My Projects</h2>
                <button className="hidden items-center gap-2 text-[#5B6FFF] border border-[#1F293A] px-4 py-2 rounded-lg hover:bg-[#0C1423] transition-colors duration-300 cursor-pointer text-sm">
                    View All Projects <Grid2X2 size={16} />
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-[#0C1423] border border-[#1F293A] rounded-2xl overflow-hidden hover:border-[#5B6FFF] transition-all duration-300 hover:-translate-y-2 group"
                    >
                        {/* Project Image */}
                        <div className="relative overflow-hidden h-44">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1423] to-transparent opacity-60" />
                        </div>

                        {/* Project Content */}
                        <div className="p-5 flex flex-col gap-3">
                            <h3 className="text-[#5B6FFF] font-semibold text-base">{project.title}</h3>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-xs px-3 py-1 rounded-md font-medium ${tagColors[tag] || 'bg-[#1F293A] text-[#9CA3AF]'}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 pt-1">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white text-sm transition-colors duration-300"
                                >
                                    <ExternalLink size={14} /> Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white text-sm transition-colors duration-300"
                                >
                                    <FaGithub size={14} /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
