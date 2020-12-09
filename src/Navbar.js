import {React} from 'react';
import './Navbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import global_url_variable from './global_url_variable';

const url = global_url_variable;
const urlLogout = `${url}logout`;
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
axios.defaults.withCredentials = true;

const NavbarContainer = (props) => {
  const {loggedInUser, onLogout} = props;
  const handleClick = () => {
    axios.get(urlLogout) 
    .then(res => { 
      console.log(res);
    }).catch(error => {console.log(error)});
    onLogout();
  }
  return(
  <Navbar>
    <Navbar.Brand as={Link} to="/recipeapp/">Recipe App</Navbar.Brand>
    <Nav.Link as={Link} to="/recipeapp/">Home</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/recipe-upload">Recipe Upload</Nav.Link>
    <Nav.Link as={Link} to="/recipeapp/myrecipes">My Recipes</Nav.Link>

    {
    loggedInUser ? 
    <NavDropdown 
      title={`Hello, ${loggedInUser}!`} 
      id="basic-nav-dropdown" 
      className="ml-auto"
    >
      <NavDropdown.Item onClick={handleClick} href="#">Log Out</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> 
    : 
    <div className="ml-auto">
      <Nav.Link  className="d-inline" as={Link} to="/recipeapp/login">Log In</Nav.Link>
      <Nav.Link  className="d-inline" as={Link} to="/recipeapp/create-account">Create Account</Nav.Link>
    </div>
    }
  </Navbar>  
  );
}

export default NavbarContainer;