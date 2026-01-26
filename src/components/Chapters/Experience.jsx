/**
 * Experience - Chapter showcasing work history
 * Professional timeline and achievements
 */
const Experience = ({ isBackSide }) => {
  const experiences = [
    {
      id: 1,
      date: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development for enterprise applications. Mentoring junior developers and establishing best practices.'
    },
    {
      id: 2,
      date: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Built responsive web applications for various clients. Implemented complex animations and interactive features.'
    }
  ];

  const moreExperiences = [
    {
      id: 3,
      date: '2018 - 2020',
      title: 'Junior Developer',
      company: 'Startup Inc.',
      description: 'Started my journey in web development. Learned React, modern JavaScript, and agile methodologies.'
    }
  ];

  const education = [
    {
      date: '2014 - 2018',
      title: 'Bachelor of Computer Science',
      institution: 'University Name',
      description: 'Focused on software engineering and web technologies.'
    }
  ];

  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 4 - Continued</span>
          <h2 className="chapter-title">Education & More</h2>
        </div>
        
        <div className="section">
          <h3 className="section-title">Earlier Experience</h3>
          <div className="timeline">
            {moreExperiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <span className="timeline-date">{exp.date}</span>
                <h4 className="timeline-title">{exp.title}</h4>
                <span className="timeline-company">{exp.company}</span>
                <p className="timeline-description">{exp.description}</p>
              </div>
            ))}
          </div>
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
          <h3 className="section-title">Certifications</h3>
          <ul className="certifications-list">
            <li>AWS Certified Developer</li>
            <li>Meta Frontend Developer Certificate</li>
            <li>Google UX Design Certificate</li>
          </ul>
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
        <h3 className="section-title">Work History</h3>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item animate-slide-up">
              <span className="timeline-date">{exp.date}</span>
              <h4 className="timeline-title">{exp.title}</h4>
              <span className="timeline-company">{exp.company}</span>
              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section">
        <h3 className="section-title">Key Achievements</h3>
        <ul className="achievements-list">
          <li>Led migration to React 18, improving performance by 40%</li>
          <li>Established component library used across 5+ projects</li>
          <li>Reduced bundle size by 60% through code splitting</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
