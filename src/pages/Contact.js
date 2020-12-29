import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/data/hero-contact';
import Jumbotron from '../components/sections/Jumbotron';
import { contact } from '../components/data/jumbo';

function Contact() {
  return (
    <>
      <Jumbotron {...contact} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Contact;