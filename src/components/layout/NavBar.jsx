"use client"
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container"
import { useState } from 'react';
import "./NavBar.css"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false); 
  return (
      <div className='nav2'>
        <Container fluid>
            <Navbar bg="dark" data-bs-theme="dark" className='nav1 fixed-top'>
                <div className="header d-flex">
                    <img src="../../../assets/images/logo.png" alt="" className="logo" height="50px" width="100px" />
                    <Navbar.Brand href="/" className="ms-2">Anubhav</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Sign In</Nav.Link>
                    </Nav>
                </div>
        </Navbar>
            </Container>
      </div>
  )
}

export default NavBar;
