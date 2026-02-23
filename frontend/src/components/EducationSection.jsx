export default function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="title">Education</h2>
        <p className="subtitle">My academic background (most relevant first).</p>

        <div className="grid two-col mt16">
          <div className="card">
            <h3 className="h3">B.Tech - Computer Science</h3>
            <p className="muted">
              <b>Institution:</b> TIT Excellence, Bhopal
            </p>
            <p className="muted">
              <b>Duration:</b> Aug 2021 - May 2025
            </p>
            <p className="muted">
              <b>Focus:</b> Web Development, Programming, DSA basics
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Schooling</h3>
            <ul className="list">
              <li>
                <span className="tick" />
                <div>
                  <b>12th:</b> HFD Inter College - <span className="muted">62%</span>
                </div>
              </li>
              <li>
                <span className="tick" />
                <div>
                  <b>10th:</b> Public School - <span className="muted">67%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

