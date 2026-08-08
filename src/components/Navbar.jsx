 function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <span>A</span> Astha.
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <a
          href="https://github.com/kasthaa"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/astha-kumari-324350298"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
         className="resume-btn">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;