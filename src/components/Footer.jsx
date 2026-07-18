import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-outline-variant py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4 text-white">
        <Logo className="size-4" />
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">DHURA.</h2>
      </div>
      <p className="text-on-surface-variant text-sm font-label-mono uppercase tracking-wider">
        © {new Date().getFullYear()} Designed &amp; Built by Dhura Mistry.
      </p>
      {/* <div className="flex gap-6">
        <a className="text-on-surface-variant hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
        <a className="text-on-surface-variant hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">link</span>
        </a>
        <a className="text-on-surface-variant hover:text-white transition-colors" href="#">
          <span className="material-symbols-outlined">code</span>
        </a>
      </div> */}
    </footer>
  )
}
