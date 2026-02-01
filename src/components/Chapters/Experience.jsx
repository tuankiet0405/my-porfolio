import React from "react";

/**
 * Experience.component.jsx
 * Freelance‑focused experience section
 * - Honest positioning (1 year experience)
 * - Optimized for SaaS / product‑driven clients
 * - Sass‑friendly classNames preserved
 * - Emphasizes impact, responsibility, and growth
 */

const mainExperience = [
  {
    id: 1,
    date: "2024 – Present",
    title: "Full‑Stack Developer",
    company: "Financial Services Company",
    highlights: [
      "Built and maintained internal financial web applications used by business teams",
      "Developed frontend features with Vue.js and Nuxt.js, focusing on performance and usability",
      "Implemented backend APIs with Node.js to support data‑driven workflows",
      "Worked closely with product and QA teams to deliver stable, production‑ready features",
      "Handled real‑world requirements: authentication, role‑based access, and data consistency",
    ],
    impact:
      "Gained hands‑on experience building and shipping production software in a regulated, reliability‑focused environment.",
  },
];

const education = [
  {
    date: "2020 – 2024",
    title: "Bachelor of Information Technology",
    institution: "Ho Chi Minh City University of Industry",
    description:
      "Graduated with a focus on software engineering, web development, and practical project work.",
  },
];

const Experience = ({ isBackSide = false }) => {
  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 4 – Continued</span>
          <h2 className="chapter-title">Education & Professional Mindset</h2>
        </div>

        <div className="section">
          <h3 className="section-title">Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-date">{edu.date}</span>
                <h4 className="timeline-title">{edu.title}</h4>
                <span className="timeline-company">{edu.institution}</span>
                <p className="timeline-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">How this benefits clients</h3>
          <ul className="achievements-list">
            <li>
              Experience working with real production constraints and business
              rules
            </li>
            <li>Comfortable reading and extending existing codebases</li>
            <li>
              Used to collaborating in structured, team‑based environments
            </li>
            <li>Strong foundation for long‑term SaaS and internal tools</li>
          </ul>
        </div>

        <div className="section">
          <p className="section-note">
            While my professional experience is still growing, I prioritize
            clean code, communication, and delivering features that solve real
            business problems.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 4</span>
        <h2 className="chapter-title">Experience</h2>
      </div>

      <div className="section">
        <h3 className="section-title">Professional Experience</h3>
        <div className="timeline">
          {mainExperience.map((exp) => (
            <div key={exp.id} className="timeline-item animate-slide-up">
              <span className="timeline-date">{exp.date}</span>
              <h4 className="timeline-title">{exp.title}</h4>
              <span className="timeline-company">{exp.company}</span>

              <ul className="timeline-highlights">
                {exp.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="timeline-impact">
                <strong>Impact:</strong> {exp.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">What I bring as a freelancer</h3>
        <ul className="achievements-list">
          <li>Product‑oriented mindset, not just feature delivery</li>
          <li>
            Comfortable with modern frontend stacks (React, Next.js, Vue, Nuxt)
          </li>
          <li>
            Full‑stack awareness for smoother frontend–backend collaboration
          </li>
          <li>
            Strong motivation to grow with long‑term SaaS and product teams
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
