import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name} — {profile.role} | {profile.stack}
        </span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{' '}
          ·{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={profile.resume} download>
            Download CV
          </a>
        </span>
      </div>
    </footer>
  )
}
