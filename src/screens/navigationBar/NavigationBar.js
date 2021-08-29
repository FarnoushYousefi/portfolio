import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'
import reactRouterDom from 'react-router-dom'

function createLinks(){
    return navigationLinks.map((e,idx)=>
    <Link key={idx} to={e.ref} >
        {e.name}
    </Link>
    )
}
function NavigationBar() {
    return (
        <div id="home">
            <Navbar className="navigation_container"
            style={{zIndex:'2', position:'fixed', width:'100%', top: '0'}} 
            collapseOnSelect
            expand = "md">
            <Navbar.Brand style={{marginLeft:'1rem'}} href="#home">Farnoush Yousefi</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style ={{justifyContent:'flex-end', marginRight:'1rem', borderColor:'none'}}>
             <Nav className="links" style={{margin:'0 1rem'}}>
             {createLinks()}
             </Nav>
          
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
