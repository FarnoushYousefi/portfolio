import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
           <div>
 <img src={person} alt="person icon" />
           </div>
           <div className='about__text'>
               <h1>ABOUT ME</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores minus iusto, alias quas ea. A quasi porro quisquam ipsa autem repudiandae assumenda quo voluptatum sapiente ab, iste, perferendis molestiae?</p>
           </div>
        </div>
    )
}

export default AboutMe
