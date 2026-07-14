import aboutImg from '../../assets/hanu-logo.png'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

const About = () => {
    return (
        <section id="about" style={{ background: 'var(--bg-card-alt)' }}>
            <div className="page-wrap">
                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    {/* Left — photo */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                        <div className="squircle" style={{
                            width: 'min(280px, 70vw)', height: 'min(280px, 70vw)',
                            background: 'var(--bg-card)', padding: 6,
                            boxShadow: 'var(--shadow-card)'
                        }}>
                            <div className="squircle" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                                <img src={aboutImg} alt="Nguyen Ngoc Hieu"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>

                    {/* Right — text */}
                    <div className="flex-1 text-center md:text-left">
                        <span className="label">About Me</span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 24px' }}>
                            Turning business complexity into <span style={{ color: 'var(--accent)' }}>clarity.</span>
                        </h2>

                        <p style={{ marginBottom: 20, fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>
                            I'm an Information Technology student at Hanoi University with a strong passion for Business Analysis.
                            My background in fullstack development gives me a unique lens — I understand both what the business wants
                            and what technology can deliver.
                        </p>
                        <p style={{ marginBottom: 32, fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>
                            During my internship at Eras Vietnam, I practiced requirements gathering, process mapping, and stakeholder interviews.
                            These experiences confirmed that Business Analysis is the career I want to build.
                        </p>

                        {/* Quick facts */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {[
                                { label: 'Location', value: 'Hanoi, Vietnam', icon: MapPin },
                                { label: 'Education', value: 'Hanoi University (IT)', icon: GraduationCap },
                                { label: 'Focus', value: 'Business Analysis', icon: Briefcase },
                            ].map(f => (
                                <div key={f.label} className="soft-card-static flex items-center gap-3" style={{
                                    padding: '12px 16px', flex: 1
                                }}>
                                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <f.icon size={16} />
                                    </div>
                                    <div className="text-left">
                                        <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 2 }}>
                                            {f.label}
                                        </span>
                                        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-heading)' }}>
                                            {f.value}
                                        </span>
                                    </div>
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
