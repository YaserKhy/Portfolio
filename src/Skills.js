import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Stack, Card } from 'react-bootstrap'

export default function Skills() {

    const skillsDict = {
        'Teamwork': ['fa-solid fa-people-group', 'Effective team player who can easily fit in.'],
        'Time Management': ['fa-regular fa-hourglass-half', 'Able to manage my time and daily tasks.'],
        'Effective Communication': ['fa-solid fa-comments', 'Express my ideas in an understandable manner.'],
        'Problem Solving': ['fa-solid fa-code', 'Creative skills at finding innovative solutions.'],
        'Continuous Learning': ['fa-solid fa-book-open', 'Always passionate about self learning.']
    };

    const [numCards, setNumCards] = useState(3);
    
    // called only once
    useEffect(() => {
        const cardCheck = () => { window.innerWidth < 450 ? setNumCards(2) : setNumCards(3) }
        cardCheck();
        window.addEventListener('resize', cardCheck) // whenever user resize screen , perform cardCheck
        return () => { window.removeEventListener('resize', cardCheck) }
    }, []);

    return (
        <Stack className="skills" id="Skills">
            <h1 className='text-center mb-4'>Skills</h1>
            <Splide className='SkillsSplide' options={{
                type: 'loop',
                perPage: numCards,
                perMove: 1,
                arrowScale: 1,
                arrowPosition: 'end',
                focus: 0
            }}>

                {Object.entries(skillsDict).map(([key, value]) => {
                    return (
                        <SplideSlide>
                            <Card className='p-4 m-3 align-items-center justify-content-center' key={key}>
                                <i className={`${value[0]} card-image-top`} id='skillpic' style={{ color: '#252bc1' }}></i>
                                <Card.Body className='text-center'>
                                    <Card.Title className='cardTitle'>{key}</Card.Title>
                                    <Card.Text className='cardText'>{value[1]}</Card.Text>
                                </Card.Body>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Stack>
    );
}