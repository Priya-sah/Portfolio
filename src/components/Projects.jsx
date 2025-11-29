const PROJECTS = [
  {
    id: 1,
    title: 'License Plate Recognition Using OpenCV and Tesseract OCR',
    type: 'Academic Project',
    description:
      'Built a system to automatically detect and extract vehicle license plate numbers from images using advanced image processing techniques.',
    tech: 'OpenCV, Tesseract OCR, Python',
    highlights: [
      'Automates reading of vehicle registration numbers from images',
      'Can be used for toll collection, surveillance, and law enforcement systems',
      'Combines image preprocessing with optical character recognition',
    ],
  },
  {
    id: 2,
    title: 'Weather Outfit Recommendation System',
    type: 'Full-Stack Project',
    description:
      'A system that recommends suitable outfits based on current or input weather conditions, providing personalized clothing suggestions.',
    tech: 'React, Node.js, Express.js, MongoDB',
    highlights: [
      'User inputs or system fetches real-time weather details',
      'Suggests outfit categories based on weather conditions (hot, cold, rainy, etc.)',
      'Designed with scope for integrating weather APIs and ML-based recommendations',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Featured Work</h2>
        </div>
        <p className="text-sm md:text-base text-slate-300 mb-12 max-w-2xl mt-4">
          Some of the work and academic projects I've been involved in. Each project showcases my skills in problem-solving, full-stack development, and applying modern technologies to real-world challenges.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              {/* Project Type Label */}
              <p className="text-xs uppercase tracking-wide text-indigo-400 font-bold mb-2">
                {project.type}
              </p>

              {/* Project Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="text-xs font-medium text-slate-400 mb-4">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 mb-6 flex-grow">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all text-sm shadow-md hover:shadow-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

