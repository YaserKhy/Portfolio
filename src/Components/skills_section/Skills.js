import React from 'react'
import SkillsArray from './SkillsArray.js';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills() {
  return (
    <Container className="section" id="Skills">
      <h1 className='sectionHeader text-center mb-4'>Skills</h1>
      <Row className='justify-content-center align-items-center my-4'>
        {
          SkillsArray.map((value, index) => {
            let label = Object.entries(value)[0][0]
            let icon = Object.entries(value)[0][1]
            return (
              <Col lg={2} xs={3} key={index} className='d-flex flex-column justify-content-center align-items-center'>
                <div className='SkillIconContainer d-flex justify-content-center align-items-center'>
                  {label.includes('_icon') ? <FontAwesomeIcon color='var(--MainColor)' icon={icon} className='SkillIcon' /> : <Image src={icon} className='SkillPic' />}
                </div>
                <p className='text-center fw-medium mt-3'>{label.includes('_icon') ? label.split('_')[0] : label}</p>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  );
}

export default Skills