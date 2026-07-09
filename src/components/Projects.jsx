import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import content from '../data/content'
import useReveal from '../hooks/useReveal'
import Carousel from './Carousel'

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: 'var(--light-navy)',
        border: '1px solid var(--lightest-navy)',
        borderRadius: 6,
        padding: 40,
        margin: '0 10px',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FaFolder size={32} color="var(--green)" />
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--light-slate)' }} aria-label="View project">
            <FaGithub size={20} />
          </a>
        )}
      </div>

      <h3 style={{ color: 'var(--lightest-slate)', marginTop: 20 }}>{project.title}</h3>
      <p style={{ color: 'var(--slate)', flexGrow: 1 }}>{project.description}</p>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 16px',
          padding: 0,
          margin: '20px 0 0',
          listStyle: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--light-slate)',
        }}
      >
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 15, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          View project <FaExternalLinkAlt size={11} />
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="container-custom" style={{ padding: '100px 0' }}>
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
        <h2 className="numbered-heading" data-number="03.">
          Things I've Built
        </h2>

        <Carousel
          slides={content.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        />
      </div>
    </section>
  )
}
