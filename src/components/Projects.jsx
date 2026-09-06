import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const fetchedProjects = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Fix old Google Drive links on the fly
          if (data.images) {
            data.images = data.images.map(img => 
              img.includes('drive.google.com/uc?export=view&id=') 
                ? img.replace('uc?export=view&id=', 'thumbnail?id=') + '&sz=w1920'
                : img
            );
          }
          fetchedProjects.push({ id: doc.id, ...data });
        });
        // Sort by createdAt if needed, or just set it
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A collection of my recent UI/UX design projects.
            </motion.p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              Loading projects...
            </div>
          ) : (
            <div className="projects-grid">
              {projects.length === 0 ? (
                <div style={{ textAlign: 'center', gridColumn: '1 / -1', color: 'var(--text-secondary)' }}>
                  No projects available yet. Upload them via the Admin Panel.
                </div>
              ) : (
                projects.map((project, index) => (
                  <motion.div 
                    key={project.id} 
                    className="project-card glass-panel"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedProject(project)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="project-image-wrapper">
                      {/* Show the first image as the thumbnail */}
                      <img src={project.images && project.images[0]} alt={project.title} className="project-image" />
                      <div className="project-overlay">
                        <span className="view-btn">
                          View Case Study <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                    <div className="project-info">
                      <span className="project-category">{project.category}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">
                        {project.description.length > 100 
                          ? project.description.substring(0, 100) + '...' 
                          : project.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Render the modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Projects;
