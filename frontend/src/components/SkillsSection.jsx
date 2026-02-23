export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="title">Skills</h2>
        <p className="subtitle">
          My current skill set (frontend + backend). I&apos;m continuously improving and
          building projects.
        </p>

        <div className="grid three-col mt16">
          <div className="card">
            <h3 className="h3">Frontend</h3>
            <div className="tags">
              {[
                "HTML5",
                "CSS3",
                "Responsive Design",
                "Flexbox",
                "CSS Grid",
                "Media Queries",
                "JavaScript (ES6)",
                "Vite",
                "Bootstrap",
                "React",
                "React Hooks",
                "Fetch API"
              ].map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="h3">Backend</h3>
            <div className="tags">
              {[
                "Node.js",
                "Express.js",
                "REST APIs",
                "CRUD",
                "express-validator",
                "JWT / bcrypt",
                "Postman"
              ].map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="h3">Database & Tools</h3>
            <div className="tags">
              {[
                "MongoDB",
                "Mongoose",
                "SQL (Basic)",
                "Git",
                "GitHub",
                "VS Code",
                "DSA (Basic)",
                "Java (Basic)"
              ].map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

