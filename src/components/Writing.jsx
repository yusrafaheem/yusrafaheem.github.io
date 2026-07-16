import { FaMedium, FaExternalLinkAlt } from 'react-icons/fa'
import content from '../data/content'
import useReveal from '../hooks/useReveal'

function WritingCard({ post }) {
  return (
    <div
      style={{
        background: 'var(--light-navy)',
        border: '1px solid var(--lightest-navy)',
        borderRadius: 6,
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FaMedium size={28} color="var(--green)" />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--slate)',
          }}
        >
          {post.outlet} · {post.date}
        </span>
      </div>

      <h3 style={{ color: 'var(--lightest-slate)', margin: '10px 0 0' }}>{post.title}</h3>
      <p style={{ color: 'var(--slate)', flexGrow: 1 }}>{post.excerpt}</p>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 10 }}>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          Read on {post.outlet} <FaExternalLinkAlt size={11} />
        </a>
        {post.secondaryLink && (
          <a
            href={post.secondaryLink.url}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--slate)' }}
          >
            {post.secondaryLink.label} <FaExternalLinkAlt size={11} />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Writing() {
  const [ref, visible] = useReveal()

  if (!content.writing || content.writing.length === 0) return null

  return (
    <section id="writing" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="06.">
          Writing &amp; Research
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30,
          }}
        >
          {content.writing.map((post) => (
            <WritingCard key={post.title} post={post} />
          ))}
        </div>

        <p style={{ marginTop: 30 }}>
          <a
            href={content.social.find((s) => s.name === 'Medium')?.url}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-green"
          >
            More on Medium
          </a>
        </p>
      </div>
    </section>
  )
}
