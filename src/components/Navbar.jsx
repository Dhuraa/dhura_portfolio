import { useEffect, useRef, useState } from 'react'
import Logo from './Logo.jsx'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [shrunk, setShrunk] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [pillStyle, setPillStyle] = useState({ opacity: 0 })
  const navListRef = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const updateIndicator = () => {
      let currentId = ''
      const scrollPos = window.scrollY + 150

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentId = section.getAttribute('id')
        }
      })

      setActiveId(currentId)

      const activeLink = linkRefs.current[currentId]
      const navRect = navListRef.current?.getBoundingClientRect()

      if (activeLink && navRect) {
        const rect = activeLink.getBoundingClientRect()
        setPillStyle({
          width: `${rect.width}px`,
          left: `${rect.left - navRect.left}px`,
          opacity: 1,
        })
      } else {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      }
    }

    window.addEventListener('scroll', updateIndicator)
    window.addEventListener('resize', updateIndicator)
    const timeout = setTimeout(updateIndicator, 100)

    return () => {
      window.removeEventListener('scroll', updateIndicator)
      window.removeEventListener('resize', updateIndicator)
      clearTimeout(timeout)
    }
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    const offset = 100
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return (
    <div className="fixed top-6 inset-x-0 z-[100] flex justify-center px-4 md:px-0">
      <header
        id="main-nav"
        className={`flex items-center gap-6 md:gap-10 whitespace-nowrap backdrop-blur-xl bg-white/5 border border-white/10 rounded-full transition-all duration-300 max-w-fit mx-auto relative group ${shrunk ? 'shrunk px-4' : 'px-6 py-4'
          }`}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 text-white">
          <Logo />
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">DHURA.</h2>
        </div>

        {/* Nav Links */}
        <nav ref={navListRef} className="hidden md:flex relative items-center gap-1">
          <div
            className="nav-active-pill absolute h-10 bg-primary/20 rounded-full z-0 pointer-events-none"
            style={pillStyle}
          />
          {navLinks.map((link) => (
            <a
              key={link.id}
              ref={(el) => (linkRefs.current[link.id] = el)}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`nav-link relative z-10 px-4 py-2 text-sm font-medium leading-normal transition-colors hover:text-white ${activeId === link.id ? 'nav-item-active' : 'text-on-surface-variant'
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-2">
          <a href="https://github.com/Dhuraa" target="_blank"  rel="noopener noreferrer" aria-label="GitHub Profile">
            <button className="flex items-center justify-center rounded-full size-10 bg-white/5 hover:bg-white/10 text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                terminal
              </span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/dhuramistry" target="_blank"  rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <button className="flex items-center justify-center rounded-full size-10 bg-white/5 hover:bg-white/10 text-white transition-colors">
            <svg fill="currentColor" height="18px" viewBox="0 0 256 256" width="18px" xmlns="http://www.w3.org/2000/svg">
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
            </svg>
          </button>
          </a>
        </div>
      </header>
    </div>
  )
}
