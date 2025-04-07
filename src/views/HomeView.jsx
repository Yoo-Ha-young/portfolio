import React from "react";
import Intro from "../components/Intro.jsx";
import Skill from "../components/Skill.jsx";

import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import About from '../components/About';
import Project from '../components/Project';
import Header from "../components/Header.jsx";

const HomeView = () => {
    return (
        <div>
            <Header />
            <Main>
                <Intro />
                <About />
                <Skill />
                <Project />
                <Contact />
            </Main>
            <Footer />
        </div>
    );
};

export default HomeView;