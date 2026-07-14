import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSending(true)
        setTimeout(() => {
            setSending(false)
            setSent(true)
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setSent(false), 3000)
        }, 1500)
    }

    const contactInfo = [
        { icon: Mail, text: 'nguyenhieu2072004@gmail.com', href: 'mailto:nguyenhieu2072004@gmail.com', label: 'Email' },
        { icon: Phone, text: '+84 965 947 378', href: 'tel:+84965947378', label: 'Phone' },
        { icon: MapPin, text: 'Hanoi, Vietnam', href: '#', label: 'Location' },
    ]

    return (
        <section id="contact" style={{ background: 'var(--bg-card-alt)' }}>
            <div className="page-wrap">
                <div className="text-center mb-16">
                    <span className="label mx-auto">Get in touch</span>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', margin: '0 0 16px' }}>
                        Let's work <span style={{ color: 'var(--accent)' }}>together.</span>
                    </h2>
                    <p style={{ maxWidth: 500, margin: '0 auto', color: 'var(--text-body)', fontSize: 16 }}>
                        I'm always open to new opportunities, collaborations, and interesting conversations.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:w-1/3 flex flex-col gap-6 justify-center">
                        {contactInfo.map((info) => (
                            <a key={info.text} href={info.href} className="flex items-center gap-4 no-underline group"
                               style={{ transition: 'all 0.3s' }}
                               onMouseEnter={e => {
                                   e.currentTarget.querySelector('.icon-box').style.background = 'var(--accent)'
                                   e.currentTarget.querySelector('.icon-box').style.borderColor = 'var(--accent)'
                                   e.currentTarget.querySelector('svg').style.color = '#fff'
                               }}
                               onMouseLeave={e => {
                                   e.currentTarget.querySelector('.icon-box').style.background = 'var(--bg-card)'
                                   e.currentTarget.querySelector('.icon-box').style.borderColor = 'var(--border)'
                                   e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)'
                               }}>
                                <div className="icon-box" style={{
                                    width: 48, height: 48, flexShrink: 0, borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    transition: 'all 0.3s'
                                }}>
                                    <info.icon size={20} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} />
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>
                                        {info.label}
                                    </span>
                                    <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-heading)' }}>{info.text}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="lg:w-2/3">
                        <form onSubmit={handleSubmit} className="soft-card-static" style={{ padding: 'clamp(16px, 4vw, 32px)' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-heading)' }}>Name</label>
                                    <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required
                                           style={{
                                               padding: '12px 16px', borderRadius: 8,
                                               background: 'var(--bg-card)', border: '1px solid var(--border)',
                                               color: 'var(--text-heading)', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                                           }}
                                           onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                           onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-heading)' }}>Email</label>
                                    <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required
                                           style={{
                                               padding: '12px 16px', borderRadius: 8,
                                               background: 'var(--bg-card)', border: '1px solid var(--border)',
                                               color: 'var(--text-heading)', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                                           }}
                                           onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                           onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-2 mb-8">
                                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-heading)' }}>Message</label>
                                <textarea name="message" placeholder="How can I help you?" value={form.message} onChange={handleChange} required rows={5}
                                          style={{
                                              padding: '16px', borderRadius: 8, resize: 'none',
                                              background: 'var(--bg-card)', border: '1px solid var(--border)',
                                              color: 'var(--text-heading)', fontSize: 14, outline: 'none', transition: 'border-color 0.2s'
                                          }}
                                          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                          onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                            </div>

                            <button type="submit" disabled={sending || sent} className="btn btn-primary"
                                    style={{
                                        width: '100%', justifyContent: 'center',
                                        opacity: (sending || sent) ? 0.7 : 1, cursor: (sending || sent) ? 'not-allowed' : 'pointer',
                                    }}>
                                {sent ? 'Message Sent!' : sending ? 'Sending...' : (
                                    <>Send Message <Send size={16} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
