export default function Education() {
  const courses = [
    'Web Development',
    'Full Stack Project',
    'Data Structures',
    'Machine Learning',
    'AI Fundamentals',
  ]

  return (
    <section id="education" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Academic Background</h2>
        </div>
        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl leading-relaxed mt-4">
          I'm a final-year B.Tech Computer Science and Engineering student building a strong foundation in both theoretical concepts and practical development. My academic journey has equipped me with problem-solving skills and a deep understanding of full-stack web development.
        </p>

        {/* Education Card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Degree and Branch */}
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            Bachelor of Technology (B.Tech)
          </h3>
          <p className="text-lg font-bold text-indigo-400 mb-3">
            Computer Science and Engineering (CSE)
          </p>

          {/* University */}
          <p className="text-sm md:text-base text-slate-300 mb-4">
            Jain (Deemed-to-be University), Faculty of Engineering and Technology
          </p>

          {/* Duration and Status */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                Status
              </p>
              <p className="text-sm md:text-base text-slate-100 font-medium">
                Final-year Student
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                Expected Graduation
              </p>
              <p className="text-sm md:text-base text-slate-100 font-medium">
                July 2026
              </p>
            </div>
          </div>

          {/* GPA and Location */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                Current GPA
              </p>
              <p className="text-sm md:text-base text-slate-100 font-semibold">
                7.1 / 10.0
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                Location
              </p>
              <p className="text-sm md:text-base text-slate-100 font-medium">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>

          {/* Key Courses */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-3 uppercase tracking-wide">
              Key Courses & Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
