import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectText } from '../constants';

const Project = () => {
    const [showPersonal, setShowPersonal] = useState(true);
    const [showTeam, setShowTeam] = useState(true);
    const navigate = useNavigate();

    const filteredProjects = {
        personal: showPersonal ? projectText.projects.personal : [],
        team: showTeam ? projectText.projects.team : []
    };

    const handleProjectClick = (projectId) => {
        console.log('Project ID:', projectId);
        console.log('Current URL:', window.location.href);
        navigate(`/project/${projectId}`);
    };

    return (
        <section id="project">




            <div className="project__inner">
                <h2 className="project__title">{projectText.title}</h2>
                <div className="project__filter">
                    <label>
                        <input
                            type="checkbox"
                            checked={showPersonal}
                            onChange={() => setShowPersonal(!showPersonal)}
                        />
                        {projectText.filter.personal}
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={showTeam}
                            onChange={() => setShowTeam(!showTeam)}
                        />
                        {projectText.filter.team}
                    </label>
                </div>
                <div className="project__content">
                    {Object.entries(filteredProjects).map(([type, projects]) => (
                        projects.length > 0 && (
                            <div key={type} className="project__category">
                                {projects.map((project) => (
                                    <div 
                                        key={project.id} 
                                        className="project__item"
                                        onClick={() => handleProjectClick(project.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="project__image">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div className="project__info">
                                            <div className="project__header">
                                                <h4>{project.title}</h4>
                                                <span className="project__period">{project.period}</span>
                                            </div>
                                            <p className="project__description">{project.description}</p>
                                            <div className="project__tech">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx}>{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
