import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container nav-container">
        <a onClick={(e) => handleScroll(e, 'home')} style={{cursor: 'pointer'}} className="logo">
          N<span className="text-gradient">.</span>
        </a>
        <div className="nav-links">
          <a onClick={(e) => handleScroll(e, 'projects')} style={{cursor: 'pointer'}} className="nav-link">Projects</a>
          <a onClick={(e) => handleScroll(e, 'about')} style={{cursor: 'pointer'}} className="nav-link">About</a>
          <a onClick={(e) => handleScroll(e, 'contact')} style={{cursor: 'pointer'}} className="nav-link">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
