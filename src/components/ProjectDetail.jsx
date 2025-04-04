import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectText } from '../constants';
import '../assets/scss/section/_projectDetail.scss';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // 모든 프로젝트를 하나의 배열로 합치기
    const allProjects = [
        ...projectText.projects.personal,
        ...projectText.projects.team
    ];
    
    // 프로젝트 ID 비교 시 대소문자 구분 없이 비교
    const project = allProjects.find(proj => 
        String(proj.id).toLowerCase() === String(id).toLowerCase()
    );
    
    console.log('Project ID from URL:', id);
    console.log('All Projects:', allProjects);
    console.log('Found Project:', project);
    
    useEffect(() => {
        if (!project) {
            console.error('프로젝트를 찾을 수 없습니다:', id);
            navigate('/', { replace: true });
        }
    }, [project, navigate, id]);
    
    if (!project) {
        return null;
    }
    
    return (
        <div className="project-detail">
            <div className="project-detail__header">
                <div className="project-detail__header-inner">
                    <h1 className="project-detail__title">{project.title}</h1>
                    <div className="project-detail__meta">
                        <span className="project-detail__period">{project.period}</span>
                        <span className="project-detail__type">{project.type}</span>
                    </div>
                </div>
            </div>

            <div className="project-detail__content">
                <div className="project-detail__overview">
                    <div className="project-detail__image">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-detail__info">
                        <div className="project-detail__description">
                            <h2>프로젝트 개요</h2>
                            <p>{project.description}</p>
                        </div>
                        
                        <div className="project-detail__tech">
                            <h2>사용 기술</h2>
                            <ul>
                                {project.tech.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-detail__links">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-detail__link"
                                >
                                    GitHub 저장소
                                </a>
                            )}
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-detail__link"
                                >
                                    프로젝트 보기
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {project.features && (
                    <div className="project-detail__features">
                        <h2>주요 기능</h2>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.detail && (
                    <div className="project-detail__detail">
                        <h2>상세 설명</h2>
                        <div className="project-detail__background">
                            <h3>개발 배경</h3>
                            <p>{project.detail.background}</p>
                        </div>
                        {project.detail.challenges && (
                            <div className="project-detail__challenges">
                                <h3>주요 도전 과제</h3>
                                <ul>
                                    {project.detail.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <button 
                className="project-detail__back-button"
                onClick={() => navigate(-1)}
            >
                목록으로 돌아가기
            </button>
        </div>
    );
};

export default ProjectDetail;
