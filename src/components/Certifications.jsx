const CERTS = [
  {
    title: 'Introduction to Java',
    provider: 'LearnQuest (Coursera)',
    date: 'March 2023',
    desc: 'Gained foundational skills in Java programming syntax and object-oriented programming (OOP) concepts.',
  },
  {
    title: 'Python Basics',
    provider: 'University of Michigan (Coursera)',
    date: 'January 2025',
    desc: 'Learned fundamentals of Python programming and problem-solving techniques through hands-on projects.',
  },
  {
    title: 'Cybersecurity for Everyone',
    provider: 'University of Maryland (Coursera)',
    date: 'February 2025',
    desc: 'Understood core cybersecurity concepts, common threats, and best practices for securing systems.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Online Courses</h2>
        </div>
        <p className="text-sm md:text-base text-slate-300 mb-12 max-w-2xl mt-4">
          Online courses I've completed to strengthen my fundamentals in programming, problem-solving, and cybersecurity through reputable platforms.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {CERTS.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full"
            >
              {/* Course Label */}
              <p className="text-[11px] uppercase tracking-wide text-indigo-400 font-bold mb-2">
                Online Course
              </p>

              {/* Title */}
              <h3 className="font-semibold text-base text-white mb-1">
                {cert.title}
              </h3>

              {/* Provider + Date */}
              <p className="text-xs text-slate-400 mb-4 font-medium">
                {cert.provider} • {cert.date}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed flex-grow">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
