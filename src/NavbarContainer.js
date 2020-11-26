import React from 'react';
import './Navbar.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarContainer = () => (
  <Navbar>
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/recipe-upload">Recipe Upload</Nav.Link>
  </Navbar>  
)

export default NavbarContainer;