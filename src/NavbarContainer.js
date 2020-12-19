import {React, useState, useEffect, useRef} from 'react';
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
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleClickLogout = () => {
    axios.get(urlLogout) 
    .then(res => { 
      console.log(res);
    }).catch(error => {console.log(error)});
    onLogout();
  }
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    // ... do whatever on click outside here ...
    console.log('heyder')
    setLoginDropdown(false);
  };
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
          <NavDropdown.Item onClick={handleClickLogout} href="#">Log Out</NavDropdown.Item>
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
            setLoginDropdown(prev => !prev);
          }}
        >
          <a href="#" className="navbar-login-button-link">
            Log In
          </a>
          
        </div>
        <Nav.Link  className="d-inline navbar-create-acc-button" as={Link} to="/recipeapp/create-account">Create Account</Nav.Link>
      </div>
      }
    </Navbar>
    
    <div ref={node} className={loginDropdown ? "navbar-login-form" :"navbar-login-form hidden"}>
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
        
  </>
  );
}

export default NavbarContainer;