import React from 'react'
import {Row, Button, Image, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <Row className='about' id='About'>
      <Col className='d-flex flex-column align-items-center'>
        <div className='desc w-75 d-flex justify-content-center flex-column'>
          <h3 className='fw-light fs-4 mb-2'>Hello I'm Yaser, a passionate</h3>
          <Typewriter options={{
            wrapperClassName: 'title',
            cursorClassName: 'titleCursor',
            strings: ['Software Developer', 'Front End Developer', 'Mobile App Developer', 'AI Engineer', 'Data Scientist'],
            autoStart: true,
            loop: true,
          }}/>
          <Button className='primbtn' href='#Contact'>Contact Me</Button>
        </div>
      </Col>
      <Col>
        <Image
          roundedCircle
          src={`${process.env.PUBLIC_URL}/codingpic.svg`}
          alt='coding'
          width={500}
          height={500}
          className='mx-auto'
          id='codingPic'
          style={{
            backgroundColor: 'var(--SecondColor)',
            transform: 'translateY(0px)',
            animation: 'float 5s ease infinite',
            maxWidth: 'fit-content'
          }}
        />
      </Col>
    </Row>
  )
}

export default About