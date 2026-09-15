'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, OrbitControls, Sparkles, Text } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const tracks = [
  { number: '01', title: 'Machine intelligence', copy: 'Build the systems that think, move, and shape what comes next.', color: '#77f7e8' },
  { number: '02', title: 'Orbital futures', copy: 'Push past the known with missions, makers, and impossible ideas.', color: '#b99cff' },
  { number: '03', title: 'Planet protocol', copy: 'Engineer a resilient future through bold, planet-first invention.', color: '#ddff76' },
]

function Core() {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.42 + state.clock.elapsedTime * 0.08, 0.04)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.55 + state.clock.elapsedTime * 0.12, 0.04)
  })
  return (
    <group ref={group}>
      <mesh rotation={[0.2, 0.4, 0]}>
        <icosahedronGeometry args={[1.48, 1]} />
        <MeshTransmissionMaterial backside thickness={0.4} roughness={0.12} transmission={0.92} chromaticAberration={0.18} anisotropy={0.35} color="#b8fff7" />
      </mesh>
      <mesh scale={0.56}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial wireframe color="#77f7e8" transparent opacity={0.8} />
      </mesh>
      <mesh scale={0.27}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#b99cff" />
      </mesh>
      {[0, 1, 2].map((i) => <mesh key={i} rotation={[i * 1.1, i * 0.7, i * 0.3]} scale={1.9 + i * 0.36}><torusGeometry args={[1, 0.006, 8, 100]} /><meshBasicMaterial color={i === 1 ? '#ddff76' : '#77f7e8'} transparent opacity={0.45 - i * 0.07} /></mesh>)}
    </group>
  )
}

function Scene({ active }: { active: number }) {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, active * -0.12, 0.04)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, active * 0.18, 0.04)
    group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, 1 - active * 0.04, 0.04))
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5.7 + active * 0.35, 0.04)
  })
  return <group ref={group}><Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.4}><Core /></Float><Sparkles count={90} scale={9} size={1.5} speed={0.25} color="#77f7e8" /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} /></group>
}

function ThreeVisual({ active }: { active: number }) {
  return <div className="three-visual" aria-label="Interactive 3D energy core"><Canvas camera={{ position: [0, 0, 5.7], fov: 38 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}><color attach="background" args={['#090b0f']} /><ambientLight intensity={1.5} /><pointLight position={[3, 3, 4]} intensity={18} color="#77f7e8" /><pointLight position={[-3, -2, 2]} intensity={11} color="#9e86ff" /><Scene active={active} /></Canvas><div className="scene-hud"><span>CORE / 026</span><b>DRAG TO ROTATE</b></div><div className="scene-coordinates">19° 08&apos; N<br />72° 54&apos; E</div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const onScroll = () => setActive(Math.min(2, Math.floor(window.scrollY / Math.max(window.innerHeight * 0.85, 1))))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <main className="site-shell">
    <div className="noise" aria-hidden="true" />
    <nav className="nav wrap" aria-label="Primary navigation"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>TECHFEST<span className="brand-year">/26</span></span></a><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">Toggle navigation</span><i /><i /><i /></button><div id="nav-links" className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#tracks" onClick={() => setMenuOpen(false)}>Tracks</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="nav-cta" href="#register" onClick={() => setMenuOpen(false)}>Register <span>↗</span></a></div></nav>
    <section id="top" className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> IIT Bombay presents <b>///</b> 29th edition</div><h1>Enter the<br /><em>unknown.</em></h1><p className="hero-intro">Techfest 2026 is a living laboratory for the people who refuse to accept the limits of tomorrow.</p><div className="hero-actions"><a className="button button-primary" href="#register">Enter Techfest <span>↗</span></a><a className="button button-ghost" href="#tracks">Scroll to explore <span>↓</span></a></div><div className="hero-meta"><span><b>19—21</b> DEC 2026</span><span className="meta-line" /><span>IIT BOMBAY <b>·</b> MUMBAI</span></div></div><ThreeVisual active={active} /></section>
    <section className="signal-strip"><div className="wrap signal-inner"><span>/// THE FUTURE IS A TEAM SPORT</span><span className="signal-rule" /><span className="signal-status">SIGNAL: <b>STRONG</b> <i /></span></div></section>
    <section id="experience" className="stats-section wrap"><div className="section-kicker">01 <span /> A collective intelligence</div><div className="stats-grid">{[['100K+', 'attendees'], ['250+', 'events'], ['30+', 'countries'], ['01', 'campus']].map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section id="tracks" className="tracks-section wrap"><div className="section-heading"><div><div className="section-kicker">02 <span /> Choose your trajectory</div><h2>Three ways<br /><em>forward.</em></h2></div><p>Move through a constellation of challenges, collisions, and conversations built for the next generation.</p></div><div className="tracks-grid">{tracks.map((track, index) => <article className={`track-card ${active === index ? 'is-active' : ''}`} style={{ '--track-color': track.color } as React.CSSProperties} key={track.number} onMouseEnter={() => setActive(index)}><div className="track-top"><span>{track.number}</span><span>OPEN MODULE ↗</span></div><div><h3>{track.title}</h3><p>{track.copy}</p></div><div className="track-scan"><span /><span /><span /></div></article>)}</div></section>
    <section id="about" className="manifesto wrap"><div className="manifesto-line" /><div><div className="section-kicker">03 <span /> The signal</div><blockquote>“The future isn&apos;t something we enter.<br /><em>It&apos;s something we build.</em>”</blockquote><p className="signature">— TECHFEST, IIT BOMBAY</p></div><div className="manifesto-code">TF_26<br />BUILD<br />BEYOND<br />LIMITS</div></section>
    <section id="register" className="register wrap"><div className="register-orbit" /><div className="section-kicker">04 <span /> Your next move</div><h2>Plug into<br /><em>the future.</em></h2><a className="button button-primary" href="mailto:register@techfest.org">Register your interest <span>↗</span></a><p>Registration opens soon. Be first in line.</p></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>TECHFEST<span className="brand-year">/26</span></span></a><span>© 2026 IIT BOMBAY TECHFEST</span><span>BUILT FOR TOMORROW <b>↗</b></span></footer>
  </main>
}
