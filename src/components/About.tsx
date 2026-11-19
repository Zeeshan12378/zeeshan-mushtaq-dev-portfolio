import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="section-kicker">About</p>
        <h2 className="section-title">Backend first. Full-stack when it counts.</h2>
        <p className="section-sub">{profile.summary}</p>
        <div className="grid-2">
          <div className="card">
            <h3>What I do</h3>
            <p>
              Scalable PHP &amp; Laravel applications — multi-role systems, RBAC, REST APIs,
              AI-powered features, Stripe subscription billing and real-time notifications.
            </p>
          </div>
          <div className="card">
            <h3>Where I work</h3>
            <p>
              Backend Engineer at Acrosoft, {profile.location}. Production Laravel on Ubuntu
              with Nginx, Redis and Supervisor — queues, scheduled jobs and email delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
