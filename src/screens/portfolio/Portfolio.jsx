import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
 
console.log('portfolioData',portfolioData) 
function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})
 
  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
         {/* make sure to add rel="noreferrer" for netlify upload */}
          <a id="portfolio__modal__link" href={data.link} target="_blank" rel="noreferrer">Go to site</a>
         <a href={data.GitHub}> <i class="fab fa-github" style={{ color: 'black',fontSize:'30px' , padding:'1rem'}}  target="_blank"></i>Go to GitHub Link</a>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
 
  const mapped = portfolioData.map((e, idx) => {
    console.log('texttttttttt',e,idx);
    return (
    
      <Card key={idx} id="portfolio__card__container">
        <Image className="portfolio__image"
         onClick={(a) => {
          setTempData({
            image: e.image,
            link: e.link,
            desc: e.desc,
            summary: e.summary,
            tech: e.tech,
            GitHub:e.GitHub
          })
          setModalShow(true)
        }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
     
    )
  })
 
  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p style={{color:'white',fontSize:'30px'}}>
        This is my Github page: 
        <a href="https://github.com/Juan321654" target="_blank" rel="noreferrer" style={{color:'white',fontSize:'20px'}}> https://github.com/FarnoushYousefi</a>
      </p>
      <Container  fluid="lg" style={{ padding: '2rem 2rem' }}>
        <Row>
        {mapped}
        </Row>
      </Container>
    </div>
  );
}
 
export default Portfolio