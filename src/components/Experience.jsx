import { useState } from 'react'
import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const [ref, visible] = useReveal()
  const [active, setActive] = useState(0)
  const job = content.experience[active]

  return (
    <section id="experience" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="02.">
          Where I've Worked
        </h2>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <div
            role="tablist"
            aria-orientation="vertical"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderLeft: '2px solid var(--lightest-navy)',
              minWidth: 140,
            }}
          >
            {content.experience.map((job, i) => (
              <button
                key={job.company}
                onClick={() => setActive(i)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderLeft: active === i ? '2px solid var(--green)' : '2px solid transparent',
                  marginLeft: -2,
                  textAlign: 'left',
                  padding: '10px 20px',
                  color: active === i ? 'var(--green)' : 'var(--slate)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {job.company}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 260, padding: '10px 20px' }}>
            <h3 style={{ color: 'var(--lightest-slate)', fontSize: 22, margin: 0 }}>
              {job.title} <span style={{ color: 'var(--green)' }}>@ {job.company}</span>
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, margin: '5px 0 20px' }}>
              {job.range}
            </p>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {job.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', marginBottom: 12, color: 'var(--slate)' }}>
                  <span style={{ color: 'var(--green)', marginRight: 10 }}>▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
