import React from "react";
import { SectionHeading } from "./Section";


const testimonials = [
  {
    quote:
      "Vivek is a talented developer who focuses on writing clean code and creating practical web experiences.",
    name: "Development Collaboration",
    role: "Project Feedback",
  },
  {
    quote:
      "A clear interface and reusable components make applications easier to maintain and improve.",
    name: "Frontend Development",
    role: "Engineering Feedback",
  },
  {
    quote:
      "Attention to responsive layouts and consistent styling makes a real difference in user experience.",
    name: "UI Development",
    role: "Design Feedback",
  },
  {
    quote:
      "A willingness to learn, experiment, and improve is essential for becoming a strong developer.",
    name: "Learning Journey",
    role: "Personal Goal",
  },
];


export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionHeading title="What People Say" />

      <p className="section-note">
        A few principles that guide my approach to development.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <span className="quote-mark">“</span>
            <p>{item.quote}</p>
            <div className="testimonial-author">
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}