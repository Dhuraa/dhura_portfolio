import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <h2 className="text-primary font-label-mono text-sm tracking-widest uppercase mb-12 text-center">
        Core Competencies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="glass p-8 rounded-2xl flex flex-col gap-6 hover:border-primary/50 transition-all group"
          >
            <span className={`material-symbols-outlined text-4xl ${skill.iconColor} group-hover:scale-110 transition-transform`}>
              {skill.icon}
            </span>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{skill.title}</h4>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
