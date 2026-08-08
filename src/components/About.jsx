 function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <span>02</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I’m a Full-Stack Developer passionate about building
            practical, scalable, and user-focused digital solutions.
          </p>

          <p>
            I work with modern frontend and backend technologies and have
            a strong interest in AI-powered applications. I enjoy turning
            real-world problems into clean, functional products.
          </p>

          <p>
            Through projects like ResumeIQ AI and EmergencyAid, I’ve
            explored full-stack development, AI integration, APIs,
            databases, and responsive user interfaces.
          </p>

          <p>
            My goal is to grow as a software engineer, solve challenging
            problems, and contribute to impactful products in a
            technology-driven organization.
          </p>

          <div className="about-stats">
            <div>
              <strong>2</strong>
              <span>Major Projects</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>Focused Development</span>
            </div>

            <div>
              <strong>Full-Stack</strong>
              <span>Development</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <div className="about-card-glow"></div>

          <div className="about-card-content">
            <span>What I build</span>

            <h3>
              Intelligent &amp;
              <br />
              real-world applications.
            </h3>

            <p>
              Combining modern UI, full-stack engineering, and AI
              capabilities to create useful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;