import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Interests() {
  const [ref, visible] = useReveal()
  const pubg = content.interests?.pubg

  if (!pubg) return null

  return (
    <section id="interests" className="container-custom" style={{ padding: '60px 0 100px' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: 'var(--green)',
            marginBottom: 10,
          }}
        >
          Outside of Code
        </p>

        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'center',
            background: 'var(--light-navy)',
            border: '1px solid var(--lightest-navy)',
            borderRadius: 6,
            padding: '24px 30px',
          }}
        >
          {pubg.image && (
            <img
              src={pubg.image}
              alt="PUBG Mobile gameplay"
              style={{ width: 220, maxWidth: '100%', borderRadius: 6, display: 'block' }}
            />
          )}
          <div>
            <p style={{ color: 'var(--slate)', margin: 0, maxWidth: 520 }}>{pubg.description}</p>
            <p style={{ color: 'var(--light-slate)', margin: '10px 0 0', fontFamily: 'var(--font-mono)', fontSize: 14 }}>
              Add me: <span style={{ color: 'var(--green)' }}>{pubg.username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
