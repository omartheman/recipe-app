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
  useEffect(() => {
    console.log('logged user', '[', loggedInUser,'], type', typeof loggedInUsert)
    if (loggedInUser !== '' && loggedInUser !== null) {
      setLoginDropdown(false);
    }
  })
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
        console.log(e.target.className)
        setLoginDropdown(prev => !prev);
      return;
    }
    // outside click 
    // ... do whatever on click outside here ...
    console.log('heyder')
    console.log(e.target.className.match('login-form-identifier'))
    if (e.target.className.match('login-form-identifier')) {
      console.log('yp')
      return;
    }
    setLoginDropdown(false);
  };
  return(
  <>
    <Navbar>
      <Navbar.Brand as={Link} to="/recipeapp/" className="navbar-site-name">The Recipe Cabinet 🥑</Navbar.Brand>
      <Nav.Link as={Link} to="/recipeapp/">Home</Nav.Link>
      <Nav.Link as={Link} to="/recipeapp/recipe-upload">Recipe Upload</Nav.Link>
      <Nav.Link as={Link} to="/recipeapp/all-recipes">All Recipes</Nav.Link>
      <Nav.Link className={loggedInUser === null || loggedInUser === '' ? "hidden" : null} as={Link} to="/recipeapp/myrecipes">My Recipes</Nav.Link>
      <NavDropdown 
        title={`Hello, ${loggedInUser}!`} 
        id="basic-nav-dropdown" 
        className={`${loggedInUser === null || loggedInUser === '' ? "hidden" : null} ml-auto`} 
      >
        <NavDropdown.Item onClick={handleClickLogout} href="#">Log Out</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> 
      <div className={`${loggedInUser ? "hidden": null} ml-auto navbar-log-in-dropdown`}>
        <div 
          ref={node}
          className="navbar-login-button" 
          // onClick={() => {
          //   setLoginDropdown(prev => !prev);
          // }}
        >
          <a href="#" className="navbar-login-button-link">
            Log In
          </a>
        </div>
        <Nav.Link  className="d-inline navbar-create-acc-button" as={Link} to="/recipeapp/create-account">Create Account</Nav.Link>
      </div>
    </Navbar>
    
    <div className={loginDropdown ? "navbar-login-form login-form-identifier" :"navbar-login-form hidden login-form-identifier"}>
      <Form action="auth" onSubmit={loginSubmit} className="login-form-identifier">
        <Form.Label className="login-form-identifier">Username</Form.Label>
        <Form.Control 
          className="login-form-identifier"
          type="text" 
          placeholder="Enter username" 
          required
          id="username"
          onChange={(e) => {
            onLoginFormChange({[e.target.id]: e.target.value}, 'username');
          }}
        />
      </Form>
      <Form.Group 
        className="login-form-identifier"
        controlId="formBasicPassword" 
        onKeyDown={(e) => {if (e.keyCode === 13) {loginSubmit(e)}}}
      >
        <Form.Label className="login-form-identifier">Password</Form.Label>
        <Form.Control 
          className="login-form-identifier"
          type="password" 
          placeholder="Give me password!" 
          required
          onChange={(e) => {
            onLoginFormChange({[e.target.type]: e.target.value}, 'password');
          }} 
        />
        <Button 
          className="login-form-identifier"
          variant="primary" 
          type="submit"
          onClick={(e) => {
            loginSubmit(e);
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </div>
        
  </>
  );
}

export default NavbarContainer;