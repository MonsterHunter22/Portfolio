import React from "react";

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-image">
        <div className="profile-placeholder">
          <span>VD</span>
          <p>Vivek Dongre</p>
          <small>Developer · Creator · Learner</small>
        </div>
      </div>

      <div className="about-content">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          A Bit <span>About Me</span>
        </h2>

        <p>
          I'm Vivek Dongre, a developer passionate about
          building modern web applications. I enjoy working
          with React, exploring the MERN stack, and creating
          responsive user interfaces with clean, maintainable
          code.
        </p>

        <p>
          I learn by building projects, solving problems, and
          experimenting with new technologies. My goal is to
          keep growing as a developer while creating useful
          digital experiences.
        </p>

        <div className="fun-facts">
          <div>
            <span>☕</span>
            <p>Fueled by curiosity</p>
          </div>
          <div>
            <span>📚</span>
            <p>Always learning</p>
          </div>
          <div>
            <span>💻</span>
            <p>Building with React</p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          Connect on LinkedIn ↗
        </a>
      </div>
    </section>
  );
}