import React from 'react'
import { Stack, Button, Image } from 'react-bootstrap'

function About() {
    return (
        <Stack className='about' direction='horizontal' id='About'>
            <div className='desc d-flex flex-column ms-auto'>
                <h3 className='fw-light fs-4 mb-0'>Hello I'm Yaser</h3>
                <h1 className='my-3' style={{fontSize:'3rem', color:'var(--MainColor)'}}>Front-End Developer</h1>
                <h3 className='fs-4'>I develop and design inspiring interfaces</h3>
                <Button className='primbtn' href='#Contact'>Contact Me</Button>
            </div>
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
        </Stack>
    )
}

export default About