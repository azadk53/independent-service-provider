import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Home Advisor</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#home">Blog</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;