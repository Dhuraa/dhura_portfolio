export default function About() {
  return (
    <section className="py-24 border-t border-outline-variant" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-primary font-label-mono text-sm tracking-widest uppercase mb-4">The Story</h2>
          <h3 className="text-white text-4xl font-display-xl leading-tight">
            Bridging logic
            <br />
            with aesthetics.
          </h3>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <p className="text-on-surface-variant text-xl leading-relaxed">
            I'm a Full Stack Software Engineer with 4 years of experience building enterprise applications for the banking and fintech industries. I specialize in frontend development with Angular and React while also developing scalable backend services using Java Spring Boot and Node.js.
          </p>

          <p className="text-on-surface-variant text-xl leading-relaxed">
            Throughout my career, I've delivered production-ready features including CRM modules, authentication systems, reporting dashboards, REST APIs, cloud integrations, and performance optimizations. I enjoy solving complex problems, writing clean and maintainable code, and building applications that provide exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
