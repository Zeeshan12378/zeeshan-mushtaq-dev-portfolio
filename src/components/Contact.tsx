import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let us build something</h2>
        <p className="section-sub">
          Open to Backend Developer roles in Lahore — on-site, hybrid or remote.
        </p>
        <div className="contact-cards">
          <div className="card contact-card">
            <small>Email</small>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="card contact-card">
            <small>Phone</small>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
          <div className="card contact-card">
            <small>LinkedIn</small>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/zeeshan-mushtaq-dev
            </a>
          </div>
          <div className="card contact-card">
            <small>GitHub</small>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/Zeeshan12378
            </a>
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="btn" href={profile.resume} download>
            Download CV
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}
