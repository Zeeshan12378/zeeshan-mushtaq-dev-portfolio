import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Featured work</h2>
        <p className="section-sub">
          Production Laravel projects from my resume — recruitment, healthcare and education.
        </p>
        <div className="grid-2">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <h3>{project.name}</h3>
              <p>
                {project.company} · {project.stack}
              </p>
              <p style={{ marginTop: 8 }}>{project.description}</p>
              <ul style={{ color: 'var(--muted)', paddingLeft: 20 }}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noreferrer">
                  Visit site ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
