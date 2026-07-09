import { useEffect, useState } from 'react'
import content from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#top"
        style={{
          color: 'var(--green)',
          fontFamily: 'var(--font-mono)',
          fontSize: 24,
          fontWeight: 700,
          border: '1px solid var(--green)',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {content.initials}
      </a>

      <nav style={{ marginLeft: 'auto', display: 'flex', gap: 30 }} className="d-none d-md-flex">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--lightest-slate)',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
            }}
          >
            <span style={{ color: 'var(--green)' }}>0{i + 1}.</span> {link.label}
          </a>
        ))}
        {content.resumeUrl && (
          <a href={content.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline-green">
            Resume
          </a>
        )}
      </nav>
    </header>
  )
}
