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
            I am a dedicated Full Stack Developer with 4 years of hands-on experience in building complex digital
            products. My journey started with a fascination for how data travels from a server to a beautiful user
            interface.
          </p>
          <p className="text-on-surface-variant text-xl leading-relaxed">
            I specialize in Angular and React for the frontend, ensuring every interaction feels fluid and
            responsive. On the backend, I leverage the power of Java and Spring Boot to create robust,
            enterprise-grade architectures that scale.
          </p>
        </div>
      </div>
    </section>
  )
}
