const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'UI Design', 'Accessibility']

function About() {
  return (
    <section className="about-section" id="about">
      <div className="profile-card" aria-label="Profile summary">
        <div className="avatar">mma</div>
        <div className="profile-meta">
          <strong>Muhammad Muhammad Auwal</strong>
          <span>Product-focused developer</span>
        </div>
        <ul>
          <li>Available for freelance work</li>
          <li>Based in Nigeria</li>
          <li>Remote-friendly</li>
        </ul>
      </div>

      <div className="skills-section" aria-label="Skills">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
