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
        { icon: Mail, text: 'nguyenhieu2072004@gmail.com', href: 'mailto:nguyenhieu2072004@gmail.com' },
        { icon: Phone, text: '+84 965 947 378', href: 'tel:+84965947378' },
        { icon: MapPin, text: 'Hanoi, Vietnam', href: '#' },
    ]

    return (
        <section id="contact" className="py-16">
            <h2 className="text-white text-2xl font-bold mb-8">Get In Touch</h2>

            <div className="bg-[#0C1423] border border-[#1F293A] rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 flex-shrink-0 justify-center">
                        {contactInfo.map((info) => (
                            <a
                                key={info.text}
                                href={info.href}
                                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#5B6FFF] transition-colors duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#5B6FFF]/10 border border-[#5B6FFF]/20 flex items-center justify-center group-hover:bg-[#5B6FFF]/20 transition-colors duration-300">
                                    <info.icon size={16} className="text-[#5B6FFF]" />
                                </div>
                                <span className="text-sm">{info.text}</span>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full md:w-px h-px md:h-auto bg-[#1F293A] flex-shrink-0" />

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="bg-[#0A1020] border border-[#1F293A] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] focus:outline-none focus:border-[#5B6FFF] transition-colors duration-300"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="bg-[#0A1020] border border-[#1F293A] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] focus:outline-none focus:border-[#5B6FFF] transition-colors duration-300"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="bg-[#0A1020] border border-[#1F293A] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] focus:outline-none focus:border-[#5B6FFF] transition-colors duration-300 resize-none"
                        />
                        <div>
                            <button
                                type="submit"
                                disabled={sending || sent}
                                className="flex items-center gap-2 bg-[#5B6FFF] hover:bg-[#4a5de0] text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {sent ? (
                                    'Message Sent! ✓'
                                ) : sending ? (
                                    'Sending...'
                                ) : (
                                    <>Send Message <Send size={16} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
