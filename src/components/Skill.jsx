import React, { useEffect, useRef } from 'react';
import { skillText } from '../constants';

const Skill = () => {
    const skillRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillLevel = entry.target.querySelector('.skill__level');
                        const level = skillLevel.getAttribute('data-level');
                        skillLevel.style.width = `${level}%`;
                    }
                });
            },
            { threshold: 0.5 }
        );

        // 현재의 skillRefs.current 값을 로컬 변수에 저장
        const currentRefs = skillRefs.current;

        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">{skillText.title}</h2>
                <div className="skill__content">
                    {skillText.skills.map((category, index) => (
                        <div key={index} className="skill__category">
                            <h3 className="category__title">{category.category}</h3>
                            <div className="skill__items">
                                {category.items.map((item, itemIndex) => (
                                    <div 
                                        key={itemIndex} 
                                        className="skill__item"
                                        ref={(el) => (skillRefs.current[itemIndex] = el)}
                                    >
                                        <div className="skill__name">{item.name}</div>
                                        <div 
                                            className={`skill__level ${item.level}`} 
                                            data-level={item.level}
                                        >
                                            {item.level === 'familiar' ? 'Familiar' : 'Tried'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
