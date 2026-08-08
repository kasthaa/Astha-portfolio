 function Journey() {
  return (
    <section id="journey" className="journey-section">
      <div className="section-heading">
        <span>05</span>
        <h2>My Journey</h2>
      </div>

      <div className="journey-content">

        {/* 01 — Education */}
        <div className="journey-item">
          <span className="journey-year">2023 — Present</span>

          <h3>Computer Science and Engineering</h3>

          <p>
            Building strong foundations in software development,
            full-stack web development, AI, and problem solving.
          </p>
        </div>

        {/* 02 — Full-Stack & AI */}
        <div className="journey-item">
          <span className="journey-year">Present</span>

          <h3>Full-Stack & AI Development</h3>

          <p>
            Developing real-world applications using modern
            technologies and focusing on practical problem solving.
          </p>
        </div>

        {/* 03 — DSA & LeetCode */}
        <div className="journey-item">
          <span className="journey-year">Present </span>

          <h3>DSA, Problem Solving & Competitive Programming</h3>

          <p>
            Learning Data Structures and Algorithms through
            Striver&apos;s series and consistently practicing
            LeetCode problems. Achieved
            <strong> Knight level on LeetCode</strong> through
            regular problem-solving practice.
          </p>
        </div>

        {/* 04 — AI & Projects */}
        <div className="journey-item">
          <span className="journey-year">Present </span>

          <h3>AI Innovation & Real-World Projects</h3>

          <p>
            Building unique and practical projects to solve
            real-world problems while continuously exploring
            new AI technologies and integrating intelligent
            features into applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Journey;