/**
 * AboutMe - Chapter introducing yourself
 * Personal story, background, and passion
 */
const AboutMe = ({ isBackSide }) => {
  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">Chapter 1 - Continued</span>
          <h2 className="chapter-title">My Journey</h2>
        </div>
        
        <div className="section">
          <h3 className="section-title">What Drives Me</h3>
          <p>
            I believe in creating digital experiences that are not only functional 
            but also delightful. Every pixel matters, every interaction counts.
          </p>
          <p>
            My journey in frontend development started with curiosity and has 
            evolved into a passion for crafting beautiful, performant web applications.
          </p>
        </div>
        
        <div className="section">
          <h3 className="section-title">Fun Facts</h3>
          <ul className="facts-list">
            <li>☕ Powered by coffee and curiosity</li>
            <li>🎨 Design enthusiast</li>
            <li>📚 Lifelong learner</li>
            <li>🌏 Open source contributor</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 1</span>
        <h2 className="chapter-title">About Me</h2>
      </div>
      
      <div className="section">
        <div className="profile-intro">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              👨‍💻
            </div>
          </div>
          <div className="profile-text">
            <h3>Hello, I'm</h3>
            <h2 className="name-highlight">Your Name</h2>
            <p className="tagline">Frontend Developer & UI Enthusiast</p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h3 className="section-title">Introduction</h3>
        <p>
          I'm a passionate frontend developer with a keen eye for design and 
          a love for creating seamless user experiences. With expertise in 
          modern JavaScript frameworks and CSS animations, I bring ideas to life 
          through clean, efficient code.
        </p>
        <p>
          Based in Vietnam, I specialize in building responsive, accessible, 
          and performant web applications that users love to interact with.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
