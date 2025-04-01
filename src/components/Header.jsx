import React, { useState, useEffect } from "react";

const headerNav = [
    { title: "intro", url: "#intro" },
    { title: "skill", url: "#skill" },
    { title: "site", url: "#site" },
    { title: "portfolio", url: "#port" },
    { title: "contact", url: "#contact" },
];

const Header = () => {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState("intro");

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const handleMenuClick = (title, url) => {
        setActiveMenu(title);
        setShow(false);
        
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = headerNav.map(nav => {
                const element = document.querySelector(nav.url);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        title: nav.title,
                        top: rect.top,
                        bottom: rect.bottom
                    };
                }
                return null;
            }).filter(Boolean);

            const currentSection = sections.find(section => 
                section.top <= 100 && section.bottom >= 100
            );

            if (currentSection) {
                setActiveMenu(currentSection.title);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                {/* <div className="header__logo">
                    <a href="/">YOOJIIN<em>portfolio</em></a>
                </div> */}
                
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인 메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a 
                                    href={nav.url}
                                    className={activeMenu === nav.title ? "active" : ""}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMenuClick(nav.title, nav.url);
                                    }}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
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