import React, { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>
        Vivek Dongre<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {[
          ["Work", "#projects"],
          ["About", "#about"],
          ["Skills", "#skills"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a href={href} key={label} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-cta"
          onClick={closeMenu}
        >
          Let's Talk ↗
        </a>
      </nav>
    </header>
  );
}