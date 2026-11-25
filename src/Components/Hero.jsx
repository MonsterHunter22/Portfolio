import React from "react";

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          FULL STACK DEVELOPER · INDIA
        </p>

        <h1>
          I build modern web applications with{" "}
          <span>React and the MERN stack.</span>
        </h1>

        <p className="hero-description">
          I'm Vivek Dongre, a passionate developer focused on
          building fast, scalable, and user-friendly web
          applications. I'm constantly learning and improving
          my development skills.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View My Projects <span>→</span>
          </a>

          <a href="#contact" className="resume-link">
            Get In Touch ↗
          </a>
        </div>

        <div className="hero-note">
          <span className="status-dot"></span>
          Learning, building, and growing every day.
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-orb"></div>

        <div className="browser-window">
          <div className="browser-top">
            <div className="browser-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span>mortalkart.vercel.app</span>
          </div>

          <div className="browser-content">
            <div className="mock-nav">
              <strong>
                <span>●</span> MortalKart
              </strong>
              <span>Home　 Products　 Cart</span>
            </div>

            <div className="mock-hero">
              <div>
                <small>YOUR NEXT FAVORITE</small>
                <h2>
                  Shop Smarter.
                  <br />
                  Live Better.
                </h2>
                <p>Discover products you'll love.</p>
                <span className="mock-button">Shop Now ↗</span>
              </div>

              <div className="mock-cart">🛒</div>
            </div>

            <div className="mock-products">
              <div>
                <span>🎧</span>
                <small>Audio</small>
              </div>
              <div>
                <span>⌚</span>
                <small>Wearables</small>
              </div>
              <div>
                <span>📱</span>
                <small>Mobiles</small>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span>✦</span> React Developer
        </div>

        <div className="floating-badge badge-bottom">
          <span>✓</span> Always Learning
        </div>
      </div>
    </section>
  );
}