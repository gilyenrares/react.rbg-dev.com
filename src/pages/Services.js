import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/data/hero-services';
import Pricing from '../components/sections/Pricing';
import Jumbotron from '../components/sections/Jumbotron';
import { services } from '../components/data/jumbo';

function Services() {
  return (
    <>
      <Jumbotron {...services}/>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Services;