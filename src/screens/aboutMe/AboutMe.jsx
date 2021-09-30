import React from 'react'
import './aboutMe.css'
import person from '../../images/new.jpg'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
           <div id='image'>
                 <img src={person} alt="person icon"   />
           </div>
           <div className='about__text'>
               <h1>ABOUT ME</h1>
               <p>Master of computer Science from the University of Waterloo, and Full Stack Web Developer, with a certificate from the University of Toronto. Experience in back-end design, 
database management, and creating automated solutions. A team player, with good communication and problemsolving skills. Passionate about programming, with a strong ability to design, build and maintain websites from 
ideation to production. An eager learner, with two years experience in Software Industry.
 </p>
           </div>
        </div>
    )
}

export default AboutMe
