import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaGithub, FaLink, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectText } from '../constants';
import '../assets/scss/section/_projectDetail.scss';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const allProjects = [...projectText.projects.personal, ...projectText.projects.team];
    const project = allProjects.find(p => p.id.toLowerCase() === id.toLowerCase());

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        navigate('/');
        return null;
    }

    const mediaItems = project.media || [
        { type: 'image', src: project.image ? `/images/projects/${project.image}` : '', alt: project.title }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    };

    return (
        <div className="project-detail">
            <div className="project-detail__header">
                <div className="project-detail__header-inner">
                    <button className="project-detail__back-arrow" onClick={() => navigate('/')}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <h1 className="project-detail__title">{project.title}</h1>
                    <div className="project-detail__meta">
                        <span>{project.period}</span>
                        <span className="project-detail__position">{project.position}</span>
                        <span className="project-detail__contribution">
                            기여도 <span className="project-detail__contribution-value">{project.contribution}</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="project-detail__content">
                <div className="project-detail__overview">
                    <div className="project-detail__image">
                        <div className="project-detail__carousel">
                            {mediaItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`project-detail__carousel-item ${index === currentSlide ? 'active' : ''}`}
                                >
                                    {item.type === 'image' ? (
                                        <img src={item.src} alt={item.alt} />
                                    ) : (
                                        <video controls>
                                            <source src={item.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            ))}
                            {mediaItems.length > 1 && (
                                <>
                                    <button className="project-detail__carousel-prev" onClick={prevSlide}>
                                        <FaChevronLeft />
                                    </button>
                                    <button className="project-detail__carousel-next" onClick={nextSlide}>
                                        <FaChevronRight />
                                    </button>
                                    <div className="project-detail__carousel-dots">
                                        {mediaItems.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`project-detail__carousel-dot ${index === currentSlide ? 'active' : ''}`}
                                                onClick={() => setCurrentSlide(index)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="project-detail__description">
                    <p>{project.detail.background}</p>
                </div>

                <div className="project-detail__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </a>
                    {project.notion && (
                        <a href={project.notion} target="_blank" rel="noopener noreferrer">
                            <FaLink /> Notion
                        </a>
                    )}
                </div>

                <div className="project-detail__section">
                    <h3>프로젝트 주요 기능</h3>
                    <ul className="project__detail-list">
                        {project.features.map((feature, index) => (
                            <li key={index} className="project__detail-item">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {project.type === "팀 프로젝트" && (
                    <div className="project-detail__section">
                        <h3>내가 구현한 기능</h3>
                        <ul>
                            {project.myRole.features.map((feature, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
                            ))}
                        </ul>
                    </div>
                )}

                {project.type === "팀 프로젝트" && project.myRole.troubleshooting && (
                    <div className="project-detail__section">
                        <h3>{project.myRole.troubleshooting.title}</h3>
                        {project.myRole.troubleshooting.items.map((item, index) => (
                            <div key={index}>
                                <h4>{item.problem}</h4>
                                <p>{item.solution}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="project-detail__section">
                    <h3>성과</h3>
                    <p>{project.type === "팀 프로젝트" ? project.myRole.achievements : project.achievements}</p>
                </div>

                <div className="project-detail__tech">
                    <h3>기술 스택</h3>
                    <ul>
                        {project.tech.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
