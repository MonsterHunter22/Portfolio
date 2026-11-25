import React from "react";

export function SectionHeading({ label, title, count }) {
  return (
    <div className="section-heading">
      <div>
        {label && <p className="eyebrow">{label}</p>}
        <h2>{title}</h2>
      </div>

      <div className="heading-line"></div>

      {count && <span className="project-count">{count}</span>}
    </div>
  );
}