export default function Extracurriculars() {
  const ACTIVITIES = [
    {
      name: 'Dancing',
      tag: 'Creativity',
      desc: 'Expresses creativity and artistic vision while building confidence and stage presence. Dancing helps me stay creative, energized, and connected to my expressive side beyond coding.'
    },
    {
      name: 'Kho-Kho',
      tag: 'Teamwork',
      desc: 'Improves teamwork, strategic thinking, and quick decision-making in fast-paced situations. This traditional sport strengthens my ability to collaborate and think on my feet.'
    },
    {
      name: 'Running',
      tag: 'Discipline',
      desc: 'Builds discipline, stamina, and mental resilience through consistent training. Running keeps me physically fit and mentally sharp, reinforcing the importance of dedication and persistence.'
    }
  ]

  return (
    <section id="extracurriculars" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Beyond Academics</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Extracurriculars</h2>
        </div>
        
        <p className="text-sm md:text-base text-slate-300 mb-12 max-w-2xl leading-relaxed mt-4">
          Beyond the classroom, I actively engage in extracurricular activities that help me maintain balance between academics and personal growth. These pursuits develop essential soft skills like teamwork, discipline, and creativity while keeping me mentally and physically refreshed.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {ACTIVITIES.map((activity, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col"
            >
              <span className="inline-block text-[11px] uppercase tracking-wide text-indigo-400 font-semibold mb-2">
                {activity.tag}
              </span>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {activity.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed flex-grow">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
