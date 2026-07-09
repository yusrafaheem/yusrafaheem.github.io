import content from '../data/content'

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 50px',
      }}
    >
      <p style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 16, margin: '0 0 20px' }}>
        Hi, my name is
      </p>
      <h1
        style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          color: 'var(--lightest-slate)',
          margin: 0,
          lineHeight: 1.1,
          fontWeight: 700,
        }}
      >
        {content.name}.
      </h1>
      <h2
        style={{
          fontSize: 'clamp(30px, 7vw, 70px)',
          color: 'var(--slate)',
          margin: '10px 0 0',
          lineHeight: 1.1,
          fontWeight: 700,
        }}
      >
        {content.tagline}
      </h2>
      <p style={{ maxWidth: 540, marginTop: 20, fontSize: 20, color: 'var(--slate)' }}>
        {content.role ? `I'm a ${content.role.toLowerCase()}. ` : ''}
        Take a look around — currently open to new opportunities and collaborations.
      </p>
      <a href="#projects" className="btn-outline-green" style={{ marginTop: 40, width: 'fit-content' }}>
        Check out my work
      </a>
    </section>
  )
}
