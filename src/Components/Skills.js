import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';

function Skills({ SkillsArray, skillsPerRow }) {

    const [showFourth, setShowFourth] = useState(false)

    useEffect(() => {
        setShowFourth(skillsPerRow === 3)
    }, [skillsPerRow])

    return (
        <Container className="section" id="Skills">
            <h1 className='sectionHeader text-center mb-4'>Skills</h1>
            <Row className='justify-content-center align-items-center my-4'>
                {
                    SkillsArray.slice(0, skillsPerRow).map((value, index) => {
                        let label = Object.entries(value)[0][0]
                        let icon = Object.entries(value)[0][1]
                        return (
                            <Col key={index} className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='SkillIconContainer d-flex justify-content-center align-items-center'>
                                    <FontAwesomeIcon key={index} icon={icon} className='SkillIcon p-4 m-4' />
                                </div>
                                <p className='text-center fw-medium mt-3'>{label}</p>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row className='justify-content-center align-items-center my-4'>
                {
                    SkillsArray.slice(skillsPerRow, skillsPerRow * 2).map((value, index) => {
                        let label = Object.entries(value)[0][0]
                        let icon = Object.entries(value)[0][1]
                        return (
                            <Col key={index} className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='SkillIconContainer d-flex justify-content-center align-items-center'>

                                    <FontAwesomeIcon key={index} icon={icon} className='SkillIcon p-4 m-4' />
                                </div>
                                <p className='text-center fw-medium mt-3'>{label}</p>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row className='justify-content-center align-items-center my-4'>
                {
                    SkillsArray.slice(skillsPerRow * 2, skillsPerRow * 3).map((value, index) => {
                        let label = Object.entries(value)[0][0]
                        let icon = Object.entries(value)[0][1]
                        return (
                            <Col key={index} className='d-flex flex-column justify-content-center align-items-center'>
                                <div className='SkillIconContainer d-flex justify-content-center align-items-center'>

                                    <FontAwesomeIcon key={index} icon={icon} className='SkillIcon p-4 m-4' />
                                </div>
                                <p className='text-center fw-medium mt-3'>{label}</p>
                            </Col>
                        )
                    })
                }
            </Row>

            {showFourth &&
                <Row className='justify-content-center align-items-center my-4'>
                    {
                        SkillsArray.slice(9, 12).map((value, index) => {
                            let label = Object.entries(value)[0][0]
                            let icon = Object.entries(value)[0][1]
                            return (
                                <Col key={index} className='d-flex flex-column justify-content-center align-items-center'>
                                    <div className='SkillIconContainer d-flex justify-content-center align-items-center'>

                                        <FontAwesomeIcon key={index} icon={icon} className='SkillIcon p-4 m-4' />
                                    </div>
                                    <p className='text-center fw-medium mt-3'>{label}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            }

        </Container>
    );
}

export default Skills