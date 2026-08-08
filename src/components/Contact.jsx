 function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.open(
  `https://mail.google.com/mail/?view=cm&fs=1&to=kastha664@gmail.com&su=${subject}&body=${body}`,
  "_blank"
)
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <span>06</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-content">
        <div className="contact-intro">
          <h3>Let&apos;s Build Something Meaningful</h3>

          <p>
            I&apos;m always interested in discussing new opportunities,
            innovative ideas, AI-powered applications, and challenging
            software engineering problems.
          </p>

          <div className="contact-links">
            <a href="mailto: kastha664@gmail.com">
              Email
            </a>

            <a
              href=" https://github.com/kasthaa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href=" https://www.linkedin.com/in/astha-kumari-324350298"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your opportunity or idea..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-button">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;