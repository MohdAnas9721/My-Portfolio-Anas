import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const MY_EMAIL = "ma4432172@gmail.com";
const SECTION_IDS = ["about", "skills", "projects", "education", "contact"];

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

const projectCards = [
  {
    title: "Portfolio Web App (React)",
    tags: ["React", "Vite", "CSS3", "Responsive"],
    featured: true,
    description:
      "Production-style portfolio frontend built in React with responsive layout, section navigation, and API-connected contact form.",
    points: [
      "React state-based mobile menu + active section highlighting",
      "Reusable project/skills rendering from structured data",
      "Contact form integration with Fetch API and backend endpoint"
    ],
    primaryLabel: "Live Preview"
  },
  {
    title: "Course Website (Frontend UI)",
    tags: ["React", "Components", "CSS Grid", "UI"],
    description:
      "Component-based course platform UI with homepage sections, course cards, pricing blocks, FAQ, and responsive CTA flows.",
    points: [
      "Reusable course cards + modular sections",
      "CTA hierarchy + consistent typography system",
      "Responsive layout using CSS Grid/Flexbox"
    ],
    primaryLabel: "Show UI"
  },
  {
    title: "REST API (CRUD + MongoDB)",
    tags: ["Node.js", "Express 5", "MongoDB", "Mongoose"],
    description:
      "Backend API with CRUD operations, request validation, and structured JSON responses for portfolio/contact workflows.",
    points: [
      "Routes: Create / Read / Update / Delete",
      "Validation + centralized error middleware",
      "Mongoose models + controller/service-ready structure"
    ],
    primaryLabel: "API Details"
  },
  {
    title: "Login & Authentication (Basic)",
    tags: ["Node.js", "Express", "bcrypt", "JWT-ready"],
    description:
      "Authentication module practice covering registration/login flow, password hashing concepts, and protected route planning.",
    points: [
      "Input validation for auth forms and payloads",
      "User data persistence in MongoDB",
      "Protected routes concept + token-based flow planning"
    ],
    primaryLabel: "Explain Flow"
  },
  {
    title: "Landing Page (UI + Animations)",
    tags: ["React UI", "CSS Animations", "Responsive", "UX"],
    description:
      "Marketing-style landing page with polished hover states, transitions, and responsive sections focused on conversion-first UI.",
    points: [
      "Button hover + card animations",
      "Responsive spacing and layout tuning",
      "Section hierarchy for better readability"
    ],
    primaryLabel: "Preview"
  },
  {
    title: "Mini Apps (JS / React Practice)",
    tags: ["JavaScript", "React Hooks", "Forms", "LocalStorage"],
    description:
      "Hands-on practice apps (to-do, calculator, validation flows) used to strengthen JavaScript logic and React state handling.",
    points: [
      "Event handling + UI state updates",
      "Reusable utility functions and handlers",
      "LocalStorage integration for persistence (optional)"
    ],
    primaryLabel: "Show Apps"
  }
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [formNote, setFormNote] = useState("");
  const [noteColor, setNoteColor] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= 140) current = id;
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHash = (hash) => {
    if (!hash?.startsWith("#")) return;
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInternalLinkClick = (event, hash) => {
    event.preventDefault();
    scrollToHash(hash);
    setMobileOpen(false);
  };

  const handleFormChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const msg = formData.msg.trim();

    if (!name || !email || !msg) {
      setFormNote("Please fill all fields.");
      setNoteColor("#fca5a5");
      return;
    }

    if (!isValidEmail(email)) {
      setFormNote("Please enter a valid email.");
      setNoteColor("#fca5a5");
      return;
    }

    setFormNote("Sending message...");
    setNoteColor("#86efac");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: msg })
      });
      const data = await res.json();

      if (!res.ok) {
        setFormNote(data?.message || "Failed to send.");
        setNoteColor("#fca5a5");
        return;
      }

      setFormNote("Message sent successfully");
      setNoteColor("#86efac");
      setFormData({ name: "", email: "", msg: "" });
    } catch {
      setFormNote("Backend not reachable. Start server first.");
      setNoteColor("#fca5a5");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MY_EMAIL);
      setFormNote(`Email copied: ${MY_EMAIL}`);
      setNoteColor("#86efac");
    } catch {
      setFormNote(`Copy failed. Email: ${MY_EMAIL}`);
      setNoteColor("#fcd34d");
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="nav">
            <a
              className="logo"
              href="#home"
              onClick={(e) => handleInternalLinkClick(e, "#home")}
            >
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
                      onClick={(e) => handleInternalLinkClick(e, `#${item.id}`)}
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
              onClick={() => setMobileOpen((v) => !v)}
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
                onClick={(e) => handleInternalLinkClick(e, `#${item.id}`)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

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
                <a
                  className="btn primary"
                  href="#projects"
                  onClick={(e) => handleInternalLinkClick(e, "#projects")}
                >
                  View Projects
                </a>
                <a
                  className="btn"
                  href="#contact"
                  onClick={(e) => handleInternalLinkClick(e, "#contact")}
                >
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
                      <a className="accent" href={`mailto:${MY_EMAIL}`}>
                        {MY_EMAIL}
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

      <section id="about" className="section">
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

      <section id="skills" className="section">
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

      <section id="projects" className="section">
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
                  <a
                    className="btn"
                    href="#contact"
                    onClick={(e) => handleInternalLinkClick(e, "#contact")}
                  >
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

      <section id="education" className="section">
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

      <section id="contact" className="section">
        <div className="container">
          <h2 className="title">Contact</h2>
          <p className="subtitle">
            If you like my profile, feel free to contact me. I will respond quickly.
          </p>

          <div className="grid contact-grid mt16">
            <div className="card">
              <h3 className="h3">Send a message</h3>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleFormChange("name")}
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleFormChange("email")}
                  />
                </div>

                <div className="field">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    id="msg"
                    placeholder="Write your message..."
                    value={formData.msg}
                    onChange={handleFormChange("msg")}
                  />
                </div>

                <div className="btn-row">
                  <button type="submit" className="btn primary">
                    Send
                  </button>
                  <button type="button" className="btn" onClick={copyEmail}>
                    Copy Email
                  </button>
                </div>

                <p className="note" style={noteColor ? { color: noteColor } : undefined}>
                  {formNote}
                </p>
              </form>
            </div>

            <div className="card">
              <h3 className="h3">Direct Links</h3>

              <div className="list mt10">
                <div className="card subcard">
                  <div className="subcard-title">Email</div>
                  <div className="muted mt6">
                    <a className="accent" href={`mailto:${MY_EMAIL}`}>
                      {MY_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="card subcard">
                  <div className="subcard-title">LinkedIn</div>
                  <div className="muted mt6">
                    <a
                      className="accent"
                      target="_blank"
                      rel="noopener"
                      href="https://www.linkedin.com/in/mohd-anas-740866244/"
                    >
                      Open Profile
                    </a>
                  </div>
                </div>

                <div className="card subcard">
                  <div className="subcard-title">GitHub</div>
                  <div className="muted mt6">
                    <a
                      className="accent"
                      target="_blank"
                      rel="noopener"
                      href="https://github.com/MohdAnas9721"
                    >
                      Open Repositories
                    </a>
                  </div>
                </div>

                <div className="card subcard">
                  <div className="subcard-title">Resume</div>
                  <div className="muted mt6">
                    <span className="muted">Add your resume PDF link here later.</span>
                  </div>
                </div>
              </div>

              <p className="note">
                Next step: connect this frontend to backend APIs (projects + contact form)
                so it becomes stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <a
                className="link"
                href="#home"
                onClick={(e) => handleInternalLinkClick(e, "#home")}
              >
                Top
              </a>
              <a
                className="link"
                href="#projects"
                onClick={(e) => handleInternalLinkClick(e, "#projects")}
              >
                Projects
              </a>
              <a className="link" href={`mailto:${MY_EMAIL}`}>
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
    </>
  );
}
