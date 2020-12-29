import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/data/hero-projects';
import Jumbotron from '../components/sections/Jumbotron';
import { projects } from '../components/data/jumbo';

function Projects() {
  return (
    <>
      <Jumbotron {...projects} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Projects;