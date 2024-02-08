import React from 'react'
import ContactCard from './ContactCard.js';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="section flex-column justify-content-center align-items-center" id="Contact">
            <h1 className='sectionHeader text-center mb-4'>Contact</h1>
            <Container className="contactContainer text-center">
                <Row>
                    <Col lg={4} xs={7} className='m-auto'>
                        <ContactCard
                            icon='fa-brands fa-linkedin'
                            link='https://www.linkedin.com/in/yaser-alkhayyat-382369290'
                            val='YaserAlkhayyat'
                        />
                    </Col>
                    <Col lg={4} xs={7} className='m-auto'>
                        <ContactCard
                            icon='fa-solid fa-envelope'
                            link='mailto:YaserAlkhayyat@outlook.sa'
                            val='YaserAlkhayyat@outlook.sa'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xs={7} className='m-auto'>
                        <ContactCard
                            icon='fa-brands fa-github'
                            link='https://github.com/YaserKhy'
                            val='YaserKhy'
                        />
                    </Col>
                    <Col lg={4} xs={7} className='m-auto'>
                        <ContactCard
                            icon='fa-brands fa-x-twitter'
                            link='https://x.com/Yso_kh'
                            val='@Yso_kh'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact