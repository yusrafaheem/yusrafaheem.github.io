import content from '../data/content'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="contact"
      className="container-custom"
      style={{ padding: '100px 0', textAlign: 'center', maxWidth: 600 }}
    >
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p style={{ color: 'var(--green)', fontFamily: 'var(--font-mono)', fontSize: 16 }}>04. What's Next?</p>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--lightest-slate)', margin: '0 0 20px' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--slate)', marginBottom: 40 }}>
          I'm currently open to new opportunities. Whether you have a question or just want to say
          hi, my inbox is always open — I'll try my best to get back to you!
        </p>
        <a href={`mailto:${content.email}`} className="btn-outline-green">
          Say Hello
        </a>
      </div>
    </section>
  )
}
