import { achievements } from '../data.js'

export default function Achievements() {
  return (
    <section className="py-24 border-y border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {achievements.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <span className="text-primary text-5xl font-display-xl">{item.value}</span>
            <span className="text-on-surface-variant font-label-mono text-xs uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
