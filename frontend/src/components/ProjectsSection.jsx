import { projectCards } from "../data/portfolioData";

export default function ProjectsSection({ onNavClick }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="title">Projects</h2>
        <p className="subtitle">
          Full-stack projects aligned with my current work: React/Vite frontend,
          responsive UI engineering, and Node/Express/MongoDB backend APIs. Replace
          links anytime without changing structure.
        </p>

        <div className="grid three-col mt16">
          {projectCards.map((project) => (
            <div key={project.title} className="card project">
              <div className="project-head">
                <div>
                  <h3 className="h3">{project.title}</h3>
                  <div className="meta mt8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.featured ? (
                  <span className="pill">
                    <span className="pill-dot" /> Featured
                  </span>
                ) : null}
              </div>

              <p>{project.description}</p>

              <ul className="list mt6">
                {project.points.map((point) => (
                  <li key={point}>
                    <span className="tick" />
                    <div>{point}</div>
                  </li>
                ))}
              </ul>

              <div className="hero-actions mt10">
                <a className="btn" href="#contact" onClick={(e) => onNavClick(e, "#contact")}>
                  {project.primaryLabel}
                </a>
                <a
                  className="btn"
                  href="https://github.com/MohdAnas9721"
                  target="_blank"
                  rel="noopener"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

