import React from 'react'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Carousel, CarouselCaption, CarouselItem, Col, Container, Image, Row } from 'react-bootstrap'

function Projects({ ProjectsArray }) {
  return (
    <Container fluid className='section d-flex flex-column justify-content-center align-items-center' id='Projects' style={{ backgroundColor: 'var(--SecondColor)' }}>
      <h1 className='sectionHeader text-center mb-4'>Projects</h1>
      <Carousel interval={null} className='w-75 ProjectsCarousel'>
        {ProjectsArray.map((value, index) => {
          return (
            <CarouselItem key={index}>
              <Image
              fluid
                key={index}
                src={value[1]}
                alt={`${value[0]}`}
                style={{ borderRadius: '5rem', height: '30rem', width:'100%'}}
              />
              <Container className='ProjectPhone' style={{height:'7rem', display:'none'}}></Container>
              <CarouselCaption className='ProjectPhone mt-5' style={{display: 'none'}}>
                <Col className='d-flex align-items-center flex-column'>
                  <h3 className='ProjectPhone'>{`${value[0]}`}</h3>
                  <p className='ProjectPhone'>{`${value[2]}`}</p>
                  <Button href={`${value[3]}`} target='_blank' className='primbtn w-50'>
                    Visit
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2'/>
                  </Button>
                </Col>
              </CarouselCaption>
              <CarouselCaption className='ProjectDetails w-100 mt-5'>
                <Row>
                  <Col lg={8} className='mycol'>
                    <h3 className='text-start ps-5'>{`${value[0]}`}</h3>
                    <p className='text-start ps-5'>{`${value[2]}`}</p>
                  </Col>
                  <Col lg={3} className='mycol'>
                    <Button href={`${value[3]}`} target='_blank' className='primbtn w-50'>
                      Visit
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2' />
                    </Button>
                  </Col>
                </Row>
              </CarouselCaption>
            </CarouselItem>
          )
        })
        }
      </Carousel>
    </Container >
  )
}

export default Projects