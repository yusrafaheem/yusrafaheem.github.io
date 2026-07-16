import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="01.">
          About Me
        </h2>

        <div style={{ display: 'flex', gap: 50, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '2 1 400px', color: 'var(--slate)', fontSize: 17 }}>
            {content.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                gap: '0 10px',
                padding: 0,
                margin: '20px 0 0',
                overflow: 'hidden',
              }}
            >
              {content.about.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    listStyle: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    marginBottom: 10,
                    color: 'var(--slate)',
                  }}
                >
                  <span style={{ color: 'var(--green)', marginRight: 8 }}>▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              flex: '1 1 300px',
              maxWidth: 360,
              margin: '0 auto',
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                minWidth: 110,
                maxWidth: 160,
                aspectRatio: '1 / 1',
                borderRadius: 4,
                border: '2px solid var(--green)',
                background:
                  'linear-gradient(rgba(100,255,218,0.1), rgba(100,255,218,0.1)), var(--light-navy)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: 40,
                color: 'var(--green)',
              }}
            >
              {content.initials}
            </div>

            <div
              style={{
                flex: '1 1 0',
                minWidth: 110,
                maxWidth: 160,
                aspectRatio: '1 / 1',
                borderRadius: 4,
                border: '2px solid var(--green)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/yusra-photo-square.jpg"
                alt="Yusra Faheem"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
