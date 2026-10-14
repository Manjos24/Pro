import portfolioPlatform from '../assets/portfolio.png'
import tokoAcademyWebsite from '../assets/toko-website.png'
import personalCard from '../assets/personal-card.png'

const projects = [
  {
    title: 'Portfolio Platform',
    image: portfolioPlatform,
    description: 'A polished personal site built to highlight projects, experience, and creative work.',
    tech: 'HTML · CSS',
  },
  {
    title: 'Toko Academy Website',
    image: tokoAcademyWebsite,
    description: 'A recreation of the Toko Academy website, built to match its design and browsing experience.',
    tech: 'React · JavaScript',
  },
  {
    title: 'Personal Card',
    image: personalCard,
    description: 'A personal card project built to present my details with a clean, focused design.',
    tech: 'React · JavaScript',
  },
]

function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Recent projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
