import './App.css'
import FloatingNav from './components/shared/FloatingNav'
import Footer from './components/shared/Footer'
import Section from './components/sections/Section'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import CaseStudies from './components/sections/CaseStudies'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className='app-container'>
      <FloatingNav />
      <main>
        <Section />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
