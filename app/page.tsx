'use client'

import { useState } from 'react'

const events = [
  { number: '01', title: 'AI & Robotics', copy: 'Build the systems that think, move, and shape what comes next.', accent: 'cyan' },
  { number: '02', title: 'Space & Beyond', copy: 'Push past the known with missions, makers, and orbital ideas.', accent: 'violet' },
  { number: '03', title: 'Climate Tech', copy: 'Engineer a resilient future through bold, planet-first invention.', accent: 'lime' },
]

const stats = [
  ['100K+', 'attendees'],
  ['250+', 'events'],
  ['30+', 'countries'],
  ['01', 'campus'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="nav wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Techfest 2026 home">
          <span className="brand-mark"><span /></span>
          <span>TECHFEST<span className="brand-year">/26</span></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle navigation</span>
          <i /><i /><i />
        </button>
        <div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>The experience</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Techfest</a>
          <a className="nav-cta" href="#register" onClick={() => setMenuOpen(false)}>Register <span>↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> IIT Bombay presents <b>///</b> 29th edition</div>
          <h1>Humanity<br /><em>upgraded.</em></h1>
          <p className="hero-intro">Where the brightest minds converge to decode tomorrow. A three-day collision of ideas, technology, and the human spirit.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#register">Enter Techfest <span>↗</span></a>
            <a className="button button-ghost" href="#events">Explore the grid <span>↓</span></a>
          </div>
          <div className="hero-meta"><span><b>19—21</b> DEC 2026</span><span className="meta-line" /><span>IIT BOMBAY <b>·</b> MUMBAI</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract cyborg eye illustration" role="img">
          <div className="visual-label label-top">SYS.ID / TF26.001 <b>● ONLINE</b></div>
          <div className="orbital orbital-one" /><div className="orbital orbital-two" /><div className="orbital orbital-three" />
          <div className="cyborg-eye"><div className="eye-core"><span /></div></div>
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          <div className="visual-label label-bottom">LAT 19.1334° N<br />LON 72.9133° E</div>
          <div className="side-code">10 01 10 01 11 00 10 01</div>
        </div>
      </section>

      <section className="signal-strip"><div className="wrap signal-inner"><span>/// THE FUTURE IS A TEAM SPORT</span><span className="signal-rule" /><span className="signal-status">SIGNAL: <b>STRONG</b> <i /></span></div></section>

      <section id="experience" className="stats-section wrap">
        <div className="section-kicker">01 <span /> A collective intelligence</div>
        <div className="stats-grid">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section id="events" className="events-section wrap">
        <div className="section-heading"><div><div className="section-kicker">02 <span /> Explore the unknown</div><h2>Choose your<br /><em>interface.</em></h2></div><p>Not just a fest. A live operating system for the next generation of builders, thinkers, and dreamers.</p></div>
        <div className="events-grid">{events.map((event) => <article className={`event-card ${event.accent}`} key={event.number}><div className="event-top"><span>{event.number}</span><span>OPEN MODULE ↗</span></div><div><h3>{event.title}</h3><p>{event.copy}</p></div><div className="event-arrow">↗</div></article>)}</div>
      </section>

      <section id="about" className="manifesto wrap"><div className="manifesto-line" /><div><div className="section-kicker">03 <span /> The signal</div><blockquote>“The future isn&apos;t something we enter.<br /><em>It&apos;s something we build.</em>”</blockquote><p className="signature">— TECHFEST, IIT BOMBAY</p></div><div className="manifesto-code">TF_26<br />BUILD<br />BEYOND<br />LIMITS</div></section>

      <section id="register" className="register wrap"><div className="register-orbit" /><div className="section-kicker">04 <span /> Your next move</div><h2>Plug into<br /><em>the future.</em></h2><a className="button button-primary" href="mailto:register@techfest.org">Register your interest <span>↗</span></a><p>Registration opens soon. Be first in line.</p></section>

      <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>TECHFEST<span className="brand-year">/26</span></span></a><span>© 2026 IIT BOMBAY TECHFEST</span><span>BUILT FOR TOMORROW <b>↗</b></span></footer>
    </main>
  )
}
