import React from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const NavbarContainer = () => (
  <Navbar>
    <Link to="/">Home</Link>
    <Link to="/recipe-upload">Recipe Upload</Link>
  </Navbar>  
)

export default NavbarContainer;