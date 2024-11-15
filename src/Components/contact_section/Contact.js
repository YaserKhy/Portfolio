import React from 'react'
import ContactCard from './ContactCard.js';
import { Container, Row, Col } from 'react-bootstrap';
import linkedin from '../../assets/linkedin.svg';
import outlook from '../../assets/outlook.svg';
import github from '../../assets/Github_light.svg';

function Contact() {
  return (
    <Container fluid className="section flex-column justify-content-center align-items-center" id="Contact">
      <h1 className='sectionHeader text-center mb-4'>Contact</h1>
      <Container className="contactContainer text-center">
        <Row>
          <Col lg={4} xs={7} className='m-auto'>
            <ContactCard
              icon={linkedin}
              link='https://www.linkedin.com/in/yaser-alkhayyat-382369290'
              val='YaserAlkhayyat'
            />
          </Col>
          <Col lg={4} xs={7} className='m-auto'>
            <ContactCard
              icon={outlook}
              link='mailto:YaserAlkhayyat@outlook.sa'
              val='YaserAlkhayyat@outlook.sa'
            />
          </Col>
          <Col lg={4} xs={7} className='m-auto'>
            <ContactCard
              icon={github}
              link='https://github.com/YaserKhy'
              val='YaserKhy'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact