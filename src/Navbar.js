import React from 'react';
import './Navbar.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarContainer = () => (
  <Navbar>
    <Navbar.Brand as={Link} to="/recipeapp/">Recipe App</Navbar.Brand>
    <Nav.Link as={Link} to="/recipeapp/">Home</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/recipe-upload">Recipe Upload</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/login">Login</Nav.Link>
  </Navbar>  
)

export default NavbarContainer;