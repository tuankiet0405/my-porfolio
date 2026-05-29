import { useState } from 'react';

/**
 * Contact - Final chapter for getting in touch
 * Contact form and social links
 */
const Contact = ({ isBackSide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    'bot-field': '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) {
        throw new Error('Message submission failed');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', 'bot-field': '' });
    } catch (error) {
      setSubmitStatus('error');
    }
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
              <p className="signature-text">— Tuấn Kiệt</p>
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
            <a href="https://github.com/tuankiet0405" className="quick-link" target="_blank" rel="noopener noreferrer">View GitHub</a>
            <a href="https://www.linkedin.com/in/deri0405/" className="quick-link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
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
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden-field">
            <label>
              Do not fill this out if you are human:
              <input
                name="bot-field"
                value={formData['bot-field']}
                onChange={handleChange}
              />
            </label>
          </p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tuấn Kiệt"
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
          
          <button type="submit" className="submit-btn" disabled={submitStatus === 'submitting'}>
            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="form-status success">Message sent successfully. I will get back to you soon.</p>
          )}

          {submitStatus === 'error' && (
            <p className="form-status error">Something went wrong. Please try again in a moment.</p>
          )}
        </form>
      </div>
       
      <div className="social-links">
        <a href="https://github.com/tuankiet0405" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <span>GH</span>
        </a>
        <a href="https://www.linkedin.com/in/deri0405/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <span>LI</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
