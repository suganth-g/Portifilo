import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [project]);

    if (!project) return null;

    return (
        <div id="projectModal" className="modal show" onClick={(e) => {
            if (e.target.className.includes('modal show')) onClose();
        }}>
            <div className="modal-content glass-card">
                <span className="close-modal hover-target" onClick={onClose}>&times;</span>
                <h2 id="modal-title" className="highlight">{project.title}</h2>
                
                <p id="modal-desc">{project.desc}</p>
                
                <div className="modal-tech">
                    <h4>Tech Stack:</h4>
                    <div id="modal-tags" className="tech-tags">
                        {project.tags.map((tag, idx) => (
                            <span key={idx} className="tech-tag">{tag}</span>
                        ))}
                    </div>
                </div>
                
                <div className="modal-links">
                    <a id="modal-github" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary hover-target">GitHub Repo</a>
                    <a id="modal-demo" href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary hover-target">Live Demo</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
