import { Link } from 'react-router-dom'
import profilePicture from '../assets/profile-picture.png'

function Home() {
  return (
    <header className="hero-section" id="home">
      <section className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Frontend developer</p>
          <h1>Building clean, modern experiences.</h1>
          <p className="intro">
            I design and build responsive digital products that combine thoughtful UX with reliable engineering.
          </p>
          <div className="cta-row">
            <Link className="primary-btn" to="/projects">View work</Link>
            <Link className="secondary-btn" to="/contact">Let&apos;s talk</Link>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <img className="hero-portrait" src={profilePicture} alt="Portrait of Muhammad Muhammad Auwal" />
        </div>
      </section>
    </header>
  )
}

export default Home
