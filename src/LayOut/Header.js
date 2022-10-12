import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from "../images/whole.png"
import "./Header.css"
const Header = () => {
    return (
        <Navbar  className='navigationbar' expand="lg">
            <Container >
                <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Nav
                    className="   my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search your fabourite group in ATG"
                            className="search-field"
                            aria-label="Search"
                        />
                        
                    </Form>

                </Nav>

                <a href="">create new account</a>

            </Container>
        </Navbar>
    );
};

export default Header;