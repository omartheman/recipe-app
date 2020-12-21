import {React, useState, useEffect, useRef} from 'react';
import './NavbarContainer.scss';
import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import global_url_variable from './global_url_variable';
import avocadoTabIcon from './images/avo-android-chrome-192x192.png';

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
    if (loggedInUser !== '' && loggedInUser !== null) {
      setLoginDropdown(false);
    }
  }, [loggedInUser])
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
        setLoginDropdown(prev => !prev);
      return;
    }
    // outside click 
    // ... do whatever on click outside here ...
    if (e.target.className.match('login-form-identifier')) {
      return;
    }
    setLoginDropdown(false);
  };
  return(
  <>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/recipeapp/" className="navbar-site-name">
        <span>
          The Recipe Cabinet 
        </span>
        <img src={avocadoTabIcon} alt="Avocado icon."/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
        </NavDropdown> 
        <div className={`${loggedInUser ? "hidden": null} ml-auto navbar-log-in-dropdown`}>
          <div 
            ref={node}
            className="navbar-login-button" 
          >
            <div href="#" className="navbar-login-button-link">
              Log In
            </div>
            <svg version="1.1" id="Capa_1" x="0px" y="0px"
              width="292.362px" height="292.362px" viewBox="0 0 292.362 292.362" 
            >
              <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </svg>
          </div>
          <Nav.Link  className="navbar-create-acc-button" as={Link} to="/recipeapp/create-account">Create Account</Nav.Link>
        </div>
      </Navbar.Collapse>
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