import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#hero",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#experience", label: "Resume" },
  { href: "#certs",      label: "Certs" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState("hero");
  const observerRef = useRef(null);

  /* ── scroll-aware shrink ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  /* ── close menu on link click ── */
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
      <nav className="navbar-inner" role="navigation" aria-label="Main navigation">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={handleLinkClick}>
          <span className="navbar-brand-name">Divakar K</span>
          <span className="navbar-brand-sub">Cybersecurity</span>
        </a>

        {/* Desktop links */}
        <div className={`navbar-links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.slice(1) ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="navbar-menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}