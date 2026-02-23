export default function HeroSection({ myEmail, onNavClick }) {
  return (
    <main id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <section className="card">
            <span className="pill">
              <span className="pill-dot" />
              Full Stack Developer at Leometrics Technology, Pune
            </span>

            <h1>
              Hi, I&apos;m <span className="accent">Anas</span>
              <br />
              I build <span className="accent">responsive</span> websites &
              <br />
              <span className="accent">REST APIs</span>.
            </h1>

            <p className="subtitle">
              I&apos;m a B.Tech (CSE) graduate from TIT Excellence, Bhopal. I work with
              React.js, Vite, JavaScript, CSS, Node.js, Express.js, MongoDB, and
              Mongoose. I focus on clean UI, responsive layouts, and practical backend
              APIs.
            </p>

            <div className="quick">
              <span className="pill">Uttar Pradesh, India</span>
              <span className="pill">React • Vite • CSS • JS • Node • MongoDB</span>
              <span className="pill">Express • Mongoose • Git • GitHub</span>
            </div>

            <div className="hero-actions">
              <a className="btn primary" href="#projects" onClick={(e) => onNavClick(e, "#projects")}>
                View Projects
              </a>
              <a className="btn" href="#contact" onClick={(e) => onNavClick(e, "#contact")}>
                Hire / Contact
              </a>
              <a
                className="btn"
                href="https://github.com/MohdAnas9721"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/mohd-anas-740866244/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </div>

            <p className="note">
              Tip: Replace project links and add screenshots later if you want. The
              portfolio is already fully responsive.
            </p>
          </section>

          <aside className="card hero-right">
            <div className="profile">
              <div className="profile-top">
                <div className="avatar">AK</div>
                <div>
                  <div className="profile-name">Anas Khan</div>
                  <div className="muted profile-role">
                    Full Stack Developer at Leometrics Technology, Pune
                  </div>
                  <div className="small">
                    Email:{" "}
                    <a className="accent" href={`mailto:${myEmail}`}>
                      {myEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="kpi">
                <div className="box">
                  <div className="num">Responsive UI</div>
                  <div className="lbl">Media queries, grids, flex, clean layout</div>
                </div>
                <div className="box">
                  <div className="num">REST APIs</div>
                  <div className="lbl">CRUD, auth basics, JSON, Postman</div>
                </div>
                <div className="box">
                  <div className="num">Backend Stack</div>
                  <div className="lbl">Node.js, Express.js, MongoDB</div>
                </div>
                <div className="box">
                  <div className="num">Tools</div>
                  <div className="lbl">Git, GitHub, VS Code</div>
                </div>
              </div>

              <div className="card subcard">
                <div className="subcard-title">Profile Summary</div>
                <p className="muted">
                  Full Stack Developer at Leometrics Technology, Pune, with hands-on
                  experience in building responsive web applications and backend REST
                  APIs. Skilled in frontend (React/JavaScript/CSS) and backend
                  (Node.js/Express/MongoDB/Mongoose), version control using Git/GitHub,
                  and strong understanding of DSA basics and problem-solving concepts.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

