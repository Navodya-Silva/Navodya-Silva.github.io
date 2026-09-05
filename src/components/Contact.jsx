import { motion } from 'framer-motion';
import { Mail, Briefcase, Globe, PenTool } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info">
            <h2 className="section-title">
              Let's Create Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="contact-desc">
              Currently available for freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-details" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} className="text-gradient" />
                <a href="mailto:tharushisilva2468@gmail.com" style={{ color: 'inherit' }}>tharushisilva2468@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={18} className="text-gradient" />
                <span>Kalutara, Sri Lanka</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Work">
                <Briefcase size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Portfolio">
                <Globe size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Design">
                <PenTool size={20} />
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Hello Navodya..."></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
