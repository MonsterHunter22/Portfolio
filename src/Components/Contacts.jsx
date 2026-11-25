import React, { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\nMessage:\n${form.message}`
    );

    
    window.location.href =
      `mailto:vivekdongre2002@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-intro">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's Work <span>Together.</span>
        </h2>

        <p>
          I'm always interested in learning, collaborating,
          and exploring opportunities to build useful digital
          experiences. Send me a message!
        </p>

        <a
          className="email-link"
          href="mailto:vivekdongre2002@gmail.com"
        >
          ✉ VivekDongre
        </a>

        <div className="social-links">
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          <a href="https://github.com/" aria-label="GitHub">⌘</a>
          <a href="https://x.com/" aria-label="X">𝕏</a>
          <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name *
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email *
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Project Type *
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
            >
              <option value="">Select project type</option>
              <option value="Frontend Development">
                Frontend Development
              </option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="E-Commerce Website">
                E-Commerce Website
              </option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Message *
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="4"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="button button-primary submit-button"
        >
          Send Message <span>→</span>
        </button>
      </form>
    </section>
  );
}