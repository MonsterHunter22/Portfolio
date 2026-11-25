import React from "react";
import { SectionHeading } from "./Section";

const processSteps = [
  {
    number: "01",
    icon: "⌕",
    title: "Discover",
    description:
      "Understand the problem, research requirements, and explore possible solutions.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Define",
    description:
      "Plan the structure, define features, and break the project into manageable tasks.",
  },
  {
    number: "03",
    icon: "</>",
    title: "Develop",
    description:
      "Build reusable React components and create a polished, responsive interface.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Deliver",
    description:
      "Test functionality, fix bugs, improve performance, and deploy the application.",
  },
];

export function Process() {
  return (
    <section className="section process-section" id="process">
      <SectionHeading
        label="MY WORKFLOW"
        title="How I Work"
      />

      <div className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.number}>
            <div className="process-icon">{step.icon}</div>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <blockquote className="quote-block">
        <span>“</span>
        <div>
          <p>
            I believe great products come from solving real
            problems with thoughtful design and clean code.
          </p>
          <cite>— Vivek Dongre</cite>
        </div>
      </blockquote>
    </section>
  );
}