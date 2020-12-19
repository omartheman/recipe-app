import {React, useState, useEffect} from 'react';
import './NavbarContainer.css';
import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlLogout = `${url}logout`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

const NavbarContainer = (props) => {
  const {loginSubmit, loggedInUser, onLoginFormChange, onLogout} = props;
  const [loginDropdown, setLoginDropdown] = useState(false);
  useEffect(()=>{
    console.log(loginDropdown)
  })
  const handleClick = () => {
    axios.get(urlLogout) 
    .then(res => { 
      console.log(res);
    }).catch(error => {console.log(error)});
    onLogout();
  }
  return(
  <>
    <Navbar>
      <Navbar.Brand as={Link} to="/recipeapp/">Recipe App</Navbar.Brand>
      <Nav.Link as={Link} to="/recipeapp/">Home</Nav.Link>
      <Nav.Link as={Link} to="/recipeapp/recipe-upload">Recipe Upload</Nav.Link>
      <Nav.Link as={Link} to="/recipeapp/all-recipes">All Recipes</Nav.Link>
      {
        loggedInUser ? 
      <>
        <Nav.Link as={Link} to="/recipeapp/myrecipes">My Recipes</Nav.Link>
        <NavDropdown 
          title={`Hello, ${loggedInUser}!`} 
          id="basic-nav-dropdown" 
          className="ml-auto"
        >
          <NavDropdown.Item onClick={handleClick} href="#">Log Out</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> 
      </>
      : 
      <div className="ml-auto navbar-log-in-dropdown">
        <div 
          className="navbar-login-button" 
          onClick={() => {
            let drop = !loginDropdown;
            setLoginDropdown(prev => !prev)
          }}
        >
          <a href="#" className="navbar-login-button-link">
            Log In
          </a>
          {loginDropdown ?  
          <div className="navbar-login-form">
            <Form action="auth" onSubmit={loginSubmit}>
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                required
                id="username"
                onChange={(e) => {
                  onLoginFormChange({[e.target.id]: e.target.value}, 'username');
                }}
              />
            </Form>
            <Form.Group controlId="formBasicPassword" onKeyDown={(e) => {if (e.keyCode === 13) {loginSubmit(e)}}}>
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Give me password!" 
                required
                onChange={(e) => {
                  onLoginFormChange({[e.target.type]: e.target.value}, 'password');
                }} 
              />
              <Button 
                variant="primary" 
                type="submit"
                onClick={loginSubmit}
              >
                Submit
              </Button>
            </Form.Group>
          </div>
          : null}
        </div>
        <Nav.Link  className="d-inline navbar-create-acc-button" as={Link} to="/recipeapp/create-account">Create Account</Nav.Link>
      </div>
      }
    </Navbar>
  </>
  );
}

export default NavbarContainer;