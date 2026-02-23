export const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
export const MY_EMAIL = "ma4432172@gmail.com";
export const SECTION_IDS = ["about", "skills", "projects", "education", "contact"];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const projectCards = [
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

