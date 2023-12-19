import '@fortawesome/fontawesome-free/css/all.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SkillCard from "./SkillCard";
import '@splidejs/react-splide/css';
import React, { useEffect, useState } from 'react';

export default function Skills() {

    const skillsDict = {
        'Teamwork': ['fa-solid fa-people-group', 'Effective team player who can easily fit in.'],
        'Time Management': ['fa-regular fa-hourglass-half', 'Able to manage my time and daily tasks.'],
        'Effective Communication': ['fa-solid fa-comments', 'Express my ideas in an understandable manner.'],
        'Problem Solving': ['fa-solid fa-laptop-code', 'Express my ideas in an understandable manner.'],
        'Continuous Learning': ['fa-solid fa-code', 'Always passionate about self learning.']
    };

    const [numCards, setNumCards] = useState(3);
    useEffect(() => {
        const cardCheck = () => { window.innerWidth < 450 ? setNumCards(2) : setNumCards(3) }
        cardCheck();
        window.addEventListener('resize', cardCheck)
        return () => { window.removeEventListener('resize', cardCheck) }
    }, []);

    return (
        <section className="skills" id="Skills">
            <h1 className='text-center'>Skills</h1>
            <Splide className='SkillsSplide' options={{
                type: 'loop',
                perPage: numCards,
                perMove: 1,
                arrowScale: 1,
                arrowPosition: 'end',
                focus:0
            }}>

                {Object.entries(skillsDict).map(([key, value]) => {
                    return (
                        <SplideSlide>
                            <SkillCard key={key} icon={value[0]} title={key} desc={value[1]}></SkillCard>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </section>
    );
}