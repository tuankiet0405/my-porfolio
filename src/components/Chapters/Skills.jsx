import React from "react";

/**
 * Skills.component.jsx
 * Client-focused skills section for e-commerce & SaaS freelance positioning
 * - Uses existing classNames (Sass-friendly, no Tailwind)
 * - Reframes skills around business impact, not percentages alone
 * - Keeps `isBackSide` for flip / book-style layout
 */

const frontendSkills = [
  {
    name: "React.js",
    level: 90,
    value: "Build scalable UI systems and complex product flows",
  },
  {
    name: "JavaScript (ES6+)",
    level: 95,
    value: "Reliable logic, async flows, and performance optimizations",
  },
  {
    name: "TypeScript",
    level: 85,
    value: "Safer codebases and easier long-term maintenance",
  },
  {
    name: "HTML5 / CSS3",
    level: 95,
    value: "Accessible, semantic layouts with strong visual hierarchy",
  },
  {
    name: "SCSS / Sass",
    level: 90,
    value: "Modular, maintainable styling for growing products",
  },
  {
    name: "Vue.js",
    level: 75,
    value: "Adapt quickly to existing teams and legacy stacks",
  },
];

const toolSkills = [
  {
    name: "Git / GitHub",
    level: 90,
    value: "Clean commits, reviews, and collaborative workflows",
  },
  {
    name: "Vite / Webpack",
    level: 85,
    value: "Fast builds and optimized production bundles",
  },
  {
    name: "Figma",
    level: 80,
    value: "Accurate Figma → production implementation",
  },
  {
    name: "Testing (Jest)",
    level: 75,
    value: "Confidence when shipping new features",
  },
];

const SkillItem = ({ skill, index }) => (
  <div
    className="skill-item animate-slide-up"
    style={{ animationDelay: `${index * 0.08}s` }}
  >
    <div className="skill-header">
      <span className="skill-name">{skill.name}</span>
    </div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
    </div>
    <p className="skill-value">{skill.value}</p>
  </div>
);

const Skills = ({ isBackSide = false }) => {
  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 2 – Continued</span>
          <h2 className="chapter-title">Tools, Process & Collaboration</h2>
        </div>

        <div className="section">
          <h3 className="section-title">Development & Delivery Tools</h3>
          <div className="skills-grid">
            {toolSkills.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">
            How clients experience working with me
          </h3>
          <div className="soft-skills-list">
            <span className="soft-skill">
              Clear communication & async updates
            </span>
            <span className="soft-skill">Product-first thinking</span>
            <span className="soft-skill">Ownership & reliability</span>
            <span className="soft-skill">Attention to UX details</span>
            <span className="soft-skill">Continuous improvement mindset</span>
          </div>
        </div>

        <div className="section">
          <p className="section-note">
            These tools support a predictable delivery process — fewer
            surprises, faster iterations, and code that scales as your product
            grows.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 2</span>
        <h2 className="chapter-title">Skills & Expertise</h2>
      </div>

      <div className="section">
        <h3 className="section-title">Frontend Engineering</h3>
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">What this means for your product</h3>
        <p>
          I help e‑commerce and SaaS teams ship frontend features that are fast,
          accessible, and easy to maintain. My focus is on real outcomes —
          smoother user journeys, faster load times, and interfaces that support
          growth without constant rewrites.
        </p>
      </div>
    </div>
  );
};

export default Skills;
