import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-role">
            {profile.role} | {profile.stack}
          </p>
          <h1>
            I build fast, secure SaaS backends with <span className="accent">Laravel</span> — APIs
            tuned 30% faster.
          </h1>
          <p className="lead">
            Backend Engineer in {profile.location} with 3+ years building scalable PHP &amp;
            Laravel applications for recruitment, healthcare and education — multi-role systems,
            RBAC, Stripe billing and real-time features.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href={profile.resume} download>
              Download CV
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <div className="gyro">
            <div className="gyro-ring" />
            <div className="gyro-ring" />
            <div className="gyro-ring" />
            <div className="gyro-core" />
            <span className="gyro-node n1" />
            <span className="gyro-node n2" />
            <span className="gyro-node n3" />
          </div>
          <div className="code-card">
            <div>
              <span className="k">Route</span>::get(<span className="s">'/api/jobs'</span>, [
              <span className="k">JobController</span>::class, <span className="s">'index'</span>
              ]);
            </div>
            <div>
              <span className="c">// 30% faster — optimized queries</span>
            </div>
            <div>
              <span className="k">Stripe</span>::subscription(<span className="s">'Pro'</span>);
            </div>
            <div>
              <span className="k">Reverb</span>::broadcast(<span className="s">'job.matched'</span>);
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
