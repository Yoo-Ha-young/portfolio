import React from "react";
import Intro from "../components/Intro.jsx";
import Skill from "../components/Skill.jsx";
import Site from "../components/Site.jsx";
import Port from "../components/Port.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import About from '../components/About';

const HomeView = () => {
    return (
        <div>
            <Main>
                <Intro />
                <About />
                <Skill />
                <Site />
                <Port />
                <Contact />
            </Main>
            <Footer />
        </div>
    );
};

export default HomeView;