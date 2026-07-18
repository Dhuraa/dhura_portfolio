import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-160px)] flex items-center mb-24" id="home">
      <div className="grid grid-cols-1 gap-12 w-full items-center lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Column: Content */}
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-label-mono text-xs font-bold uppercase tracking-widest">
                4+ Years Experience
              </span>
            </div>
            <h1 className="text-white text-7xl md:text-8xl font-display-xl tracking-tighter leading-[0.9] font-black max-w-none">
              Dhura.
              <br />
              <span className="text-primary">Full Stack</span>
              <br />
              Developer.
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl font-body-lg max-w-lg leading-relaxed">
              I build modern, scalable, and high-performance web applications using Angular, React, Java, and Node.js, transforming complex business requirements into intuitive user experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a
              href="/DhuraMistry_Resume.pdf"
              download="DhuraMistry_Resume.pdf"
              className="inline-flex items-center justify-center px-10 h-16 bg-primary text-on-primary-container rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(192,193,255,0.4)] hover:scale-105 transition-all"
            >
              Download Resume
            </a>
            <a href="#contact"
              className="inline-flex items-center justify-center px-10 h-16 border-2 border-outline-variant text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-all">
              Get in Touch
            </a>
          </div>
          <div className="flex items-center gap-8 text-on-surface-variant/60">
            <a className="hover:text-primary transition-colors flex items-center gap-2 group" href="https://github.com/Dhuraa" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                code
              </span>
              <span className="text-xs font-label-mono tracking-widest uppercase">Github</span>
            </a>
            <a className="hover:text-primary transition-colors flex items-center gap-2 group" href="https://www.linkedin.com/in/dhuramistry" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                link
              </span>
              <span className="text-xs font-label-mono tracking-widest uppercase">Linkedin</span>
            </a>
            <a className="hover:text-primary transition-colors flex items-center gap-2 group" href="mailto:dhuramist@gmail.com" aria-label="Email">
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                mail
              </span>
              <span className="text-xs font-label-mono tracking-widest uppercase">Email</span>
            </a>
          </div>
        </Reveal>

        {/* Right Column: Ambient glow */}
        <Reveal className="lg:flex justify-center items-center h-[600px] relative"delay="0.15s">
  
          <img
            src="/images/memoji.png"
            alt="Dhura Mistry"/>

        </Reveal>
      </div>
    </section>
  )
}
