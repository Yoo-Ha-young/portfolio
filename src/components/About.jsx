import React from 'react';
import { aboutText } from '../constants';
import { Person, Calendar, GeoAlt, Telephone, Envelope, Mortarboard } from 'react-bootstrap-icons';

const About = () => {
    const iconMap = {
        '이름': Person,
        '생년월일': Calendar,
        '위치': GeoAlt,
        '연락처': Telephone,
        '이메일': Envelope,
        '학력': Mortarboard
    };

    return (
        <section id="about">
            <div className="about__inner">
                <h2 className="about__title">ABOUT ME</h2>
                <div className="about__content">
                    <div className="about__info">
                        {Object.entries(aboutText).map(([label, value]) => {
                            const Icon = iconMap[label];
                            return (
                                <div className="info__item" key={label}>
                                    <div className="info__icon">
                                        <Icon />
                                    </div>
                                    <div className="info__text" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                                        <strong>{label}</strong>
                                        <div>{value}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 