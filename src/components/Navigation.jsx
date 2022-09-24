import React from 'react'
import { FcHome } from "react-icons/fc";
import { TbNotes } from "react-icons/tb";
import { GiCakeSlice } from "react-icons/gi";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" text-white>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='text-white text-decoration-none'><FcHome /> Home</Link>
                        <Link to="/contacto" className='text-white text-decoration-none'><TbNotes /> Contacto</Link>
                    </Nav>
                    <Nav>
                        <div className='text-white'>
                            Happy Cake <GiCakeSlice />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
