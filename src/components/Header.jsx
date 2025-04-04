import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';

const Header = () => {
    const [show, setShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className={isScrolled ? 'scrolled' : ''} role="banner">
            <div className="header__inner">
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인 메뉴"
                >
                    <ul>
                        <li>
                            <Link to="intro" smooth={true} duration={500} onClick={() => setShow(false)}>
                                Intro
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={() => setShow(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="skill" smooth={true} duration={500} onClick={() => setShow(false)}>
                                Skill
                            </Link>
                        </li>
                        <li>
                            <Link to="project" smooth={true} duration={500} onClick={() => setShow(false)}>
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} onClick={() => setShow(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div 
                    className={`header__nav__mobile ${show ? "show" : ""}`} 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button" 
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;