import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">What I use in production</h2>
        <p className="section-sub">
          The exact stack from my resume — backend first, with frontend and DevOps to ship
          complete products.
        </p>
        <div className="grid-2">
          {skillGroups.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
