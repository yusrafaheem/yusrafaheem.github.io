import { FaGithub } from 'react-icons/fa'
import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function AdditionalProjects() {
  const [ref, visible] = useReveal()

  if (!content.additionalProjects || content.additionalProjects.items.length === 0) return null

  return (
    <section id="coursework" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="04.">
          Coursework &amp; Other Builds
        </h2>

        <p style={{ color: 'var(--slate)', maxWidth: 600, marginBottom: 30 }}>
          {content.additionalProjects.intro}
        </p>

        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'grid', gap: 20 }}>
          {content.additionalProjects.items.map((item) => (
            <li
              key={item.title}
              style={{
                display: 'flex',
                gap: 14,
                background: 'var(--light-navy)',
                border: '1px solid var(--lightest-navy)',
                borderRadius: 6,
                padding: '18px 22px',
              }}
            >
              <span style={{ color: 'var(--green)', flexShrink: 0 }}>▹</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ color: 'var(--lightest-slate)', fontSize: 17, margin: 0 }}>{item.title}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--light-slate)', display: 'inline-flex', alignItems: 'center' }}
                      aria-label={`View ${item.title} on GitHub`}
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
                <p style={{ color: 'var(--slate)', margin: '6px 0 0', fontSize: 15 }}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
