import { motion } from 'framer-motion';
import { PenTool, Layout, Smartphone, Palette } from 'lucide-react';
import './About.css';

const skills = [
  { icon: <Layout size={24} />, name: "UI Design", desc: "Crafting beautiful, modern interfaces." },
  { icon: <PenTool size={24} />, name: "UX Research", desc: "Understanding users to build better products." },
  { icon: <Smartphone size={24} />, name: "Prototyping", desc: "Interactive flows in Figma & ProtoPie." },
  { icon: <Palette size={24} />, name: "Design Systems", desc: "Scalable and consistent design languages." }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Behind the <span className="text-gradient">Designs</span>
            </h2>
            <p className="about-desc">
              I'm Navodya, a passionate UI/UX Designer dedicated to creating seamless digital experiences. With a keen eye for aesthetics and a user-centric mindset, I bridge the gap between human needs and business goals.
            </p>
            <p className="about-desc">
              My approach involves deep empathy, rigorous research, and pixel-perfect execution to ensure every product I touch is not only functional but delightful to use.
            </p>
          </motion.div>
          
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-panel">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
