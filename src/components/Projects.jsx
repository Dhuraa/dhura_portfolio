import { projects } from '../data.js'

const tagColorMap = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
}

export default function Projects() {
  return (
    <section className="py-24" id="projects">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-primary font-label-mono text-sm tracking-widest uppercase mb-4">Works</h2>
          <h3 className="text-white text-4xl font-display-xl">Selected Projects</h3>
        </div>
        <a className="text-on-surface-variant hover:text-white transition-colors flex items-center gap-2" href="#">
          <span>VIEW ALL</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline-variant hover:border-primary/30 transition-all duration-500"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                alt={project.alt}
                src={project.image}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">Live Demo</button>
                <button className="bg-black/80 text-white px-4 py-2 rounded-lg font-bold text-sm">Code</button>
              </div>
            </div>
            <div className="p-8">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${tagColorMap[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
              <p className="text-on-surface-variant text-sm mb-6">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
