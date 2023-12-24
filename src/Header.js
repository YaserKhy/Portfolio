import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='fs-4 fw-semibold mt-0 me-5 mb-0 ms-2 text-uppercase' href="#About">Yaser Alkhayyat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#About">About</Nav.Link>
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Skills">Skills</Nav.Link>
                        {/* <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Projects">Projects</Nav.Link> */}
                        <Nav.Link className='fs-6 fw-medium py-0 my-0 mx-2' href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}