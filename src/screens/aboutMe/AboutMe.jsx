import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
           <div id='image'>
                 <img src={person} alt="person icon" style={{marginTop:'4rem',marginRight:'7rem',marginLeft:'2rem'}}  />
           </div>
           <div className='about__text'>
               <h1>ABOUT ME</h1>
               <p>Recent Grad in Computer Engineering with hands-on experience in Android development: relational database, content providers, SQL database, Natural Language Processing, adaptive and responsive UI design, and version control. Always on the lookout for design trends and driven by the creation of simple and intuitive user experiences. Appreciate the resolution of complex problems and demonstrate creativity, autonomy and determination to achieve project’s deliverables. Thrive in an environment where all employees are eager to impress, push boundaries and stand out from the crowd. </p>
           </div>
        </div>
    )
}

export default AboutMe
