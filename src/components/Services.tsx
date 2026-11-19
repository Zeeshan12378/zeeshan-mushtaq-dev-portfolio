import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">What I can do for you</h2>
        <p className="section-sub">
          Production Laravel work — from the first API to Stripe billing and real-time features.
        </p>
        <div className="grid-3">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="chips">
                {service.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
