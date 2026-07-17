import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <h2 className="text-primary font-label-mono text-sm tracking-widest uppercase mb-12">Professional Journey</h2>
      <div className="relative pl-12 flex flex-col gap-16 timeline-line">
        {experience.map((item) => (
          <Reveal key={item.role} className="relative">
            <div
              className={`absolute -left-[54px] top-1 size-3 rounded-full ${
                item.active ? 'bg-primary ring-8 ring-primary/20' : 'bg-outline-variant'
              }`}
            />
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <div className="min-w-[120px]">
                <span
                  className={`font-label-mono ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {item.period}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-2xl font-bold">{item.role}</h4>
                <p className="text-on-surface-variant mb-4">{item.company}</p>
                <ul className="text-on-surface-variant list-disc list-inside flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
