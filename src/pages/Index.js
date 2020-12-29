import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { homeObjOne, homeObjTwo} from '../components/data/hero-index';
import Jumbotron from '../components/sections/Jumbotron';
import { index } from '../components/data/jumbo';

function Home() {
  return (
    <>
      <Jumbotron {...index}/>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Home;