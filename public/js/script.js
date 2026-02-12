// ===== Mobile menu toggle =====
const menuBtn = document.getElementById("menuBtn");
const mobilePanel = document.getElementById("mobilePanel");

if (menuBtn && mobilePanel) {
  menuBtn.addEventListener("click", () => {
    mobilePanel.classList.toggle("show");
  });

  document.querySelectorAll(".mLink").forEach((a) => {
    a.addEventListener("click", () => mobilePanel.classList.remove("show"));
  });
}

// ===== Smooth scroll (for internal links) =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== Active nav link on scroll =====
const sectionIds = ["about", "skills", "projects", "education", "contact"];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll(".navlink");

function setActiveLink() {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 140) current = sec.id;
  });

  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();

// ===== Contact form (API submit + basic validation) =====
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const copyEmailBtn = document.getElementById("copyEmailBtn");

const myEmail = "ma4432172@gmail.com";
const API_BASE = "http://localhost:5000"; // ✅ Backend URL

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    if (!name || !email || !msg) {
      formNote.textContent = "Please fill all fields.";
      formNote.style.color = "#fca5a5";
      return;
    }

    if (!isValidEmail(email)) {
      formNote.textContent = "Please enter a valid email.";
      formNote.style.color = "#fca5a5";
      return;
    }

    formNote.textContent = "Sending message...";
    formNote.style.color = "#86efac";

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: msg })
      });

      const data = await res.json();

      if (!res.ok) {
        formNote.textContent =
          (data && data.message) ? data.message : "Failed to send.";
        formNote.style.color = "#fca5a5";
        return;
      }

      formNote.textContent = "Message sent successfully ✅";
      formNote.style.color = "#86efac";
      form.reset();
    } catch (err) {
      formNote.textContent = "Backend not reachable. Start server first ❌";
      formNote.style.color = "#fca5a5";
    }
  });
}

// ===== Copy email button =====
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      formNote.textContent = "Email copied: " + myEmail;
      formNote.style.color = "#86efac";
    } catch (err) {
      formNote.textContent = "Copy failed. Email: " + myEmail;
      formNote.style.color = "#fcd34d";
    }
  });
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();