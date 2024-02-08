import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar sticky='top' expand="lg" style={{backgroundColor:'var(--MainColor)'}}>
            <Container>
                <Navbar.Brand className='fs-4 fw-semibold my-0 ms-2 text-uppercase' href="#About" style={{marginRight:'15rem'}}>Yaser Alkhayyat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#About">About</Nav.Link>
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Areas">Areas of Interest</Nav.Link>
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Skills">Skills</Nav.Link>
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Projects">Projects</Nav.Link>
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header