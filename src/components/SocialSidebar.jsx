import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa'
import content from '../data/content'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  twitter: FaTwitter,
  instagram: FaInstagram,
}

function SideRail({ side, children }) {
  return (
    <div
      className="d-none d-lg-flex"
      style={{
        position: 'fixed',
        bottom: 0,
        [side]: 40,
        zIndex: 90,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {children}
      <div style={{ width: 1, height: 90, background: 'var(--light-slate)' }} />
    </div>
  )
}

export default function SocialSidebar() {
  return (
    <>
      <SideRail side="left">
        {content.social.map(({ name, url, icon }) => {
          const Icon = iconMap[icon] || FaEnvelope
          return (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} style={{ color: 'var(--light-slate)' }}>
              <Icon size={20} />
            </a>
          )
        })}
      </SideRail>

      <div
        className="d-none d-lg-flex"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 40,
          zIndex: 90,
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <a
          href={`mailto:${content.email}`}
          style={{
            color: 'var(--light-slate)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            writingMode: 'vertical-rl',
            letterSpacing: '0.1em',
          }}
        >
          {content.email}
        </a>
        <div style={{ width: 1, height: 90, background: 'var(--light-slate)' }} />
      </div>
    </>
  )
}
