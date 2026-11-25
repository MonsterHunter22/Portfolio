import React from "react";
import { SectionHeading } from "./Section";

const skillGroups = [
  {
    title: "Frontend / UI",
    skills: [
      ["⚛", "React"],
      ["JS", "JavaScript"],
      ["🌐", "HTML"],
      ["▣", "CSS"],
      ["≈", "Tailwind CSS"],
      ["↔", "Redux Toolkit"],
    ],
  },
  {
    title: "Backend / Tools",
    skills: [
      ["⬢", "Node.js"],
      ["Ex", "Express.js"],
      ["◉", "MongoDB"],
      ["🔥", "Firebase"],
      ["◆", "Git & GitHub"],
      ["↗", "REST APIs"],
    ],
  },
];

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading title="Tools & Skills" />

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-pills">
              {group.skills.map(([icon, name]) => (
                <span className="skill-pill" key={name}>
                  <b>{icon}</b>
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}