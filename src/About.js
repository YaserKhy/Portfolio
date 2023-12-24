import { Stack, Button } from 'react-bootstrap'
export default function About() {
    return (
        <Stack className='about' direction='horizontal'>
            <div className='desc ms-auto'>
                <h3 className='fw-light'>Hello I'm Yaser</h3>
                <h1>Front-End Developer</h1>
                <h3>I develop and design inspiring interfaces</h3>
                <Button variant='primary' href='#Contact'>Contact Me</Button>
            </div>
            <div id='circle' className='ms-auto me-auto'>
                <img src={`${process.env.PUBLIC_URL}/codingpic.svg`} alt='coding'/>
            </div>
        </Stack>
    )
}