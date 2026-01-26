/**
 * Projects - Chapter showcasing portfolio work
 * Featured projects with descriptions and technologies
 */
const Projects = ({ isBackSide }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Creative portfolio with book-style navigation and 3D animations.',
      tags: ['React', 'SCSS', 'CSS3 Animations'],
      link: '#'
    }
  ];

  const moreProjects = [
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and data visualization.',
      tags: ['React', 'Chart.js', 'API Integration'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support and SEO optimization.',
      tags: ['Next.js', 'MDX', 'Prisma'],
      link: '#'
    }
  ];

  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 3 - Continued</span>
          <h2 className="chapter-title">More Projects</h2>
        </div>
        
        <div className="section">
          <div className="projects-grid">
            {moreProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="section">
          <p className="view-more-text">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a href="#" className="github-link">
            View GitHub Profile →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 3</span>
        <h2 className="chapter-title">Projects</h2>
      </div>
      
      <div className="section">
        <h3 className="section-title">Featured Work</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
