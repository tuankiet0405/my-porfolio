/**
 * Skills - Chapter showcasing technical abilities
 * Technologies, tools, and expertise levels
 */
const Skills = ({ isBackSide }) => {
  const frontendSkills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript/ES6+', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'SCSS/Sass', level: 90 },
    { name: 'Vue.js', level: 75 }
  ];

  const toolsSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Webpack/Vite', level: 85 },
    { name: 'Figma', level: 80 },
    { name: 'Jest/Testing', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'CI/CD', level: 75 }
  ];

  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 2 - Continued</span>
          <h2 className="chapter-title">Tools & More</h2>
        </div>
        
        <div className="section">
          <h3 className="section-title">Development Tools</h3>
          <div className="skills-grid">
            {toolsSkills.map((skill, index) => (
              <div key={skill.name} className="skill-item animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section">
          <h3 className="section-title">Soft Skills</h3>
          <div className="soft-skills-list">
            <span className="soft-skill">Problem Solving</span>
            <span className="soft-skill">Team Collaboration</span>
            <span className="soft-skill">Communication</span>
            <span className="soft-skill">Attention to Detail</span>
            <span className="soft-skill">Continuous Learning</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 2</span>
        <h2 className="chapter-title">Skills</h2>
      </div>
      
      <div className="section">
        <h3 className="section-title">Frontend Technologies</h3>
        <div className="skills-grid">
          {frontendSkills.map((skill, index) => (
            <div key={skill.name} className="skill-item animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section">
        <h3 className="section-title">What I Do Best</h3>
        <p>
          I specialize in building modern, responsive web applications using 
          React.js and its ecosystem. My focus is on creating intuitive user 
          interfaces with smooth animations and optimal performance.
        </p>
      </div>
    </div>
  );
};

export default Skills;
