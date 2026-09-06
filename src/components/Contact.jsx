import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle, Download } from 'lucide-react';
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
            
            <div className="social-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <a href="mailto:tharushisilva2468@gmail.com" className="btn btn-secondary glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                <Mail size={18} /> Email Me
              </a>
              <a href="https://wa.me/94767277484" target="_blank" rel="noreferrer" className="btn btn-secondary glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                <MessageCircle size={18} /> WhatsApp
              </a>
              {/* <a href="YOUR_RESUME_LINK_HERE" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                <Download size={18} /> Download Resume
              </a> */}
            </div>
          </div>
          
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            {/* Replace YOUR_WEB3FORMS_KEY with your actual Web3Forms access key */}
            <input type="hidden" name="access_key" value="96b75b1a-ae0c-431e-ba19-2fb46abf3a9e" />
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Hello Tharushi..." required></textarea>
            </div>
            
            {/* Optional: Add a redirect URL after submission */}
            {/* <input type="hidden" name="redirect" value="https://yourwebsite.com/success" /> */}

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
