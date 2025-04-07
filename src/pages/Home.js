import React from 'react';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Intro />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
};

export default Home; 