import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import Register from '../component/Register';
import auth from '../firebase.init';

import Logo from "../images/whole.png"
import "./Header.css"
const Header = () => {
    const [show, setShow] = useState(false);
    const [user,loading] =useAuthState(auth)
    console.log(user)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className='navigationbar' expand="lg">
            <Container  >
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
                {
                    !user && <p className='sign-up' onClick={() => handleShow(true)} >create new account <span className=''>it's free</span></p>
                }
                {
                    user && <div className='u-info d-flex justify-content-around align-items-center'>
                    <img src={user?.photoURL} className="pic" alt="dff"/>
                    <p className='user'>{user.displayName}</p>
                    </div>
                }
                <Register show={show} handleClose={handleClose} />

            </Container>

        </Navbar>
    );
};

export default Header;