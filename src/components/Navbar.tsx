import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandLogo from 'C:/Users/Admin/Downloads/EEG/BrainMotorImaginary/public/g8.png';
import signInLogo from 'C:/Users/Admin/Downloads/EEG/BrainMotorImaginary/public/Frame 179.png';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-white">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={brandLogo} alt="Brand Logo" height="30" className="me-2" /> {/* Added Logo */}
                    Luminous
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Service</Nav.Link>
                        <Nav.Link href="#action2">Page</Nav.Link>
                        {/* Added Sign In Logo */}
                        <Nav.Link href="#">
                            <img src={signInLogo} alt="Sign In" height="30" />
                        </Nav.Link>
                        <Nav.Link href="#action2">Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
