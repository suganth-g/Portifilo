import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = import.meta.env.PROD ? '/_/backend/api/projects' : 'http://localhost:5000/api/projects';
                const res = await fetch(apiUrl);
                const data = await res.json();
                setProjectData(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="section reveal">
            <div className="container">
                <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                <div className="projects-grid">
                    {projectData.map((project, index) => (
                        <div 
                            key={index}
                            className="project-card glass-card hover-target" 
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc.substring(0, 60)}...</p>
                                <span className="click-hint">Click for details →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default Projects;
