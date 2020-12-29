import React from 'react'
import { about } from '../components/data/jumbo'
import Cards from '../components/sections/Cards'
import Jumbotron from '../components/sections/Jumbotron'
function About() {
    return (
    <>
        <Jumbotron {...about} />
        <Cards />  
    </> 
    )
}

export default About
