import React from "react";

/**
 * Projects.component.jsx
 * Client‑ready portfolio projects section (e‑commerce & SaaS focused)
 * - Uses existing classNames (Sass‑friendly, no Tailwind dependency here)
 * - Reframes projects as mini case studies with business context
 * - Keeps `isBackSide` for book / flip layout
 */

const featuredProjects = [
  {
    id: 1,
    title: "Cabin Booking Platform",
    role: "Frontend Developer",
    problem:
      "Manual booking flows and poor UX caused friction for users and admins.",
    solution:
      "Built a modern booking experience with Google authentication, real‑time data, and a clean admin-friendly UI.",
    impact:
      "Improved booking flow clarity and created a scalable foundation for future pricing and availability features.",
    stack: ["Next.js", "NextAuth (Google)", "Supabase", "PostgreSQL", "SCSS"],
    link: "https://nextjs-app-xi-one.vercel.app/",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    role: "Frontend Developer",
    problem:
      "Early‑stage SaaS needed a high‑impact landing page to explain value quickly and convert visitors.",
    solution:
      "Designed and implemented a responsive landing page with motion‑based storytelling and clear CTAs.",
    impact:
      "Helped communicate product value within seconds and increased perceived product quality.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://saas-app-eight-iota.vercel.app/",
  },
];

const moreProjects = [
  {
    id: 3,
    title: "Mood Tracking Web App",
    role: "Frontend Developer",
    problem:
      "Users needed a simple way to track emotional patterns without a complex setup.",
    solution:
      "Implemented a clean, mobile‑first UI based on a Figma design, focusing on clarity and daily usage.",
    impact:
      "Lowered interaction friction and made daily mood logging intuitive and fast.",
    stack: ["React.js", "Tailwind CSS", "Figma"],
    link: "https://moodtrackingweb.netlify.app/",
  },
  {
    id: 4,
    title: "Luxury Brand Landing Page",
    role: "Frontend Developer",
    problem:
      "Luxury brands require strong visual storytelling to convey quality and exclusivity.",
    solution:
      "Crafted a visually rich landing page using motion and refined typography to elevate brand perception.",
    impact:
      "Created a premium digital presence aligned with high‑end brand positioning.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://ecommerce-landing-page-weld.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => (
  <article
    className="project-card animate-scale-in"
    style={{ animationDelay: `${index * 0.12}s` }}
  >
    <h3 className="project-title">{project.title}</h3>
    <span className="project-role">{project.role}</span>

    <p className="project-problem">
      <strong>Problem:</strong> {project.problem}
    </p>
    <p className="project-solution">
      <strong>Solution:</strong> {project.solution}
    </p>
    <p className="project-impact">
      <strong>Impact:</strong> {project.impact}
    </p>

    <div className="project-tags">
      {project.stack.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>

    <a
      href={project.link}
      className="project-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      View project →
    </a>
  </article>
);

const Projects = ({ isBackSide = false }) => {
  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 3 – Continued</span>
          <h2 className="chapter-title">More Case Studies</h2>
        </div>

        <div className="section">
          <div className="projects-grid">
            {moreProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="section">
          <p className="view-more-text">
            Interested in code quality and implementation details?
          </p>
          <a href="#" className="github-link">
            View GitHub profile →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 3</span>
        <h2 className="chapter-title">Selected Projects</h2>
      </div>

      <div className="section">
        <h3 className="section-title">Client‑Focused Work</h3>
        <p className="section-intro">
          These projects demonstrate how I approach frontend development for
          e‑commerce and SaaS products — balancing performance, UX, and
          long‑term maintainability.
        </p>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
