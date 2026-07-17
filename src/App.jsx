import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-[#0e0e0e] dark overflow-x-hidden"
      style={{ fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif" }}
    >
      <Navbar />
      <div className="layout-container relative z-10 flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5 mt-20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
