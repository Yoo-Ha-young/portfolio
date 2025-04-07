import React, { useState, useEffect } from "react";
import { introText } from "../constants";

const Intro = () => {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [titleText, setTitleText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex < introText.mainTitle.length) {
            const timeout = setTimeout(() => {
                setTitleText(prev => prev + introText.mainTitle[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 className="intro__title">
                    {titleText}<span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
                </h2>
                <div className="intro__desc">
                    <p className="intro__text" dangerouslySetInnerHTML={{ __html: introText.description }}></p>
                    <div className="intro__buttons">
                        <a href={introText.links.github} className="btn" target="_blank" rel="noreferrer">GITHUB</a>
                        <a href={introText.links.notion} className="btn" target="_blank" rel="noreferrer">VIEW</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;