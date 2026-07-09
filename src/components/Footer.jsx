import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import content from '../data/content'

const iconMap = { github: FaGithub, linkedin: FaLinkedin, email: FaEnvelope }

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '30px 0', color: 'var(--slate)' }}>
      <div className="d-flex d-lg-none justify-content-center gap-3 mb-3">
        {content.social.map(({ name, url, icon }) => {
          const Icon = iconMap[icon] || FaEnvelope
          return (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} style={{ color: 'var(--light-slate)' }}>
              <Icon size={20} />
            </a>
          )
        })}
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, margin: 0 }}>
        Built by {content.name} with React &amp; Vite.
      </p>
    </footer>
  )
}
