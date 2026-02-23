export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="title">About Me</h2>
        <p className="subtitle">
          I enjoy building real-world web apps: clean UI, responsive layout, and
          strong basics. I&apos;m improving communication skills and learning industry
          workflows. I&apos;m open to internships or full-time fresher roles.
        </p>

        <div className="grid two-col mt16">
          <div className="card">
            <h3 className="h3">What I do</h3>
            <ul className="list">
              <li>
                <span className="tick" />
                <div>
                  <b>Responsive Websites</b>
                  <div className="muted">
                    Flexbox, Grid, media queries, mobile-first layouts.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Frontend Components</b>
                  <div className="muted">
                    React components, forms, cards, animations, reusable sections.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Backend APIs</b>
                  <div className="muted">
                    Node/Express APIs, CRUD operations, MongoDB integration.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Version Control</b>
                  <div className="muted">
                    Git, GitHub, branches, commits, deployment basics.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">Strengths</h3>
            <ul className="list">
              <li>
                <span className="tick" />
                <div>
                  <b>Good basics</b>
                  <div className="muted">
                    HTML/CSS/JS fundamentals + problem-solving mindset.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Learning fast</b>
                  <div className="muted">
                    I practice daily and build projects to improve skills.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Team-ready</b>
                  <div className="muted">
                    I can take tasks, share updates, and follow coding standards.
                  </div>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>Communication improvement</b>
                  <div className="muted">
                    Actively practicing English and clear explanations.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

