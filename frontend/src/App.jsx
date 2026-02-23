import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { API_BASE, MY_EMAIL, SECTION_IDS } from "./data/portfolioData";

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
      <Header
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onNavClick={handleInternalLinkClick}
      />

      <HeroSection myEmail={MY_EMAIL} onNavClick={handleInternalLinkClick} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onNavClick={handleInternalLinkClick} />
      <EducationSection />
      <ContactSection
        formData={formData}
        formNote={formNote}
        noteColor={noteColor}
        myEmail={MY_EMAIL}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        onCopyEmail={copyEmail}
      />
      <Footer year={year} myEmail={MY_EMAIL} onNavClick={handleInternalLinkClick} />
    </>
  );
}

