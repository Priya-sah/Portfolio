import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Extracurriculars from './components/Extracurriculars'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Extracurriculars />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
