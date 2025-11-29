export default function Hero() {
  const handleScroll = (target) => {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4 py-20 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Hi, I'm</p>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-2">
                Priya Sah
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"></div>
            </div>

            {/* Subheading */}
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Computer Science Engineering Student
              </p>
              <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                Aspiring Full-Stack Web Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
              Final-year CSE student at Jain (Deemed-to-be University) passionate about building modern web applications using the MERN stack. I love solving real-world problems with clean, efficient code and am open to internships and exciting projects.
            </p>

            {/* Tech Focus */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">•</span>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Web Development · MERN Stack · Problem Solving
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll('#projects')}
                className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-200 text-center"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200 text-center"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Side - Graphic/Profile Card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Gradient Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-3xl transform rotate-6"></div>

              {/* Profile Card */}
              <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  {/* Avatar Placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                    PS
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Full-Stack Enthusiast
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Building modern web applications with passion
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold">
                        MongoDB
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">
                        JavaScript
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Graduating in July 2026 · GPA: 7.1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
