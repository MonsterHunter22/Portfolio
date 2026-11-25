import React from "react";
import { SectionHeading } from "./Section";

const projects = [
  {
    number: "01",
    title: "MortalKart E-Commerce Platform",
    category: "FULL STACK · REACT · 2026",
    description:
      "A modern e-commerce platform featuring product browsing, shopping cart functionality, reusable components, and a responsive user interface.",
    technologies: ["React", "JavaScript", "CSS"],
    metrics: [
      ["Responsive", "Mobile-friendly"],
      ["Reusable", "Components"],
      ["Live", "Deployment"],
    ],
    image:
      "https://images.unsplash.com/vector-1759248692194-eb74798ee832?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    link: "https://mortalkart-six.vercel.app/",
  },
//   {
//     number: "02",
//     title: "TaskFlow Productivity App",
//     category: "FRONTEND · WEB APP",
//     description:
//       "A productivity dashboard concept for organizing tasks, tracking progress, and managing daily activities through a clean interface.",
//     technologies: ["React", "CSS", "JavaScript"],
//     metrics: [
//       ["Task", "Management"],
//       ["Clean", "Dashboard"],
//       ["Responsive", "Layout"],
//     ],
//     image:
//       "",
//     link: "https://github.com/",
//   },
//   {
//     number: "03",
//     title: "FitTrack Fitness App",
//     category: "REACT · UI DESIGN",
//     description:
//       "A fitness dashboard concept for displaying workout progress, fitness goals, and activity summaries in an intuitive interface.",
//     technologies: ["React", "CSS", "JavaScript"],
//     metrics: [
//       ["Fitness", "Dashboard"],
//       ["Interactive", "Components"],
//       ["Mobile", "Friendly"],
//     ],
//     image:
//       "",
//     link: "https://github.com/",
//   },
//   {
//     number: "04",
//     title: "WeatherWise Forecast App",
//     category: "JAVASCRIPT · API",
//     description:
//       "A weather application concept for presenting current conditions and forecasts through a straightforward, easy-to-use interface.",
//     technologies: ["JavaScript", "API", "CSS"],
//     metrics: [
//       ["Weather", "Information"],
//       ["API", "Integration"],
//       ["Dynamic", "Interface"],
//     ],
//     image:
//       "",
//     link: "https://github.com/",
//   },
];

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading title="Selected Work" count="04 Projects" />

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project-card ${
              index % 2 === 1 ? "reverse" : ""
            }`}
            key={project.number}
          >
            <a
              className="project-image"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
              <span className="image-arrow">↗</span>
            </a>

            <div className="project-info">
              <p className="eyebrow">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-metrics">
                {project.metrics.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}