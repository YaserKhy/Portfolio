import React from 'react'
import { Stack, Button, Figure, FigureImage } from 'react-bootstrap'

function About() {
    return (
        <Stack className='about' direction='horizontal' id='About'>
            <div className='desc ms-auto'>
                <h3 className='fw-light'>Hello I'm Yaser</h3>
                <h1>Front-End Developer</h1>
                <h3>I develop and design inspiring interfaces</h3>
                <Button className='primbtn' href='#Contact'>Contact Me</Button>
            </div>
            <div id='circle' className='mx-auto'>
                <Figure>
                    <FigureImage src={`${process.env.PUBLIC_URL}/codingpic.svg`} alt='coding' width={500} height={500}/>
                </Figure>
            </div>
        </Stack>
    )
}

export default About