import { motion } from 'framer-motion';
import { ArrowRight, PenTool, Layout } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Creative UI/UX Designer
          </motion.div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Navodya</span>.<br />
            Crafting Digital<br />
            Experiences that Matter.
          </h1>
          
          <p className="hero-subtitle">
            I specialize in designing intuitive, aesthetically pleasing, and highly functional digital products that solve real problems. Let's build something beautiful together.
          </p>

          <div className="hero-actions">
            <motion.a 
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{cursor: 'pointer'}}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{cursor: 'pointer'}}
              className="btn btn-secondary glass-panel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          
          <div className="profile-container">
             <div className="profile-inner">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                 alt="Navodya Silva" 
                 className="profile-image" 
               />
             </div>

             <div className="floating-badge badge-1">
               <PenTool size={24} className="text-gradient" />
               <span>Figma Expert</span>
             </div>

             <div className="floating-badge badge-2">
               <Layout size={24} className="text-gradient" />
               <span>UX Research</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
