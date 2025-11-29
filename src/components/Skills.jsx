export default function Skills() {
  const technicalSkills = {
    Languages: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
    'Web Technologies': ['HTML', 'CSS', 'Responsive Design'],
    'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'MERN Stack'],
    Databases: ['MongoDB', 'SQL'],
    Tools: ['VS Code', 'Git/GitHub', 'Canva'],
  }

  const softSkills = [
    'Communication',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Problem Solving',
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">My Expertise</h2>
        </div>
        <p className="text-sm md:text-base text-slate-300 mb-12 max-w-2xl leading-relaxed mt-4">
          I have a strong foundation in programming and web development with hands-on experience in the MERN stack. Beyond technical expertise, I bring soft skills like communication, teamwork, and leadership that help me collaborate effectively and deliver quality work on projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills Card */}
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <h3 className="text-lg font-bold text-white mb-6">Technical Skills</h3>

            <div className="space-y-5">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs bg-slate-800 border border-white/10 text-slate-200 rounded-full font-medium hover:bg-slate-700 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <h3 className="text-lg font-bold text-white mb-6">Soft Skills</h3>

            <ul className="space-y-3">
              {softSkills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                  <span className="font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
