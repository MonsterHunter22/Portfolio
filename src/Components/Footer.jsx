import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="brand footer-brand">
          <span className="footer-dot">●</span> Vivek Dongre
        </a>

        <span className="footer-role">
          MERN Stack Developer
        </span>

        <p>Designed and built with React + CSS</p>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/vivek-dongre-122512190/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgntTCAE6TZm1xUjUJ4zA2Q%3D%3D" aria-label="LinkedIn">in</a>
          <a href="https://github.com/MonsterHunter22" aria-label="GitHub">⌘</a>
          <a href="https://x.com/" aria-label="X">𝕏</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Vivek Dongre. All rights
          reserved.
        </span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
