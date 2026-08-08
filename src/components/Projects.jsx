 function Projects() {
  const projects = [
    {
      title: "ResumeIQ AI",
      type: "AI / Full Stack",
      description:
        "AI-powered resume analyzer that evaluates ATS compatibility, matches resumes with job descriptions, generates intelligent feedback, rewrites resume content, and creates interview questions.",
      tech: "Next.js • FastAPI • Python • OpenRouter • Supabase",
      github: "https://github.com/kasthaa/ResumeIQ-AI.git",
      demo: "https://resume-iq-ai-dzcw.vercel.app/",
    },
    {
      title: "EmergencyAid",
      type: "Full Stack",
      description:
        "Emergency assistance platform that allows users to submit emergency requests and discover nearby hospitals, clinics, blood banks, and other essential resources.",
      tech: "Next.js • React • TypeScript • Supabase",
      github: "git remote add origin https://github.com/kasthaa/emergencyAid.git",
      demo: "https://emergency-540c9adpg-astha13.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <span>03</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-intro">
        <h3>My Featured Projects</h3>
        <p>
          I build full-stack and AI-powered applications focused on solving
          real-world problems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <span className="project-number">
              0{index + 1}
            </span>

            <span className="project-type">
              {project.type}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗️
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗️
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;