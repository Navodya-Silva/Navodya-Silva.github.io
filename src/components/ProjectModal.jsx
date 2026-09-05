import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content glass-panel"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="modal-header">
            <span className="project-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>

          <div className="modal-images-scroll">
            {project.images && project.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} view ${index + 1}`} className="modal-image" />
            ))}
          </div>

          <div className="modal-info">
            <h3>Case Study</h3>
            <p className="modal-desc">{project.description}</p>
            
            {project.behanceLink && (
              <a href={project.behanceLink} target="_blank" rel="noreferrer" className="btn btn-primary modal-btn">
                View on Behance <ExternalLink size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
