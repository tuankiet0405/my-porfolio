import { useState } from 'react';

/**
 * Contact - Final chapter for getting in touch
 * Contact form and social links
 */
const Contact = ({ isBackSide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  if (isBackSide) {
    return (
      <div className="chapter-content">
        <div className="page-header">
          <span className="chapter-number">The End</span>
          <h2 className="chapter-title">Thank You</h2>
        </div>
        
        <div className="section text-center">
          <div className="thank-you-message">
            <p className="closing-text">
              Thank you for taking the time to explore my portfolio. 
              I hope you enjoyed this little journey through my work and experience.
            </p>
            
            <div className="signature">
              <p className="signature-text">— Your Name</p>
              <p className="signature-title">Frontend Developer</p>
            </div>
            
            <div className="book-end-decoration">
              ✦ ✦ ✦
            </div>
          </div>
        </div>
        
        <div className="section">
          <h3 className="section-title text-center">Quick Links</h3>
          <div className="quick-links">
            <a href="#" className="quick-link">Download Resume</a>
            <a href="#" className="quick-link">View GitHub</a>
            <a href="#" className="quick-link">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-content">
      <div className="page-header">
        <span className="chapter-number">Chapter 5</span>
        <h2 className="chapter-title">Contact</h2>
      </div>
      
      <div className="section">
        <h3 className="section-title">Get In Touch</h3>
        <p>
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision.
        </p>
      </div>
      
      <div className="section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      
      <div className="social-links">
        <a href="#" className="social-link" aria-label="GitHub">
          <span>GH</span>
        </a>
        <a href="#" className="social-link" aria-label="LinkedIn">
          <span>LI</span>
        </a>
        <a href="#" className="social-link" aria-label="Twitter">
          <span>TW</span>
        </a>
        <a href="#" className="social-link" aria-label="Email">
          <span>@</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
