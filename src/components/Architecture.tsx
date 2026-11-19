import { architecture, architecturePrinciples } from '../data/portfolio'

export default function Architecture() {
  return (
    <section id="architecture">
      <div className="wrap">
        <p className="section-kicker">Architecture</p>
        <h2 className="section-title">How I design systems</h2>
        <p className="section-sub">
          SaaS, backend, AI-powered, real-time, REST API and payments — the patterns I use in
          production.
        </p>
        <div className="grid-3">
          {architecture.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flow">
                {item.flow.map((step, i) => (
                  <span key={step}>
                    <b>{step}</b>
                    {i < item.flow.length - 1 ? ' → ' : ''}
                  </span>
                ))}
              </div>
              <div className="chips">
                {item.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <h3 style={{ marginTop: 32 }}>Principles</h3>
        <div className="grid-4">
          {architecturePrinciples.map((principle) => (
            <div className="card" key={principle}>
              <p style={{ color: 'var(--text)' }}>{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
