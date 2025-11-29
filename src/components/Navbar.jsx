import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Extracurriculars', href: '#extracurriculars' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <h1 className="text-lg font-semibold tracking-tight text-white">Priya <span className="text-indigo-400">Sah</span></h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white hover:-translate-y-[1px] transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-1.5 text-indigo-400 border border-indigo-400/30 hover:border-indigo-400/60 rounded-full text-sm font-medium transition-all hover:bg-indigo-400/10"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4 border-t border-white/10 pt-4 bg-slate-950">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm text-slate-300 hover:text-white transition font-medium px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 mt-2 pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="flex-1 px-4 py-1.5 text-center text-indigo-400 border border-indigo-400/30 hover:border-indigo-400/60 rounded-full text-sm font-medium transition-all hover:bg-indigo-400/10"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                download
                className="flex-1 px-4 py-1.5 text-center bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-medium transition-all"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
