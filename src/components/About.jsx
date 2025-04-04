import React, { useState } from 'react';
import { aboutText, bootcampText } from '../constants';
import { Person, Calendar, GeoAlt, Telephone, Envelope, Mortarboard, Laptop } from 'react-bootstrap-icons';

const About = () => {
    const [expandedBootcamps, setExpandedBootcamps] = useState(Array(bootcampText.bootcamps.length).fill(false));

    const toggleBootcamp = (index) => {
        const newExpanded = [...expandedBootcamps];
        newExpanded[index] = !newExpanded[index];
        setExpandedBootcamps(newExpanded);
    };

    return (
        <section id="about">
            <div className="about__inner">
                <h2 className="about__title">About Me</h2>
                <div className="about__content">
                    <div className="about__info">
                        {Object.entries(aboutText).map(([key, value], index) => (
                            <div key={index} className="info__item">
                                <div className="info__label">
                                    {key === '이름' && <Person />}
                                    {key === '생년월일' && <Calendar />}
                                    {key === '위치' && <GeoAlt />}
                                    {key === '연락처' && <Telephone />}
                                    {key === '이메일' && <Envelope />}
                                    {key === '학력' && <Mortarboard />}
                                    {key}
                                </div>
                                <div className="info__value">{value}</div>
                            </div>
                        ))}
                    </div>
                    <div className="about__bootcamp">
                        <div className="info__item">
                            <div className="info__label">
                                <Laptop />
                                부트캠프
                            </div>
                            <div className="info__value">
                                {bootcampText.bootcamps.map((bootcamp, index) => (
                                    <div key={`bootcamp-${index}`} className="bootcamp__item">
                                        <div 
                                            className="bootcamp__header"
                                            onClick={() => toggleBootcamp(index)}
                                        >
                                            <span>{bootcamp.name} ({bootcamp.period})</span>
                                            <span className="bootcamp__toggle">
                                                {expandedBootcamps[index] ? '▼' : '▶'}
                                            </span>
                                        </div>
                                        {expandedBootcamps[index] && (
                                            <div className="bootcamp__details">
                                                <div className="bootcamp__section">
                                                    <h4>프로젝트</h4>
                                                    <ul>
                                                        {bootcamp.projects.map((project, pIndex) => (
                                                            <li key={pIndex}>{project}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bootcamp__section">
                                                    <h4>배운 것들</h4>
                                                    <ul>
                                                        {bootcamp.learnings.map((learning, lIndex) => (
                                                            <li key={lIndex}>{learning}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 