import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [behanceLink, setBehanceLink] = useState('');
  const [figmaLink, setFigmaLink] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const passcode = prompt("Enter Admin Passcode:");
    if (passcode === "tharu123") {
      setIsAuthenticated(true);
      fetchProjects();
    } else {
      alert("Incorrect Passcode");
      navigate('/');
    }
  }, [navigate]);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projs = [];
    querySnapshot.forEach((doc) => {
      projs.push({ id: doc.id, ...doc.data() });
    });
    setProjects(projs);
  };

  // Helper to convert Google Drive sharing link to a direct image link
  const getDirectImageUrl = (url) => {
    if (!url) return '';
    if (url.includes("drive.google.com/file/d/")) {
      try {
        const id = url.split("/d/")[1].split("/")[0];
        return `https://drive.google.com/uc?export=view&id=${id}`;
      } catch (e) {
        return url;
      }
    }
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image1) return alert("Please provide at least the first image link");
    
    setLoading(true);
    try {
      const imageUrls = [
        getDirectImageUrl(image1),
        getDirectImageUrl(image2),
        getDirectImageUrl(image3)
      ].filter(url => url !== ''); // Remove empty links

      await addDoc(collection(db, "projects"), {
        title,
        category,
        description,
        behanceLink,
        figmaLink,
        images: imageUrls,
        createdAt: new Date()
      });

      alert("Project added successfully!");
      setTitle('');
      setCategory('');
      setDescription('');
      setBehanceLink('');
      setFigmaLink('');
      setImage1('');
      setImage2('');
      setImage3('');
      fetchProjects();
      
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    }
  }

  if (!isAuthenticated) return null;

  return (
    <div className="admin-dashboard container">
      <div className="admin-header">
        <h2>Dashboard</h2>
        <button onClick={() => navigate('/')} className="btn btn-secondary glass-panel">Back to Site</button>
      </div>

      <div className="admin-content">
        <div className="upload-section glass-panel">
          <h3>Add New Project</h3>
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="form-group">
              <label>Project Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            
            <div className="form-group">
              <label>Category (e.g. Web App, Mobile UI)</label>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Description (Case Study info)</label>
              <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>

            <div className="form-group">
              <label>Behance Link (Optional)</label>
              <input type="url" value={behanceLink} onChange={(e) => setBehanceLink(e.target.value)} placeholder="https://behance.net/..." />
            </div>

            <div className="form-group">
              <label>Figma Link (Optional)</label>
              <input type="url" value={figmaLink} onChange={(e) => setFigmaLink(e.target.value)} placeholder="https://figma.com/..." />
            </div>

            <div className="form-group">
              <label>Image 1 Link (Main Cover - Google Drive link allowed) *</label>
              <input type="url" value={image1} onChange={(e) => setImage1(e.target.value)} required placeholder="https://drive.google.com/file/d/..." />
            </div>

            <div className="form-group">
              <label>Image 2 Link (Optional)</label>
              <input type="url" value={image2} onChange={(e) => setImage2(e.target.value)} placeholder="https://drive.google.com/file/d/..." />
            </div>

            <div className="form-group">
              <label>Image 3 Link (Optional)</label>
              <input type="url" value={image3} onChange={(e) => setImage3(e.target.value)} placeholder="https://drive.google.com/file/d/..." />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save Project"}
            </button>
          </form>
        </div>

        <div className="projects-list-section glass-panel">
          <h3>Manage Projects</h3>
          <div className="admin-projects-grid">
            {projects.map(proj => (
              <div key={proj.id} className="admin-proj-card">
                <img src={proj.images[0]} alt={proj.title} />
                <div className="admin-proj-info">
                  <h4>{proj.title}</h4>
                  <button onClick={() => handleDelete(proj.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
            {projects.length === 0 && <p>No projects found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
