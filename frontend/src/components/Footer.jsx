export default function Footer({ year, myEmail, onNavClick }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-title">Anas - Full Stack Developer</div>
            <div className="small">
              &copy; <span>{year}</span> All rights reserved.
            </div>
          </div>

          <div className="links">
            <a className="link" href="#home" onClick={(e) => onNavClick(e, "#home")}>
              Top
            </a>
            <a className="link" href="#projects" onClick={(e) => onNavClick(e, "#projects")}>
              Projects
            </a>
            <a className="link" href={`mailto:${myEmail}`}>
              Email
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/mohd-anas-740866244/"
            >
              LinkedIn
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener"
              href="https://github.com/MohdAnas9721"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

