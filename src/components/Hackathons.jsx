import { FaTrophy } from 'react-icons/fa'
import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Hackathons() {
  const [ref, visible] = useReveal()

  if (!content.hackathons) return null

  return (
    <section id="hackathons" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="05.">
          Hackathons
        </h2>

        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center',
            background: 'var(--light-navy)',
            border: '1px solid var(--lightest-navy)',
            borderRadius: 6,
            padding: '30px 36px',
          }}
        >
          <FaTrophy size={40} color="var(--green)" style={{ flexShrink: 0 }} />
          <div>
            <h3 style={{ color: 'var(--lightest-slate)', margin: '0 0 8px', fontSize: 20 }}>
              {content.hackathons.stat}
            </h3>
            <p style={{ color: 'var(--slate)', margin: 0, maxWidth: 560 }}>{content.hackathons.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
