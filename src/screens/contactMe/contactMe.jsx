import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Tornoto, Canada</p>
          <p>Farnoush Yousefi</p>
          <p>farnoush.yousefikejani@uwaterloo.ca</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div class='link'>
     <a href='https://github.com/FarnoushYousefi'> <i class="fab fa-github" style={{ color: 'black',fontSize:'30px' , padding:'1rem', margin:'0 auto'}}  target="_blank"></i></a>
     <a href='https://www.linkedin.com/in/farnoushyousefi/'> <i class="fab fa-linkedin" style={{ color: 'white',fontSize:'30px' , padding:'1rem', margin:'0 auto'}}  target="_blank"></i></a>
     </div>
      <div style={{ textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe