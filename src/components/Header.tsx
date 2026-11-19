import { useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo">
          Zeeshan<span>.</span>
        </a>
        <button
          className="burger"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn header-cta" href={profile.resume} download>
          Download CV
        </a>
      </div>
    </header>
  )
}
