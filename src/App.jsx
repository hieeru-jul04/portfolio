import './App.css'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Section from './components/sections/Section'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className='w-full min-h-screen bg-[#010814]'>
      <Header />
      <div className='px-4 sm:px-8 md:px-16'>
        <Section />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
