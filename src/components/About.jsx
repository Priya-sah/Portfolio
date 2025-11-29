export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Left Column - Main Text */}
          <div className="space-y-6">
            {/* Intro Line */}
            <p className="text-base font-semibold text-indigo-400">
              Final-year Computer Science Engineering student passionate about full-stack web development.
            </p>

            {/* Main Paragraph */}
            <p className="text-slate-300 leading-relaxed">
              I'm a final-year B.Tech Computer Science and Engineering student at Jain (Deemed-to-be University), Faculty of Engineering and Technology, with a CGPA of 7.1. Throughout my academic journey, I've developed a strong passion for full-stack web development, with a particular focus on the MERN stack. I love building projects that solve real-world problems while maintaining clean, readable, and efficient code. I believe in the importance of continuous learning and staying updated with the latest technologies in the web development landscape.
            </p>

            {/* Soft Skills & Interests */}
            <p className="text-slate-300 leading-relaxed">
              Beyond coding, I'm a well-rounded individual who values teamwork, communication, leadership, and effective time management. I balance my academic responsibilities with extracurricular activities like dancing, kho-kho, and running, which help me maintain discipline and a healthy lifestyle. I'm actively looking for internships and collaborative projects where I can apply my technical skills and grow as a developer.
            </p>
          </div>

          {/* Right Column - Info Card */}
          <div>
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wide">Quick Info</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">Name</span>
                  <span className="text-sm text-slate-100 text-right">Priya Sah</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">Degree</span>
                  <span className="text-sm text-slate-100 text-right">B.Tech CSE</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">University</span>
                  <span className="text-sm text-slate-100 text-right">Jain (Deemed-to-be University)</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">Graduation</span>
                  <span className="text-sm text-slate-100 text-right">July 2026</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">CGPA</span>
                  <span className="text-sm text-slate-100 text-right font-semibold">7.1</span>
                </div>

                <div className="pt-3 border-t border-white/5"></div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-slate-400">Goal</span>
                  <span className="text-sm text-indigo-400 font-semibold text-right">Full-Stack Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
