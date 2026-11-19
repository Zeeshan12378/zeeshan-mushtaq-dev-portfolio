import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Where I have worked</h2>
        <p className="section-sub">3+ years, from Bahawalpur to Lahore — Laravel in production.</p>
        {experience.map((job) => (
          <article className="job" key={`${job.company}-${job.period}`}>
            <h3>
              {job.role} — {job.company}
            </h3>
            <p className="meta">
              {job.location} · {job.period}
            </p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
