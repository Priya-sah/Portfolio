export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          © {year} Priya Sah. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <a href="mailto:priya2076sah@gmail.com" className="hover:text-indigo-400 transition">
            Email
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/priya-sah-812225267" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">
            LinkedIn
          </a>
          <span>•</span>
          <a href="#home" className="hover:text-indigo-400 transition">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
