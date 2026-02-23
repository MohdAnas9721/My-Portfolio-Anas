import { navItems } from "../data/portfolioData";

export default function Header({ activeSection, mobileOpen, onToggleMobile, onNavClick }) {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <a className="logo" href="#home" onClick={(e) => onNavClick(e, "#home")}>
            <div className="logo-badge">
              <span>A</span>
            </div>
            <div>
              <div className="logo-name">Anas</div>
              <div className="logo-role">
                Full Stack Developer at Leometrics Technology, Pune
              </div>
            </div>
          </a>

          <nav aria-label="Main navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={`navlink ${activeSection === item.id ? "active" : ""}`}
                    href={`#${item.id}`}
                    onClick={(e) => onNavClick(e, `#${item.id}`)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-btn"
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={onToggleMobile}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-panel ${mobileOpen ? "show" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mLink"
              onClick={(e) => onNavClick(e, `#${item.id}`)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

