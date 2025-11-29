export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center py-20 px-4">
      {/* Blurred gradient glow behind image */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-400 mb-1 text-sm">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-2">
              Priya Sah
            </h1>
            <h2 className="text-xl text-indigo-400 font-semibold mb-4">
              Aspiring Full-Stack Web Developer
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-lg mb-6 text-base">
              I'm a final-year B.Tech CSE student at Jain University passionate about full-stack web development. Skilled in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I create clean, user-friendly, and responsive web applications. Always open to internships, collaborations, and new learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <a
                href="#projects"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-2.5 rounded-full hover:shadow-lg transition-all font-medium text-sm shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-slate-600 text-slate-100 hover:bg-slate-800 px-7 py-2.5 rounded-full transition-all font-medium text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[3px] rounded-full shadow-xl">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-slate-900">
                <img
                  src="/profile.jpeg"
                  alt="Priya Sah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
