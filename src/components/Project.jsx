import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectText } from '../constants';

const Project = () => {
    const [showPersonal, setShowPersonal] = useState(true);
    const [showTeam, setShowTeam] = useState(true);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const filteredProjects = {
        personal: showPersonal ? projectText.projects.personal : [],
        team: showTeam ? projectText.projects.team : []
    };

    const handleProjectClick = (projectId) => {
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
                                <h3>{type === 'personal' ? projectText.filter.personal : projectText.filter.team}</h3>
                                {projects.map((project) => (
                                    <div 
                                        key={project.id} 
                                        className="project__item"
                                        onClick={() => handleProjectClick(project.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="project__image">
                                            <img 
                                                alt={project.title} 
                                                src={project.image.startsWith('/') ? project.image : `/images/projects/${project.image}`} 
                                            />
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
                                        <a className="project__view-more" href={`/project/${project.id}`}>
                                            자세히 보기
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="project__floating-buttons">
                {showScrollButton && (
                    <button onClick={scrollToTop} title="위로 가기">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 4l-8 8h5v8h6v-8h5z"/>
                        </svg>
                    </button>
                )}
            </div>
        </section>
    );
};

export default Project;