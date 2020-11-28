import React from 'react';
import './Navbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarContainer = (props) => {
  const {loggedInUser} = props;
  return(
  <Navbar>
    <Navbar.Brand as={Link} to="/recipeapp/">Recipe App</Navbar.Brand>
    <Nav.Link as={Link} to="/recipeapp/">Home</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/recipe-upload">Recipe Upload</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/login">Login</Nav.Link>
    {
      loggedInUser ? 
      <NavDropdown title={`Hello, ${loggedInUser}!`} id="basic-nav-dropdown" className="ml-auto">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> : null
    }
  </Navbar>  
  );
}

export default NavbarContainer;