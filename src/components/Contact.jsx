import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! I will get back to you soon.')
    e.target.reset()
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Get in Touch</h2>
        </div>

        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl leading-relaxed mt-4">
          I'm always open to internships, exciting projects, and collaboration opportunities. Feel free to reach out via email, LinkedIn, or the contact form below. I'll get back to you as soon as possible!
        </p>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left side: Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400 mb-3">
                Contact Details
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <a href="mailto:priya2076sah@gmail.com" className="text-slate-300 hover:text-indigo-400 transition text-sm">
                      priya2076sah@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Phone</p>
                    <a href="tel:7321098131" className="text-slate-300 hover:text-indigo-400 transition text-sm">
                      732-109-8131
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/priya-sah-812225267" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-400 transition text-sm">
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
